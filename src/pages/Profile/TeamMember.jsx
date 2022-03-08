import React from 'react';
import { Box, Avatar, Text, Stack, HStack } from '@chakra-ui/react';
import Button from '../../components/Button';
import Input from '../../components/Input';


const TeamMember = () => {
  return (
    <>
      <Box>
        {/*user details starts */}

        <Stack spacing="30px" mt="6" direction={['column', 'row']} ml={1}>
          <Box  w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              Profile Picture
            </Text>
            <Text fontSize="12px" color="gray.500">
              Choose a picture that will be used across Livend Bulk.
            </Text>
          </Box>

          <Box>
            <Avatar src="/assets/images/girl.png" w="88px" h="88px" />
          </Box>
        </Stack>

        {/* name starts */}
        <Stack spacing="30px" mt="6" direction={['column', 'row']} ml={1}>
          <Box w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              Full Name
            </Text>
            <Text fontSize="12px" color="gray.500">
              Input your company's registered name
            </Text>
          </Box>

          <Stack mt={5} spacing="30px" direction={['column', 'row']}>
            <Input
              label="First Name"
              placeholder="Gideon"
              size="md"
              fontSize="16px"
            />

            <Input
              label="Last Name"
              placeholder="Ogunkola"
              size="md"
              fontSize="16px"
            />
          </Stack>
        </Stack>
        {/* name ends */}

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
              size="md"
              w={{ base: '85%', md: '214px' }}
            />
          </Box>
        </Stack>
        {/* phone ends */}

          {/* Email starts */}
          <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
          <Box w={{ base: '100%', md: '300px' }}>
            <Text fontWeight={'bold'} fontSize="16px" color="#303030">
              Email
            </Text>
          </Box>

          <Box w={{ base: '100%', md: '300px' }}>
            <Input
              label="Email"
              placeholder="you@youremail.com"
              size="md"
              w={{ base: '85%', md: '214px' }}
            />
          </Box>
        </Stack>
        {/* Email ends */}

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
          <Button>Save Changes</Button>
        </HStack>
      </Box>
    </>
  );
};

export default TeamMember;
