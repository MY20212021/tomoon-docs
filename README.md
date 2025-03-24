# ToMoon 文档网站

这是 ToMoon 自动化工具的官方文档网站，使用 VitePress 构建。

## 项目结构

```
vitePress-docs/
├── docs/                 # 文档源文件
│   ├── .vitepress/       # VitePress 配置
│   │   └── config.js     # 主要配置文件
│   ├── public/           # 静态资源
│   ├── api/              # API 文档
│   ├── guide/            # 使用指南
│   ├── features/         # 功能介绍
│   └── index.md          # 首页
├── package.json          # 项目依赖
└── README.md             # 项目说明
```

## 开发指南

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn

# 或使用 pnpm
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
npm run docs:dev
```

访问 http://localhost:3000 查看文档网站。

### 构建静态文件

```bash
# 构建静态文件
npm run docs:build
```

构建后的文件将生成在 `docs/.vitepress/dist` 目录中。

### 预览构建结果

```bash
# 预览构建结果
npm run docs:preview
```

## 文档编写指南

### Markdown 语法

VitePress 使用标准的 Markdown 语法，并支持一些扩展功能：

- 前置元数据
- 代码块高亮
- 自定义容器
- 表格
- Emoji

详细信息请参考 [VitePress Markdown 指南](https://vitepress.dev/guide/markdown)。

### 添加新页面

1. 在相应的目录中创建新的 Markdown 文件
2. 在 `.vitepress/config.js` 中更新导航和侧边栏配置

### 添加静态资源

将静态资源（如图片）放在 `docs/public` 目录中，然后在 Markdown 中引用：

```markdown
![图片描述](/path/to/image.png)
```

## 部署

构建完成后，可以将 `docs/.vitepress/dist` 目录中的文件部署到任何静态网站托管服务，如 GitHub Pages、Netlify、Vercel 等。

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建一个 Pull Request

## 许可证

本项目使用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。 