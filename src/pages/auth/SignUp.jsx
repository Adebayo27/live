import React from 'react';
import Logo from '../../components/Logo';
import { Box, Center, Divider, Link, Stack, Text } from '@chakra-ui/react';
import Button from '../../components/Button';
import { useLocation, useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  return (
   
      <Box background="#fff" padding="0" h={{ base:'100%',md:'100vh' }}>
        <Box p="24px" pb="0" ml={8}>
          <Logo />
        </Box>
        <Divider ml={5} />

        <Center mt={20}>
        <Stack spacing="30px" direction={['column', 'row']}>
          <Box textAlign='center' >
            <Center >
            <img src="/assets/images/building.png" w="88px" h="88px" />
            </Center>
            <Box w={{ base: '100%', md: '309px' }}>
            <Text color="blue.500" fontSize="24px" fontWeigth="700" mt="32px">
              Register as Coporate Org.
            </Text>
            <Text>(Developer)</Text>
            </Box>

            <Box mb={5} mt="32px" >
            <Button onClick={()=> history.push('/auth/coporate')}>
              Register
            </Button>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Center>
            <img src="/assets/images/labour.png" w="88px" h="88px" />
            </Center>
            <Box w={{ base: '100%', md: '309px' }}>
            <Text color="blue.500" fontSize="24px" fontWeigth="700" mt="32px">
              Register as Individual.
            </Text>
            <Text >(Developer)</Text>
            </Box>

            <Box mb={5} mt="32px" >
            <Button onClick={()=> history.push('/auth/individual')}>
              Register
            </Button>
            </Box>
          </Box>

          <Box  textAlign='center'>
            <Center>
            <img src="/assets/images/cart.png" w="88px" h="88px" />
            </Center>
            <Box w={{ base: '100%', md: '309px' }}>
            <Text color="blue.500" fontSize="24px" fontWeigth="700" mt="32px">
              Register as Vendour.
            </Text>
            <Text >(Supplier)</Text>
            </Box>

            <Box  mb={5} mt="32px" >
            <Button onClick={()=> history.push('/auth/vendor')}>
              Register
            </Button>
            </Box>
          </Box>
        </Stack>
        </Center>

        <Divider ml={5} />
        <Box textAlign='center' mt='5%'>
        <Text color='gray.500' fontSize='12px'>
             &copy; 2021. Cutstuct Technology. All right reserved.LiveVend Bulk is a product of Cutstuct Technology 
        </Text>
        </Box>
      </Box>
  
  );
};

export default SignUp;
