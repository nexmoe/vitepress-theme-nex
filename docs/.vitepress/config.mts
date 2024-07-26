import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Theme Nex",
  description: "Blog、更新日志、动态博客",
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
