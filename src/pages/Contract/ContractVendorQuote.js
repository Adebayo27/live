import { Box, Button, HStack, InputGroup, SimpleGrid, Stack, Table, Tbody, Td, Text, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri'
import Input from '../../components/Input'

function ContractVendorQuote() {
  return (
      <>
          <SimpleGrid columns={{ base: '1', md: '2' }} spacing={{ base: '5', md: '10' }} w='55%' mt={{ base: '6', md: '12' }}>
              <Box>
                  <Text fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030' mr='3'>Delivery Date</Text>
                  <Text fontStyle='normal' fontWeight='normal' fontSize='12px' color='#303030' mr='3'>When can you deliver?</Text>
              </Box>
              <Box>
                  <InputGroup border='1px solid #606060' borderRadius='8px'>
                      <Input placeholder='09 OCT 2021' type='date' />
                  </InputGroup>
              </Box>
          </SimpleGrid>
          <HStack justifyContent='right' mt='5'>
              <HiDownload color='#F5862E' />
              <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#F5862E'>Download as PDF</Text>
          </HStack>

          <Box overflowY={"auto"}>
              <Table mt={6} size='md'>
                  <Thead bg='#EEF3FF' color='#303030'>
                      <Tr>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >S/N</Td>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Item name</Td>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Description / Type</Td>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Measurement</Td>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Quantity</Td>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Price / Unit</Td>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Discount</Td>
                          <Td fontStyle='normal' fontWeight='bold' fontSize='16px' >Total Price</Td>
                      </Tr>
                  </Thead>
                  <Tbody>
                      <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg=' #FFFFFF' color='#303030'>
                          <Td >1</Td>
                          <Td >Grannite</Td>
                          <Td >
                              Kashmir grannite
                          </Td>
                          <Td >Tonnes</Td>
                          <Td >10</Td>
                          <Td >$1,000</Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>4%</Text></HStack></Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>$9,600</Text></HStack></Td>
                      </Tr>
                      <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg='#EEF3FF' color='#303030'>
                          <Td >2</Td>
                          <Td >Grannite</Td>
                          <Td >Tan Brown grannite</Td>
                          <Td >Tonnes</Td>
                          <Td >5</Td>
                          <Td >$460</Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>5%</Text></HStack></Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>$2,912</Text></HStack></Td>
                      </Tr>
                      <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg=' #FFFFFF' color='#303030'>
                          <Td >3</Td>
                          <Td >Sand</Td>
                          <Td >
                              Mansory sand
                          </Td>
                          <Td >Tonnes</Td>
                          <Td >12</Td>
                          <Td >$1,000</Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>3%</Text></HStack></Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>$9,600</Text></HStack></Td>
                      </Tr>
                      <Tr fontStyle='normal' fontWeight='normal' fontSize='16px' bg='#EEF3FF' color='#303030'>
                          <Td >4</Td>
                          <Td >Logistics</Td>
                          <Td ></Td>
                          <Td >Tonnes</Td>
                          <Td >1</Td>
                          <Td >$500</Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>2%</Text></HStack></Td>
                          <Td textAlign='center' ><HStack><VStack><RiArrowDropUpFill /><RiArrowDropDownFill /></VStack><Text>$500</Text></HStack></Td>
                      </Tr>
                  </Tbody>
              </Table>
          </Box>
          <Box mr='10' mt='5'>
              <HStack justifyContent='right'>
                  <Text fontStyle='normal' mr='39' fontWeight='normal' fontSize='25px' color='#303030'>Total</Text>
                  <Text fontStyle='normal' fontWeight='bold' fontSize='25px' color='#303030'>$20,232</Text>
              </HStack>
          </Box>
          <Stack mt='10' direction={['column', 'row']}>
              <Button variant='none' w='172px' h='56px' borderRadius='8px' background='#F5862E'>View Contact</Button>
              <Button variant='none' w='172px' h='56px' borderRadius='8px' background='#FFFFFF' color='black' border='1px solid black'>Chat Vendor</Button>
          </Stack>
      </>
  )
}

export default ContractVendorQuote