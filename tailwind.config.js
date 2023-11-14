import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'playfair': ["Playfair Display", 'sans-serif'],
				'lato': ['Lato', 'sans-serif'],

			},
			colors: {
				'primary-text': '#2E0600',
				'background': '#DED1C1',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},

		}
	},

	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
	]
};

module.exports = config;
