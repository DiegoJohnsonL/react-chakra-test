import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		brand: {
			50: '#0047bb',
			100: '#0047bb',
			200: '#0047bb',
			500: '#0047bb',
		},
	},
	breakpoints: {
		sm: '30em',
		md: '48em',
		lg: '64em',
		xl: '80em',
		'2xl': '96em',
	},
});
