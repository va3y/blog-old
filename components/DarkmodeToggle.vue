<script lang="ts" setup>
import { MoonIcon, LightBulbIcon } from "@heroicons/vue/solid";
</script>

<template>
	<button
		class="w-8 h-8"
		@click="
			$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
		"
		title="Light/dark mode toggle"
	>
		<MoonIcon v-show="$colorMode.value === 'dark'" />
		<LightBulbIcon v-show="$colorMode.value === 'light'" />
	</button>
</template>
