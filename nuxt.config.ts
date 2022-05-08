import { defineNuxtConfig } from "nuxt";
import { resolve } from "node:path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: "static",
	modules: ["@nuxt/content-edge", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
	compilerOptions: {
		types: ["@nuxt/types", "@nuxt/content-edge"],
	},
	colorMode: {
		classSuffix: "",
	},
});
