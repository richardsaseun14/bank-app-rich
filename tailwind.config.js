/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: { DEFAULT: '#0047CC', lighter: '#EFF2F8' },
				grey: { text: '#8B9298' },
			},
		},
	},
	plugins: [],
};
