<script setup lang="ts">
import Date from './Date.vue'
import { usePosts } from '../composables/usePosts'
import { useData } from 'vitepress'
import { type Post } from '../composables/transform'

interface Props {
	posts: Post[]
	showDate: boolean
}

const props = defineProps<Props>()

const { pageCurrent, pageTotal, postsCurrent } = usePosts(props.posts)

const { frontmatter } = useData()
</script>

<template>
	<div class="divide-y divide-gray-200 ">
		<div class="pt-16 pb-8 space-y-2 md:space-y-5">
			<h1
				class="text-3xl leading-9 font-extrabold text-gray-900  tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
			>
				{{ frontmatter.title }}
			</h1>
			<p v-if="$slots.description" class="text-lg leading-7 text-gray-500 ">
				<slot name="description" />
			</p>
		</div>
		<ul
			class="divide-y divide-gray-200 "
			:class="{
				'list-none': !showDate,
			}"
		>
			<li class="py-12" :class="{}" v-for="{ title, url, date, html, excerpt } of postsCurrent">
				<article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
					<Date v-if="props.showDate" :date="date" />
					<div class="space-y-5 xl:col-span-3">
						<div class="space-y-6">
							<h2 class="!border-none text-2xl leading-8 font-bold tracking-tight">
								<a class="!no-underline text-gray-900 " :href="url">{{
									title
								}}</a>
							</h2>
							<div
								v-if="excerpt || html"
								class="prose max-w-none text-gray-500 "
								v-html="excerpt ? excerpt : html"
							></div>
						</div>
						<div v-if="excerpt" class="text-base leading-6 font-medium">
							<a class="link" aria-label="read more" :href="url">了解更多 →</a>
						</div>
					</div>
				</article>
			</li>
		</ul>

		<div class="flex justify-end pt-6">
			<!-- 上一页按钮 -->
			<a
				:href="pageCurrent === 1 ? '' : `./${pageCurrent - 1}`"
				:class="pageCurrent === 1 ? 'opacity-50 pointer-events-none	' : ''"
			>
				上一页
			</a>

			<!-- 当前页码/总页码 -->
			<div class="px-4 text-center">{{ pageCurrent }} / {{ pageTotal }}</div>

			<!-- 下一页按钮 -->
			<a
				:href="pageCurrent === pageTotal ? '' : `./${pageCurrent + 1}`"
				:class="pageCurrent === pageTotal ? 'opacity-50 pointer-events-none	' : ''"
			>
				下一页
			</a>
		</div>
	</div>
</template>

<style scoped>
.list-none {
	list-style: none;
	padding-left: 0;
}
</style>
