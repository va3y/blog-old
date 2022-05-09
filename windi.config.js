import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import typography from "windicss/plugin/typography";

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
		},
	},
	plugins: [typography({ dark: true })],
});
