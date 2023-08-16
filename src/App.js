import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ImageCarousel } from './components/ImageCarousel';
import { ItemsDetails } from './components/ItemDetails';
import { SellerCard } from './components/SellerCard';
import { theme } from './theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<SimpleGrid
				gap={12}
				minHeight="100vh"
				templateRows="0.2fr 1fr"
				my="50px"
				px="5%"
				columns={{ md: 1, lg: 2 }}
			>
				<Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
					<ImageCarousel></ImageCarousel>
				</Box>
				<Box gridRow={'span 2'}>
					<ItemsDetails></ItemsDetails>
				</Box>
				<Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
					<SellerCard></SellerCard>
				</Box>
			</SimpleGrid>
		</ChakraProvider>
	);
}

export default App;
