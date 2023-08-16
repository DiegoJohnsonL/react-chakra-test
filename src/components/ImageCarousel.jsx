import { Box, Image } from '@chakra-ui/react';

export function ImageCarousel() {
	return (
		<Box maxWidth={'540px'} maxHeight={'520px'} overflow={'hidden'}>
			<Image
				src="https://i5.walmartimages.com/asr/7bb69454-b7b0-404e-b042-4f63e3487f15.e05c72790cd3040ae62e219dedd34995.jpeg"
				alt=""
				boxShadow=" 0px 2px 4px rgba(0, 0, 0, 0.2)"
				objectFit="cover"
				width={'100%'}
				height="auto"
			/>
		</Box>
	);
}
