import {
  HStack,
  Tabs,
  Text,
  Stack,
  SimpleGrid,
  TabPanel,
  Box,
  Tab,
  TabList,
  TabPanels,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BiStar, BiStation } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import Button from '../../components/Button';
import Input from '../../components/Input';
import DashboardWrapper from '../../layouts/dashboard';
import RequestQ from './RequestQ';
import RfqQuote from './RfqQuote';
import Rating from '../rfq/Components/Rating';

function DeliveryRating() {
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
            <RfqQuote />
          </TabPanel>
          <TabPanel pl="0px">
            <Box>
              <Text
                fontSize={{ base: '24px', md: '20px' }}
                fontWeight="bold"
                color={'gray.gray200'}
              >
                Rate & Review
              </Text>
            </Box>
            <Box mt="25px">
              <Text color={'#303030'} fontWeight="bold" fontSize={'20px'}>
                Rate the vendor
              </Text>
            </Box>
            <SimpleGrid columns={{ md: 4, base: 1 }} mt="15px">
              <Box>
                <Text>On-Time Delivery</Text>
              </Box>
              <HStack>
                <Rating
                  size={24}
                  icon="star"
                  scale={5}
                  fillColor="#F5862E"
                  strokeColor="grey"
                />
              </HStack>
              <Text mt="10px">Defect Control</Text>
              <HStack>
                <Rating
                  size={24}
                  icon="star"
                  scale={5}
                  fillColor="#F5862E"
                  strokeColor="grey"
                />
              </HStack>
            </SimpleGrid>
            <SimpleGrid columns={{ md: 4, base: 1 }} mt="20px">
              <Text>Effective Communication</Text>
              <HStack>
                <Rating
                  size={24}
                  icon="star"
                  scale={5}
                  fillColor="#F5862E"
                  strokeColor="grey"
                />
              </HStack>
        
              <Text mt="10px">Specification Accuracy</Text>
              <HStack>
                <Rating
                  size={24}
                  icon="star"
                  scale={5}
                  fillColor="#F5862E"
                  strokeColor="grey"
                />
              </HStack>
    
            </SimpleGrid>
            <Box mt="15px">
              <Text fontWeight={'bold'}>Leave a Review</Text>
            </Box>
            <Box mt="15px" w={{ base: '100%', md: '45%' }}>
              <Textarea resize={'none'} h="200px"></Textarea>
            </Box>
            <Box mt="15px">
              <Text fontWeight={'bold'} fontSize="18px">
                Upload Pictures
              </Text>
            </Box>
            <SimpleGrid
              mt="20px"
              maxWidth={'320px'}
              columns={{ base: 1, md: 2 }}
              spacing={'30px'}
            >
              <Box>
                <Text fontWeight={'bold'}>Delivery Pictures</Text>
                <Text fontSize={'12px'}>Attach 1 or more files</Text>
              </Box>
              <Box w="250px">
                <Input border="2px dashed black" type="file"></Input>
              </Box>
            </SimpleGrid>
            <Box mt="30px">
              <Button children={'Submit'} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardWrapper>
  );
}

export default DeliveryRating;
