import {
    Box, Stack, Text, Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Divider,
    useColorModeValue, HStack, Checkbox, Button
} from '@chakra-ui/react'
import React from 'react'
import {default as CustomButton} from '../../components/Button';
import Logo from '../../components/Logo';
import BankDetails from './bank_details';
import Confirmation from './confirmation';
import Documents from './documents';
import LegalInfo from './legal_info';

export default function VendorWrapper() {
    const bg = useColorModeValue('white.500', 'gray.500');
    const color = useColorModeValue('black', 'gray.800');
    const [agree, setAgree] = React.useState('');
    return (
        <Box w={'100vw'}>
            <Stack>
                <Box px={'50px'} py={'20px'} boxShadow={'0px 4px 8px rgba(108, 106, 106, 0.1)'}>
                    <Logo />
                </Box>
                <Box px={{base:5, md:'200px'}} py={{base:5 ,md:'20px'}}>
                    <Stack>
                        <Text color={'#C0C0C1'} fontSize={'25px'} fontWeight={700}>Sign Up For 4 Weeks Free Trial</Text>
                        <Text color={'#000000'} fontSize={'12px'} fontWeight={400}>Subscribe for as low as $100 annually to keep exploring our features</Text>
                        <Box h={5}></Box>
                        <Text color={'#303030'} fontSize={'16px'} fontWeight={400}>
                            To be a verified vendor, as part of our onboarding process, you are required to complete our <br />
                            Know Your Customer (KYC) form.
                        </Text>
                        <Box h={5}></Box>
                        <Box>
                            <Tabs variant="unstyled" color={'#211F5C'}>
                                <TabList>
                                    <Tab px={0} ml={0}
                                        _selected={{
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'orange.500',
                                            color: 'blue.500',
                                        }}
                                    >
                                        Terms of Service
                                    </Tab>
                                    <Tab
                                        px={0}
                                        ml={5}
                                        _selected={{
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'orange.500',
                                            color: 'blue.500',
                                        }}
                                    >
                                        Legal Information
                                    </Tab>
                                    <Tab
                                        px={0}
                                        ml={5}
                                        _selected={{
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'orange.500',
                                            color: 'blue.500',
                                        }}
                                    >
                                        Bank Details
                                    </Tab>
                                    <Tab
                                        px={0}
                                        ml={5}
                                        _selected={{
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'orange.500',
                                            color: 'blue.500',
                                        }}
                                    >
                                        Documents
                                    </Tab>
                                    <Tab
                                        px={0}
                                        ml={5}
                                        _selected={{
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'orange.500',
                                            color: 'blue.500',
                                        }}
                                    >
                                        Confirmation
                                    </Tab>
                                </TabList>

                                <Divider ml={5} />
                                <TabPanels>
                                    <TabPanel>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque venenatis urna, libero lacus aliquet ut. Fringilla vitae velit sed convallis nunc non lectus. Euismod nibh facilisi ac rutrum nibh mauris dolor. Eget consectetur id semper suspendisse duis et commodo sed malesuada. Faucibus commodo, auctor hendrerit vitae orci. Non facilisis lorem amet dui. Neque, nascetur a lacus, sit eu fringilla cursus sit eget. Urna nisi, arcu ac pulvinar faucibus leo sit accumsan.
                                            Tristique eu, diam nisl viverra id sit purus faucibus non. Consequat massa nibh nulla dignissim in tristique semper quis. Et dolor nisl sed porttitor aliquam, nibh. Auctor cras dictumst cras pretium. Nascetur nisi, orci libero pellentesque ac. Tempus vel hendrerit mauris, sed. Potenti eget lacinia arcu feugiat maecenas quis pulvinar.
                                            <br /> <br />
                                            Nibh volutpat leo nulla in nascetur. Augue nibh diam vitae amet, non nulla augue aliquam. Sed pellentesque pellentesque elit, id. A pellentesque semper pulvinar blandit est pharetra adipiscing convallis. Ullamcorper purus pulvinar aliquam cursus sit. In nisl tellus, lacus, tempus massa adipiscing porta suscipit id. In interdum ultrices et vehicula platea viverra quis. Dignissim facilisi suscipit venenatis pulvinar. Quis et nullam lorem cursus mauris congue pellentesque orci, amet. Aliquet metus at neque duis ultricies id cras posuere. Mi, est sit leo feugiat.
                                            In at sit volutpat pellentesque eget. Metus etiam lectus dignissim vel felis nibh eget. Neque dictum neque pretium risus interdum nunc.
                                        </Text>
                                        <HStack mt="50px">
                                            <Checkbox onChange={e => setAgree(e.target.checked)}>
                                            <Text fontWeight="400" color="#303030" fontSize={'16px'}>
                                                I agree to the terms of service
                                            </Text>
                                            </Checkbox>

                                            
                                        </HStack>
                                        <Stack direction={'row'} mt={5}>
                                            <Button variant='none' w='160px' h='48px' borderRadius='8px' background='#FFFFFF' color='black' border='1px solid black'>Save and Exit</Button>
                                            <CustomButton colorScheme='blue' variant='outline'>
                                                Save and Continue
                                            </CustomButton>
                                        </Stack>
                                    </TabPanel>
                                    <TabPanel>
                                        <LegalInfo/>
                                    </TabPanel>
                                    <TabPanel>
                                        <BankDetails/>
                                    </TabPanel>
                                    <TabPanel>
                                        <Documents/>
                                    </TabPanel>
                                    <TabPanel>
                                        <Confirmation/>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}
