import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import SidebarVendor from './SidebarVendor';
import Topbar from './Topbar';

export default function DashboardWrapper({
  children,
  pageTitle = 'Compliance',
  padding = '4',
  background = '#fff',
}) {
  const sidebar = useDisclosure();
  
  const isVendor = localStorage.getItem('user_role') == "individual" ? false : true
  return (
    <Box as="section" bg={'background'} minH="100vh" overflowX={'hidden'}>
      {
        isVendor ?
        <SidebarVendor display={{ base: 'none', md: 'unset' }} /> :
        <Sidebar display={{ base: 'none', md: 'unset' }} />

      }
      
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{ base: 0, md: '240px' }}
        transition=".3s ease"
        pos="relative"
        zIndex={'100'}
      >
        <Topbar sidebar={sidebar} pageTitle={pageTitle} />
        <Box as="main" p={{ base: '0px', md: '32px' }} pos={'relative'}>
          <Container
            maxW="100%"
            borderRadius={'8px'}
            pos={'relative'}
            p={padding}
            bg={background}
            overflow={'hidden'}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
