import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
			},
			borderColor: {
				DEFAULT: "hsl(var(--border))",
			},
		},
	},
	plugins: [],
};

export default config;
