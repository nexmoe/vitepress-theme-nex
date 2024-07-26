import { createContentLoader } from 'vitepress'
import { NTransform, type Post } from '../../src/composables/transform'

declare const data: Post[]
export { data }

export default createContentLoader('blog/posts/*.md', {
  render: true,
  excerpt: true,
  transform(rawData) {
    return NTransform(rawData, 'asc')
  }
})