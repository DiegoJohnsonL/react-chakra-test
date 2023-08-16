import {
	Box,
	Flex,
	Heading,
	Icon,
	Text,
	HStack,
	Button,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt, FaCircle } from 'react-icons/fa';

//TODO: Re do the tags
export function ItemsDetails() {
	const brandColor = 'rgb(5, 71, 180)';
	const property = {
		postedDate: '1 weak ago',
		postedLocation: 'Lima - Peru',
		title: 'Beats Studio3 noise canceling headphones build-in microphone',
		brand: 'Beats',
		discountPrice: ' $ 240.00 USDT',
		originalPrice: '252.00 USDT',
		discountPercentage: '5%',
		ratings: 175,
		starts: 4.9,
		tags: ['Almost new', 'Technology'],
		productCondition: 3,
		productColor: 'White',
		shippingCostResponsible: 'Seller',
		productDescription:
			'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
	};
	return (
		<Flex direction={'column'}>
			<Text>
				<Icon as={FaMapMarkerAlt} /> Posted {property.postedDate} in{' '}
				{property.postedLocation}
			</Text>
			<Heading as="h3" size="lg" maxWidth={600} mt={5}>
				{property.title}
			</Heading>
			<Text mt={2}> {property.brand} </Text>
			<Box display="flex" mt="5" alignItems="center" ms={1}>
				{Array(5)
					.fill('')
					.map((_, i) => (
						<StarIcon
							marginRight={1.5}
							key={i}
							color={i < Math.floor(property.starts) ? brandColor : 'gray.300'}
						/>
					))}
				<Box as="span" ml={2} color="gray.600" fontSize="sm">
					{property.starts + ' | ' + property.ratings} reviews
				</Box>
			</Box>
			<HStack spacing={3} flexWrap={'wrap'} mt="40px">
				{property.tags.map((tag, _) => (
					<HStack border={'2px solid ' + brandColor} py={2} px={4}>
						<Icon as={FaCircle} mr={1} boxSize={3} color={brandColor}></Icon>
						<Text as={'b'} textColor={brandColor}>
							{tag}
						</Text>
					</HStack>
				))}
			</HStack>
			<Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500" mt={8}>
				Actual Price
			</Text>

			<HStack spacing={3} flexWrap={'wrap'}>
				<Text
					as="b"
					fontSize={{ base: '3xl', md: '4xl' }}
					whiteSpace={'nowrap'}
				>
					{property.discountPrice}
				</Text>

				<Text as="s" fontSize={{ base: 'md', md: 'lg' }} color={'gray.500'}>
					{property.originalPrice}
				</Text>
				<Text
					display={'inline'}
					fontSize={{ base: 'md', md: 'lg' }}
					color={'red.400'}
				>
					{property.discountPercentage} OFF
				</Text>
			</HStack>
			<HStack
				spacing={3}
				flexWrap={'wrap'}
				align={'stretch'}
				my={'40px'}
				justifyContent={'space-around'}
			>
				<Button colorScheme="facebook" flex="3" size="lg">
					Buy
				</Button>
				<Button colorScheme="facebook" flex="1" size="lg" variant="outline">
					Save
				</Button>
			</HStack>
			<Heading as="h4" size="md">
				Product Description
			</Heading>
			<Text fontSize="lg" mt={4}>
				{property.productDescription}
			</Text>
			<Heading as="h4" size="md" mt={10}>
				Product Condition
			</Heading>
			<HStack spacing={6} flexWrap={'wrap'} my={6}>
				{Array(5)
					.fill('')
					.map((_, i) => {
						if (i === 4) {
							return (
								<HStack border={'2px solid ' + brandColor} py={1} px={10}>
									<Icon
										as={FaCircle}
										mr={1}
										boxSize={3}
										color={brandColor}
									></Icon>
									<Text as={'b'} fontSize="sm" textColor={brandColor}>
										New (Unused)
									</Text>
								</HStack>
							);
						} else {
							return (
								<Box
									width="90px"
									border="solid 0.14em"
									borderColor="#01d0b5"
									bgColor={property.productCondition > i ? '#01d0b5' : 'white'}
									display={'inline-block'}
									height={4}
									borderRadius={5}
								></Box>
							);
						}
					})}
			</HStack>
			<Heading as="h4" size="md">
				Product Color
			</Heading>
			<Box spacing={6} flexWrap={'wrap'} my={6}>
				<Box
					height="50px"
					width="50px"
					//HERE THE COLOR WILL GO and call a function onClick()
					bgColor="white"
					borderRadius="50%"
					position="relative"
					border="1.8px solid black"
				>
					<Box
						width="8px"
						height="8px"
						bgColor="black"
						borderRadius="50%"
						position="absolute"
						top="50%"
						left="50%"
						transform="translate(-50%, -50%)"
					/>
				</Box>
			</Box>
			<Heading as="h4" size="md">
				Standard Shipping
			</Heading>
			<Text textColor={'gray.500'} maxWidth="500px" mt={2}>
				Best for shipping small items in Peru. We will send you a code by email
				and you will ship the item. Shipping protection included.
			</Text>
			<Heading as="h4" size="md" mt={6}>
				Who will pay for delivery?
			</Heading>
			<Box
				border="1px solid gray"
				borderRadius="5px"
				padding={4}
				maxWidth="600px"
				mt={4}
			>
				{property.shippingCostResponsible}
			</Box>
		</Flex>
	);
}
