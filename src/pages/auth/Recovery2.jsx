import React from 'react';
import { Box, Stack, Text, Button, Input, HStack } from '@chakra-ui/react';

const Recovery2 = () => {
  const [show, setShow] = React.useState(false);
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
            Reset Password
          </Text>

          <Stack spacing="30px" mt="7" direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                New Password
              </Text>
              <Text fontSize="12px" color="gray.500">
                Input your new password
              </Text>
            </Box>

            <Box>
              <Box>
                <Input type={show ? 'text' : 'password'} label="Old Password" />
              </Box>
            </Box>
          </Stack>
          {/* Email ends */}

          <Stack spacing="30px" mt="4" direction={['column', 'row']} ml={1}>
            <Box w={{ base: '100%', md: '248px' }}>
              <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                Confirm Password
              </Text>
              <Text fontSize="12px" color="gray.500">
                Confirm your new password
              </Text>
            </Box>

            <Box>
              <Box>
                <Input type={show ? 'text' : 'password'} label="New Password" />
              </Box>
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

            <Button colorScheme="orange" width="186px">
              Reset Password
            </Button>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Recovery2;
