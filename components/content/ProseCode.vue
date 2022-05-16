<script setup lang="ts">
defineProps({
	code: {
		type: String,
		default: "",
	},
	language: {
		type: String,
		default: null,
	},
	filename: {
		type: String,
		default: null,
	},
	highlights: {
		type: Array as () => number[],
		default: () => [],
	},
});
</script>

<template>
	<div
		class="prose-code w-full overflow-auto rounded-lg overflow-auto my-4 bg-stone-800 dark:bg-stone-900 prose-code"
	>
		<slot />
	</div>
</template>

<style>
.prose-code pre {
	@apply bg-stone-800 dark:bg-stone-900 m-0 py-6 font-mono;
}

.prose-code code {
	@apply w-full py-4;
}

.prose-code .line {
	@apply break-all px-4 w-full block;
}
</style>
