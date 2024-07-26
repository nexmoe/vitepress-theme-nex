---
titleTemplate: 为 VitePress 提供一致、美观、灵活的博客主题
---

VitePress 主题 Nex 是一个 VitePress 用户设计的现代化博客主题。它不仅提供了简洁美观的视觉风格，还具有多种实用的功能，帮助您快速构建高质量的博客页面。

## 特性

- **自动分页**：系统会根据您的文章文件夹自动生成索引页面，让您的博客内容展示更有条理。
- **风格一致性**：Nex 主题采用与 Vue Point 相似的视觉风格，确保与 VitePress 平台的原生设计完美融合，保持一致的品牌形象。
- **多用途自定义目录**：支持创建无限数量的自定义目录，不仅适用于博客页面，还可用于发布更新日志、动态消息、招聘信息等多种用途。
- **暗色模式适配**：提供优质的暗色模式适配，提升阅读体验。

## 安装

使用前请确保已完成 VitePress 安装

<https://vitepress.dev/zh/guide/getting-started#setup-wizard>

然后进行下面操作

::: code-group

```sh [npm]
npm add -D vitepress-theme-nex
```

```sh [pnpm]
pnpm add -D vitepress-theme-nex
```

```sh [yarn]
yarn add -D vitepress-theme-nex
```

```sh [bun]
bun add -D vitepress-theme-nex
```

:::

## 配置

```js
// .vitepress/theme/index.js
import { NexTheme } from "vitepress-theme-nex"; // [!code ++]

export default {
    extends: NexTheme // [!code ++]
    // ...
}
```

```js
// .vitepress/config.js
export default defineConfig({
    // ...
    vite: { // [!code ++]
        ssr: { noExternal: ['vitepress-theme-nex'] } // [!code ++]
    } // [!code ++]
})
```

## 新建文件

```
├── docs
│   ├── .vitepress
│   │   ├── theme
│   │   └── config.js
│   ├── blog
│   │   ├── posts  // [!code highlight]
│   │   ├── [page].md  // [!code highlight]
│   │   ├── [page].paths.js  // [!code highlight]
│   │   └── posts.data.ts  // [!code highlight]
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
├── package.json
```

### [page].md

```markdown
---
title: 博客
aside: false
layout: home
---  

<script setup>
import { data as posts } from './posts.data.ts'
</script>

<NIndex v-bind="{ posts, showDate: true }">
    <template #description>
        这里写介绍
    </template>
</NIndex>
```

### [page].paths.js

```js
import fs from 'fs'

export default {
  paths() {
    const postsDir = 'src/blog/posts';
    const files = fs.readdirSync(postsDir);
    const postCount = files.length;
    const rangeEnd = Math.ceil(postCount / 12); // 向上取整，确保包含所有区间

    // 生成从 1 到 rangeEnd 的序列
    const pathsSequence = Array.from({ length: rangeEnd }, (_, index) => index + 1);

    // 映射序列中的每个数字为对应的 params 对象
    return pathsSequence.map((number) => {
      return { params: { page: number } };
    });
  }
}
```

### posts.data.ts

```js
import { createContentLoader } from 'vitepress'
import { NTransform, type Post } from 'vitepress-theme-nex/composables/transform'

declare const data: Post[]
export { data }

export default createContentLoader('jobs/posts/*.md', {
  render: true,
  excerpt: true,
  transform(rawData) {
    return NTransform(rawData, 'asc')
  }
})
```
