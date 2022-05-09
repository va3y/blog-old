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
	<div>
		<slot />
	</div>
</template>

<style scoped>
div {
	@apply flex w-full overflow-auto rounded-lg overflow-auto my-4 bg-stone-800 dark:bg-stone-900;
}

:deep(pre) {
	@apply flex-1 py-4 w-full;
}

:deep(code) {
	@apply flex flex-col w-full;
}

:deep(.line) {
	@apply break-all px-4 w-full block;
}
</style>
