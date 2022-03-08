import React, {useState} from 'react'
import DashboardWrapper from '../../layouts/dashboard';
import { Box, Avatar, Text,
  
    Stack,
   HStack,
   Textarea,
   Alert,
   AlertIcon,
   CloseButton,
   AlertDescription 
  } from '@chakra-ui/react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';





const CompanyProfile = () => {
  const [alert, setAlert] = useState(false);
  return (
  
  
   <>
      <Text color="#E5E5E5" fontSize="25px" ml={1}>
         Company's Details
    </Text>
      {/*company details starts */}

      <Stack spacing="30px" mt="5" direction={['column', 'row']} ml={1}>
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
      <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
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
        mr={{ base: 0, md: 5 }}
        flexWrap="row-reverse"
      >
        <Box
          d={{ base: 'none', md: 'block' }}
          w={{ base: '100%', md: '300px' }}
        ></Box>
        <Button onClick={()=>setAlert(!alert)}>Save Changes</Button>
        </HStack>

        <Box mt={6} mb={6} ml={{base:'4%' ,md:'29%'}}>
        {
					alert?
				<Alert bg={'#c6f6d5'} status='success' w={{base:'100%', md:'308px' }} rounded={6}>
				<AlertIcon color='green'  fontWeight='400'/>
				<AlertDescription color="white" fontSize='16px'>Changes have been saved.</AlertDescription>
				<CloseButton position='absolute' right='0px' top='8px' onClick={()=>setAlert(!alert)}/>
				</Alert>: ''
				}
     </Box>
  </>
  
  )
}

export default CompanyProfile