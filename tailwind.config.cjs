
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

		}
	},

	plugins: []
};

module.exports = config;
