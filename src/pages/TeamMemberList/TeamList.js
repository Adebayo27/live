import React from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import {
    Box,
    Flex,
    SimpleGrid,
    Spacer,
    Table,
    Th,
    Tr,
    Tbody,
    Thead,
    Td,
    Heading,
    useDisclosure
} from '@chakra-ui/react';
import Input from '../../components/Input';
import { FiSearch } from "react-icons/fi";
import Button from '../../components/Button';
import { BsPlus } from "react-icons/bs";
import AddMember from './AddMember';
import MenuItemList from './MenuItemList';

function TeamList() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <DashboardWrapper pageTitle="Team Member">
            <Box h={'full'} >
                <AddMember isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                <Flex alignItems={'center'} direction={{base: 'column', md:'row'}} p={{base: 3, md: 5}}>

                    <Heading mt={{base: -5, md: ''}} size='lg' color="#C0C0C1" >
                        Team Member
                    </Heading>
                    <Spacer />

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt={{ base: 4, md: '' }} mb={{ base: 5, md: '' }}>
                        <Input 
                            placeholder={'Search team member, clients'}
                            rightIcon={<FiSearch  size={'20px'} />}
                        
                        />
                        <Button onClick={onOpen} > <BsPlus/> Add Member</Button>
                    </SimpleGrid>
                </Flex>

                <Box overflowY={'auto'} p={{base: 0, md: 5}}>

                    <Table variant="striped" color="background">
                        {/* <TableCaption placement="top">

                        </TableCaption> */}
                        <Thead>
                            <Tr>
                                <Th pl="4px">Name</Th>
                                <Th pl="4px">Email</Th>
                                <Th pl="4px">Role</Th>
                                <Th pl="4px">Status</Th>
                                <Th pl="4px">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td
                                    color="#303030"
                                    pl="4px"
                                    fontSize="16px"
                                    fontWeight="normal"
                                >
                                    Gideon Godwin
                                </Td>
                                <Td color="#303030" pl="4px">
                                you@gmail.com
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Team Member
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Active
                                </Td>
                                <Td color="#303030" pl="4px">
                                
                                <MenuItemList></MenuItemList>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    color="#303030"
                                    pl="4px"
                                    fontSize="16px"
                                    fontWeight="normal"
                                >
                                    Gideon Godwin
                                </Td>
                                <Td color="#303030" pl="4px">
                                    you@gmail.com
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Team Member
                                </Td>
                                <Td color=" #EE4223" pl="4px">
                                    Inactive
                                </Td>
                                <Td color= "#303030" pl="4px">
                                
                                <MenuItemList></MenuItemList>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    color="#303030"
                                    pl="4px"
                                    fontSize="16px"
                                    fontWeight="normal"
                                >
                                    Gideon Godwin
                                </Td>
                                <Td color="#303030" pl="4px">
                                    you@gmail.com
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Team Member
                                </Td>
                                <Td color="#EE4223" pl="4px">
                                   Disable
                                </Td>
                                <Td color="#303030" pl="4px">
                                
                                <MenuItemList></MenuItemList>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    color="#303030"
                                    pl="4px"
                                    fontSize="16px"
                                    fontWeight="normal"
                                >
                                    IGideon Godwin
                                </Td>
                                <Td color="#303030" pl="4px">
                                    you@gmail.com
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Team Member
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Active
                                </Td>
                                <Td color="#303030" pl="4px">
                                
                                <MenuItemList></MenuItemList>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    color="#303030"
                                    pl="4px"
                                    fontSize="16px"
                                    fontWeight="normal"
                                >
                                    Gideon Godwin
                                </Td>
                                <Td color="#303030" pl="4px">
                                    you@gmail.com
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Team Member
                                </Td>
                                <Td color="#303030" pl="4px">
                                    Active
                                </Td>
                                <Td color="#303030" pl="4px">
                                
                                <MenuItemList></MenuItemList>
                                </Td>
                            </Tr>


                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </DashboardWrapper>
    );
}

export default TeamList;