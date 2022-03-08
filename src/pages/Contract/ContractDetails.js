import { Box, HStack, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import theme from '../../utils/theme'
import DashboardWrapper from '../../layouts/dashboard'
import ContractRequest from './ContractRequest'
import ContractQuote from './ContractQuote'
import ContractDelivery from './ContractDelivery'
function ContractDetails() {

    return (
        <DashboardWrapper pageTitle='Contracts'>
            <Box>
                <HStack flexWrap='wrap' direction={['column', 'row']}>
                    <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#211F5C'>Contract </Text>
                    <MdChevronRight />
                    <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#211F5C'>Railway Track. From Lagos to Ibadan</Text>
                    <MdChevronRight />
                    <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#211F5C'>Granite and Rod Needed</Text>
                </HStack>

                <SimpleGrid columns={{ base: '1', md: '2' }} spacing={'50px'} w='53%' mt='10'>
                    <Box>
                        <Text fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>Title</Text>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'    >Input your quotation title</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Granite and Rod Needed</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='bold' fontSize='16px' color='#303030'>Type</Text>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>What is your material type?</Text>
                    </Box>
                    <Box>
                        <Text fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Sand and stone</Text>
                    </Box>
                </SimpleGrid>
                <Tabs mt='20'>
                    <TabList>
                        <Tab _selected={{
                            borderBottomColor: theme.colors.orange.orange500,
                        }} fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Request</Tab>
                        <Tab _selected={{
                            borderBottomColor: theme.colors.orange.orange500,
                        }} fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Quotes</Tab>
                        <Tab _selected={{
                            borderBottomColor: theme.colors.orange.orange500,
                        }} fontStyle='normal' fontWeight='normal' fontSize='16px' color='#303030'>Delivery</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ContractRequest />
                        </TabPanel>
                        <TabPanel>
                            <ContractQuote />
                        </TabPanel>
                        <TabPanel>
                           <ContractDelivery />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box >
        </DashboardWrapper >
    )
}

export default ContractDetails