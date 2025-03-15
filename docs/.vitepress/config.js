import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ToMoon",
  description: "加密货币管理工具",
  lang: 'zh-CN',
  lastUpdated: true,
  
  // 忽略死链接检查
  ignoreDeadLinks: true,
  
  // 设置构建输出目录为仓库根目录
  outDir: '../dist',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '下载', link: '/download' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomoon-project/tomoon' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2023-present ToMoon Team'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    lastUpdatedText: '最后更新',
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
    
    docFooter: {
      prev: '上一页',
      next: false
    }
  }
}) 