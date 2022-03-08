import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  Box,
  Text,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Checkbox,
  HStack,
  theme,
} from '@chakra-ui/react';
import Button from '../../../components/Button';
import { FaSearch } from 'react-icons/fa';
import { GrStar } from 'react-icons/gr';
import Input from '../../../components/Input';

function VendorsInvitedModal({ isOpen, onOpen, onClose }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />

      <ModalContent bg="white">
        <ModalHeader fontSize={'20px'}>Vendors Invited</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box>
              <Input
                placeholder={'Search by name'}
                rightIcon={<FaSearch color="#606060" />}
              />
            </Box>
          </SimpleGrid>
          <Box
            w={{ base: '100%', md: '100%' }}
            ml="0px"
            mt={{ md: '35', base: '0px' }}
          >
            <Table variant="striped" color="background" p="0px">
              <Tbody>
                <Tr>
                  <Td
                    pl="4px"
                    color="#303030"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    Vendor
                  </Td>
                  <Td fontWeight="bold" pl="4px" color="#303030">
                    No of Contracts
                  </Td>
                  <Td fontWeight="bold" pl="4px" color="#303030">
                    Rating
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    pl="4px"
                    color="#303030"
                    fontSize="16px"
                    fontWeight="normal"
                  >
                    <Checkbox defaultChecked>
                      Dewalt Construction Matrials
                    </Checkbox>
                  </Td>
                  <Td pl="4px" color="#303030">
                    100
                  </Td>
                  <Td pl="4px" color="#303030">
                    <HStack>
                      <GrStar color={theme.colors.orange[500]} />
                      <Text>4.0</Text>
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td pl="4px" color="#303030">
                    <Checkbox> Magma Roofing Supply</Checkbox>
                  </Td>
                  <Td pl="4px" color="#303030">
                    678
                  </Td>
                  <Td pl="4px" color="#303030">
                    <HStack>
                      <GrStar color={theme.colors.orange[500]} />
                      <Text>4.0</Text>
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td pl="4px" color="#303030">
                    <Checkbox defaultChecked>A+ Quality Construction</Checkbox>
                  </Td>
                  <Td pl="4px" color="#303030">
                    446
                  </Td>
                  <Td pl="4px" color="#303030">
                    <HStack>
                      <GrStar color={theme.colors.orange[500]} />
                      <Text>3.5</Text>
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </ModalBody>
        <Box ml="30px" mb="32px" mt={{ base: '30px', md: '40px' }}>
          <Button>Update</Button>
          <Button background='white' color='#303030' border={"1px","solid","#303030"}>Add More</Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default VendorsInvitedModal;
