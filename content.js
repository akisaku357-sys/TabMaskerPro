/**
 * Tab Masker Pro - Content Script
 * 负责在目标页面注入伪装逻辑
 */

let currentConfig = null;

// 从存储中加载配置
function loadConfig() {
  chrome.storage.local.get('tabConfig', (data) => {
    currentConfig = data.tabConfig;
    if (currentConfig && currentConfig.domain && window.location.hostname.includes(currentConfig.domain)) {
      applyMask();
    }
  });
}

function applyMask() {
  if (!currentConfig) return;

  // 1. 修改标题
  if (currentConfig.title && document.title !== currentConfig.title) {
    document.title = currentConfig.title;
  }

  // 2. 修改图标
  if (currentConfig.icon) {
    updateIcon(currentConfig.icon);
  }
}

function updateIcon(iconUrl) {
  let links = document.querySelectorAll("link[rel*='icon']");
  
  if (links.length > 0) {
    links.forEach(link => {
      if (link.href !== iconUrl) {
        link.href = iconUrl;
      }
    });
  } else {
    const newIcon = document.createElement('link');
    newIcon.rel = 'shortcut icon';
    newIcon.href = iconUrl;
    document.head.appendChild(newIcon);
  }
}

// 初始化
loadConfig();

// 监听存储变化（当用户在 Popup 中修改设置时实时生效）
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.tabConfig) {
    currentConfig = changes.tabConfig.newValue;
    applyMask();
  }
});

// 使用 MutationObserver 监控 DOM 变化
// 许多现代网页（SPA）会动态修改标题或重新插入 favicon
const observer = new MutationObserver((mutations) => {
  if (currentConfig && currentConfig.domain && window.location.hostname.includes(currentConfig.domain)) {
    applyMask();
  }
});

observer.observe(document.documentElement, {
  subtree: true,
  childList: true,
  attributes: true,
  attributeFilter: ['href', 'rel'] // 专门监控 link 标签的变化
});

// 最后的防线：针对部分极其顽固的网站
setInterval(() => {
  if (currentConfig && currentConfig.domain && window.location.hostname.includes(currentConfig.domain)) {
    applyMask();
  }
}, 2000);