import { defineNuxtConfig } from "nuxt";
import tailwindTypography from "@tailwindcss/typography";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// target: "static",
	modules: [
		"@nuxt/content-edge",
		[
			"@nuxtjs/color-mode",
			{
				classSuffix: "",
			},
		],
		"nuxt-windicss",
	],
	compilerOptions: {
		types: ["@nuxt/types", "@nuxt/content-edge", "nuxt-windicss"],
	},
});
