import { Avatar, Box, Button, Center, HStack, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { MdChevronRight } from 'react-icons/md'
import DashboardWrapper from '../../layouts/dashboard';
import ContractVendorQuote from './ContractVendorQuote'


function ContractVendor() {
    const toast = useToast();

    return (
        <DashboardWrapper pageTitle='Bid Board'>
            <Box p='3'>
                <Box>
                    <HStack flexWrap='wrap' direction={['column', 'row']}>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#211F5C'>Contracts</Text>
                        <MdChevronRight />
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#211F5C'>Granite and White Stone Needed</Text>

                    </HStack>
                </Box>
                <Stack direction={['row', 'null']} mt='5' spacing={{ base: '13', md: '25' }} >
                    <Avatar src="/assets/images/avatar.png" w={{ base: '55', md: '110px' }} h={{ base: '55', md: '110px' }} />
                    <VStack mr='8'>
                        <Text mb='5'>Construct Limited</Text>
                        <Box borderRadius='8px' border='1px solid'>
                            <Button variant='none' bg='#FFFFFF' fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>
                                Chat Client
                            </Button>
                        </Box>
                    </VStack>
                </Stack>

                <SimpleGrid columns={{ base: '1', md: '2' }} spacing={10} w='70%' mt='12'>
                    <Box>
                        <Text fontStyle='normal' fontWeight='600' fontSize='16px' color='#303030'>Title</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030' mr='3'>Quotation title</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='600' fontSize='16px' color='#303030'>Type</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Sand and stone</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='600' fontSize='16px' color='#303030'>Expected Delivery Date</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>11 OCT 2021</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='600' fontSize='16px' color='#303030'>Site Location</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>3, faith street, Isale Abetu, Abeokuta, Ogun State.</Text>
                    </Box>
                </SimpleGrid>

                <Tabs mt={{ base: '10', md: '20' }} direction={['column', 'row']} >
                    <TabList>
                        <Tab _selected={{ borderBottomColor: 'orange.orange500', color: "blue.blue500" }} color="gray.gray300" fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Quotes</Tab>
                        <Tab _selected={{ borderBottomColor: 'orange.orange500', color: "blue.blue500" }} color="gray.gray300" fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Delivery</Tab>
                        <Tab _selected={{ borderBottomColor: 'orange.orange500', color: "blue.blue500" }} color="gray.gray300" fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Feedback</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ContractVendorQuote />
                        </TabPanel>
                        <TabPanel>
                            <Tabs variant="unstyled">
                                <TabList diider='none'>
                                    <Stack mt='10' spacing={{ base: '40px', md: '80PX' }} direction={{ base: 'column', md: 'row' }} >
                                        <Tab w='80px' h=' 80px' bg='#211F5C' borderRadius='100%'>
                                            <Center color=' white'>
                                                <Text fontStyle='normal' fontWeight='normal' fontSize='12px' color='#FFFFFF'>Processing</Text>
                                            </Center>
                                        </Tab>
                                        <Tab w='80px' h=' 80px' bg='#FFFFFF' borderRadius='100%' border='2px solid #211F5C'>
                                            <Center color='white'>
                                                <Text fontStyle='normal' fontWeight='normal' fontSize='12px' color='#211F5C'>Dispatch</Text>
                                            </Center>
                                        </Tab>
                                        <Tab w='80px' h=' 80px' bg='#FFFFFF' borderRadius='100%' border='2px solid #211F5C'>
                                            <Center color='white'>
                                                <Text fontStyle='normal' fontWeight='normal' fontSize='12px' color='#211F5C'>Deliver</Text>
                                            </Center>
                                        </Tab>

                                    </Stack>
                                </TabList>

                                <TabPanels >
                                    <TabPanel>
                                        <Box bg='#FFFFFF' borderRadius='8px' w={{ base: '222px', md: '448px' }} mt='19'>
                                            <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>The Client has paid for the materias. Click the button below
                                                to confirm dispatch when you have done that. Delivery must
                                                be made on or before  <b>09 OCT 2021.</b></Text>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box bg='#FFFFFF' borderRadius='8px' w={{ base: '222px', md: '448px' }} mt='19'>
                                            <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>The client’s material has been dispatched. Click the button
                                                below to confirm delivery when you have done so. Delivery
                                                must be made on or before  <b>09 OCT 2021.  </b></Text>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box bg='#FFFFFF' borderRadius='8px' w={{ base: '222px', md: '448px' }} mt='19'>
                                            <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>You have successfully deliverered the materials to the
                                                client. You will be notified when the client confirms the
                                                delivery and specification accuracy.</Text>
                                        </Box>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            <Button mt='19' w='172px' h='56px' borderRadius='8px' bg='#F5862E'>Confirm Dispatch</Button>
                        </TabPanel>
                        <TabPanel>
                            <Box w={{ base: '245px', md: '561px' }}>
                                <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>The client asked for resupply. Check below for the detail. Attend to the client
                                    issue and clicked on resolve when you have done that.</Text>
                            </Box>
                            <SimpleGrid columns={{ base: '1', md: '2' }} spacing={6} w='40%' mt='8'>
                                <Box>
                                    <Text fontStyle='normal' fontWeight='bold' fontSize='16px' color='#000000'>Reason </Text>
                                </Box>
                                <Box>
                                    <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#000000' mr='3'>Defect</Text>
                                </Box>
                                <Box>
                                    <Text fontStyle='normal' fontWeight='bold' fontSize='16px' color='#000000'>Message</Text>
                                </Box>
                                <Box w={{ base: '200px', md: ' 223px' }}>
                                    <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#000000'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim ultrices at convallis.</Text>
                                </Box>
                                <Box>
                                    <Text fontStyle='normal' fontWeight='bold' fontSize='16px' color='#000000'>Upload</Text>
                                </Box>
                                <Box>
                                    <HStack mb='5'>
                                        <VStack>
                                            <HStack><Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#000000'>Filename.jpg</Text><HiDownload color='#F5862E' /></HStack>
                                            <HStack><Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#000000'>Filename.jpg</Text><HiDownload color='#F5862E' /></HStack>
                                            <HStack><Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#000000'>Filename.jpg</Text><HiDownload color='#F5862E' /></HStack>
                                        </VStack>
                                    </HStack>
                                    <Button mt='19' w='172px' h='56px' borderRadius='8px' bg='#F5862E'
                                        onClick={() =>
                                            toast({
                                                description:
                                                    'You confirmation has been made. You would be notified when the client confirms the resupply',
                                                //   status: "error",
                                                duration: 2000,
                                                isClosable: true,
                                            })
                                        }
                                    >
                                        Confirm Dispatch
                                    </Button>
                                </Box>
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </DashboardWrapper >
    )
}

export default ContractVendor

