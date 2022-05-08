<script setup>
const { data: articles } = await useAsyncData("home", () => {
	return queryContent("/").find();
});
</script>

<template>
	<div>
		<div class="block" v-for="article in articles">
			<NuxtLink :to="`/article/${article.path}`">
				{{ article.title }}
			</NuxtLink>
		</div>
	</div>
</template>
