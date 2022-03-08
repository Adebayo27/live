import {
	Box,
	Text,
	Spacer,
	IconButton,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	HStack,
	Stack
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

import { IoMdSwitch } from 'react-icons/io';

import Input from '../../../components/Input';

import theme from '../../../utils/theme';

const BidFilter = () => {
	return (
		<Stack direction={[ 'column', 'row' ]} maxW="100%">
			<Box>
				<Text fontWeight="700" fontSize="25px" color={theme.colors.gray.gray200}>
					Most recent for you
				</Text>
			</Box>
			<Spacer />

			<HStack>
				<InputGroup size="md" rounded={8} color={theme.colors.gray.gray400}>
					<InputLeftElement pointerEvents="none" fontSize="16px" />
					<Input placeholder="Search for RFQ" borderColor={theme.colors.gray.gray400} />
					<InputRightElement children={<BiSearch color={theme.colors.gray.gray500} />} />
				</InputGroup>
				<InputGroup
					size="md"
					rounded={8}
					d={{ base: 'none', md: 'none', lg: 'flex' }}
					color={theme.colors.gray.gray400}
				>
					<InputLeftElement pointerEvents="none" fontSize="16px" />
					<Input placeholder="Filter by" borderColor={theme.colors.gray.gray400} />
					<InputRightElement children={<IoMdSwitch color={theme.colors.gray.gray500} />} />
				</InputGroup>
				<IconButton
					colorScheme="teal"
					aria-label="Call Segun"
					size="md"
					variant="outline"
					icon={<IoMdSwitch />}
					color={theme.colors.gray.gray400}
					d={{ base: 'flex', md: 'flex', lg: 'none' }}
				/>
				
			</HStack>
		</Stack>
	);
};

export default BidFilter;
