import React, { useState } from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import { IoIosArrowForward } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Spacer,
  WrapItem,
  Wrap,
  Table,
  Th,
  Tr,
  Tbody,
  Thead,
  Td,
  Tfoot,
  TableCaption,
  useDisclosure,
  HStack,
  Stack,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
  Tab,
  Checkbox,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import Logo from '../../components/Logo';
import { HiDownload } from 'react-icons/hi';
import Button from '../../components/Button';
import SendBindingModal from './RfqModals/SendBindingModal';

export default function BindingContract() {
  const [agree, setAgree] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alert, setAlert] = useState(false);

  return (
    <DashboardWrapper pageTitle="Request For Quote">

      <SendBindingModal isOpen={isOpen} onOpen={onOpen} setAlert={setAlert} onClose={onClose} />

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
        <Text pl="3px" pr="3px">
          Quotation title
        </Text>
        &gt;
        <Text pl="3px" pr="3px">
          Binding Contract
        </Text>
      </Flex>


      <Flex>
        <Logo />
        <HStack color="orange.orange500" w="100%" justify="right">
          <HiDownload color="orange.orange500" />
          <Text fontSize="16px" color="orange.orange500">
            Download as PDF
          </Text>
        </HStack>
      </Flex>

      <Box mt={'89.93'} pr={{ base: 0, md: '90px' }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis est
          egestas fermentum. Venenatis eget massa scelerisque eleifend aliquet.
          Ut volutpat id tortor tortor, pulvinar. Facilisi pellentesque at felis
          tortor nascetur nisl, duis ut malesuada. Enim ut in neque malesuada.
          Sodales vehicula ante sed volutpat. Turpis sit tortor tempus in
          iaculis purus tortor, sit. Blandit sed sit at in justo, sed enim.
          Mauris ante eu quam ut luctus. Ipsum sit volutpat vehicula vulputate
          sem. Est consequat fermentum bibendum vestibulum et morbi mi dolor.
          Arcu sagittis eget turpis interdum. Rhoncus, est, vulputate id
          phasellus lectus amet mattis nulla accumsan. Amet enim diam amet,
          vulputate amet purus. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis est
          egestas fermentum. Venenatis eget massa scelerisque eleifend aliquet.
          Ut volutpat id tortor tortor, pulvinar. Facilisi pellentesque at felis
          tortor nascetur nisl, duis ut malesuada. Enim ut in neque malesuada.
          Sodales vehicula ante sed volutpat. Turpis sit tortor tempus in
          iaculis purus tortor, sit. Blandit sed sit at in justo, sed enim.
          Mauris ante eu quam ut luctus. Ipsum sit volutpat vehicula vulputate
          sem. Est consequat fermentum bibendum vestibulum et morbi mi dolor.
          Arcu sagittis eget turpis interdum. Rhoncus, est, vulputate id
          phasellus lectus amet mattis nulla accumsan. Amet enim diam amet,
          vulputate amet purus. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis est
          egestas fermentum. Venenatis eget massa scelerisque eleifend aliquet.
          Ut volutpat id tortor tortor, pulvinar. Facilisi pellentesque at felis
          tortor nascetur nisl, duis ut malesuada. Enim ut in neque malesuada.
          Sodales vehicula ante sed volutpat. Turpis sit tortor tempus in
          iaculis purus tortor, sit. Blandit sed sit at in justo, sed enim.
          Mauris ante eu quam ut luctus. Ipsum sit volutpat vehicula vulputate
          sem. Est consequat fermentum bibendum vestibulum et morbi mi dolor.
          Arcu sagittis eget turpis interdum. Rhoncus, est, vulputate id
          phasellus lectus amet mattis nulla accumsan. Amet enim diam amet,
          vulputate amet purus.
        </Text>
      </Box>

      <HStack mt="62px" spacing="80px">
        <Text fontWeight="700">You</Text>
        <Checkbox onChange={e => setAgree(e.target.checked)}>
          <Text fontWeight="400" color="#303030" fontSize={'16px'}>
            I agree to this contract
          </Text>
        </Checkbox>
      </HStack>
      <HStack mt="32px" spacing="52px">
        <Text color="gray.gray200">Vendor</Text>
        <Checkbox disabled>
          <Text fontWeight="400" color="gray.gray200" fontSize={'16px'}>
            I agree to this contract
          </Text>
        </Checkbox>
      </HStack>

      <Box mt={'38px'}>
        <Button disabled={!agree && true} onClick={onOpen}>
          Send Contract
        </Button>
      </Box>

      <Stack mt={'32px'} spacing="15px">
        <Text>
          Want to upload your own contract instead?.{' '}
          <Link color={'blue.600'}>Click here</Link> to continue
        </Text>
        <Text>
          {' '}
          <Link fontWeight={'700'} fontSize={'16px'} color={'#303030'}>
            Note:
          </Link>{' '}
          LiveVend Bulk won’t be liable to the result of your uploaded contract
          in future.{' '}
        </Text>
      </Stack>
      {
        alert ? (
            <Alert borderLeft={"5px solid #38A169"} bg={'#c6f6d5'} mt={"32px"} status='success' w={{base:'100%', md:'878px'}} rounded={6}>
            <AlertIcon color='green' fontSize='16px' fontWeight='400'/>
            <AlertDescription>Successful. You’ll be notified when the vendor signs the contract so that you can proceed to payment.</AlertDescription>
            <CloseButton position='absolute' right='0px'  top={{base: "25px", md: "8px"}} onClick={()=>setAlert(!alert)}/>
            </Alert>
        ):("")
    }
    </DashboardWrapper>
  );
}
