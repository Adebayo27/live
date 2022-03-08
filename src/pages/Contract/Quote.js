import { Box, Button, Center, Flex, HStack, SimpleGrid, Spacer, Stack, Table, Tbody, Td, Text, Thead, theme, Tr } from '@chakra-ui/react';
import React, { useState } from 'react'
import { HiDownload } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';

function Quote({ onClick }) {
    const [contractSent, setcontractSent] = useState(false);
    return (
        <>
            <HStack cursor={'pointer'} mb="30px">
                <Button variant='none' bg='#FFFFFF' color='black' boxShadow='0px 4px 8px rgba(108, 106, 106, 0.1)' br='8px' onClick={onClick}><IoIosArrowBack />Go back</Button>
            </HStack>
            <SimpleGrid
                spacing={'20px'}
                maxWidth={'600px'}
                columns={{ base: 3, md: 3 }}
            >
                <Text fontWeight={'bold'}>Vendor</Text>
                <Text>Builders First Soruces</Text>
                <Text cursor={'pointer'} fontWeight={'bold'}>
                    {' '}
                    View Profile
                </Text>
            </SimpleGrid>
            <SimpleGrid
                spacing={'0px'}
                mt={{ md: '36px', base: '25px' }}
                maxWidth={'410px'}
                columns={{ base: 1, md: 2 }}
            >
                <Text fontWeight={'bold'}>Delivery Date</Text>
                <Text mt={{ base: '10px', md: '0px' }}>11 OCT 2021</Text>
            </SimpleGrid>
            <Flex cursor={'pointer'}>
                {' '}
                <Spacer /> <HiDownload
                    size={22}
                    color={theme.colors.orange[500]}
                />{' '}
                <Text color={theme.colors.orange[500]}>Dowload as PDF</Text>
            </Flex>

            <Box overflowY={"auto"}>
                <Table mt={6} size='md'>
                    <Thead bg='#EEF3FF' color='#303030'>
                        <Tr>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >S/N</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Item name</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Description / Type</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Measurement</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Quantity</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Price Per Unit</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Discount</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Total Price</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg=' #FFFFFF' color='#303030'>
                            <Td >1</Td>
                            <Td >Grannite</Td>
                            <Td >
                                Kashmir grannite
                            </Td>
                            <Td >Tonnes</Td>
                            <Td >10</Td>
                            <Td >$1,000</Td>
                            <Td >4%</Td>
                            <Td >$9,600</Td>
                        </Tr>
                        <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg='#EEF3FF' color='#303030'>
                            <Td >2</Td>
                            <Td >Grannite</Td>
                            <Td >Tan Brown grannite</Td>
                            <Td >Tonnes</Td>
                            <Td >5</Td>
                            <Td >$460</Td>
                            <Td >5%</Td>
                            <Td >$2,912</Td>
                        </Tr>
                        <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg=' #FFFFFF' color='#303030'>
                            <Td >3</Td>
                            <Td >Sand</Td>
                            <Td >
                                Mansory sand
                            </Td>
                            <Td >Tonnes</Td>
                            <Td >12</Td>
                            <Td >$1,000</Td>
                            <Td >4%</Td>
                            <Td >$9,600</Td>
                        </Tr>
                        <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg='#EEF3FF' color='#303030'>
                            <Td >4</Td>
                            <Td >Logistics</Td>
                            <Td ></Td>
                            <Td >Tonnes</Td>
                            <Td >1</Td>
                            <Td >$500</Td>
                            <Td ></Td>
                            <Td >$500</Td>
                        </Tr>
                        <Tr>
                            <Td ></Td>
                            <Td ></Td>
                            <Td ></Td>
                            <Td ></Td>
                            <Td ></Td>
                            <Td ></Td>
                            <Td fontStyle='normal' mr='39' fontWeight='normal' fontSize='25px' color='#303030'>Total</Td>
                            <Td fontStyle='normal' fontWeight='bold' fontSize='25px' color='#303030'>$20,232</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <SimpleGrid
                spacing={'25px'}
                mt={{ base: '20px', md: '50px' }}
                maxWidth={'800px'}
                columns={{ base: 1, md: 3 }}
            >
                <Center
                    textAlign="center"
                    mt={{ base: '20px', md: '0px' }}
                    borderRadius={'8px'}
                    h="161px"
                    bg="#A2CEF9"
                >
                    <Box>
                        <Text fontSize="20px">Budget</Text>
                        <Text fontWeight={'bold'} fontSize="25px">
                            $30,000
                        </Text>
                    </Box>
                </Center>
                <Center
                    textAlign="center"
                    mt={{ base: '20px', md: '0px' }}
                    borderRadius={'8px'}
                    h="161px"
                    bg="#A2CEF9"
                >
                    <Box>
                        <Text fontSize="20px">Proposed Cost</Text>
                        <Text fontWeight={'bold'} fontSize="25px">
                            $20,230
                        </Text>
                    </Box>
                </Center>
                <Center
                    textAlign="center"
                    mt={{ base: '20px', md: '0px' }}
                    borderRadius={'8px'}
                    h="161px"
                    bg="#A2CEF9"
                >
                    <Box>
                        <Text fontSize="20px">Margin</Text>
                        <Text fontWeight={'bold'} fontSize="25px">
                            +$6,770
                        </Text>
                    </Box>
                </Center>
            </SimpleGrid>
            {contractSent ? (
                <>
                    {' '}
                    <Flex mt="32px">
                        <Text>
                            You will be notified when this vendor signs the{' '}
                            <Box as="span" fontWeight={'bold'}>
                                {' '}
                                binding contract.
                            </Box>{' '}
                            Afterwhich you will proceed to payment{' '}
                        </Text>
                    </Flex>
                    <SimpleGrid
                        maxWidth={{ base: '100%', md: '450px' }}
                        columns={{ base: 1, md: 2 }}
                        mt="40px"
                    >
                        <Button>Proceed to Payment</Button>
                        <Button background="white" color="#303030">
                            View Contract
                        </Button>
                    </SimpleGrid>
                    <Flex mt="32px">
                        <Text fontSize={'12px'}>
                            <Box as="span" fontWeight="bold">
                                Note:
                            </Box>{' '}
                            The vendor won’t have access to the payment until you confirm the
                            delivery and specification quality of the materials
                        </Text>
                    </Flex>
                </>
            ) : (
                <>
                    <Flex mt="32px">
                        <Text>
                            To approve, issue binding contract, and proceed to payment, click
                            on the button below{' '}
                        </Text>
                    </Flex>
                    <Box mt="40px" p>
                        <Stack mt='10' direction={['column', 'row']}>
                            <Button variant='none' w='172px' h='56px' borderRadius='8px' background='#F5862E' color={'#fff'}>View Contract</Button>
                                <Button variant='none' w='172px' h='56px' borderRadius='8px' background='#FFFFFF' color='black' border='1px solid black'>Chat Vendor</Button>
                        </Stack>
                    </Box>
                </>
            )}
        </>
    )
}

export default Quote