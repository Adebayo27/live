import React from 'react'
import { Box, SimpleGrid, Stack, Text, Flex, Image, Spacer, Table, Tbody, Td, Thead, Tr, Avatar, AvatarGroup, Link } from '@chakra-ui/react';
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowUpRight, FiArrowDownLeft, FiStar } from "react-icons/fi";
import { AiFillEye, AiOutlineLeft, AiOutlineRight, AiFillStar } from 'react-icons/ai'
import DashboardWrapper from '../../layouts/dashboard';
import Card from '../../components/Card'
import pattern from '../../assets/pattern.png'
export default function Dashboard() {
    const lt = [1, 2, 3]
    const lt2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <DashboardWrapper pageTitle="Dashboard" background='#EEF3FF' padding='0'>
            <Stack direction={['column', 'row']} spacing='50px' w={'100%'}>
                <Flex w={'360px'} h={'188px'} bg="#fff" borderRadius={'15px'}>
                    <Stack p={6}>
                        <Text fontSize={'20px'} fontWeight={400} >Overall Budget</Text>
                        <Text fontSize={'25px'} fontWeight={700} color={'#211F5C'}>$280,000,000,000</Text>
                        <Box h={5}></Box>
                        <Flex color={'#38A169'}>
                            <FiArrowUpRight fontSize={24} />
                            <Text as={'span'}> 9.5% from last month</Text>
                        </Flex>
                    </Stack>
                    <Spacer></Spacer>
                    <Image src={pattern} />
                </Flex>

                <Flex w={'360px'} h={'188px'} bg="#fff" borderRadius={'15px'}>
                    <Stack p={6}>
                        <Text fontSize={'20px'} fontWeight={400} >Overall Spending</Text>
                        <Text fontSize={'25px'} fontWeight={700} color={'#211F5C'}>$245,000,000,000</Text>
                        <Box h={5}></Box>
                        <Flex color={'#EE4223'}>
                            <FiArrowDownLeft fontSize={24} />
                            <Text as={'span'}> -5.4%  from last month</Text>
                        </Flex>
                    </Stack>
                    <Spacer></Spacer>
                    <Image src={pattern} />
                </Flex>
                <Flex w={'360px'} h={'188px'} bg="#fff" borderRadius={'15px'}>
                    <Stack p={6}>
                        <Text fontSize={'20px'} fontWeight={400} >Overall Margin</Text>
                        <Text fontSize={'25px'} fontWeight={700} color={'#211F5C'}>+$35,000,000,000</Text>
                        <Box h={5}></Box>
                        <Flex color={'#38A169'}>
                            <FiArrowUpRight fontSize={24} />
                            <Text as={'span'}> 4.3% from last month</Text>
                        </Flex>
                    </Stack>
                    <Spacer></Spacer>
                    <Image src={pattern} />
                </Flex>
            </Stack>
            <Box h={'20px'}></Box>
            <Stack direction={['column', 'row']} spacing='50px'>
                <Stack>
                    <Box w={'770px'} h={'458px'} bg={'red'} borderRadius={'5px'}></Box>
                    <Box h={10}></Box>

                    <Box overflowY={"auto"} bg={'#fff'} w={'770px'} borderRadius={'5px'}>
                        <Text p={5} fontSize={'20px'} fontWeight={700}>Recent Contracts</Text>
                        <Table size='sm' m={5}>
                            <Thead bg='#EEF3FF'>
                                <Tr>
                                    <Td fontStyle='normal' fontWeight='bold' fontSize='14px' color='#303030'>Title</Td>
                                    <Td fontStyle='normal' fontWeight='bold' fontSize='14px' color='#303030'>Vendor</Td>
                                    <Td fontStyle='normal' fontWeight='bold' fontSize='14px' color='#303030'>Total cost</Td>
                                    <Td fontStyle='normal' fontWeight='bold' fontSize='14px' color='#303030'>Delivery date</Td>
                                    <Td fontStyle='normal' fontWeight='bold' fontSize='14px' color='#303030'>Status</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {lt.map(single => (
                                    <>
                                        <Tr bg=' #FFFFFF'>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#303030'>100 tonnes of Grannite </Td>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#303030'><AvatarGroup spacing='1rem'>
                                                <Avatar size='sm' bg='teal.500' />
                                                <Text>Dewalt</Text>
                                            </AvatarGroup></Td>
                                            <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='14px' color='#303030'>$32,000</Td>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#303030'>02/11/2021</Td>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#38A169'>Completed</Td>
                                        </Tr>
                                        <Tr bg='#EEF3FF'>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#303030'>Granite and Rod Needed</Td>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#303030'><AvatarGroup spacing='1rem'>
                                                <Avatar size='sm' bg='teal.500' /><Text>Dewalt</Text>
                                            </AvatarGroup></Td>
                                            <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='14px' color='#303030'>$32,000</Td>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#303030'>02/11/2021</Td>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='14px' color='#F5862E'>In Progress</Td>
                                        </Tr>
                                    </>
                                ))}

                            </Tbody>
                        </Table>
                    </Box>

                </Stack>
                <Stack>
                    <Box w={'357px'} h={'369px'} bg={'blue'} borderRadius={'5px'}></Box>
                    <Box h={5}></Box>
                    <Box w={'357px'} bg={'#fff'} borderRadius={'5px'}>
                        <Text p={5} fontSize={'20px'} fontWeight={700}>Recent Contracts</Text>
                        <Table size='sm' m={5}>
                            <Tbody>
                                {
                                    lt2.map(single => (
                                        <>
                                            <Tr>
                                            <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'><AvatarGroup spacing='1rem'>
                                                <Avatar size='sm' bg='teal.500' />
                                                <Text>Dewalt</Text>
                                            </AvatarGroup></Td>
                                            <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='16px' color='#303030'>
                                                <Flex>
                                                    <AiFillStar color='#F5862E' />
                                                    <Text pl={3}>4.5</Text>
                                                </Flex>

                                            </Td>
                                            </Tr>
                                            
                                        </>
                                    ))
                                }

                            </Tbody>
                        </Table>
                    </Box>

                </Stack>

            </Stack>
        </DashboardWrapper>

    )
}
