import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import DashboardWrapper from '../../layouts/dashboard'
import TabPills from './TabPills'


function VendorPage() {


  return ( 
    <Box>
        <DashboardWrapper>
            <TabPills />
        </DashboardWrapper>
    </Box>
  )
}

export default VendorPage