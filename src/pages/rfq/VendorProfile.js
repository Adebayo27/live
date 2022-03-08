import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Button,
  SimpleGrid,
  Divider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
// import Button from '../../components/Button';
import DashboardWrapper from '../../layouts/dashboard';

function VendorProfile() {
  return (
    <DashboardWrapper pageTitle="Request For Quote">
      <Flex
        spacing="10px"
        fontWeight="400"
        color="#2C346D"
        flexWrap={'wrap'}
        mb="32px"
        mt="26px"
      >
        <Text pr="3px">RFQ </Text>

        &gt;
        <Text pl="3px" pr="3px">Railway Track From Ibadan to Lagos</Text>
        &gt;
        <Text pl="3px" pr="3px">Granite and Rod Needed</Text>
        &gt;
        <Text pl="3px" pr="3px">Builders Firt Souce</Text>
      </Flex>
      <Box>
        <Text color={'gray.gray200'}>About Vendor</Text>
      </Box>

      <HStack mt="25px">
        <Box>
          <Image
            w="100px"
            src="../../assets/images/Ellipse67.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box pl="7px">
          <Text>Builders First Source</Text>
          <HStack mt="8px">
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <Text>4.9 (1500)</Text>
          </HStack>
          <Box w="140px" borderRadius={'8px'} mt="10px">
            <Button
              _hover={'white'}
              border={'1px solid #303030'}
              bg={'white'}
              size="md"
              color="#303030"
            >
              Chat Vendor
            </Button>
          </Box>
        </Box>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} mt="30px">
        <Box p="20px" border="1px solid #858383" borderRadius={'8px'}>
          <Text color={'gray.gray200'} fontWeight="normal">
            Address
          </Text>
          <Text mt="15px" color="#303030">
            3, Faith Street , Isale Abetu, Abeokuta, Ogun State.
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            mt={{ md: '20px', base: '20px' }}
          >
            <Box>
              <Text>Email Address</Text>
              <Text fontWeight={'bold'}>your@gmail.com</Text>
            </Box>
            <Box mt={{ base: '15px', md: '0px' }}>
              <Text>Phone Number</Text>
              <Text fontWeight={'bold'}>+234812345665</Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 2 }} mt="20px">
            <Box>
              <Text>Company size</Text>
              <Text fontWeight={'bold'}>Large</Text>
            </Box>
            <Box mt={{ base: '15px', md: '0px' }}>
              <Text>Numbers of contracts</Text>
              <Text fontWeight={'bold'}>100</Text>
            </Box>
          </SimpleGrid>
          <Divider mt="25px" />
          <Box mt="25px">
            <Text color="#303030" textAlign={'justify'}>
              We are a company that specialized in the supply of grannite, rods,
              sands and othre related construction materials. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Text>
          </Box>
        </Box>
        <Box
          mt={{ base: '40px', md: '0px' }}
          ml={{ base: '0px', md: '20%' }}
          w="350px"
        >
          <HStack w="100%">
            <Text fontWeight={'bold'} fontSize="20px">
              1500 Reviews
            </Text>
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <BsFillStarFill color="#F5862E" />
            <Text>4.5</Text>
          </HStack>
          <HStack mt="10px" w="350px">
            <Box>
              <Text>5 Stars</Text>
            </Box>

            <RangeSlider
              w="50%"
              aria-label={['min', 'max']}
              defaultValue={[0, 85]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
            </RangeSlider>
            <Box>
              <Text>(800)</Text>
            </Box>
          </HStack>
          <HStack mt="10px" w="350px">
            <Box>
              <Text>4 Stars</Text>
            </Box>

            <RangeSlider
              w="50%"
              aria-label={['min', 'max']}
              defaultValue={[0, 75]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
            </RangeSlider>
            <Box>
              <Text>(320)</Text>
            </Box>
          </HStack>
          <HStack mt="10px" w="350px">
            <Box>
              <Text>3 Stars</Text>
            </Box>

            <RangeSlider
              w="50%"
              aria-label={['min', 'max']}
              defaultValue={[0, 55]}
              //   colorScheme="#211F5C"
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
            </RangeSlider>
            <Box>
              <Text>(200)</Text>
            </Box>
          </HStack>
          <HStack mt="10px" w="350px">
            <Box>
              <Text>2 Stars</Text>
            </Box>

            <RangeSlider
              w="50%"
              aria-label={['min', 'max']}
              defaultValue={[0, 25]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
            </RangeSlider>
            <Box>
              <Text>(80)</Text>
            </Box>
          </HStack>
          <HStack mt="10px" w="350px">
            <Box>
              <Text>1 Star</Text>
            </Box>

            <RangeSlider
              w="50%"
              aria-label={['min', 'max']}
              defaultValue={[0, 10]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
            </RangeSlider>
            <Box>
              <Text>(10)</Text>
            </Box>
          </HStack>
          <Box mt="25px">
            <Text fontWeight={'bold'}>Review Breakdown</Text>
          </Box>
          <Box>
            <HStack w="300px" mt="15px">
              <Text>On-Time Delivery</Text>
              <Spacer />
              <BsFillStarFill color="#F5862E" />
              <Text>4.9</Text>
            </HStack>
            <HStack w="300px" mt="15px">
              <Text>Specification Accuracy</Text>
              <Spacer />
              <BsFillStarFill color="#F5862E" />
              <Text>4.9</Text>
            </HStack>
            <HStack w="300px" mt="15px">
              <Text>Defect Control</Text>
              <Spacer />
              <BsFillStarFill color="#F5862E" />
              <Text>4.9</Text>
            </HStack>
            <HStack w="300px" mt="15px">
              <Text>Effective Communication</Text>
              <Spacer />
              <BsFillStarFill color="#F5862E" />
              <Text>4.9</Text>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>
      <Box mt="30px">
        <Text fontWeight={'bold'} color="#303030">
          What Others says
        </Text>
      </Box>
      <SimpleGrid spacing={"40px"} mt="30px" mb="20px" columns={{ base: 1, md: 2 }}>
        <Box>
          <HStack >  <Image
            w="30px"
            src="../../assets/images/Ellipse.png"
            alt="Dan Abramov"
          />
          <Text fontWeight={"bold"}>Cutstruct Ltd</Text>
          <BsFillStarFill color="#F5862E" />
              <Text>5</Text></HStack>
          <Text mt="15px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, id
            nibh donec enim, dui varius. Vitae neque bibendum nisl, sit. Sit
            donec felis dolor in. Aliquam eget magna arcu est cras egestas.
            felis dolor in. Aliquam eget magna arcu est cras egestas. felis
            dolor in. Aliquam eget magna arcu est cras egestas.
          </Text>
        </Box>
        <Box>
          <HStack >  <Image
            w="30px"
            src="../../assets/images/Ellipse67.png"
            alt="Dan Abramov"
          />
          <Text fontWeight={"bold"}>Cutstruct Ltd</Text>
          <BsFillStarFill color="#F5862E" />
              <Text>5</Text></HStack>
          <Text mt="15px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, id
            nibh donec enim, dui varius. Vitae neque bibendum nisl, sit. Sit
            donec felis dolor in. Aliquam eget magna arcu est cras egestas.
            felis dolor in. Aliquam eget magna arcu est cras egestas. felis
            dolor in. Aliquam eget magna arcu est cras egestas.
          </Text>
        </Box>
        
        <Box>
          <HStack >  <Image
            w="30px"
            src="../../assets/images/Ellipse67.png"
            alt="Dan Abramov"
          />
          <Text fontWeight={"bold"}>Cutstruct Ltd</Text>
          <BsFillStarFill color="#F5862E" />
              <Text>5</Text></HStack>
          <Text mt="15px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, id
            nibh donec enim, dui varius. Vitae neque bibendum nisl, sit. Sit
            donec felis dolor in. Aliquam eget magna arcu est cras egestas.
            felis dolor in. Aliquam eget magna arcu est cras egestas. felis
            dolor in. Aliquam eget magna arcu est cras egestas.
          </Text>
        </Box>
        <Box>
          <HStack >  <Image
            w="30px"
            src="../../assets/images/Ellipse.png"
            alt="Dan Abramov"
          />
          <Text fontWeight={"bold"}>Cutstruct Ltd</Text>
          <BsFillStarFill color="#F5862E" />
              <Text>5</Text></HStack>
          <Text mt="15px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, id
            nibh donec enim, dui varius. Vitae neque bibendum nisl, sit. Sit
            donec felis dolor in. Aliquam eget magna arcu est cras egestas.
            felis dolor in. Aliquam eget magna arcu est cras egestas. felis
            dolor in. Aliquam eget magna arcu est cras egestas.
          </Text>
        </Box>
      
      </SimpleGrid>
     
    </DashboardWrapper>
  );
}

export default VendorProfile;
