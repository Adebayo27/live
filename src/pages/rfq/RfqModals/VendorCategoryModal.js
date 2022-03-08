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
import Select from '../../../components/Select';

function VendorCategoryModal({ isOpen, onOpen, onClose }) {


  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />

      <ModalContent bg="white">
        <ModalHeader fontSize={'20px'}>
          Choose From Vendors in this Category
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box>
              <Input placeholder={'Search by name'} rightIcon={<FaSearch  color="#606060"/>} />
            </Box>
            <Box
              mb={{ base: '20px', md: '0px' }}
              ml={{ base: 0, md: '60px' }}
              mt={{ base: '10px', md: "0px" }}
            >
              <Select placeholder="Sort by" />
            </Box>
          </SimpleGrid>
          <Box w={{ base: '100%', md: '100%' }} ml="0px" mt={{md: "35", base: "0px"}}>
            <Table variant="striped" color="background" p="0px" >
              {/* <Thead >
                <Tr >
                  <Th pl="0px">Vendor</Th>
                  <Th pl="0px">No of Contracts</Th>
                  <Th pl="0px">Rating</Th>
                </Tr>
              </Thead> */}
              <Tbody>
              <Tr>
                  <Td pl="4px" color="#303030" fontSize="16px" fontWeight="bold">
                 
                      Vendor
                 
                  </Td>
                  <Td  pl="4px" fontWeight="bold" color="#303030">No of Contracts</Td>
                  <Td pl="4px" fontWeight="bold"color="#303030">Rating</Td>
                </Tr>
                <Tr>
                  <Td pl="4px" color="#303030" fontSize="16px" fontWeight="normal">
                    <Checkbox defaultChecked>
                      Dewalt Construction Matrials
                    </Checkbox>
                  </Td>
                  <Td  pl="4px" color="#303030">100</Td>
                  <Td pl="4px" color="#303030"><HStack><GrStar color={theme.colors.orange[500]}/><Text>4.0</Text></HStack></Td>
                </Tr>
                <Tr>
                  <Td pl="4px" color="#303030">
                    <Checkbox> Magma Roofing Supply</Checkbox>
                  </Td>
                  <Td pl="4px" color="#303030">678</Td>
                  <Td pl="4px" color="#303030"><HStack><GrStar color={theme.colors.orange[500]}/><Text>4.0</Text></HStack></Td>
                </Tr>
                <Tr>
                  <Td pl="4px" color="#303030">
                    <Checkbox defaultChecked> Magma Roofing Supply</Checkbox>
                  </Td>
                  <Td pl="4px" color="#303030">446</Td>
                  <Td pl="4px" color="#303030"><HStack><GrStar color={theme.colors.orange[500]}/><Text>3.5</Text></HStack></Td>
                </Tr>
                <Tr>
                  <Td pl="4px" color="#303030">
                    <Checkbox >
                      Chip Off the Block Builders
                    </Checkbox>
                  </Td>
                  <Td pl="4px" color="#303030">678</Td>
                  <Td pl="4px" color="#303030"><HStack><GrStar color={theme.colors.orange[500]}/><Text>4.5</Text></HStack></Td>
                </Tr>
                <Tr>
                  <Td pl="4px" color="#303030">
                    <Checkbox defaultChecked>
                    A+ Quality Construction
                    </Checkbox>
                  </Td>
                  <Td pl="4px" color="#303030">678</Td>
                  <Td pl="4px" color="#303030"><HStack><GrStar color={theme.colors.orange[500]}/><Text>4.0</Text></HStack></Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </ModalBody>
        <Box ml="30px" mb="32px" mt={{base: "30px", md:"40px"}}>
          <Button>Invite Selected</Button>
        </Box>
        {/* <ModalFooter mr="270px">
            <Button >Continue</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

export default VendorCategoryModal;
