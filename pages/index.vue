<script setup>
const { data: articles } = await useAsyncData("home", () => {
	return queryContent("/").find();
});
</script>

<template>
	<div class="">
		<h1 class="text-rose-600 dark:text-rose-700 pb-2 text-2xl font-semibold">
			Hi, I'm Valery
		</h1>
		<p>I write about Frontend every now and then.</p>
		<p>
			You can reach me at
			<Link in-new-tab href="https://github.com/va3y/">GitHub</Link>,
			<Link in-new-tab href="https://www.linkedin.com/in/ivanovvaleriy/">
				LinkedIn</Link
			>,
			<Link in-new-tab href="https://twitter.com/primarilyvalery">Twitter</Link>
			or
			<Link in-new-tab href="mailto:valerih333@gmail.com">email</Link>.
		</p>
		<ul class="mt-16 grid md:grid-cols-2 gap-4 auto-rows-max">
			<li
				class="block transition-all duration-500 bg-size-200 bg-left-top hover:bg-center rounded p-1 bg-gradient-to-br dark:from-rose-500 from-rose-300 dark:to-cyan-700 to-cyan-300 hover:from-abmer-300 shadow min-h-40"
				v-for="article in articles"
			>
				<NuxtLink
					class="p-4 w-full h-full block bg-stone-200 dark:bg-stone-800 bg-stone-100 bg-opacity-100 dark:bg-opacity-90"
					:to="`/article/${article.path}`"
				>
					<div class="flex justify-between gap-4">
						<div class="text-xl font-semibold">
							{{ article.title }}
						</div>
						<div class="text-sm">
							{{ article.createdAt }}
						</div>
					</div>
					<div class="text-sm mt-4">{{ article.description }}</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>
