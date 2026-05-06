# Tab Masker Pro - 商店发布说明 (Store Listing)

以下内容可直接用于谷歌浏览器开发者控制台 (Chrome Web Store Developer Console) 的发布申请。

---

## 1. 基本信息 (Basic Information)

*   **扩展名称 (Name):** Tab Masker Pro - 网页标签伪装专家
*   **简短摘要 (Summary):** 一键修改网页标题和图标，保护隐私，提升办公专注度。
*   **类别 (Category):** 效率 (Productivity) / 开发者工具 (Developer Tools)

---

## 2. 详细说明 (Detailed Description)

**Tab Masker Pro：您的终极网页隐私保护助手**

您是否曾在公共场所、办公室或会议期间担心别人看到您浏览器标签页上的内容？Tab Masker Pro 专为解决此类尴尬而设计。它允许您实时、自动地将特定网站的标题和图标伪装成任何您想要的样子（例如：Microsoft Teams、企业邮箱或学术资料）。

### 核心功能：
- **智能匹配：** 基于域名关键词自动触发伪装逻辑。
- **标题伪装：** 自定义任何网页标题，瞬间将“视频网站”变为“季度财务报表”。
- **图标替换：** 支持引用外部图标链接，完美模仿企业级应用（如 Microsoft Teams）。
- **实时生效：** 修改后无需刷新页面，设置立即应用。
- **隐私优先：** 所有配置存储在您的本地浏览器中，不上传任何数据，安全无忧。

### 使用场景：
- **办公室场景：** 隐藏非工作相关的网页，保持专业形象。
- **会议演示：** 在共享屏幕时，避免无关标签页造成干扰。
- **个人隐私：** 在咖啡厅等公共场所保护您的浏览内容不被窥视。

---

## 3. 安装与使用指南 (How to Use)

1. 点击扩展图标打开设置面板。
2. 输入您想要伪装的网站关键词（如 `youtube.com`）。
3. 设置伪装后的标题（如 `工作汇报 - 2024`）。
4. 输入伪装图标的 URL（建议参考 Microsoft Teams 等办公软件图标以达到最佳伪装效果）。
5. 点击“保存并应用”，然后刷新或打开目标网页即可看到魔法发生！

---

## 4. 图标资源建议 (Icon Resources)

为了达到最真实的伪装效果，我们推荐使用专业的办公软件图标：
*   **推荐风格：** Microsoft Teams / Outlook / OneDrive
*   **资源参考：** [Icons8 - Microsoft Teams Icons](https://icons8.com/icons/set/microsoft-teams)
*   **使用提示：** 您可以从上述网址找到合适的图标 URL，直接填入插件的“伪装图标 URL”输入框中。

---

## 6. 发布流程指南 (Publishing Guide)

### 第一步：准备资源
1. 使用 `generate_icons.html` 生成并下载 16, 48, 128 尺寸的图标。
2. 将下载的图片放入项目根目录下的 `icons/` 文件夹中。

### 第二步：打包插件
1. 选中项目中的所有核心文件：`manifest.json`, `popup.html`, `popup.js`, `content.js`, 以及 `icons/` 文件夹。
2. 将它们压缩成一个 `.zip` 文件（注意：不要包含 `generate_icons.html` 和本说明文档）。

### 第三步：上传至 Chrome Web Store
1. 访问 [Chrome 应用商店开发者控制台](https://chrome.google.com/webstore/devconsole/)。
2. 支付 5 美元的开发者注册费用（仅需支付一次）。
3. 点击“添加新内容”，上传您准备好的 `.zip` 文件。
4. 填写本说明文档中的“基本信息”和“详细说明”。
5. 上传预览截图（建议使用 Microsoft Teams 风格的伪装效果截图）。
6. 提交审核。审核通常需要 1-3 个工作日。

---

## 7. 权限审核申诉说明 (Permission Justification)

如果在提交审核时遇到“权限过于宽泛”的提示，请在开发者控制台的 **“权限使用说明” (Permission Justification)** 栏目中填写以下内容：

> **中文说明：**
> 该扩展的核心功能是允许用户自定义任何网页的标签标题和图标，以保护用户在公共或办公环境下的浏览隐私。由于用户可能需要伪装任何特定的域名（如社交媒体、视频网站等），我们无法预先确定匹配的域名列表。因此，我们需要 `<all_urls>` 权限来根据用户在本地设置的关键词，在匹配的页面上动态注入伪装逻辑。
>
> **English Justification:**
> The core functionality of this extension is to allow users to customize tab titles and icons for any website to protect their browsing privacy in public or office environments. Since users may need to mask any specific domain (e.g., social media, video sites, etc.) based on their personal needs, we cannot pre-define a list of matched domains. Therefore, we require the `<all_urls>` permission to dynamically inject masking logic on pages that match the keywords configured by the user locally.

---

## 8. 隐私合规声明 (Privacy Compliance)
- 本插件不收集、不存储、不上传任何用户的浏览数据。
- 所有的伪装配置仅存储在用户本地的 `chrome.storage.local` 中。
- 仅在用户匹配的域名下执行简单的 DOM 操作（修改 `document.title` 和 `favicon` 链接）。

---

祝您的插件顺利通过审核并获得用户喜爱！
