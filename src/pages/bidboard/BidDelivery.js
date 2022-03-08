import React, {useState} from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import BidInfo from './Components/BidInfo';
import {
	Box,
	Avatar,
	VStack,
	HStack,
	Stack,
	Spacer,
	Text,
    Button,
	Flex,
	Table,
	Thead,
	Tbody,
	Th,
	Tr,
	Td, 
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Alert,
	AlertIcon,
	CloseButton,
	AlertDescription
} from '@chakra-ui/react';
import theme from '../../utils/theme';
// import Button from '../../components/Button'
import Input from '../../components/Input';
import { HiDownload } from 'react-icons/hi';
import {BsPlusCircleFill} from 'react-icons/bs'
import {RiArrowDropUpFill, RiArrowDropDownFill} from 'react-icons/ri';

const BidDelivery = () => {
	const format = (val) =>  val + `%` 
	const format2 = (val) =>  '$' + val
	const parse = (val) => val.replace(/^\$/, '')
  
	const [value, setValue] = useState('100');
	const [price, setPrice] = useState('1000');
	const [alert, setAlert] = useState(false);
	return (
		<DashboardWrapper pageTitle="Bid Board"  padding={{base:'10px', md:'20px'}}>
			<Box w="100%" h="auto" p={{base:'0', md:'0 10px'}} backgroundColor={theme.colors.white} m="auto" color={theme.colors.gray.gray500}>
				{/* navigation */}
				<Box mb="32px" mt="32px">
					<Text color={theme.colors.blue.blue500} fontSize="16px">
						{' '}
						Bid Board &gt; Granite and White Stone Needed
					</Text>
				</Box>
				{/* logo with chat client */}
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
				<BidInfo />
				<Box mt="84px">
					<Stack direction={[ 'column', 'row' ]}>
						<Flex display="column">
							<Text fontSize="16px">Delivery Date</Text>
							<Text fontSize="12px" mt="8px">
								When can you deliver?
							</Text>
						</Flex>

						<Spacer />

						<Box w="305px">
							<Input type="date" w="100%" />
						</Box>

						<Spacer />

						<HStack>
							<HiDownload color={theme.colors.orange.orange500} />
							<Text fontSize="16px" color={theme.colors.orange.orange500}>
								Dowload as PDF
							</Text>
						</HStack>
					</Stack>
                    <Box  overflowY={'auto'}>
					<Table variant="striped" colortheme={theme.colors.background} mt="24px" textAlign="center">
						<Thead>
							<Tr color={theme.colors.gray.gray500} fontWeight="bold">
								<Th textAlign="center">S/N</Th>
								<Th textAlign="center">Item name</Th>
								<Th textAlign="center">Description / Type</Th>
								<Th textAlign="center">Measurement</Th>
								<Th textAlign="center">Quantity</Th>
                                <Th textAlign="center">Price / Unit</Th>
                                <Th textAlign="center">Discount</Th>
                                <Th textAlign="center">Total Price</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr fontWeight="normal">
								<Td textAlign="center">1</Td>
								<Td textAlign="center">Grannite</Td>
								<Td textAlign="center">Kashmir grannite</Td>
								<Td textAlign="center">Tonnes</Td>
								<Td textAlign="center">10</Td>
                                <Td textAlign="center">
								<NumberInput
									onChange={(valueString) => setPrice(parse(valueString))}
									value={format2(price)}
									max={5000}
									>
									<NumberInputField  w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">
								<NumberInput
									onChange={(valueString) => setValue(parse(valueString))}
									value={format(value)}
									max={100}
									>
									<NumberInputField w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">$9,600</Td>
							</Tr>
							<Tr fontWeight="normal">
								<Td textAlign="center">2</Td>
								<Td textAlign="center">Grannite</Td>
								<Td textAlign="center">Tan Brown grannite</Td>
								<Td textAlign="center">Tonnes</Td>
								<Td textAlign="center">5</Td>
                                <Td textAlign="center">
								<NumberInput
									onChange={(valueString) => setPrice(parse(valueString))}
									value={format2(price)}
									max={5000}
									>
									<NumberInputField w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">
								<NumberInput
									onChange={(valueString) => setValue(parse(valueString))}
									value={format(value)}
									max={100}
									>
									<NumberInputField w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">$2,912</Td>
							</Tr>
							<Tr fontWeight="normal">
								<Td textAlign="center">3</Td>
								<Td textAlign="center">Sand</Td>
								<Td textAlign="center">Mansory sand</Td>
								<Td textAlign="center">Tonnes</Td>
								<Td textAlign="center">12</Td>
                                <Td textAlign="center">
								<NumberInput
									onChange={(valueString) => setPrice(parse(valueString))}
									value={format2(price)}
									max={5000}
									>
									<NumberInputField w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">
								<NumberInput
									onChange={(valueString) => setValue(parse(valueString))}
									value={format(value)}
									max={100}
									>
									<NumberInputField w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">
								$500
								</Td>
							</Tr>
							<Tr fontWeight="normal">
								<Td textAlign="center">4</Td>
								<Td textAlign="center">Logistic</Td>
								<Td textAlign="center">Logistic</Td>
								<Td textAlign="center" />
								<Td textAlign="center">1</Td>
                                <Td textAlign="center" >
								<NumberInput
									onChange={(valueString) => setPrice(parse(valueString))}
									value={format2(price)}
									max={5000}
									>
									<NumberInputField w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">
								<NumberInput
									onChange={(valueString) => setValue(parse(valueString))}
									value={format(value)}
									max={100}
									>
									<NumberInputField w='100px'/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								</Td>
								<Td textAlign="center">$500</Td>
							</Tr>
						</Tbody>
					</Table>
                    </Box>
                    <Flex mt={4} fontSize='21px' fontWeight='bold' color={theme.colors.gray.gray500} justify='right'>
                                <Text mr='30px' >Total</Text>
                                <Text  mr='24px' >$20,232</Text>
                    </Flex>
                    <HStack mt='24px' >
                        <Text fontSize='16px' fontWeight='400' color={theme.colors.gray.gray500}>Add logistic row</Text>
                        <BsPlusCircleFill color={theme.colors.orange.orange500}/>
                    </HStack>
                    <Flex color={theme.colors.gray.gray500} mt='36px'>
                        <Text fontWeight='700' mr='11px'>Note</Text>
                        <Text w='723px' fontSize='16px' fontWeight='400'>WIthholding tax (7.5%) will be deducted from total amount ($20, 232) that will be paid by the buyer. The amount that will be paid to you will be $20,000.</Text>
                    </Flex>
                    <Flex  mt='40px' fontSize="15px">
						
                        <Button mb='24px' bg={theme.colors.orange.orange500} color='#fff' mr='30px' onClick={()=>setAlert(!alert)}>Submit</Button>
                        <Button variant="outline" p='15px 32px' color={theme.colors.gray.gray500} >
                            View Binding Contract
						</Button>
                    </Flex>
                    
				</Box>
				{
					alert?
				<Alert bg={'#c6f6d5'} status='success' w={{base:'100%', md:'678px'}} rounded={6}>
				<AlertIcon color='green' fontSize='16px' fontWeight='400'/>
				<AlertDescription>Your quote has been sent. You will be notified if the client accepts your quote.</AlertDescription>
				<CloseButton position='absolute' right='0px' top='8px' onClick={()=>setAlert(!alert)}/>
				</Alert>: ''
				}
			</Box>
			{/* <Alert color='#2D3748' bg={'green.100'} variant='left-accent' w={{base:'100%', md:'678px'}} rounded={6}>
				<AlertIcon color={'green'} fontSize='16px' fontWeight='400'/>
				Your quote has been sent. You will be notified if the client accepts your quote.
				<CloseButton position='absolute'  right='0px' top='8px' />
			</Alert> */}
			
		</DashboardWrapper>
	);
};

export default BidDelivery;
