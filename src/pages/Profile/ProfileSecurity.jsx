import {
  Box,
  Center,
  Divider,
  Flex,
  Spacer,
  Stack,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  useDisclosure,
  SimpleGrid,
  Avatar,
  Text,
  Radio,
  RadioGroup,
  Select,
  useToast
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdAdd, MdEdit } from 'react-icons/md';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { httpWithToken } from '../../services/queries';
import Notifications from './../../layouts/dashboard/Notifications';

const ProfileSecurity = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [value, setValue] = React.useState('1');
  const [show, setShow] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editEmail, setEditEmail] = useState(null);
  const [editPhone, setEditPhone] = useState(null);

  const [userDetails, setUserDetails]  = useState(null)
  const [phone, setPhone]  = useState(null)
  const [email, setEmail]  = useState(null)
  const [loadingEmail, setLoadingEmail] = useState(false)
  const [loadingPhone, setLoadingPhone] = useState(false)
  const toast = useToast();
  

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

   // This triggers the set password

  const fetchUserSecutity = async () => {
    let query = `
    query{
      individuals(where:{user_id: ${user.id}}){
        id
        phone
        user_id{
          email
          status
          user_settings{
            key
            value
          }
          signatures{
            id
            image_url
            updated_at
          }
        }
      }
    }

    `
    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      console.log(response)
      setUserDetails(response.data.individuals[0])
      setEmail(response.data.individuals[0]?.user_id?.email)
      setPhone(response.data.individuals[0]?.phone)
    }
  }

  const updateEmail = async () => {
    setLoadingEmail(true)
    let query = `
    mutation{
      updateUser(input: {
        where: {id: ${user.id}}
        data:{
          email: "${email}"
          confirmed: false
        }
      }){
        user{
          id
          email
        }
      }
    }
    `
    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      setLoadingEmail(false)
      setEditEmail(false)
      setEmail(email)

      toast({
        description: 'Your email has been changed, kindly verify your email to activate your account.',
        duration: 2000,
        status: "info",
        isClosable: true,
      })

    }

  }

  const updatePhone = async () => {
    setLoadingPhone(true)
    let query = `
    mutation{
      updateIndividual(input: {
        where: {id: ${userDetails.id}}
        data:{
          phone: "${phone}"
        }
      }){
        individual{
          id
          phone
        }
      }

      updateUser(input: {
        where: {id: ${user.id}}
        data:{
          confirmed: false
        }
      }){
        user{
          id
          email
        }
      }
    }
    `
    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      setLoadingPhone(false)
      setEditPhone(false)
      setPhone(phone)

      toast({
        description: 'Your phone has been changed, kindly verify your phone to activate your account.',
        duration: 2000,
        status: "info",
        isClosable: true,
      })

    }

  }

  useEffect(() => {
    fetchUserSecutity()
  }, [])

  const modalSignatures = [
    {
      date: '2, Jan, 2022',
      signature: 'SIGN',
    },
    {
      date: '3, Jan, 2022',
      signature: 'SIGN',
    },
    {
      date: '4, Jan, 2022',
      signature: 'SIGN',
    },
  ];
  return (
    <Box>
      <Text
        textAlign="left"
        mt={5}
        fontSize={{ base: '16px', md: '20px' }}
        fontWeight="600"
        color="gray.400"
      >
        Verified Information
      </Text>

      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '340px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Status
          </Text>
        </Box>
        <Text fontWeight="400" fontSize="16px" color="#303030">
          {userDetails?.user_id?.status}
        </Text>
      </Stack>

      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '340px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Email
          </Text>
        </Box>

        <Box fontSize="16px" color="gray.500">
          <Box fontWeight="400" fontSize="16px" color="#303030" d="flex">
            {editEmail === 'email' ? (
              <Box>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Text fontSize={'sm'} py={2}>
                  Changing your email address will make your account go inactive
                  until you verify your email
                </Text>
                <Button isLoading={loadingEmail} onClick={()=>updateEmail()}>Save Changes</Button>
              </Box>
            ) : (
              <>
                <Text
                  textAlign={{ base: 'right', md: 'left' }}
                  mr={{ base: '7px', md: '12px' }}
                >
                  {email}
                </Text>{' '}
                <MdEdit onClick={() => setEditEmail('email')} />
              </>
            )}
          </Box>
        </Box>
      </Stack>

      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '340px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Phone Number
          </Text>
        </Box>

        <Box fontWeight="400" fontSize="16px" color="#303030" d="flex">
          {editPhone == 'phone' ? (
            <Box>
              <Input value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              <Box py={2}>
                <Button isLoading={loadingPhone} onClick={()=>updatePhone()}>Save Changes</Button>
              </Box>
            </Box>
          ) : (
            <>
              <Text
                textAlign={{ base: 'right', md: 'left' }}
                mr={{ base: '7px', md: '12px' }}
              >
                {phone}
              </Text>{' '}
              <MdEdit onClick={() => setEditPhone('phone')} />
            </>
          )}
        </Box>
      </Stack>
      <Box mt={7}>
        <Text fontSize="20px" fontWeight="600" color="gray.400">
          Authentication
        </Text>
      </Box>

      <Stack spacing="30px" mt={7} direction={['column', 'row']}>
        <Box w={{ base: '100%', md: '350px' }}>
          <Text fontWeight={'bold'} fontSize="15px" color="#303030">
            Turn On Two Way Factor Authenticator
          </Text>
          <Text fontSize="14px" color="gray.500">
            Protect your LiveVend Bulk account from unauthorized transactions.
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '300px' }}>
          <Text>
            <Switch isChecked={ userDetails?.user_id?.user_settings.length > 0 ? userDetails?.user_id?.user_settings[0].value === 'true'? true : false : ''}/>
          </Text>
        </Box>
      </Stack>

      <Box mt={7}>
        <Text fontSize="20px" fontWeight="600" color="gray.400">
          Password
        </Text>
      </Box>

      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '340px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Update password
          </Text>
          <Text fontSize="12px" color="gray.500">
            Change your password to a new one.
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '340px' }}>
          <Box
            fontWeight="400"
            fontSize="16px"
            color="#303030"
            onClick={onOpen2}
            as="button"
          >
            Change Password
          </Box>
        </Box>
      </Stack>

      <Box mt={7}>
        <Text fontSize="20px" fontWeight="600" color="gray.400">
          Signature
        </Text>
      </Box>

  
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '340px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Your Signature
          </Text>
          <Text fontSize="12px" color="gray.500">
            Sign on a plain paper and upload
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '300px' }}>
          <HStack>
            <Box as="button" bg="orange.500" borderRadius="sm" color="white">
              <MdAdd
            
               />
            </Box>

            <Box>
              <Text fontSize="12px" color="gray.500">
                Last Changed: 11/2/2021
              </Text>
            </Box>

            <Box>
              <Text
                as="button"
                fontSize="12px"
                color="blue.500"
                onClick={onOpen}
                mb={3}
              >
                See history
              </Text>
            </Box>
          </HStack>

        </Box>
      </Stack>
     
      <Box mt={7}>
        <Text fontSize="20px" fontWeight="600" color="gray.400">
          Notifications
        </Text>
      </Box>


    
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '340px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Email
          </Text>
          <Text fontSize="12px" color="gray.500">
          Receive notification via email
          </Text>
        </Box>

        <Text >
          <Switch mt={3} isChecked={userDetails?.user_id?.user_settings.length > 0 ? userDetails?.user_id?.user_settings[1].value === 'true'? true : false : ''} />
        </Text>
      </Stack>
     
     
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '340px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            SMS
          </Text>
          <Text fontSize="12px" color="gray.500">
          Receive notification via sms. Charges may apply
          </Text>
        </Box>

        <Text mt={1}>
          <Switch mt={3} isChecked={userDetails?.user_id?.user_settings.length > 0 ? userDetails?.user_id?.user_settings[2].value === 'true'? true : false : ''}/>
        </Text>
      </Stack>

      {/* SIGNATURE MODAL  */}
      <Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent top={40} bg="white">
              <ModalHeader>Signature History</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {modalSignatures.map((sign, i) => (
                  <Box key={i} my={5}>
                    <HStack justifyContent="space-between">
                      <Text>{sign.date}</Text>
                      <Text>{sign.signature}</Text>
                    </HStack>
                  </Box>
                ))}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
  
        {/* PASSWORD MODAL  */}
  
        <Modal isOpen={isOpen2} onClose={onClose2}>
          <ModalOverlay />
          <ModalContent top={40} bg="white">
            <ModalHeader>Update Your password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Box my={3}>
                  <Input 
                  type={show ? 'text' : 'password'}
                  label="Old Password" />
                </Box>
                <Box my={3}>
                  <Input
                  type={show ? 'text' : 'password'}
                   label="New Password" />
                </Box>
                <Box pt={5}>
                  <Button>Change Password</Button>
                </Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
  
    </Box>
  );
};

export default ProfileSecurity;
