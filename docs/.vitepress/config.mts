import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Theme Nex",
  description: "VitePress 主题 Nex 是一个 VitePress 用户设计的现代化博客主题。它不仅提供了简洁美观的视觉风格，还具有多种实用的功能，帮助您快速构建高质量的博客页面。",
  lang: 'zh',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', },
      { text: '博客演示', link: '/blog/1', },
      { text: '反馈', link: 'https://github.com/nexmoe/vitepress-theme-nex/issues', },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nexmoe/vitepress-theme-nex' },
      { icon: 'twitter', link: 'https://x.com/nexmoe' }
    ]

  },
  // sitemap: {
  //   hostname: ''
  // }
})
