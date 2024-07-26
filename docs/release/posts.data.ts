import { createContentLoader } from 'vitepress'
import { NTransform, type NPost } from '../../src/'

declare const data: NPost[]
export { data }

export default createContentLoader('release/posts/*.md', {
  render: true,
  transform: NTransform
})


