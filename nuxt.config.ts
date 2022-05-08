import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: "static",
	modules: ["@nuxt/content-edge", "@nuxtjs/tailwindcss"],
	compilerOptions: {
		types: ["@nuxt/types", "@nuxt/content-edge"],
	},
});
