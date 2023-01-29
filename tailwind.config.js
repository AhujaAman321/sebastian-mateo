/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				main: "NeuePunk, sans-serif",
				Light: "NeuePunkTextLight, sans-serif",
				SemiBold: "NeuePunkSemiBold, sans-serif",
			},
		},
	},
	plugins: [],
};
