import { Box, Center, HStack, SimpleGrid, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BiStar } from 'react-icons/bi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ReportIssueModal from '../rfq/RfqModals/ReportIssueModal';

function ContractDelivery() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Processing, setProcessing] = useState(false);
    const [Dispatched, setDispatched] = useState(false);
    const [Delivered, setDelivered] = useState(true);
    const [Review, setReview] = useState(false);
    const [ShowPage, setShowPage] = useState(true);

    const handleRatings = () => {
        setShowPage(false)
        setReview(true)

    }
  return (
      <>
          {
              ShowPage ? (
                  <>
                      <HStack mt={'32px'} spacing={{ base: "20px", md: "56px" }}>
                          <Center
                              w="80px"
                              h={'80px'}
                              bgColor={Processing ? '#211F5C' : 'transparent'}
                              borderRadius="100%"
                              border={'2px solid #211F5C'}
                          >
                              <Text
                                  pl="8px"
                                  pr="8px"
                                  fontSize={'12px'}
                                  fontWeight={'400'}
                                  color={Processing ? 'white' : '#211F5C'}
                              >
                                  Processing
                              </Text>
                          </Center>
                          <Center
                              w="80px"
                              h={'80px'}
                              bgColor={Dispatched ? '#211F5C' : 'transparent'}
                              borderRadius="100%"
                              border={'2px solid #211F5C'}
                          >
                              <Text
                                  pl="8px"
                                  pr="8px"
                                  fontSize={'12px'}
                                  fontWeight={'400'}
                                  color={Dispatched ? 'white' : '#211F5C'}
                              >
                                  Dispatched
                              </Text>
                          </Center>
                          <Center
                              w="80px"
                              h={'80px'}
                              bgColor={Delivered ? '#211F5C' : 'transparent'}
                              borderRadius="100%"
                              border={'2px solid #211F5C'}
                          >
                              <Text
                                  pl="8px"
                                  pr="8px"
                                  fontSize={'12px'}
                                  fontWeight={'400'}
                                  color={Delivered ? 'white' : '#211F5C'}
                              >
                                  Delivered
                              </Text>
                          </Center>
                      </HStack>
                      {Processing ? (
                          <Box maxW={'lg'} mt="32px">
                              <Text>
                                  Your order is under processing. You will be notified when the Vendor
                                  has dispatched the materials.
                              </Text>
                              <Text mt={'32px'}>
                                  {' '}
                                  Delivery will be made on or before{' '}
                                  <Box as="span" fontWeight={'700'}>
                                      11 OCT 2021.
                                  </Box>{' '}
                              </Text>
                          </Box>
                      ) : (
                          ''
                      )}

                      {Dispatched ? (
                          <Box maxW={'lg'} mt="32px">
                              <Text mt={'32px'}>
                                  {' '}
                                  The Vendor has dispatched your materials. It should get to you on or
                                  before{' '}
                                  <Box as="span" fontWeight={'700'}>
                                      11 OCT 2021.
                                  </Box>{' '}
                              </Text>
                          </Box>
                      ) : (
                          ''
                      )}

                      {Delivered ? (
                          <>
                              <Box mt="32px">
                                  <Text color={'#303030'} fontSize="20px" fontWeight={'700'}>

                                      Confirm the delivery and specification accuracy of your materials
                                  </Text>

                              </Box>
                              <Box mt="32px" maxW="xl"> <Text>
                                  Your  material under this RFQ has been delivered by Builders First Source.
                                  You have until 7 days to confirm the specification accuracy. After which, the
                                  system will automatically confirms it.
                              </Text></Box>
                              <ReportIssueModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                              <HStack mt={"32px"} spacing="20px">

                                  <Button onClick={handleRatings}>Confirm Delivery</Button>

                                  <Button onClick={onOpen} background="#211F5C" color='#FFF' >Report Issue</Button>
                              </HStack>
                          </>

                      ) : (
                          ''
                      )}
                  </>
              ) : ("")
          }

          {
              Review ? (
                  <>
                      <Box pl="0px">
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
                              <Text>On-Time Delivery</Text>
                              <HStack>
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                              </HStack>
                              <Text mt="10px">Defect Control</Text>
                              <HStack>
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                              </HStack>
                          </SimpleGrid>
                          <SimpleGrid columns={{ md: 4, base: 1 }} mt="20px">
                              <Text>Effective Communication</Text>
                              <HStack>
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                              </HStack>
                              <Text mt="10px">Specification Accuracy</Text>
                              <HStack>
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
                                  <BiStar />
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
                          <SimpleGrid mt="20px" maxWidth={"320px"} columns={{ base: 1, md: 2 }} spacing={"30px"}>
                              <Box >
                                  <Text fontWeight={"bold"}>Delivery Pictures</Text>
                                  <Text fontSize={"12px"}>Attach 1 or more files</Text>
                              </Box>
                              <Box w="250px"><Input border="2px dashed black" type='file'></Input></Box>
                          </SimpleGrid>
                          <Box mt="30px"><Button children={"Submit"} /></Box>
                      </Box>
                  </>
              ) : ("")
          }
      </>
  )
}

export default ContractDelivery