<script setup>
import Link from "~~/components/Link.vue";
const route = useRoute();
const { data: article } = await useAsyncData(route.path, () => {
	return queryContent(route.params.slug).findOne();
});
</script>

<template>
	<div class="mx-auto max-w-prose text-sm xl:text-base">
		<div class="justify-between items-start mb-14">
			<h1 class="text-6xl font-semibold mt-4">{{ article.title }}</h1>
			<div class="mt-4 text-2xl">{{ article.createdAt }}</div>
		</div>
		<Content
			v-if="article"
			:document="article"
			class="prose prose-sm lg:prose-md xl:prose-lg mt-8 mx-auto"
		/>
	</div>
</template>

<style>
.prose table {
	@apply border-collapse;
}
</style>
