import { Avatar, AvatarGroup, Box, Heading, HStack, InputGroup, Spacer, Stack, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react';
import React from 'react'
import Input from '../../components/Input';
import Select from '../../components/Select';
import DashboardWrapper from '../../layouts/dashboard';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { RiArrowUpDownLine } from 'react-icons/ri';
function Contract() {
    return (
        <DashboardWrapper pageTitle='Contracts'>
            <Box p={5} bg='#FFFFFF' mt={5}>
                <Stack mb='7' direction={['column', 'row']}>
                    <Box p='2'>
                        <Heading fontStyle='normal' fontWeight='bold' fontSize='25px' color='#C0C0C1'>Your Contracts</Heading>
                    </Box>
                    <Spacer />
                    <HStack>
                        <InputGroup w='305px' border='1px solid' borderRadius='8px'>
                            <Input border='1px solid black' placeholder='Search for contracts, clients' rightIcon={<BsSearch />}></Input>
                        </InputGroup>
                        <InputGroup border='1px solid' borderRadius='8px' ml='10' w='179px' d={{ base: 'none', md: 'flex' }} >
                            <Select placeholder='Sort by'>
                                <option bg='#A2CEF9' borderRadius='8px 8px 0px 0px' value='none'>None</option>
                                <option value='Delivery Date (Asc)'>Delivery Date (Asc)</option>
                                <option value='Delivery Date (Desc)'>Delivery Date (Desc)</option>
                            </Select>
                        </InputGroup>
                        <InputGroup d={{ base: 'flex', md: 'none' }} w='15%' >
                            <Input border='1px solid black' rightIcon={<RiArrowUpDownLine size='xs'/>}></Input>
                        </InputGroup>

                    </HStack>

                </Stack>
                <Box overflowY={"auto"}>
                    <Table mb={6} size='md'>
                        <Thead bg='#EEF3FF'>
                            <Tr>
                                <Td fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>Title</Td>
                                <Td fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>By</Td>
                                <Td fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>Vendor</Td>
                                <Td fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>Total cost</Td>
                                <Td fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>Delivery date</Td>
                                <Td fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>Status</Td>
                                <Td fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>See Details</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr bg=' #FFFFFF'>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Granite and Rod Needed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Debbie George</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'><AvatarGroup spacing='1rem'>
                                    <Avatar size='sm' bg='teal.500' />
                                    <Text>Dewalt Group</Text>
                                </AvatarGroup></Td>
                                <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='16px' color='#303030'>$32,000</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>02/11/2021</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#38A169'>Completed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>
                                    <Link as={Link} to={'/contracts/details'}>
                                        <FaEye w='50px' />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr bg='#EEF3FF'>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Granite and Rod Needed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Debbie George</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'><AvatarGroup spacing='1rem'>
                                    <Avatar size='sm' bg='teal.500' /><Text>Dewalt Group</Text>
                                </AvatarGroup></Td>
                                <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='16px' color='#303030'>$32,000</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>02/11/2021</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#F5862E'>In Progress</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>
                                    <Link as={Link} to={'/contracts/details'}>
                                        <FaEye w='50px' />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr bg=' #FFFFFF'>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Granite and Rod Needed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Debbie George</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'><AvatarGroup spacing='1rem'>
                                    <Avatar size='sm' bg='teal.500' /><Text>Dewalt Group</Text>
                                </AvatarGroup></Td>
                                <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='16px' color='#303030'>$32,000</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>02/11/2021</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#38A169'>Completed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>
                                    <Link as={Link} to={'/contracts/details'}>
                                        <FaEye w='50px' />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr bg='#EEF3FF'>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Granite and Rod Needed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Debbie George</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'><AvatarGroup spacing='1rem'>
                                    <Avatar size='sm' bg='teal.500' /><Text>Dewalt Group</Text>
                                </AvatarGroup></Td>
                                <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='16px' color='#303030'>$32,000</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>02/11/2021</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#EE4223'>Reported</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>
                                    <Link as={Link} to={'/contracts/details'}>
                                        <FaEye w='50px' />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr bg=' #FFFFFF'>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Granite and Rod Needed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Debbie George</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'><AvatarGroup spacing='1rem'>
                                    <Avatar size='sm' bg='teal.500' /><Text>Dewalt Group</Text>
                                </AvatarGroup></Td>
                                <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='16px' color='#303030'>$32,000</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>02/11/2021</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#38A169'>Completed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>
                                    <Link as={Link} to={'/contracts/details'}>
                                        <FaEye w='50px' />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr bg='#EEF3FF'>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Granite and Rod Needed</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Debbie George</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'><AvatarGroup spacing='1rem'>
                                    <Avatar size='sm' bg='teal.500' /><Text>Dewalt Group</Text>
                                </AvatarGroup></Td>
                                <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize='16px' color='#303030'>$32,000</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>02/11/2021</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#F5862E'>In Progress</Td>
                                <Td fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>
                                    <Link as={Link} to={'/contracts/details'}>
                                        <FaEye w='50px' />
                                    </Link>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
                <HStack justifyContent='right'>
                    <Box><AiOutlineLeft /></Box>
                    <Text >1 of 3</Text>
                    <Box><AiOutlineRight /></Box>
                </HStack>
            </Box >
        </DashboardWrapper>
    )
}

export default Contract