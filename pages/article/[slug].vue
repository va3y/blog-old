<script setup>
const route = useRoute();

const { data: article } = await useAsyncData(
	`article-${route.params.slug}`,
	() => {
		return queryContent(`/${route.params.slug}`).findOne();
	}
);
</script>

<template>
	<div>
		<Content
			v-if="article"
			class="prose prose-stone prose-sm lg:prose-lg mx-auto prose-a:no-underline content- content-open-curly"
			:document="article"
		/>
	</div>
</template>
