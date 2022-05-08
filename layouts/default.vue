<template>
	<div class="w-full h-full min-h-screen min-w-full">
		<div
			class="flex w-full justify-between items-center bg-zinc-300 shadow-sm dark:bg-zinc-900 py-4 px-8"
		>
			<NuxtLink to="/">home</NuxtLink>
			<DarkmodeToggle />
		</div>

		<div
			class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
		>
			<article>
				<h1 class="sr-only">Nuxt + Tailwind CSS Typography</h1>
				<div class="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
					<slot />
				</div>
			</article>
		</div>
	</div>
</template>

<style>
body {
	@apply bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 transition-colors antialiased;
}
</style>
