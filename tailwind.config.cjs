/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-primary': '#121212',
				'dark-secondary': '#18181b',
				'dark-hover-secondary': '#27272a',
			},
			screens: {
				'slider-mobile': '900px',
				'3xl': '1720px',
				usm: '480px',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
