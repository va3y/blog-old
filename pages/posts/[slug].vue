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
	<div class="lg:pr-8">
		<div class="mx-auto max-w-prose text-sm xl:text-base">
			<Head>
				<title>{{ article.title }} | Va3y Blog</title>
			</Head>
			<div class="justify-between items-start mb-8">
				<h1 class="text-4xl lg:text-6xl font-bold mt-4 max-w-xl">
					{{ article.title }}
				</h1>
				<div class="mt-4 text-2xl">{{ formatDate(article.createdAt) }}</div>
			</div>
			<Content
				v-if="article"
				:document="article"
				class="prose prose-sm md:prose-md lg:prose-lg mx-auto w-full overflow-hidden"
			/>
		</div>
	</div>
</template>

<style>
.prose table {
	@apply border-collapse;
}

.prose a {
	@apply text-rose-600 !important;
}
</style>
