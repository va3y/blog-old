<script setup>
import Link from "~~/components/Link.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
const route = useRoute();
const { data: article } = await useAsyncData(route.path, () => {
	return queryContent(route.params.slug).findOne();
});
</script>

<template>
	<div class="max-w-2xl mx-auto">
		<div class="justify-between items-start">
			<Link class="text-2xl h-4" to="/"
				><ArrowLeftIcon class="h-4 mr-2 aspect-square" />Go back</Link
			>
			<h1 class="text-6xl font-semibold mt-4">{{ article.title }}</h1>
			<div class="mt-4 text-2xl">{{ article.createdAt }}</div>
		</div>
		<Content
			v-if="article"
			:document="article"
			class="prose prose-sm lg:prose-md mt-8 max-w-2xl"
		/>
	</div>
</template>
