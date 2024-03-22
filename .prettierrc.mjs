// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	semi: false,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
