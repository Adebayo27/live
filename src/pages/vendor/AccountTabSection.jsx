import React from 'react'
import DashboardWrapper from '../../layouts/dashboard';
import { Box, Avatar, Text, Stack, HStack, Textarea, CheckboxGroup, Checkbox } from '@chakra-ui/react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TabPills from './TabPills';


const AccountTabSection = () => {


  return (
    <Box>
      {/*company details starts */}

      <Stack spacing="30px" mt="5" direction={['column', 'row']} ml={5}>
        <Box mt="7" w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Logo
          </Text>

          <Text fontSize="12px" color="gray.500">
            Choose your company logo to be used across Livend Bulk.
          </Text>
        </Box>

        <Box>
          <Avatar src="/assets/images/Ellipse.png" w="88px" h="88px" />
        </Box>
      </Stack>

      {/* info starts */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Name
          </Text>
          <Text fontSize="12px" color="gray.500">
            Input your company's registered name
          </Text>
        </Box>

        <Box>
          <Text fontSize="16px" color="gray.500">Cutstruct Limited</Text>
          <Text fontSize="12px" color="gray.500">Contact support for editing</Text>
        </Box>
      </Stack>

      {/* User Id */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            User ID
          </Text>
          <Text fontSize="12px" color="gray.500">
            This is your unique id.
          </Text>
        </Box>

        <Box>
          <Text fontSize="16px" color="gray.500">RC435678</Text>
        </Box>
      </Stack>


      {/* Reg starts */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Registration
          </Text>
          <Text fontSize="12px" color="#303030">
            Input your company's registered number
          </Text>
        </Box>

        <Box >
          <Text fontSize="16px" color="gray.500">RC435678</Text>
          <Text fontSize="12px" color="gray.500" >Contact support for editing</Text>
        </Box>
      </Stack>

      {/* phone starts */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Phone Number
          </Text>
          <Text fontSize="12px" color="gray.500">
            Your mobile number
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '300px' }}>
          <Input
            label="Phone Number"
            placeholder="0811234454"
            size="lg"
            w={{ base: '85%', md: '214px' }}
          />
        </Box>
      </Stack>
      {/* phone ends */}

      {/* Company Size starts */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Size
          </Text>
          <Text fontSize="12px" color="gray.500">
            How big is your company?
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '300px' }}>
          <Select
            placeholder="Macro"
            color="gray.500"
            w={{ base: '85%', md: '308px' }}
          >

            <option>Micro</option>
            <option>Macro</option>

          </Select>
        </Box>
      </Stack>
      {/* company size ends */}

      {/* Address starts */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Address
          </Text>
          <Text fontSize="12px" color="gray.500">
            Input your Company's location
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '560px' }}>
          <Input
            label="Address"
            placeholder="National Library building, 720Degree Innovation Hub,Ake,Abeokuta"
            size="lg"
            w={{ base: '85%', md: '100%' }}
          />
        </Box>
      </Stack>
      {/* Address ends */}

      {/* Category starts */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Category
          </Text>
          <Text fontSize="12px" color="gray.500">
            Select all that apply
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '560px' }} color="gray.500">
          <CheckboxGroup >
            <Stack spacing={[3, 5]} direction={['column', 'row']} textAlign="left" mb={3} d="flex" justify={"space-between"}>
              <Checkbox width={["100%", "33%"]} value='aluminium'>Aluminium / Glass</Checkbox>
              <Checkbox width={["100%", "33%"]} value='brick_mansory'>Brick / Mansory</Checkbox>
              <Checkbox width={["100%", "33%"]} value='ceramic'>Ceramic</Checkbox>
            </Stack>
            <Stack spacing={[1, 5]} direction={['column', 'row']} mb={3} d="flex" justify={"space-between"}>
              <Checkbox width={["100%", "33%"]} value='concrete_plaster'>Concrete / Plasters</Checkbox>
              <Checkbox width={["100%", "33%"]} value='copper'>Copper</Checkbox>
              <Checkbox width={["100%", "33%"]} value='plumbering'>Plumber</Checkbox>
            </Stack>
            <Stack spacing={[1, 5]} direction={['column', 'row']} mb={3} d="flex" justify={"space-between"}>
              <Checkbox width={["100%", "33%"]} value='concrete_plaster'>Roofing</Checkbox>
              <Checkbox width={["100%", "33%"]} value='copper'>Steel</Checkbox>
              <Checkbox width={["100%", "33%"]} value='sand_stone'>Sand / Stone</Checkbox>
            </Stack>
            <Stack spacing={[1, 5]} direction={['column', 'row']} mb={3} d="flex" justify={"space-between"}>
              <Checkbox width={["100%", "33%"]} value='roofing'>Roofing</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
      </Stack>
      {/* Category ends */}


      {/* About starts */}
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            About Us
          </Text>
          <Text fontSize="12px" color="gray.500">
            Write a brief detailed info about your company
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '560px' }}>
          <Textarea w={{ base: '100%', md: '100%' }} height="192px" />
        </Box>
      </Stack>
      {/* about ends */}

      <HStack
        spacing="30px"
        mt="5"
        ml={{ base: 0, md: 5 }}
        mr={{ base: '4', md: 5 }}
        flexWrap="row-reverse"
      >
        <Box
          d={{ base: 'none', md: 'block' }}
          w={{ base: '100%', md: '300px' }}
        ></Box>
        <Button>Save Changes</Button>
      </HStack>

      {/* Bank Name Starts */}
      <Text
        textAlign="left"
        mt={5}
        pl={5}
        fontSize={{ base: '16px', md: '20px' }}
        fontWeight="500"
        color="gray.400"
      >
        Bank Account Details
      </Text>
      <Stack spacing="30px" mt={12} direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Bank
          </Text>
          <Text fontSize="12px" color="gray.500">
            Your company's bank
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '560px' }}>
          <Input
            label="Address"
            placeholder="Bank name"
            size="lg"
            w={{ base: '85%', md: '100%' }}
          />
        </Box>
      </Stack>
      {/* Bank Name ends */}


      {/* Account Name starts */}
      <Stack spacing="30px" mt={5} direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Account Name
          </Text>
          <Text fontSize="12px" color="gray.500">
            Input the account name
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '560px' }}>
          <Input
            label="Address"
            placeholder="Account Name"
            size="lg"
            w={{ base: '85%', md: '100%' }}
          />
        </Box>
      </Stack>
      {/* Account Name ends */}


      {/* Account Number starts */}
      <Stack spacing="30px" mt={5} direction={['column', 'row']} ml={5}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Account Number
          </Text>
          <Text fontSize="12px" color="gray.500">
            Input the account number
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '560px' }}>
          <Input
            label="Address"
            placeholder="Account Number"
            size="lg"
            w={{ base: '85%', md: '100%' }}
          />
          {/* Button  */}
          <Box mt={5}>
            <Button>Save Changes</Button>
          </Box>
        </Box>

      </Stack>
      {/* Account Number ends */}


    </Box>
  )
}

export default AccountTabSection;