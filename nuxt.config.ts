import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	target: "static",
	modules: [
		[
			"@nuxt/content-edge",
			{
				highlight: {
					theme: "one-dark-pro",
					preload: ["json", "js", "ts", "html", "css", "vue"],
				},
			},
		],
		[
			"@nuxtjs/color-mode",
			{
				classSuffix: "",
			},
		],
		"nuxt-windicss",
	],
	head: {
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico",
			},
		],
	},
	compilerOptions: {
		types: ["@nuxt/types", "@nuxt/content-edge", "nuxt-windicss"],
	},
});
