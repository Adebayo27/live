import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdAdd, MdEdit } from 'react-icons/md';
import Button from '../../components/Button';
import Input from '../../components/Input';
import DashboardWrapper from '../../layouts/dashboard';

function SecuirtyTabSection() {
  // This modal triggers up when you click on see details in the sginature section
  const { isOpen, onOpen, onClose } = useDisclosure();

  // This state takes care of the email.  When the edit icon is clicked.
  const [editEmail, setEditEmail] = useState(null)

  // This state takes care of the phone number.  When the edit icon is clicked.
  const [editPhone, setEditPhone] = useState(null)

  // This triggers the set password
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
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
    <>
      <Center>
        <Box w="100%" boderRadius="sm" p={5}>
          <Box>
            <Text
              textAlign="left"
              mt={5}
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight="500"
              color="gray.400"
            >
              Verified Information
            </Text>
            <Box color="#303030" fontSize={{ base: "14px", md: "16px" }}>
              <HStack my={5}>
                <Text fontWeight="600" w="40%" textAlign="left">
                  Status
                </Text>
                <Text w="60%" textAlign={{ base: 'right', md: 'left' }}>
                  Active
                </Text>
              </HStack>
              <HStack my={5}>
                <Text fontWeight="600" w="40%" textAlign="left">
                  Email
                </Text>
                <Box
                  w={{ md: "308px" }}
                  d="flex"
                  textAlign={{ base: 'right', md: 'left' }}
                >
                  {editEmail === "email" ?
                    <Box>
                      <Input />
                      <Text fontSize={"sm"} py={2}>Changing your email address will make your account go inactive until you verify your email</Text>
                      <Button>Save Changes</Button>
                    </Box>
                    :
                    <>
                      <Text textAlign={{ base: 'right', md: 'left' }} mr={{ base: "7px", md: "12px" }}>
                        info@construction.com
                      </Text> <MdEdit onClick={() => setEditEmail("email")} />
                    </>}
                </Box>
              </HStack>
              <HStack my={4}>
                <Text fontWeight="600" w="40%" textAlign="left">
                  Phone Number
                </Text>
                <Box
                  w={{ md: "308px" }}
                  d="flex"
                  textAlign={{ base: 'right', md: 'left' }}
                >
                  {
                    editPhone == "phone" ?
                      <Box>
                        <Input />
                        <Box py={2}>
                          <Button>Save Changes</Button>
                        </Box>
                      </Box>
                      :
                      <>
                        <Text textAlign={{ base: 'right', md: 'left' }} mr={{ base: "7px", md: "12px" }}>
                          +2348181347934
                        </Text> <MdEdit onClick={() => setEditPhone("phone")} />
                      </>
                  }
                </Box>
              </HStack>
            </Box>
            <Box>
              <Text
                textAlign="left"
                mt={6}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight="500"
                color="gray.400"
              >
                Authentication
              </Text>
              <Box mt={3} color="#303030" fontSize={{ base: "14px", md: "16px" }}>
                <Text textAlign="left">
                  Turn On Two Way Factor Authenticator
                </Text>
                <HStack>
                  <Text w="40%" textAlign="left">
                    Protect your LiveVend Bulk account from unauthorized
                    transactions.
                  </Text>
                  <Text w="60%" textAlign={{ base: 'right', md: 'left' }}>
                    <Switch />
                  </Text>
                </HStack>
              </Box>
            </Box>
            <Box>
              <Text
                textAlign="left"
                mt={6}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight="500"
                color="gray.400"
              >
                Password
              </Text>
              <Box mt={3} fontSize={{ base: "14px", md: "16px" }} color="#303030">
                <Text fontWeight="600" textAlign="left" >
                  Update Password
                </Text>
                <HStack>
                  <Text w="40%" textAlign="left">
                    Change your password to a new one.
                  </Text>
                  <Box
                    onClick={onOpen2}
                    as="button"
                    w="60%"
                    textAlign={{ base: 'right', md: 'left' }}
                  >
                    Change Password
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box>
              <Text
                textAlign="left"
                mt={6}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight="500"
                color="gray.400"
              >
                Signature
              </Text>
              <Box mt={3} fontSize={{ base: "14px", md: "16px" }} color="#303030">
                <Text fontWeight="600" textAlign="left">
                  Your Signature
                </Text>
                <HStack>
                  <Text w="40%" textAlign="left">
                    Sign on a plain paper and upload
                  </Text>
                  <Box>
                    <HStack>
                      <Box></Box>
                      <Box
                        as="button"
                        bg="orange.500"
                        p={1}
                        borderRadius="sm"
                        color="white"
                      >
                        <MdAdd />
                      </Box>
                      <Box>
                        <Text>Last Changed: 11/2/2021</Text>
                      </Box>
                      <Box>
                        <Text as="button" color="blue.500" onClick={onOpen}>
                          See details
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box>
              <Text
                textAlign="left"
                mt={6}
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight="500"
                color="gray.400"
              >
                Notification
              </Text>
              <Box mt={3} fontSize={{ base: "14px", md: "16px" }} color="#303030">
                <Text fontWeight="600" textAlign="left">
                  Email
                </Text>
                <HStack>
                  <Text w="40%" textAlign="left">
                    Receive notification via email
                  </Text>
                  <Text w="60%" textAlign={{ base: 'right', md: 'left' }}>
                    <Switch />
                  </Text>
                </HStack>
              </Box>
              <Box mt={3} fontSize={{ base: "14px", md: "16px" }} color="#303030">
                <Text fontWeight="600" textAlign="left">
                  SMS
                </Text>
                <HStack>
                  <Text w="40%" textAlign="left" color="#303030">
                    Receive notification via sms. Charges may apply
                  </Text>
                  <Text w="60%" textAlign={{ base: 'right', md: 'left' }}>
                    <Switch />
                  </Text>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>

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
                <Input label="Old Password" />
              </Box>
              <Box my={3}>
                <Input label="New Password" />
              </Box>
              <Box pt={5}>
                <Button>Change Password</Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SecuirtyTabSection;
