<script setup lang="ts">
import dayjs from "dayjs";

const { data: articles } = await useAsyncData(
	"home",
	async () => {
		return queryContent("/posts")
			.without(["body"])
			.sortBy("order", "asc")
			.find();
	},
	{ default: () => [] }
);
const formatDate = (date: Date) => {
	return dayjs(date).format("MMM D, YYYY");
};
</script>

<template>
	<div class="lg:text-lg">
		<Head>
			<title>Home | Va3y Blog</title>
			<template v-for="prefetchLink in articles">
				<link rel="prefetch" :href="`${prefetchLink.slug}`" />
			</template>
		</Head>
		<div class="max-w-xl mt-4">
			<h1 class="text-rose-600 dark:text-rose-700 pb-6 text-6xl font-bold">
				Hi, I'm Valery
			</h1>
			<p class="text-stone-700 dark:text-stone-300">
				I do React at work, love to develop with
				<Link in-new-tab href="https://github.com/va3y/blog"> Vue</Link>, know
				very little Angular, enthusiastic about Svelte, betting on Solid,
				sometimes perplexed about web components, and still learning new things
				about HTML. Pro&#8209;performance and anti js bloat.
			</p>
			<br />
			<p>
				You can reach me on
				<Link in-new-tab href="https://github.com/va3y/">GitHub</Link>,
				<Link in-new-tab href="https://www.linkedin.com/in/ivanovvaleriy/">
					LinkedIn</Link
				>,
				<Link in-new-tab href="https://twitter.com/primarilyvalery"
					>Twitter</Link
				>, or by
				<Link in-new-tab href="mailto:valerih333@gmail.com">email</Link>. I also
				write about front-end every now and then. Here are some of my articles:
			</p>
		</div>
		<ul class="mt-12 gap-4 md:columns-2 mb-20 lg:mr-24">
			<li
				class="block transition-all duration-500 bg-size-200 bg-left-top hover:bg-center rounded pl-4 bg-gradient-to-br dark:from-rose-500 from-rose-300 dark:to-cyan-400 to-cyan-300 hover:from-rose-300 dark:from-rose-400 shadow-lg shadow-stone-300 dark:shadow-stone-900 break-inside-avoid mb-4 relative"
				v-for="article in articles"
			>
				<NuxtLink
					class="p-8 pt-6 w-full h-full block flex flex-col dark:bg-stone-900 bg-stone-200 bg-opacity-100"
					:to="`/${article.path}`"
				>
					<div class="font-bold mb-4 max-w-sm pr-14">
						{{ article.title }}
					</div>
					<div class="mt-2" v-if="article.description">
						{{ article.description }} <br />
					</div>

					<div class="mt-2">
						<template v-if="!article.updatedAt">
							{{ formatDate(article.createdAt) }}
						</template>
						<template v-if="article.updatedAt">
							Last&nbsp;updated: {{ formatDate(article.updatedAt) }} </template
						>, ({{ Math.round(article.size / 800) }}
						min. read)
					</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>
