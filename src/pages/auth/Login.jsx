import { Box, Stack, Text, Button, Input, HStack,useDisclosure, useToast} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { httpWithoutToken } from '../../services/queries';

const Login = () => {
  const history = useHistory()
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = React.useState('')
  const [passowrd, setPassword] = React.useState('')
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const toast = useToast()
  const handleLogin = async () => {
    setLoading(true)
    let data = {
      identifier: email, 
      password: passowrd
    }

    let response = await httpWithoutToken('auth/local', data)

    
    if (response && response !== undefined && response !== null){
      setLoading(true)
      localStorage.setItem('token', response.jwt)
      localStorage.setItem('user', JSON.stringify(response.user))
      localStorage.setItem('user_role', response.user.user_mode)
      history.push('/dashboard')

    }

  }

  return (
    <Box>
      <Stack spacing="30px" direction={['column', 'row']}>
        <Box
          zIndex="sticky"
          w="593px"
          color="#fff"
          bgColor="#211F5C"
          bgImage={'/assets/images/layer.png'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          h="100vh"
        >
          <Box p="24px" pb="0" ml="15%" mt={5}>
            <img src="/assets/images/livevend.png" w="88px" h="88px" />
          </Box>
        </Box>

        <Box
          w={{ base: '100%', md: 'auto' }}
          h={{ base: '100%', md: 'auto' }}
          p="20px"
        >
          <Text mt={5} color="#C0C0C1" fontSize="25px" fontWeight="bold">
            Login
          </Text>

          <Text fontSize="12px" mt={2}>
            Login into your Account
          </Text>

          <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Email
              </Text>
              <Text fontSize="12px" color="gray.500">
                Input your most used email
              </Text>
            </Box>

            <Box w={{ base: '100%', md: '308px' }}>
              <Input
                label="Email"
                placeholder="example@email.com"
                size="md"
                w={{ base: '85%', md: '308px' }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
          </Stack>
          {/* Email ends */}

          <Stack spacing="30px" mt={7} direction={['column', 'row']}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Password
              </Text>
              <Text fontSize="12px" color="gray.500">
                Create a uniques password
              </Text>
            </Box>

            <Box w={{ base: '100%', md: '308px' }}>
              <Input
                type={show ? 'text' : 'password'}
                w={{ base: '85%', md: '308px' }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </Stack>

          <HStack
            spacing="30px"
            mt="5"
            mb="5"
            ml={{ base: 0, md: -12 }}
            mr={{ base: '4', md: 5 }}
            flexWrap="row-reverse"
          >
            <Box
              d={{ base: 'none', md: 'block' }}
              w={{ base: '100%', md: '300px' }}
            ></Box>

            <Button colorScheme="orange" width="186px" onClick={()=>handleLogin()} isLoading={loading}>
              Login
            </Button>
          </HStack>

          
          <HStack
            spacing="30px"
            mt="5"
            mb="5"
            ml={{ base: 0, md: -12 }}
            mr={{ base: '4', md: 5 }}
            flexWrap="row-reverse"
          >
            <Box
              d={{ base: 'none', md: 'block' }}
              w={{ base: '100%', md: '300px' }}
            ></Box>

            <Box>
              <Text
                as="button"
                fontSize="12px"
                color="orange"
                onClick={onOpen}
                mb={3}
              >
               Forgot Password?
              </Text>
            </Box>
          </HStack>

          <Box mt={7}>
            <Text fontSize="20px" fontWeight="600" color="gray.500">
              Or Sign Up With
            </Text>
          </Box>
          <Stack
            spacing="20px"
            mt={7}
            direction={['column', 'row']}
            ml={1}
            mb={3}
          >
            <Box w={{ base: '100%', md: '220px' }} mb={7}>
              <Button
                leftIcon={<FaFacebookSquare size={22} />}
                colorScheme="#606060"
                variant="outline"
                width="220px"
              >
                Facebook
              </Button>
            </Box>

            <Box>
              <Button
                leftIcon={<FcGoogle size={22} />}
                colorScheme="#606060"
                variant="outline"
                width="220px"
              >
                Google
              </Button>
            </Box>
          </Stack>

        <Box mb={7}>
            <Text fontSize='12px'>
              <Text as ='span' fontWeight='bold' color='#000'>Note:</Text>  Third pary authentication doesn’t work with coporate organisation account</Text>
        </Box>

          <Box ml={1} mb={7}>
          <Text>Aready have an account? <Text as='span' color='orange'>Sign Up</Text> </Text>
          </Box>
       

        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
