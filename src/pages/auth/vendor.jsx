import React from 'react'
import {
  Box, Center, Avatar, Stack, Flex, Text, Link,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Image,
  Spacer,
} from '@chakra-ui/react';
import Logo from '../../components/Logo';
import Emoji from '../../assets/emoji.png'
import Lg from '../../assets/frame.png'
import Input from '../../components/Input';
import Button from '../../components/Button';
// import Lg from '../../logo.svg'
import { FaEye } from 'react-icons/fa';
import {useHistory} from 'react-router-dom'
export default function AuthVendor() {
  const history = useHistory()
  return (
    <Box as="section" bg={'background'} minH="100vh" overflowX={'hidden'} color={'#fff'}>
      <Stack direction={['column', 'row']}>
        <Box w={'40%'} h={'100vh'} bg={'#211F5C'} bgImage={'/assets/images/layer.png'} display={{ base: 'none', md: 'block' }} mr={0}>
          <Stack>
            <Box px="48px" py={'32px'} pb="0">
              <Image src={Lg} alt="" />
            </Box>
            <Box h={20}></Box>
            <Box px={12}>
              <Flex alignItems={'center'}>
                <Image src={Emoji} alt="" />
                <Box w={5}></Box>
                <Box>Gain Visibility</Box>
              </Flex>
              <Box h={8}></Box>
              <Flex alignItems={'center'}>
                <Image src={Emoji} alt="" />
                <Box w={5}></Box>
                <Box>User Accountability</Box>
              </Flex>
              <Box h={8}></Box>
              <Flex alignItems={'center'}>
                <Image src={Emoji} alt="" />
                <Box w={5}></Box>
                <Box>Payment Assurance</Box>
              </Flex>
              <Box h={8}></Box>
              <Flex alignItems={'center'}>
                <Image src={Emoji} alt="" />
                <Box w={5}></Box>
                <Box>Financing  Options</Box>
              </Flex>
            </Box>

          </Stack>
        </Box>
        <Box bg={'#fff'} w={{base:'100%'}} h={'100vh'} color={'#858383'} ml={'0px'}>
          <Stack p={10}>
            <Box>
              <Text color={'#C0C0C1'} fontSize={'25px'} fontWeight={700}>Create an Account as a Vendor</Text>
            </Box>
            <Box h={10}></Box>
            <Stack spacing="30px" mt={'50px'} direction={['column', 'row']}>
              <Box w={{ base: '100%', md: '300px' }}>
                <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                  Email
                </Text>
                <Text fontSize="12px" color="gray.500">
                  Input your company's official email
                </Text>
              </Box>
              <Box mt={5} w={'45%'} spacing="30px" direction={['column', 'row']}>
                <Input placeholder="name@company.com" fontSize="20px" size='lg' />
              </Box>
            </Stack>
            <Box h={5}></Box>
            <Stack spacing="30px" mt={'50px'} direction={['column', 'row']}>
              <Box w={{ base: '100%', md: '300px' }}>
                <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                  Password
                </Text>
                <Text fontSize="12px" color="gray.500">
                  Create a uniques password for your company
                </Text>
              </Box>
              <Box mt={5} w={'45%'} spacing="30px" direction={['column', 'row']}>
                <Input placeholder="Password" fontSize="20px" size='lg' rightIcon={<FaEye/>} />
              </Box>
            </Stack>
            <Box h={5}></Box>
            <Stack spacing="30px" mt={'50px'} direction={['column', 'row']}>
              <Box w={{ base: '100%', md: '300px' }}>
              </Box>
              <Button onClick={()=>history.push('/signup-trial')}>
                Continue
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
