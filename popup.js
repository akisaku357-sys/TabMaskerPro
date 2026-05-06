const statusMsg = document.getElementById('status');

function showStatus(text, color = '#10b981') {
  statusMsg.textContent = text;
  statusMsg.style.backgroundColor = color;
  statusMsg.classList.add('show');
  setTimeout(() => {
    statusMsg.classList.remove('show');
  }, 2000);
}

document.getElementById('save').addEventListener('click', () => {
  const config = {
    domain: document.getElementById('domain').value.trim(),
    title: document.getElementById('title').value.trim(),
    icon: document.getElementById('icon').value.trim()
  };

  if (!config.domain) {
    showStatus('请输入匹配域名', '#ef4444');
    return;
  }

  chrome.storage.local.set({ tabConfig: config }, () => {
    showStatus('设置已保存！');
  });
});

document.getElementById('reset').addEventListener('click', () => {
  if (confirm('确定要重置所有设置吗？')) {
    chrome.storage.local.remove('tabConfig', () => {
      document.getElementById('domain').value = '';
      document.getElementById('title').value = '';
      document.getElementById('icon').value = '';
      showStatus('设置已重置');
    });
  }
});

// 加载时回显
chrome.storage.local.get('tabConfig', (data) => {
  if (data.tabConfig) {
    document.getElementById('domain').value = data.tabConfig.domain || '';
    document.getElementById('title').value = data.tabConfig.title || '';
    document.getElementById('icon').value = data.tabConfig.icon || '';
  }
});