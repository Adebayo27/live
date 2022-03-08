import React from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import BidInfo from './Components/BidInfo'
import {
	Box,
	Avatar,
	VStack,
	Tag,
	HStack,
	Button,
	Text,
	Table,
	Thead,
	Tbody,
	Stack,
	Th,
	Tr,
	Td,
    Flex
} from '@chakra-ui/react';
import theme from '../../utils/theme';
import { HiDownload } from 'react-icons/hi';
import { RiErrorWarningFill } from 'react-icons/ri';
// import Button from '../../components/Button'
import Card from '../../components/Card'

const BidDetails = () => {
	return (
		<DashboardWrapper pageTitle="Bid Board" padding={{base:'10px', md:'20px'}}>
			<Box w="100%" h="auto" backgroundColor={theme.colors.white} m="auto" color={theme.colors.gray.gray500}>
				<Box mb="32px" mt="32px">
					<Text color={theme.colors.blue.blue500} fontSize="16px">
						{' '}
						Bid Board &gt; Granite and White Stone Needed
					</Text>
				</Box>
				<Box>
					<HStack>
						<Avatar src="/assets/images/avatar.png" w="110px" h="110px" mr="27px" />
						<VStack>
							<Text pl="16px">Construct Limited</Text>
							<Button variant="outline" color={theme.colors.gray.gray500} fontSize="16px">
								Chat Client
							</Button>
						</VStack>
					</HStack>
				</Box>
				{/* Bid information */}
                <BidInfo/>
					<Stack direction={{base:'column', md:'row' }}>
						<VStack overflowY={'auto'} w={{ base: '100%', md: '704px' }} mr={{base:'0', md:'20px'}} >
							<HStack  w="100%" justify="right">
								<HiDownload color={theme.colors.orange.orange500} />
								<Text fontSize="16px" color={theme.colors.orange.orange500}>
									Dowload as PDF
								</Text>
							</HStack>
                            <Box>
                                <Table variant="striped" colortheme={theme.colors.background} mt="8px" textAlign="center">
                                    <Thead>
                                        <Tr color={theme.colors.background} fontWeight="bold">
                                            <Th textAlign="center">S/N</Th>
                                            <Th textAlign="center">Item Name</Th>
                                            <Th textAlign="center">Description / Type</Th>
                                            <Th textAlign="center">Measurement</Th>
                                            <Th textAlign="center">Quantity</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr fontWeight="normal">
                                            <Td textAlign="center">1</Td>
                                            <Td textAlign="center">Grannite</Td>
                                            <Td textAlign="center">Kashmir grannite</Td>
                                            <Td textAlign="center">Tonnes</Td>
                                            <Td textAlign="center">10</Td>
                                        </Tr>
                                        <Tr fontWeight="normal">
                                            <Td textAlign="center">2</Td>
                                            <Td textAlign="center">Grannite</Td>
                                            <Td textAlign="center">Tan Brown grannite</Td>
                                            <Td textAlign="center">Tonnes</Td>
                                            <Td textAlign="center">5</Td>
                                        </Tr>
                                        <Tr fontWeight="normal">
                                            <Td textAlign="center">3</Td>
                                            <Td textAlign="center">Sand</Td>
                                            <Td textAlign="center">Mansory sand</Td>
                                            <Td textAlign="center">Tonnes</Td>
                                            <Td textAlign="center">12</Td>
                                        </Tr>
                                        <Tr fontWeight="normal">
                                            <Td textAlign="center">4</Td>
                                            <Td textAlign="center">Logistic</Td>
                                            <Td textAlign="center">Logistic</Td>
                                            <Td textAlign="center" />
                                            <Td textAlign="center">1</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Box>
                        </VStack>
                        
						
                      
						<Card
                        border="1px"
                        borderColor={theme.colors.gray.gray300}
                        rounded={8}
                        w={{base:'100%',md:"348px" }}
                        h="auto"
                        mt='32px !important'
                         >

							<VStack alignItems="left" >
								<HStack color={theme.colors.orange.orange500}>
									<RiErrorWarningFill />
									<Text color={theme.colors.blue.blue500}>Important</Text>
								</HStack>
								<Text lineHeight="2" fontSize="16px" fontWeight="400px">
									This section shows the list of the items the client RFQ.
									<br />It is very important you read the detail before submitting your quote.
									<br />If the RFQ doesn’t include logistic, you can use the plus icon below to add it
									when submitting a quote.
								</Text>
							</VStack>
						</Card>
                      
					</Stack>
				<Button mt="24px" fontSize="16px" fontWeight="700" color="#fff" bg={theme.colors.orange.orange500}>
					Submit a Quote
				</Button>
			</Box>
		</DashboardWrapper>
	);
};

export default BidDetails;
