import React from 'react'
import theme from '../../../utils/theme';
import {
	Box,
	VStack,
	HStack,
	Text,
	
} from '@chakra-ui/react';

const BidInfo = () => {
    return (
        <Box mt="56px" mb="32px">
					<HStack w={{ base: '100%', md: '80%' }}>
						<VStack
							w="100%"
							alignItems="left"
							spacing="24px"
							color={theme.colors.gray.gray500}
							fontWeight="600"
						>
							<Text>Title</Text>
							<Text>Category</Text>
							<Text>Budget</Text>
							<Text>Expected Delivery date</Text>
							<Text>Site Location</Text>
						</VStack>
						<VStack
							w="100%"
							alignItems="left"
							spacing="24px"
							color={theme.colors.gray.gray500}
							fontWeight="400"
						>
							<Text>Quotation Title</Text>
							<Text>Sand and Stone</Text>
							<Text>$20,000</Text>
							<Text>11 October 2021</Text>
							<Text>3, faith street, Isale Abetu, Abeokuta, Ogun State.</Text>
						</VStack>
					</HStack>
				</Box>
    )
}

export default BidInfo
