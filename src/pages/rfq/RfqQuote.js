import React, { useState } from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import { IoIosArrowBack, IoArrowForward, IoIosArrowForward } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Spacer,
  WrapItem,
  Wrap,
  Table,
  Th,
  Tr,
  Tbody,
  Thead,
  Td,
  Tfoot,
  TableCaption,
  useDisclosure,
  HStack,
  Stack,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
  Tab,
  Avatar,
} from '@chakra-ui/react';
import Select from '../../components/Select';
import { FaEye } from 'react-icons/fa';
import Option from './Components/Option';
import QuoteSingle from './QuoteSingle';
import CompareModal from './RfqModals/CompareModal';
// import theme from '../../utils/theme';

function RfqQuote() {
  const [singleQuote, setSingleQuote] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CompareModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {singleQuote ? (
        <QuoteSingle onClick={() => setSingleQuote(!singleQuote)} />
      ) : (
        <>
          <Flex flexWrap={'wrap'}>
            <Box w={{ base: '100%', md: '401px' }}>
              <HStack spacing={'20px'}>
                <Box>
                  <Text fontWeight={'bold'} fontSize="16px" mt="35px">
                    Filter by
                  </Text>
                </Box>
                <Box w="280px">
                  <Select
                    onChange={e => {
                      e.target.value === 'Range' && onOpen();
                    }}
                    mt="32px"
                    placeholder="None"
                    size="lg"
                  >
                    <Option value={'Lowest Cost'} />
                    <Option value={'Highest Cost'} />
                    <Option value={'Range'} />
                  </Select>
                </Box>
              </HStack>
            </Box>
            <Spacer />
            <Box w={{ base: '40%', md: '179px' }}>
              <Select mt="32px" placeholder="Sort by">
                <Option value={'Earliest Delivery'} />
                <Option value={'Latest Delivery'} />
              </Select>
            </Box>
          </Flex>
          <Box mt="40px" overflowY={'auto'}>
            <Table variant="striped" color="background">
              <Tbody>
                <Tr>
                  <Td color="#303030">S/N</Td>
                  <Td color="#303030">Name</Td>
                  <Td color="#303030">Total Cost</Td>
                  <Td color="#303030">Delivery Date</Td>
                  <Td color="#303030">Status</Td>
                  <Td color="#303030">See Details</Td>
                </Tr>
                <Tr>
                  <Td color="#303030" fontSize="16px" fontWeight="normal">
                    1
                  </Td>
                  <Td color="#303030">
                    <HStack>
                      {' '}
                      <WrapItem>
                        <Avatar
                          size="sm"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />{' '}
                      </WrapItem>
                      <Text>Builders First Source</Text>
                    </HStack>
                  </Td>
                  <Td color="#303030">$13, 550</Td>
                  <Td color="#303030">211/12/20</Td>
                  <Td color={'orange.orange500'}>Submitted</Td>
                  <Td color="#303030">
                    <FaEye
                      onClick={() => setSingleQuote(!singleQuote)}
                      cursor="pointer"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td color="#303030">2</Td>
                  <Td color="#303030">
                    <HStack>
                      {' '}
                      <WrapItem>
                        <Avatar
                          size="sm"
                          name="Builders First"
                          src="https://bit.ly/kent-c-dodds"
                        />{' '}
                      </WrapItem>
                      <Text>Builders First Source</Text>
                    </HStack>
                  </Td>
                  <Td color="#303030">$13, 550</Td>
                  <Td color="#303030">211/12/20</Td>
                  <Td color={'orange.orange500'}>Submitted</Td>
                  <Td color="#303030">
                    <FaEye
                      onClick={() => setSingleQuote(!singleQuote)}
                      cursor="pointer"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td color="#303030">3</Td>
                  <Td color="#303030">
                    <HStack>
                      {' '}
                      <WrapItem>
                        <Avatar
                          size="sm"
                          name="ABC Supply Co"
                          src="https://bit.ly/kent-c-dodds"
                        />{' '}
                      </WrapItem>
                      <Text>ABC Supply Co.</Text>
                    </HStack>
                  </Td>
                  <Td color="#303030">$13, 100</Td>
                  <Td color="#303030">211/12/20</Td>
                  <Td color={'orange.orange500'}>Submitted</Td>
                  <Td color="#303030">
                    <FaEye
                      onClick={() => setSingleQuote(!singleQuote)}
                      cursor="pointer"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td color="#303030">4</Td>
                  <Td color="#303030">
                    <HStack>
                      {' '}
                      <WrapItem>
                        <Avatar
                          size="sm"
                          name="Leosnet Suppliers"
                          src="https://bit.ly/kent-c-dodds"
                        />{' '}
                      </WrapItem>
                      <Text>Leosnet Suppliers</Text>
                    </HStack>
                  </Td>
                  <Td color="#303030">$13, 100</Td>
                  <Td color="#303030">211/12/20</Td>
                  <Td color="#F5862E">Submitted</Td>
                  <Td color="#303030">
                    <FaEye
                      onClick={() => setSingleQuote(!singleQuote)}
                      cursor="pointer"
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
            <Flex mt="20px">
              <Spacer/>
              <HStack spacing="10px">
              <IoIosArrowBack cursor={"pointer"} />
              <Text>1 of 3</Text>
              <IoIosArrowForward cursor={"pointer"}/>
              </HStack>
            </Flex>
        </>
      )}
    </>
  );
}

export default RfqQuote;
