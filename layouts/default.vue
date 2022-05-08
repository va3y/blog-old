<template>
	<div class="antialiased text-gray-900">
		<nav class="flex w-full bg-zinc-200 py-8 px-8">
			<NuxtLink to="/">home</NuxtLink>
		</nav>

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
