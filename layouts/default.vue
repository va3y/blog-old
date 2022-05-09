<script setup>
import { ArrowLeftIcon } from "@heroicons/vue/outline";
const route = useRoute();
</script>

<template>
	<div class="w-full h-full min-h-screen min-w-full">
		<div
			class="flex w-full justify-between items-center py-4 px-6 sticky bg-stone-400 dark:bg-stone-900 lg:bg-transparent lg:dark:bg-transparent z-10 bg-opacity-50 backdrop-filter backdrop-blur-md md:backdrop-blur-0 top-0"
		>
			<Link
				v-show="route.path !== '/'"
				to="/"
				class="font-semibold block flex items-center"
			>
				<ArrowLeftIcon class="h-6 mr-2 aspect-square" />Go back
			</Link>
			<DarkmodeToggle class="ml-auto" />
		</div>

		<div
			class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24 relative"
		>
			<NuxtPage />
		</div>
	</div>
</template>

<style>
body {
	@apply bg-stone-100 dark:bg-stone-800 dark:text-stone-300 text-stone-800 transition-colors antialiased selection:bg-rose-300 dark:selection:bg-rose-900;
}
</style>
