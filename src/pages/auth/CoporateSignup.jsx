import {
  Box,
  Stack,
  Text,
  Input,
  Radio,
  RadioGroup,
  HStack,
  VStack,
  InputGroup,
  InputLeftAddon,
  Select,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Side from './Side';
// import Button from '../../components/Button';

const CoporateSignup = () => {

  const [value, setValue] = React.useState('1');
  const [show, setShow] = React.useState(false);

  return (
    <Box >
      <Stack spacing="30px" direction={['column', 'row']}>

        <Side />
        <Box w={{ base: '100%', md: 'auto' }} h={{ base: '100%', md: 'auto' }} p='20px'>
          <Text mt={5} color="#C0C0C1" fontSize="25px" fontweight="bold">
            Sign Up For 4 Weeks Free Trial
          </Text>

          <Text fontSize="12px" mt={2}>
            Subscribe for as low as $100 annually afterward to keep exploring
            our features
          </Text>

          {/* name starts */}
          <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Name
              </Text>
              <Text fontSize="12px" color="gray.500">
                Input your full name
              </Text>
            </Box>

            <Stack mt={5} spacing="30px" direction={['column', 'row']}>
              <Input placeholder="First Name" w="140px" fontSize="16px" />

              <Input placeholder="Last Name" w="140px" fontSize="16px" />
            </Stack>
          </Stack>

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
                placeholder="you@youremail.com"
                size="md"
                w={{ base: '85%', md: '308px' }}
              />
            </Box>
          </Stack>
          {/* Email ends */}


          <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Phone Number
              </Text>
              <Text fontSize="12px" color="gray.500">
                Input the procurement dept phone number
              </Text>
            </Box>

            <Box w={{ base: '100%', md: '308px' }} ml={-12}>

              <InputGroup>
                <InputLeftAddon>
                  <VStack>
                    <Select placeholder="+234" size="xs">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </VStack>
                </InputLeftAddon>
                <Input type="tel" placeholder="phone number" />
              </InputGroup>
            </Box>
          </Stack>


          <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Are you Registered?
              </Text>
              <Text fontSize="12px" color="gray.500">
                Is your company registered?
              </Text>
            </Box>

            <RadioGroup onChange={setValue} value={value} color="blue.900">
              <Box>
                <Stack direction={['column', 'row']}>
                  <Radio value="1">Yes</Radio>
                  <Radio value="2">No</Radio>
                </Stack>
              </Box>
            </RadioGroup>
          </Stack>
          {/* finance ends */}

          <Stack spacing="30px" mt={7} direction={['column', 'row']}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Registration Number
              </Text>
              <Text fontSize="12px" color="gray.500">
                Input your company's registered number
              </Text>
            </Box>

            <Box w={{ base: '100%', md: '308px' }}>
              <Input
                placeholder='RC 234555557'
                w={{ base: '85%', md: '308px' }}
              />
            </Box>
          </Stack>


          <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Need Finance?
              </Text>
              <Text fontSize="12px" color="gray.500">
                Do you need financial assistance?
              </Text>
            </Box>

            <RadioGroup onChange={setValue} value={value} color="blue.900">
              <Box>
                <Stack direction={['column', 'row']}>
                  <Radio value="1">Yes</Radio>
                  <Radio value="2">No</Radio>
                </Stack>
              </Box>
            </RadioGroup>
          </Stack>
          {/* finance ends */}

          {/* Category starts */}
          <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Category
              </Text>
              <Text fontSize="12px" color="gray.500">
                Choose your industry category
              </Text>
            </Box>

            <Box w={{ base: '100%', md: '300px' }}>
              <Select
                placeholder="Building Construction"
                color="gray.500"
                w={{ base: '85%', md: '308px' }}
              >

                <option >Infrastructure Construction</option>
                <option>Industrial Construction</option>

              </Select>
            </Box>
          </Stack>
          {/* category ends */}

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

            <Button colorScheme='orange' width='186px'>Start Free Trial</Button>
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
            <Text w={{ base: '100%', md: '272px' }} fontSize="12px">
              By signing up, you have agreed to{' '}

              <Text as='span' color="orange"> our terms</Text> and {' '}
              <Text as='span' color="orange">privacy policy</Text>
            </Text>
          </HStack>


          <Box ml={1} mb={7} >
            <Text>Aready have an account? <Text as='span' color='orange'>Login</Text> </Text>
          </Box>
        </Box>


      </Stack>
    </Box>
  );
};

export default CoporateSignup;

