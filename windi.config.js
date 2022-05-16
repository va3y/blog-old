import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import theme from "windicss/defaultTheme";
import typography from "windicss/plugin/typography";
// import heropatterns from "@windicss/plugin-heropatterns";

export default defineConfig({
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui", "sans-serif"],
			mono: theme.fontFamily.mono,
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
							color: [colors.red[500]],
							textDecoration: "none",
						},
					},
				},
			},
		},
	},
	plugins: [typography({ dark: true })],
});
