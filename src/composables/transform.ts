import { type ContentData } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
  html: string | undefined
}

declare const data: Post[]
export { data }

export  function NTransform(raw: ContentData[], sort: 'asc' | 'desc' = 'desc'): Post[] {
  return raw
    .map(({ url, frontmatter, html, excerpt }) => ({
      title: filterTitle(html),
      url,
      html: filterHtml(html),
      frontmatter,
      excerpt: filterHtml(excerpt),
      date: formatDate(frontmatter.date)
    }))
    .sort((a, b) => {
      return sort === 'asc'? a.date.time - b.date.time : b.date.time - a.date.time;
    })

}

function filterHtml(html: string | undefined): string {
  if (!html) return '';

  // 使用正则表达式匹配 <h1> 标签及其内容
  return html.replace(/<h1.*?>(.*?)<\/h1>/s, '');
}

function filterTitle(html: string | undefined): string {
  if (!html) return '';

  // 匹配 <h1>...</h1> 并提取内容
  const titleRegex = /<h1.*?>(.*?)<\/h1>/s;
  const match = titleRegex.exec(html);
  if (!match) return '';

  // 提取 <h1> 标签内部的内容
  let innerHTML = match[1];

  // 剔除所有的HTML标签
  innerHTML = innerHTML.replace(/<[^>]*>/g, '');

  // 剔除 &ZeroWidthSpace; 和其他类似的特殊字符
  innerHTML = innerHTML.replace(/&ZeroWidthSpace;/g, '');

  // 剔除其他HTML实体（可根据需要扩展）
  innerHTML = innerHTML.replace(/&[a-zA-Z0-9#]+;/g, '');

  return innerHTML;
}


function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
