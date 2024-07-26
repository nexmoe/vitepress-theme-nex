// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import NIndex from './components/Index.vue'
import './custom.css'

export const NexTheme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('NIndex', NIndex)
  }
}
