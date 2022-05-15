<template>
	<code>
		<slot />
	</code>
</template>

<style>
code {
	@apply inline-block bg-stone-300 dark:bg-stone-700 px-1 py-0.5 rounded-md before:hidden after:hidden;
}
</style>
