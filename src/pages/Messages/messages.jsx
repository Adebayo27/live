import React, { useEffect } from 'react'
import DashboardWrapper from '../../layouts/dashboard'
import { Flex, Box, Stack, Select, Spacer, Table, Tbody, Td, Circle, Tr, Avatar, AvatarGroup, Text, InputGroup, Input, InputLeftAddon, InputRightAddon } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { VscSmiley } from 'react-icons/vsc'
import { MdAttachFile, MdSend } from 'react-icons/md'
import { AiFillSend, AiFillFile, AiFillDelete } from 'react-icons/ai'
export default function Messages() {
    const lt2 = [1, 2, 3, 4, 5, 6, 7]
    const [isSearch, setIsSearch] = React.useState(false)
    const scrollToBottom = () => {
        const chat = document.getElementById("chat");
        chat.scrollTop = chat.scrollHeight;
    };
    const messages = [
        {
            name: "Ade",
            message: "Hello",
            date: "Sept 20,  7:43",
            sender: "1",
            type: "text"
        },
        {
            name: "Ade",
            message: "Hello",
            date: "Sept 20,  7:43",
            sender: "you",
            type: "text"
        },
        {
            name: "Ade",
            message: "Hello",
            date: "Sept 20,  7:43",
            sender: "1",
            type: "text"
        },
        {
            name: "Ade",
            message: "Hello",
            date: "Sept 20,  7:43",
            sender: "you",
            type: "text"
        },
        {
            name: "Ade",
            message: "Hello",
            date: "Sept 20,  7:43",
            sender: "1",
            type: "text"
        },
        {
            name: "Ade",
            message: "Hello",
            date: "Sept 20,  7:43",
            sender: "you",
            type: "file"
        },
        {
            name: "Ade",
            message: "Hello",
            date: "Sept 20,  7:43",
            sender: "1",
            type: "text"
        },

    ]

    useEffect(()=>{
        scrollToBottom()
    }, [])
    return (
        <DashboardWrapper pageTitle='Messages' background={{base:'#fff' ,md:'#EEF3FF'}}>
            <Stack direction={['column', 'row']} spacing='20px' w={'100%'}>
                <Box w={{base: '330px', md: '357px'}} minH={'82vh'} bg={'#fff'}>
                    <Stack>
                        <Box h={'70px'} px={{base: 1, md: 4}} py={5} borderBottom={'1px solid #E7E8E9'}>
                            {
                                isSearch ?
                                    <Flex>
                                        <Box w={'250px'}>
                                            <InputGroup size='lg' border={'1px solid #606060'} borderRadius={'5px'}>
                                                <Input placeholder='Write your message' border={0} />
                                                <InputRightAddon as={'button'} children={<FiSearch />} bg={'#fff'} border={0} />
                                            </InputGroup>
                                        </Box>
                                        <Spacer></Spacer>
                                        <Text as='button' onClick={() => setIsSearch(!isSearch)}>Close</Text>
                                    </Flex> :
                                    <Flex>
                                        <Select w={'200px'} border={0}>
                                            <option value="">All conversation</option>
                                            <option value="">Unread</option>
                                            <option value="">Starred</option>
                                        </Select>
                                        <Spacer></Spacer>
                                        <Box as='button' onClick={() => setIsSearch(!isSearch)}><FiSearch /></Box>
                                    </Flex>
                            }


                        </Box>
                        <Box maxH={'70vh'} overflowY={'auto'} className='example'>
                            <Table size='sm' type={'unstyled'}>
                                <Tbody>
                                    {
                                        lt2.map(single => (
                                            <>
                                                <Tr p={{base:1,md:2}}>
                                                    <Td fontStyle='normal' fontWeight='normal' fontSize={{base:'14px' ,md:'16px'}} color='#303030'>
                                                        <AvatarGroup spacing='1rem'>
                                                            <Avatar size='md' bg='teal.500' />
                                                            <Text fontSize={{base:'14px' ,md:'16px'}} fontWeight={700}>Builder First Source <br /><Text fontWeight={400} pt={2}>I will give you some dis..</Text></Text>
                                                        </AvatarGroup>
                                                    </Td>
                                                    <Td fontStyle='normal' fontFamily='BR Firma' fontWeight='normal' fontSize={{base:'14px' ,md:'16px'}} color='#303030'>
                                                        <Stack>
                                                            <Text>2 wks</Text>
                                                            <Circle size='20px' display={{base:'none', md: 'block'}} bg='#211F5C' color='white' pl={1}>4</Circle>
                                                        </Stack>

                                                    </Td>
                                                </Tr>

                                            </>
                                        ))
                                    }

                                </Tbody>
                            </Table>
                        </Box>
                        
                    </Stack>
                </Box>
                <Box w={'747px'} minH={'82vh'} bg={'white'}>
                    <Box h={'70px'} px={4} py={3} borderBottom={'1px solid #E7E8E9'}>
                        <Stack>
                            <Text fontSize={'16px'} fontWeight={700}>Builders First Source</Text>
                            <Text fontSize={'16px'} fontWeight={400}>Last seen 2 hours ago</Text>
                        </Stack>
                    </Box>
                    <Box p={3} maxH={'60vh'} overflowY={'auto'} id='chat'>
                        {
                            messages.map(m => {
                                if (m.sender == 'you') {
                                    return <Flex mb={5}>
                                        <Spacer display={{base: 'none', md: 'block', lg: 'block'}}></Spacer>
                                        <AvatarGroup spacing='1rem'>
                                            <Text fontSize={'16px'} fontWeight={700} textAlign={'right'}>
                                                <Text fontWeight={400} display={{base: 'none', md: 'block'}} as="span" fontSize={'12px'}>Sept 20,  7:43 </Text>
                                                You <br />
                                                <Text fontWeight={400} pt={2}>I will give you some discount</Text>
                                            </Text>
                                            <Avatar size='md' bg='teal.500' />
                                        </AvatarGroup>
                                    </Flex>
                                } else {
                                    return <Flex mb={5}>
                                        <AvatarGroup spacing='1rem'>
                                            <Avatar size='md' bg='teal.500' />
                                            <Text fontSize={'16px'} fontWeight={700}>
                                                Builder First Source
                                                <Text fontWeight={400} as="span" fontSize={'12px'}> Sept 20,  7:43</Text> <br />
                                                <Text fontWeight={400} pt={2}>I will give you some discount</Text>
                                            </Text>
                                        </AvatarGroup>
                                    </Flex>
                                }
                            })
                        }
                        <Flex>
                            <Spacer></Spacer>
                            <Flex>
                                <AiFillFile fontSize={'40px'}/>
                                <Text>File name.jpg <br /> 7.68 MB</Text>
                                <Box as='button' p={3}><AiFillDelete/></Box>
                                
                            </Flex>
                        </Flex>
                    </Box>
                    <Box px={{base: 1, md: 3}} py={{base: 1, md: 3}}>
                        <Text fontStyle={'italic'} fontSize={'16px'} >Builders First source is typing...</Text>
                        <InputGroup border={'1px solid #606060'} borderRadius={'5px'}>
                            <Input placeholder='Write your message' border={0} w={{base: '33%', md: '100%', lg: '100%'}} />
                            <InputRightAddon as={'button'} children={<VscSmiley />} bg={'#fff'} border={0} p={1}/>
                            <InputRightAddon as={'button'} children={<MdAttachFile />} bg={'#fff'} border={0} pr={2} pl={1} />
                            <InputRightAddon as={'button'} children={<MdSend />} bg={'#F5862E'} color={'#fff'} border={0} />
                        </InputGroup>
                    </Box>
                </Box>
            </Stack>
        </DashboardWrapper>
    )
}
