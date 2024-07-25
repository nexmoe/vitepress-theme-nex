---
title: Release
layout: home
---  
<script setup>
import {data as posts} from './posts.data.ts'
</script>

<NIndex v-bind="{posts,showDate:true}"/>
