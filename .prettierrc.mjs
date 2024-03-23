// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	semi: false,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	pluginSearchDirs: false,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-svelte',
		'prettier-plugin-tailwindcss',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
}
