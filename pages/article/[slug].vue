<script setup>
const route = useRoute();

const { data: article } = await useAsyncData(
	`article-${route.params.slug}`,
	() => {
		return queryContent(`/${route.params.slug}`).findOne();
	}
);

console.log(article.value);
</script>

<template>
	<div>
		<Content
			v-if="article"
			class="prose prose-sm lg:prose-lg mx-auto prose-a:no-underline"
			:document="article"
		/>
	</div>
</template>
