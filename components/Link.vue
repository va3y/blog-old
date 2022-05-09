<script setup lang="ts">
defineProps<{ inNewTab?: boolean }>();
</script>

<template>
	<NuxtLink
		:target="inNewTab ? '_blank' : ''"
		:rel="inNewTab ? 'noopener noreferrer' : ''"
		class="text-rose-600 dark:text-rose-700 hover:underline underline-offset-2"
	>
		<slot />
	</NuxtLink>
</template>
