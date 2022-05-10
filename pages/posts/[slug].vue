<script setup lang="ts">
import Link from "~~/components/Link.vue";
import dayjs from "dayjs";

const route = useRoute();
const { data: article } = await useAsyncData(route.path, () => {
	return queryContent(`posts/${route.params.slug}`).findOne();
});
const formatDate = (date: Date) => {
	return dayjs(date).format("MMM D, YYYY");
};
</script>

<template>
	<div class="mx-auto max-w-prose text-sm xl:text-base">
		<Head>
			<title>{{ article.title }} | Va3y Blog</title>
		</Head>
		<div class="justify-between items-start mb-8">
			<h1 class="text-6xl font-semibold mt-4">{{ article.title }}</h1>
			<div class="mt-4 text-2xl">{{ formatDate(article.createdAt) }}</div>
		</div>
		<Content
			v-if="article"
			:document="article"
			class="prose prose-sm lg:prose-md xl:prose-lg mx-auto"
		/>
	</div>
</template>

<style>
.prose table {
	@apply border-collapse;
}
</style>
