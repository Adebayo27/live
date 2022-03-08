import React,{useState} from 'react';
import {
	Box,
	Text,
	Spacer,
	HStack,
	VStack,
	Flex,
	Avatar,
	Tag,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Button,
	SimpleGrid
} from '@chakra-ui/react';

import { FiHeart } from 'react-icons/fi';

import { BsFillExclamationSquareFill, BsThreeDots } from 'react-icons/bs';

import {Link} from 'react-router-dom'

import theme from '../../../utils/theme';

const BidCard = () => {
    const [like, setLike] = useState(false)
	return (
		<Box  w={{ base: '100%', md: 'auto' }} spacing={8} border="1px" rounded="8px" >
			<VStack p="24px">
				<HStack w="100%">
					<Flex alignItems="center">
						<Avatar src="/assets/images/avatar.png" w="40px" h="40px" mr="12px" />
						<Text fontSize="16px" fontWeight='700' color={theme.colors.gray.gray500}>
							Dewalt Group
						</Text>
					</Flex>
					<Spacer />
					<Box>
						<Menu closeOnSelect={true}  direction='ltr'>
							<MenuButton>
								<BsThreeDots color={theme.colors.gray.gray500} size={16} />
							</MenuButton>

							{/* <BsThreeDots as={Button} color={theme.colors.gray.gray500} /> */}
							<MenuList>
								<MenuItem fontSize="16px" fontWeight="400" color={'gray.gray500'} as={Link} to='/bill/details'>
									View Details
								</MenuItem>
								<MenuItem fontSize="16px" fontWeight="400" color={'gray.gray500'}>
									Mark Unuseful
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</HStack>
				<Text fontFamily={theme.fonts.body} fontSize="14px" pt="24px" color={theme.colors.gray.gray500}>
					Plumbing materials needed for construction.<Tag
						fontSize="8px"
						fontWeight="400"
						bg="none"
						color={theme.colors.gray.gray400}
					>
						Posted 2 mins ago
					</Tag>
				</Text>
				<HStack w="100%" mt={10}>
					<Tag
						p="4px 16px"
						bg={theme.colors.blue.blue100}
						color={theme.colors.gray.gray500}
						rounded='32px'
						fontSize="12px"
						fontWeight="normal"
					>
						Plumbing
					</Tag>
					<Spacer />
					<FiHeart  color={like?theme.colors.blue.blue500:theme.colors.gray.gray500} fill={like?theme.colors.blue.blue500:'none'} size={21}  onClick={()=>setLike(!like)}/>
				</HStack>
				<HStack w="100%" fontFamily={theme.fonts.body} mt={20}>
					<Box mt="24px">
						<Flex fontSize="10px" fontWeight="400" bg="none" color={theme.colors.blue.blue500}>
							No of submission:
							<Flex pl=" 6px" fontSize="10px" fontWeight="400" bg="none">
								23
							</Flex>
						</Flex>
					</Box>
					<Spacer />
					<Box>
						<Flex mt="24px" fontSize="10px" fontWeight="400" bg="none" color={theme.colors.blue.blue500}>
							Deadline:{' '}
							<Flex pl="6px" fontSize="10px" fontWeight="400" bg="none">
								21/11/2021
							</Flex>
						</Flex>
					</Box>
				</HStack>
			</VStack>
		</Box>
	);
};

export default BidCard;
