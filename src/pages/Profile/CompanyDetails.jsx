import React from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import { Box, Avatar, Text, Stack, HStack, Textarea } from '@chakra-ui/react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';




const Company = () => {


  return (
    < >
      <Box>
      <Text color="#E5E5E5" fontSize="25px" ml={1}>
         Company's Details
         </Text>
       {/*company details starts */}
      
        <Stack spacing="30px" mt="5" direction={['column', 'row']} ml={1}>
          <Box mt="6" w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              Logo
            </Text>

            <Text fontSize="12px" color="gray.500">
              Choose your company logo to be used across Livend Bulk.
            </Text>
          </Box>

          <Box>
            <Avatar src="/assets/images/avatar.png" w="88px" h="88px" />
          </Box>
        </Stack>

        {/* info starts */}
        <Stack spacing="30px" mt="6" direction={['column', 'row']} ml={1}>
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
        {/* ID starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>

          <Box w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              User ID
            </Text>
            <Text fontSize="12px" color="gray.500">
              This is your unique ID
            </Text>
          </Box>

          <Box fontSize="16px" color="gray.500">
            123453
          </Box>
        </Stack>

        {/* Reg starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
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

        {/* country select starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
          <Box w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              Country
            </Text>
            <Text fontSize="12px" color="gray.500">
              Choose your country of operation
            </Text>
          </Box>

          <Box w={{ base: '100%', md: '300px' }}>
            <Select
              id="country"
              placeholder="Nigeria"
              color="gray.500"
              w={{ base: '85%', md: '308px' }}
            >
              <option>United Arab Emirates</option>
              <option>Ghana</option>
            </Select>
          </Box>
        </Stack>
        {/* country select starts */}

        {/* state select starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
          <Box w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              State
            </Text>
            <Text fontSize="12px" color="gray.500">
              Choose your state of operation
            </Text>
          </Box>

          <Box w={{ base: '100%', md: '300px' }}>
            <Select
              id="country"
              placeholder="Lagos"
              color="gray.500"
              w={{ base: '85%', md: '308px' }}
            >
              <option>Ogba</option>
              <option>Yaba</option>
            </Select>
          </Box>
        </Stack>
        {/* state select ends */}

        {/* phone starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
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

        {/* Address starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
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
              w={{ base: '85%', md: '1136px' }}
            />
          </Box>
        </Stack>
        {/* Address ends */}

        {/* Category starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
          <Box w={{ base: '100%', md: '300px' }}>
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

        {/* About starts */}
        <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
          <Box w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              About Us
            </Text>
            <Text fontSize="12px" color="gray.500">
              Write a brief detailed info about your company
            </Text>
          </Box>

          <Box w={{ base: '100%', md: '560px' }}>
            <Textarea w={{ base: '100%', md: '566px' }} height="192px" />
          </Box>
        </Stack>
        {/* about ends */}

        <HStack
          spacing="30px"
          mt="5"
          ml={{ base: 0, md: 1 }}
          mr={{ base: '4', md: 5 }}
          flexWrap="row-reverse"
        >
          <Box
            d={{ base: 'none', md: 'block' }}
            w={{ base: '100%', md: '300px' }}
          ></Box>
          <Button>Save Changes</Button>
        </HStack>
      </Box>
    </>
  );
};

export default Company;
