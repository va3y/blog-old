import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import typography from "windicss/plugin/typography";
// import heropatterns from "@windicss/plugin-heropatterns";

export default defineConfig({
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
		extend: {
			backgroundSize: {
				"size-200": "200% 200%",
			},
			backgroundPosition: {
				"pos-25": "25% 25%",
				"pos-75": "75% 75%",
			},
			typography: {
				DEFAULT: {
					css: {
						color: colors.stone[800],
						a: {
							color: colors.red[500],
							textDecoration: "none",
						},
					},
				},
			},
		},
	},
	plugins: [
		typography({ dark: true }),
		// heropatterns({
		// 	// the list of patterns you want to generate a class for
		// 	// the names must be in kebab-case
		// 	// an empty array will generate all 87 patterns
		// 	patterns: ["topography", "architect"],

		// 	// The foreground colors of the pattern
		// 	colors: {
		// 		default: colors.stone[500],
		// 	},

		// 	// The foreground opacity
		// 	opacity: {
		// 		default: "0.4",
		// 		100: "1.0",
		// 		20: "0.05",
		// 	},
		// }),
	],
});
