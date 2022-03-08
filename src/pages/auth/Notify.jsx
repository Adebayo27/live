import React, {useState} from 'react'
import Side from './Side';
import { Box, Text,
  
    Stack,
   Alert,
   AlertIcon,
   CloseButton,
   AlertDescription 
  } from '@chakra-ui/react';

const Notify = () => {

    const [alert, setAlert] = useState(false);

  return (
    <Box>
      <Stack spacing="30px" direction={['column', 'row']}>
        <Side />
        <Box
          w={{ base: '100%', md: 'auto' }}
          h={{ base: '100%', md: '100vh' }}
        >
            <Text mt={5} color="#C0C0C1" fontSize="25px" fontWeight="bold">
            Activate Your Email
          </Text>

          <Text fontSize="12px" mt={2}>
          A link has been sent to your email for activation. Go to your email to continue
          </Text>
        </Box>
      </Stack>

      <Box mt={6} mb={6} ml={{ base: '4%', md: '29%' }}>
        {alert ? (
          <Alert
            bg={'#c6f6d5'}
            status="success"
            w={{ base: '100%', md: '308px' }}
            rounded={6}
          >
            <AlertIcon color="green" fontWeight="400" />
            <AlertDescription color="white" fontSize="16px">
              Changes have been saved.
            </AlertDescription>
            <CloseButton
              position="absolute"
              right="0px"
              top="8px"
              onClick={() => setAlert(!alert)}
            />
          </Alert>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};

export default Notify;
