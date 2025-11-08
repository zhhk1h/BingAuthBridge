// popup.js

// -----------------------------------------------------------------------------
// 1. 全局定义和状态元素
// -----------------------------------------------------------------------------

const TARGET_DOMAINS = [
  "bing.com",
  "microsoft.com",
  "live.com"
];

// 获取 HTML 元素
const popupTitle = document.getElementById("popup-title");
const exportButton = document.getElementById("export-btn");
const importButton = document.getElementById("import-btn");
const fileInput = document.getElementById("cookie-importer");
const statusDisplay = document.getElementById("status");

// -----------------------------------------------------------------------------
// 0. (新增) UI 初始化
// -----------------------------------------------------------------------------

/**
 * 使用 chrome.i18n API 加载本地化字符串，填充 UI
 */
function initializeUI() {
  // 使用 getMessage 获取翻译后的字符串
  popupTitle.textContent = chrome.i18n.getMessage("popupTitle");
  exportButton.textContent = chrome.i18n.getMessage("exportButton");
  importButton.textContent = chrome.i18n.getMessage("importButton");
}

// -----------------------------------------------------------------------------
// 2. 导出功能 (Export)
// -----------------------------------------------------------------------------

async function handleExport() {
  console.log("开始导出...");
  exportButton.disabled = true;
  importButton.disabled = true;
  statusDisplay.className = "";
  // 【i18n】 替换硬编码字符串
  statusDisplay.textContent = chrome.i18n.getMessage("statusExporting");

  let allCookies = [];

  try {
    const cookiePromises = TARGET_DOMAINS.map(domain => 
      getCookiesForDomain(domain)
    );
    
    const cookieArrays = await Promise.all(cookiePromises);
    allCookies = [].concat(...cookieArrays);

    // ------------------- 🚀 [修改] -------------------
    // 在序列化之前，清理 cookie 值以保持兼容
    
    allCookies.forEach(cookie => {
        switch (cookie.sameSite) {
            case "unspecified":
                // "unspecified" (Chrome 默认) 映射为 "Lax"
                cookie.sameSite = "Lax";
                break;
            case "no_restriction":
                // "no_restriction" (Chrome 用于 "None" 的值) 映射为 "None"
                cookie.sameSite = "None";
                break;
            case "Strict":
            case "Lax":
            case "None":
                // 值已经有效，无需操作
                break;
            default:
                // 捕获空字符串 "" 或其他无效值，"Lax" 是最安全的默认值
                cookie.sameSite = "Lax";
                break;
        }
    });
    // -------------------------------------------------


    if (allCookies.length === 0) {
      // 【i18n】 替换硬编码字符串
      throw new Error(chrome.i18n.getMessage("errorNoCookies"));
    }
    // [修改] 更新日志消息
    const jsonContent = JSON.stringify(allCookies, null, 2);
    downloadJson(jsonContent, "bing_cookies.json");
    // 【i18n】 替换硬编码字符串
    statusDisplay.textContent = chrome.i18n.getMessage("statusExportSuccess");
    
  } catch (error) {
    console.error("导出失败:", error);
    statusDisplay.className = "error";
    // error.message 现在已经是 i18n 字符串
    statusDisplay.textContent = error.message;
  } finally {
    setTimeout(() => {
      exportButton.disabled = false;
      importButton.disabled = false;
    }, 2000);
  }
}



function getCookiesForDomain(domain) {
  return new Promise((resolve, reject) => {
    chrome.cookies.getAll({ domain: domain }, (cookies) => {
      if (chrome.runtime.lastError) {
        return reject(new Error(chrome.runtime.lastError.message));
      }
      console.log(`找到了 ${cookies.length} 条 ${domain} 的 Cookies。`);
      resolve(cookies);
    });
  });
}

function downloadJson(content, fileName) {
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  chrome.downloads.download({
    url: url,
    filename: fileName,
    saveAs: true
  }, (downloadId) => {
    // 立即保存错误状态
    const downloadError = chrome.runtime.lastError;
    
    // 延迟撤销 URL
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    
    if (downloadError) {
      console.error("下载失败:", downloadError.message);
      statusDisplay.className = "error";
      statusDisplay.textContent = chrome.i18n.getMessage("errorDownloadFailed", [downloadError.message]);
    } else {
      console.log(`下载已开始，ID: ${downloadId}`);
    }
  });
}

// -----------------------------------------------------------------------------
// 3. 导入功能 (Import)
// -----------------------------------------------------------------------------

