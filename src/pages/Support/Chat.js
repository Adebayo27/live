import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Box,
    Divider,
    Flex,
    SimpleGrid,
    GridItem,
    Avatar,
    Text,
    HStack,
    Spacer,
    AvatarGroup
} from '@chakra-ui/react'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { BiSend } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import Logo from '../../components/Logo';




export default function Chat({ isOpen, onOpen, onClose }) {

    return (
        <Box >
            <Popover >
                <PopoverTrigger>
                    <Button>Start Live Chat</Button>
                </PopoverTrigger>
                <PopoverContent mx={{ base: 0, md: 770 }} mt={100} bg='white' boxShadow={{ base: 'md', md: 'lg' }} p={{ base: '1', md: '2' }} rounded='md' bg='white' >
                    <PopoverArrow />
                    <PopoverCloseButton />

                    <PopoverBody>
                        <Flex mb={4} alignItems='center' mx={36} mt={-3} w='1%' justifyContent='center'>
                            <Box size="5px" pb="0">
                                <Logo />
                            </Box>
                            {/* <Spacer/> */}
                            <AvatarGroup size='sm' max={4} mx={-2}>
                                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                {/* <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' /> */}
                                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />

                            </AvatarGroup>
                        </Flex>
                        <Box>

                            <Flex mb={4} alignItems='center'>
                                <Avatar size={'sm'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' ></Avatar>
                                <Text mx={{ base: 1, md: 3 }}>Toyin </Text>
                            </Flex>
                            <Box>
                                <Divider></Divider>
                                <Flex direction='column' mt={3} alignItems={'flex-start'} justifyContent='flex-start' >

                                    <HStack>
                                        <Avatar size={'sm'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' ></Avatar>

                                        <Text>Toyin 20 Sep 20</Text>
                                    </HStack>
                                    <Text >I will give some discount</Text>


                                </Flex>

                                <Flex direction='column' mt={3} alignItems={'flex-end'} justifyContent='flex-end' >

                                    <HStack>

                                        <Text>Toyin 20 Sep 20</Text>

                                        <Avatar size={'sm'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' ></Avatar>
                                    </HStack>
                                    <Text >I will give some discount if wanted</Text>


                                </Flex>
                                <Flex direction='column' mt={3} alignItems={'flex-start'} justifyContent='flex-start' >

                                    <HStack>
                                        <Avatar size={'sm'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' ></Avatar>

                                        <Text>Toyin 20 Sep 20</Text>
                                    </HStack>
                                    <Text >I will give some discount</Text>


                                </Flex>

                                <Flex direction='column' mt={3} alignItems={'flex-end'} justifyContent='flex-end' >

                                    <HStack>

                                        <Text>Toyin 20 Sep 20</Text>

                                        <Avatar size={'sm'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' ></Avatar>
                                    </HStack>
                                    <Text >I will give some discount if wanted</Text>


                                </Flex>

                            </Box>

                            <Input rightIcon={<RiSendPlane2Fill />} ></Input>
                        </Box>

                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
}