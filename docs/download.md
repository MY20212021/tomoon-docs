# 下载 ToMoon

感谢您选择 ToMoon 作为您的自动化工具。在本页面，您可以下载适合您操作系统的最新版本。

## 系统要求

在下载和安装 ToMoon 之前，请确保您的系统满足以下要求：

### Windows
- Windows 10 或更高版本（64位）
- 4GB RAM（推荐 8GB 或更高）
- 500MB 可用磁盘空间
- 互联网连接

### macOS
- macOS 10.13 (High Sierra) 或更高版本
- 4GB RAM（推荐 8GB 或更高）
- 500MB 可用磁盘空间
- 互联网连接

### Linux
- Ubuntu 18.04 LTS 或更高版本，或其他主流 Linux 发行版
- 4GB RAM（推荐 8GB 或更高）
- 500MB 可用磁盘空间
- 互联网连接

## 最新版本

当前最新版本：**v1.0.1**（发布日期：2025年3月21日）

### 新功能和改进
- 新增项目自动化功能
- 优化浏览器自动化性能
- 改进用户界面，提升用户体验
- 增强安全性，优化数据加密方式
- 修复已知问题和 bug

查看完整的[更新日志](/changelog)了解详情。

## 下载链接

请选择适合您操作系统的版本：

<div class="download-buttons">
  <a href="https://pub-9704f54480054a10a5ff685cf4bf5f1f.r2.dev/ToMoon-win-1.0.1-x64.exe" class="download-button windows">
    <span class="icon">🪟</span>
    <span class="text">Windows (64位)</span>
    <span class="size">85.4 MB</span>
  </a>
  
  <!-- <a href="https://pub-9704f54480054a10a5ff685cf4bf5f1f.r2.dev/ToMoon-mac-1.1.6.dmg" class="download-button macos">
    <span class="icon">🍎</span>
    <span class="text">macOS (Intel)</span>
    <span class="size">79.2 MB</span>
  </a>
  
  <a href="https://pub-9704f54480054a10a5ff685cf4bf5f1f.r2.dev/ToMoon-mac-1.1.6-arm64.dmg" class="download-button macos">
    <span class="icon">🍎</span>
    <span class="text">macOS (Apple Silicon)</span>
    <span class="size">76.8 MB</span>
  </a>
  
  <a href="https://pub-9704f54480054a10a5ff685cf4bf5f1f.r2.dev/ToMoon-linux-1.1.6.AppImage" class="download-button linux">
    <span class="icon">🐧</span>
    <span class="text">Linux (AppImage)</span>
    <span class="size">82.1 MB</span>
  </a>
  
  <a href="https://pub-9704f54480054a10a5ff685cf4bf5f1f.r2.dev/tomoon_1.1.6_amd64.deb" class="download-button linux">
    <span class="icon">🐧</span>
    <span class="text">Linux (Debian/Ubuntu)</span>
    <span class="size">81.5 MB</span>
  </a> -->
</div>

## 验证下载

为确保您下载的文件未被篡改，我们提供了 SHA-256 校验和。您可以使用以下命令验证下载文件的完整性：

```bash
# Windows (使用 PowerShell)
Get-FileHash -Algorithm SHA256 path\to\downloaded\file.exe

# macOS 和 Linux
shasum -a 256 path/to/downloaded/file
```

## 历史版本

如果您需要下载旧版本，请访问我们的[历史版本页面](/download/archive)。

## 安装指南

下载完成后，请按照[安装指南](/guide/installation)中的步骤进行安装。

## 常见问题

**问：ToMoon 是否收费？**

答：ToMoon 提供免费版和专业版。免费版包含基本功能，足以满足大多数用户的需求。专业版提供更多高级功能，如高级自动化功能、更多的工具等。您可以在应用内购买专业版。

**问：我可以在多台设备上使用同一个账户吗？**

答：是的，您可以在多台设备上使用同一个账户，您的数据将会同步。

**问：如何更新到最新版本？**

答：ToMoon 会自动检查更新，当有新版本可用时，会提示您更新。您也可以在应用的"设置">"关于"中手动检查更新。

**问：我遇到了安装或使用问题，如何获取帮助？**

答：请访问我们的[支持页面](/support)获取帮助，或者通过[联系我们](/contact)页面与我们的支持团队取得联系。

<style>
.download-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0;
}

.download-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  width: calc(33.33% - 16px);
  min-width: 200px;
  transition: all 0.3s ease;
}

.download-button:hover {
  background-color: var(--vp-c-brand-soft);
  transform: translateY(-2px);
}

.download-button .icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.download-button .text {
  font-weight: 500;
  margin-bottom: 4px;
}

.download-button .size {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .download-button {
    width: 100%;
  }
}
</style> 