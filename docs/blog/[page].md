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
