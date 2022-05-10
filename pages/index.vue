<script setup lang="ts">
import dayjs from "dayjs";

const { data: articles } = await useAsyncData(
	"home",
	async () => {
		return queryContent("/").without(["body"]).sortBy("order", "asc").find();
	},
	{ default: () => [] }
);
const formatDate = (date: Date) => {
	return dayjs(date).format("MMM D, YYYY");
};
</script>

<template>
	<div>
		<div class="max-w-lg">
			<h1 class="text-rose-600 dark:text-rose-700 pb-2 text-2xl font-semibold">
				Hi, I'm Valery
			</h1>
			<p>
				I do React at work, love to develop with
				<Link href="https://github.com/va3y/blog"> Vue</Link>, know very little
				Angular, enthusiastic about Svelte, betting on Solid, sometimes
				perplexed about web components and sill learning new things about HTML.
				<br />
				Pro-performance and against js bloat.
			</p>
			<br />
			<p>
				You can reach me at
				<Link in-new-tab href="https://github.com/va3y/">GitHub</Link>,
				<Link in-new-tab href="https://www.linkedin.com/in/ivanovvaleriy/">
					LinkedIn</Link
				>,
				<Link in-new-tab href="https://twitter.com/primarilyvalery"
					>Twitter</Link
				>
				or
				<Link in-new-tab href="mailto:valerih333@gmail.com">email</Link>. I also
				write about Frontend every now and then. Here are some of my articles:
			</p>
		</div>
		<ul class="mt-16 gap-4 md:columns-2">
			<li
				class="block transition-all duration-500 bg-size-200 bg-left-top hover:bg-center rounded p-1 bg-gradient-to-br dark:from-rose-500 from-rose-300 dark:to-cyan-700 to-cyan-300 hover:from-abmer-300 shadow break-inside-avoid mb-4"
				v-for="article in articles"
			>
				<NuxtLink
					class="py-4 px-6 w-full h-full block flex flex-col dark:bg-stone-800 bg-stone-200 bg-opacity-90"
					:to="`/article/${article.path}`"
				>
					<div class="text-2xl font-semibold max-w-sm">
						{{ article.title }}
					</div>
					<br />
					<div class="" v-if="article.description">
						{{ article.description }} ({{ Math.round(article.size / 800) }} min.
						read)
					</div>

					<div class="mt-4 opacity-50">
						<template v-if="!article.updatedAt">
							{{ formatDate(article.createdAt) }}
						</template>
						<template v-if="article.updatedAt">
							Last&nbsp;updated: {{ formatDate(article.updatedAt) }}
						</template>
					</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>
