import React, { useEffect, useState } from 'react'
import DashboardWrapper from '../../layouts/dashboard';
import { IoIosArrowForward } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  HStack,
  Stack,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
  Tab,
} from '@chakra-ui/react';
import Select from '../../components/Select';
import { FaEye } from 'react-icons/fa';
import RfqQuote from './RfqQuote';
import RequestQ from './RequestQ';
import Delivery from './Delivery';
import { httpWithToken } from '../../services/queries';
import { Link, useParams } from 'react-router-dom';

function RfqBody() {
  const [requestDetails, setRequestDetails] = useState(null)
  let params = useParams()
  const fetchRequestDetails = async () => {
    let query = `
    query{
      rfqRequest(id:${params.request_id}){
        id
        budget
        budget_visibility
        delivery_date
        delivery_address
        request_type
        tax_percentage
        task
        rfq_category_id{
          id
          title
        }
        
        rfq_project_id{
          id
          title
        }
        title
        qoute_deadline
        rfq_qoutes{
          id
          company_id{
            id
            name
          }
        }
        
      }
    }
    `

    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      setRequestDetails(response.data.rfqRequest)
    }
  }

  useEffect(()=>{
    fetchRequestDetails()
  }, [])
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
        <Text pr="3px" as={Link} to={`/rfq`}>RFQ </Text>

        &gt;
        <Text pl="3px" pr="3px" as={Link} to={`/rfq/${params.id}/list`}>{requestDetails?.rfq_project_id.title}</Text>
        &gt;
        <Text pl="3px" pr="3px">{requestDetails?.title}</Text>
        {/* &gt;
        <Text pl="3px" pr="3px">Builders Firt Souce</Text> */}
      </Flex>
      <Stack spacing={'40px'}>
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
            <Text>{requestDetails?.title}</Text>

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
            <Text>{requestDetails?.rfq_category_id.title}</Text>
            <MdModeEdit cursor={'pointer'} />
          </HStack>
        </SimpleGrid>
      </Stack>

      <Tabs mt="48px">
        <TabList>
          <Tab _selected={{ borderBottomColor: 'orange.orange500', color: "blue.blue500" }} color="gray.gray300" fontSize={"16px"} pl="0px">Request</Tab>
          <Tab  _selected={{ borderBottomColor: 'orange.orange500', color: "blue.blue500"  }} color="gray.gray300">Quote</Tab>
          <Tab  _selected={{ borderBottomColor: 'orange.orange500', color: "blue.blue500"  }} color="gray.gray300">Delivery</Tab>
        </TabList>

        <TabPanels>
          <TabPanel pl="0px">
            <RequestQ data={requestDetails}/>
          </TabPanel>
          <TabPanel pl="0px">
              <RfqQuote/>
          </TabPanel>
          <TabPanel pl="0px">
              <Delivery/>
          </TabPanel>
        </TabPanels>
      </Tabs>

      
    </DashboardWrapper>
  )
}

export default RfqBody