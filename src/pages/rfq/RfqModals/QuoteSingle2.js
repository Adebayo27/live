import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
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
  HStack,
  Stack,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
  Tab,
  theme,
  Center,
  LinkOverlay,
} from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import DashboardWrapper from '../../../layouts/dashboard';
import RequestQ from '../RequestQ';
import Button from '../../../components/Button';

function QuoteSingle2() {
  return (
    <DashboardWrapper pageTitle="Request For Quote">
      <HStack flexWrap={'wrap'} mb="32px" mt="26px">
        <Text>RFQ </Text>
        <IoIosArrowForward />
        <Text>Railway Track From Ibadan to Lagos</Text>
        <IoIosArrowForward />
        <Text>Granite and Rod Needed</Text>
      </HStack>
      <Stack spacing={'60px'}>
        <SimpleGrid maxWidth={'lg'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight={'bold'} color="#303030" fontSize={'16px'}>
              Title
            </Text>
            <Text fontSize={'12px'} fontWeight="normal" mt="8px">
              Input your quotation title
            </Text>
          </Box>
          <HStack spacing={'33.42px'}>
            <Text>Granite and Rod Needed</Text>

            <MdModeEdit cursor={'pointer'} />
          </HStack>
        </SimpleGrid>
        <SimpleGrid maxWidth={'lg'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight={'bold'} color="#303030" fontSize={'16px'}>
              Category
            </Text>
            <Text fontSize={'12px'} fontWeight="normal" mt="8px">
              What is your material type?
            </Text>
          </Box>

          <HStack spacing={'33.42px'}>
            <Text>Sand and Stone</Text>
            <MdModeEdit cursor={'pointer'} />
          </HStack>
        </SimpleGrid>
      </Stack>

      <Tabs mt="48px">
        <TabList>
          <Tab
            _selected={{
              borderBottomColor: 'orange.orange500',
              color: 'blue.blue500',
            }}
            color="gray.gray300"
            fontSize={'16px'}
            pl="0px"
          >
            Request
          </Tab>
          <Tab
            _selected={{
              borderBottomColor: 'orange.orange500',
              color: 'blue.blue500',
            }}
            color="gray.gray300"
          >
            Quote
          </Tab>
          <Tab
            _selected={{
              borderBottomColor: 'orange.orange500',
              color: 'blue.blue500',
            }}
            color="gray.gray300"
          >
            Delivery
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel pl="0px">
            <RequestQ />
          </TabPanel>
          <TabPanel pl="0px">
            <>
              <HStack cursor={'pointer'} mb="30px">
                <IoIosArrowBack />
                <Text>Go back</Text>
              </HStack>
              <SimpleGrid
                spacing={'20px'}
                maxWidth={'600px'}
                columns={{ base: 3, md: 3 }}
              >
                <Text fontWeight={'bold'}>Vendor</Text>
                <Text>Builders First Soruces</Text>
                <Text cursor={'pointer'} fontWeight={'bold'}>
                  {' '}
                  View Profile
                </Text>
              </SimpleGrid>
              <SimpleGrid
                spacing={'0px'}
                mt={{ md: '36px', base: '25px' }}
                maxWidth={'410px'}
                columns={{ base: 1, md: 2 }}
              >
                <Text fontWeight={'bold'}>Delivery Date</Text>
                <Text mt={{ base: '10px', md: '0px' }}>11 OCT 2021</Text>
              </SimpleGrid>
              <Flex cursor={'pointer'}>
                {' '}
                <Spacer />{' '}
                <HiDownload size={22} color={theme.colors.orange[500]} />{' '}
                <Text color={theme.colors.orange[500]}>Dowload as PDF</Text>
              </Flex>
              
              <Box mt="40px" overflowY={"auto"}>
                <Table variant="striped" color="background">
                  <Tbody>
                    <Tr>
                      <Td color="#303030" >
                        S/N
                      </Td>
                      <Td color="#303030" >
                        Item Name
                      </Td>
                      <Td color="#303030" >
                        Description / Type
                      </Td>
                      <Td color="#303030" >
                        Measurement
                      </Td>
                      <Td color="#303030" >
                        Quantity
                      </Td>
                      <Td color="#303030" >
                        Price Per Unit
                      </Td>
                      <Td color="#303030" >
                        Discount
                      </Td>
                      <Td color="#303030" >
                        Total Price
                      </Td>
                    </Tr>
                    <Tr>
                      <Td
                        color="#303030"
                        
                        fontSize="16px"
                        fontWeight="normal"
                      >
                        1
                      </Td>
                      <Td color="#303030" >
                        Grannite
                      </Td>
                      <Td color="#303030" >
                        Kashmir grannite
                      </Td>
                      <Td color="#303030" >
                        Tonnes
                      </Td>
                      <Td color="#303030" >
                        5
                      </Td>
                      <Td color="#303030" >
                        $1,000
                      </Td>
                      <Td color="#303030" >
                        4%
                      </Td>
                      <Td color="#303030" >
                        $9,600
                      </Td>
                    </Tr>
                    <Tr>
                      <Td color="#303030" >
                        2
                      </Td>
                      <Td color="#303030" >
                        Grannite
                      </Td>
                      <Td color="#303030" >
                        Tan Brown grannite
                      </Td>
                      <Td color="#303030" >
                        Tonnes
                      </Td>
                      <Td color="#303030" >
                        10
                      </Td>
                      <Td color="#303030" >
                        $1,000
                      </Td>
                      <Td color="#303030" >
                        4%
                      </Td>
                      <Td color="#303030" >
                        $9,600
                      </Td>
                    </Tr>
                    <Tr>
                      <Td color="#303030" >
                        3
                      </Td>
                      <Td color="#303030" >
                        Sand
                      </Td>
                      <Td color="#303030" >
                        Tan Brown grannite
                      </Td>
                      <Td color="#303030" >
                        Tonnes
                      </Td>
                      <Td color="#303030" >
                        5
                      </Td>
                      <Td color="#303030" >
                        $1,000
                      </Td>
                      <Td color="#303030" >
                        5%
                      </Td>
                      <Td color="#303030" >
                        $5,300
                      </Td>
                    </Tr>
                    <Tr>
                      <Td color="#303030" >
                        4
                      </Td>
                      <Td color="#303030" >
                        Logistic
                      </Td>
                      <Td color="#303030" >
                        $13, 100
                      </Td>
                      <Td color="#303030" ></Td>
                      <Td color="#303030" >
                        1
                      </Td>
                      <Td color="#303030" >
                        $5,000
                      </Td>
                      <Td color="#303030" >
                        4%
                      </Td>
                      <Td color="#303030" >
                        $5,600
                      </Td>
                    </Tr>
                    <Tr>
                      <Td color="#303030" ></Td>
                      <Td color="#303030" ></Td>
                      <Td color="#303030" ></Td>
                      <Td color="#303030" ></Td>
                      <Td color="#303030" ></Td>
                      <Td color="#303030" ></Td>
                      <Td fontSize={'25px'} color="#303030" >
                        Total
                      </Td>
                      <Td
                        fontSize={'25px'}
                        fontWeight={'bold'}
                        color="#303030"
                        
                      >
                        $20,232
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
              {/* <Flex mt={{base: "10px", md: "20px"}}>
          <Spacer/>
          <SimpleGrid columns={{md: 2, base: 1}}>
              <Text fontSize={"25px"}>Total</Text>
              <Text fontSize={"25px"} fontWeight={"bold"} color={"#303030"}>$20,232</Text>
          </SimpleGrid>
      </Flex> */}

              <SimpleGrid
                spacing={'25px'}
                mt={{ base: '20px', md: '50px' }}
                maxWidth={{base: "100%", md: '80%'}}
                columns={{ base: 1, md: 3 }}go
              >
                <Center
                  textAlign="center"
                  mt={{ base: '20px', md: '0px' }}
                  borderRadius={'8px'}
                  h="161px"
                  bg="#A2CEF9"
                >
                  <Box>
                    <Text fontSize="20px">Budget</Text>
                    <Text fontWeight={'bold'} fontSize="25px">
                      $30,000
                    </Text>
                  </Box>
                </Center>
                <Center
                  textAlign="center"
                  mt={{ base: '20px', md: '0px' }}
                  borderRadius={'8px'}
                  h="161px"
                  bg="#A2CEF9"
                >
                  <Box>
                    <Text fontSize="20px">Proposed Cost</Text>
                    <Text fontWeight={'bold'} fontSize="25px">
                      $20,230
                    </Text>
                  </Box>
                </Center>
                <Center
                  textAlign="center"
                  mt={{ base: '20px', md: '0px' }}
                  borderRadius={'8px'}
                  h="161px"
                  bg="#A2CEF9"
                >
                  <Box>
                    <Text fontSize="20px">Margin</Text>
                    <Text fontWeight={'bold'} fontSize="25px">
                      +$6,770
                    </Text>
                  </Box>
                </Center>
              </SimpleGrid>
              <Flex mt="32px">
                <Text>
                  You will be notified when this vendor signs the <Box as="span" fontWeight={"bold"}> binding
                  contract.</Box> Afterwhich you will proceed to payment{' '}
                </Text>
              </Flex>
              <SimpleGrid maxWidth={{base: "100%", md: "450px"}} columns={{base: 1, md: 2}} mt="40px">
                <Button>Proceed to Payment</Button>
                <Button background="white" color="#303030">
                  View Contract
                </Button>
              </SimpleGrid>
              <Flex mt="32px">
                <Text fontSize={"12px"}>
                  <Box as="span" fontWeight="bold">Note:</Box> The vendor won’t have access to the payment until you
                  confirm the delivery and specification quality of the
                  materials
                </Text>
              </Flex>
            </>
          </TabPanel>
          <TabPanel pl="0px">
            <p pl="0px">three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardWrapper>
  );
}

export default QuoteSingle2;
