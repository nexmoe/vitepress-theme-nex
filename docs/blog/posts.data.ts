import { createContentLoader } from 'vitepress'
import { NTransform, type NPost } from '../../src/'

declare const data: NPost[]
export { data }

export default createContentLoader('blog/posts/*.md', {
  render: true,
  excerpt: true,
  transform(rawData) {
    return NTransform(rawData, 'asc')
  }
})