async function handleImport(event) {
  const file = event.target.files[0];
  if (!file) {
    console.log("用户取消了文件选择。");
    return;
  }

  console.log("开始导入...");
  exportButton.disabled = true;
  importButton.disabled = true;
  statusDisplay.className = "";
  // 【i18n】 替换硬编码字符串
  statusDisplay.textContent = chrome.i18n.getMessage("statusImporting");

  try {
    const content = await readFileAsText(file);
    const cookiesToImport = JSON.parse(content);

    // 【i18n】 替换硬编码字符串
    if (!Array.isArray(cookiesToImport)) {
      throw new Error(chrome.i18n.getMessage("errorFileFormatArray"));
    }
    if (cookiesToImport.length === 0) {
      throw new Error(chrome.i18n.getMessage("errorFileEmpty"));
    }
    const firstCookie = cookiesToImport[0];
    if (typeof firstCookie.name === 'undefined' || 
        typeof firstCookie.domain === 'undefined' ||
        typeof firstCookie.path === 'undefined') {
      throw new Error(chrome.i18n.getMessage("errorFileInvalid"));
    }

    const setPromises = cookiesToImport.map(cookie => setCookie(cookie));
    const results = await Promise.all(setPromises);

    const successes = results.filter(r => r.success).length;
    const failures = results.filter(r => !r.success).length;

    console.log(`导入完成。成功: ${successes}, 失败: ${failures}`);

    if (failures > 0) {
      statusDisplay.className = "error";
      // 【i18n】 替换硬编码字符串，使用占位符
      statusDisplay.textContent = chrome.i18n.getMessage("statusImportPartial", [successes, failures]);
      // 记录失败的详细信息
      results.filter(r => !r.success).slice(0, 3).forEach(r => {
          // **修改:** 确保这里的错误信息是用户友好的 (如果可能)
          console.warn(`导入失败详情 (${r.name}): ${r.error}`);
      });
    } else {
      // 【i18n】 替换硬编码字符串，使用占位符
      statusDisplay.textContent = chrome.i18n.getMessage("statusImportSuccess", [successes]);
    }

  } catch (error) {
    console.error("导入失败:", error);
    statusDisplay.className = "error";
    // error.message 已经是 i18n 字符串 (来自我们 throw 的) 或系统消息
    // 为统一，我们包裹一下
    statusDisplay.textContent = chrome.i18n.getMessage("errorImportFailed", [error.message]);
  } finally {
    setTimeout(() => {
    exportButton.disabled = false;
    importButton.disabled = false;
  }, 2000);
  event.target.value = null;

  }
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => {
      // 【i18n】 替换硬编码字符串，使用占位符
      reject(new Error(chrome.i18n.getMessage("errorFileRead", [e.target.error])));
    }
    reader.readAsText(file);
  });
}

function setCookie(cookieData) {
  // 严格遵守 'Never Altered' 承诺，不检查或修改 expirationDate。
  return new Promise((resolve) => {
    const effectiveDomain = cookieData.domain.startsWith('.') 
      ? cookieData.domain.substring(1) 
      : cookieData.domain;
    // 确保 path 以 / 开头
    const path = cookieData.path && cookieData.path.startsWith('/') 
      ? cookieData.path 
      : '/' + (cookieData.path || '');

    const cookieToSet = {
      // 这里的 URL 必须包含 protocol、effectiveDomain 和 path
      url: `http${cookieData.secure ? 's' : ''}://${effectiveDomain}${path}`,
      name: cookieData.name,
      value: cookieData.value,
      domain: cookieData.domain,
      path: cookieData.path,
      secure: cookieData.secure,
      httpOnly: cookieData.httpOnly,
      // 严格使用原始数据，如果过期导致失败，则由 chrome.runtime.lastError 报告
      expirationDate: cookieData.expirationDate
    };
    

    chrome.cookies.set(cookieToSet, (setCookie) => {
      if (chrome.runtime.lastError) {
        // 导入失败，记录 API 提供的错误信息
        resolve({ success: false, name: cookieData.name, error: chrome.runtime.lastError.message });
      } else {
        resolve({ success: true, name: cookieData.name });
      }
    });
  });
}

// -----------------------------------------------------------------------------
// 5. 事件监听器 (Event Listeners)
// -----------------------------------------------------------------------------

// (新增) 页面加载完成后，首先初始化 UI 文本
document.addEventListener("DOMContentLoaded", initializeUI);

// (不变) 绑定按钮事件
exportButton.addEventListener("click", handleExport);
importButton.addEventListener("click", () => {
  fileInput.click();
});
fileInput.addEventListener("change", handleImport);