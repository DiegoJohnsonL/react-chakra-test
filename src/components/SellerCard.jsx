import {
	Box,
	Button,
	Card,
	CardBody,
	Collapse,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import React from 'react';

export function SellerCard() {
	const brandColor = 'rgb(5, 71, 180)';
	const properties = {
		aboutUs:
			'Our Passion for traveling and exploring gave us the opportunity to open our minds and give us another perspective of the world. \n \n The idea of Travel Buddies, is the vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est',
		name: 'Dein Gastgerber Ole',
	};

	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<Card boxShadow={'lg'} maxWidth={'620px'} p="20px">
			<CardBody>
				<Flex justifyContent="center">
					<VStack>
						<HStack spacing={5}>
							<Box
								maxWidth={'140px'}
								borderRadius={'50%'}
								overflow={'hidden'}
								background="linear-gradient(to right, #3fb0a3, #164793)"
								padding="4px"
							>
								<Image
									display="block"
									width="100%"
									height="auto"
									borderRadius="50%"
									src="https://bit.ly/dan-abramov"
								></Image>
							</Box>
							<Box>
								<Flex gap={2} alignItems="center">
									<Heading as="h3" size="lg">
										{properties.name}
									</Heading>
									<Icon
										as={AiFillCheckCircle}
										color={'#00f5d6'}
										boxSize={8}
										mt={1}
									/>
								</Flex>
								<Text mt={2}>
									<Icon as={FaMapMarkerAlt} /> Lima, Peru
								</Text>
							</Box>
						</HStack>
						<Heading mt={10} as="h4" size="md" alignSelf={'start'}>
							About us
						</Heading>
						<Box boxShadow="inset 0px -3px 3px -3px rgba(0, 0, 0, 0.2)" py={2}>
							<Collapse startingHeight={92} in={show} mt={4}>
								{properties.aboutUs.split('\n').map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>
								))}
							</Collapse>
						</Box>

						<Button
							size="sm"
							onClick={handleToggle}
							mt="1rem"
							variant={'link'}
							colorScheme="brand"
						>
							{show ? 'Show Less' : 'Learn More'}
						</Button>

						<Box
							border={'2px solid ' + brandColor}
							py={2}
							px={9}
							my={8}
							borderRadius="5px"
						>
							<Text fontWeight={'semibold'} textColor={brandColor}>
								View Profile
							</Text>
						</Box>
						<Text mb={5} textColor="grey">
							HOST AT METEOR SINCE 2022
						</Text>
					</VStack>
				</Flex>
			</CardBody>
		</Card>
	);
}
