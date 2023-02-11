/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function ({ matchUtilities, }) {
	matchUtilities({
		'backface': (value) => ({
			'-webkit-backface-visibility': value,
			'backface-visibility': value,
		})
	});
});

const rotateY = plugin(function ({ matchUtilities }) {
	matchUtilities({
		'rotate-y': (value) => ({ transform: `rotateY(${value})`, }),
	});
});

const textShadow = plugin(function ({ matchUtilities, theme }) {
	matchUtilities(
		{
			'text-shadow': (value) => ({ textShadow: value })
		},
		{ values: theme('textShadow') },
	);
});

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./index.html',
	],
	theme: {
		extend: {
			screens: {
				'xs': '375px',
				'sm': '650px',
				'md': '768px',
				'lg': '980px',
				'xl': '1104px',
				'2xl': '1200px',
				'3xl': '1440px',
			},
			colors: {
				'primary': {
					1: '#C4C8FF',
					2: '#9DA4FF',
					3: '#6E77E9',
				},
				'secondary': '#55FFAD',
				'neutral': {
					1: '#FFFFFF',
					2: '#858993',
					3: '#151F3F',
					4: '#0E1835',
					5: '#06102B',
					6: '#000000',
					7: 'rgba(255, 255, 255, 0.6)',
					8: 'rgba(0, 0, 0, 0.25)',
				},
				'yellow': {
					1: '#FFE34E',
					2: '#FFF385',
					3: 'rgba(255, 243, 133, 0.6)'
				},
			},
			backgroundImage: {
				'gradient-1': 'linear-gradient(90deg, #9DA4FF 0%, #55FFAD 100%)',
				'gradient-2': 'linear-gradient(180deg, #9DA4FF 0%, #6E77E9 100%)',
				'gradient-3': 'linear-gradient(210.34deg, #717AEA 1.25%, #9EA4FF 96.07%)',
				'gradient-4': 'linear-gradient(142.33deg, rgba(157, 164, 255, 0.8) -0.03%, rgba(85, 255, 173, 0.8) 99.97%)',
				'banner': 'url("./src/assets/images/banner-bg.png")',
			},
			fontFamily: {
				'noto': ['Noto Sans TC'],
				'monument': ['Monument Extended'],
				'montserrat': ['Montserrat'],
				'pilot': ['Pilot Command'],
			},
			maxWidth: {
				lg: '90rem',
			},
			boxShadow: {
				'xs': '0px 0px 10px',
			},
			textShadow: {
				'hero': '-3px -3px 0 #55FFAD, 4px 4px 0 #C4C8FF',
				'primary': '0px 0px 10px rgba(157, 164, 255, 0.6)',
				'secondary': '0px 0px 10px rgba(85, 255, 173, 0.6)',
				'white': '0px 0px 10px rgba(255, 255, 255, 0.6)',
			},
		},
	},
	plugins: [
		textShadow,
		rotateY,
		backfaceVisibility,
	]
};
