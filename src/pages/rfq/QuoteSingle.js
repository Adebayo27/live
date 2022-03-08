import React, { useEffect, useState } from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import PaymentModal from './RfqModals/PaymentModal';
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  theme,
  Center,
  VStack,
  LinkBox,
} from '@chakra-ui/react';
import Select from '../../components/Select';
import { FaEye } from 'react-icons/fa';
import Option from './Components/Option';
import RfqQuote from './RfqQuote';
import RequestQ from './RequestQ';
import { HiDownload } from 'react-icons/hi';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function QuoteSingle({ onClick }) {
  const [contractSent, setcontractSent] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    let binding_contract = localStorage.getItem('binding');
    if (binding_contract) {
      setcontractSent(true);
      localStorage.removeItem('binding');
    }
  }, []);

  return (
    <>
      <PaymentModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} setAlert={setAlert} />
      <HStack cursor={'pointer'} mb="30px">
        <IoIosArrowBack />
        <Text onClick={onClick}>Go back</Text>
      </HStack>
      <SimpleGrid
        spacing={'20px'}
        maxWidth={'600px'}
        columns={{ base: 3, md: 3 }}
      >
        <Text fontWeight={'bold'}>Vendor</Text>
        <Text>Builders First Soruces</Text>
        <LinkBox as={Link} to="/rfq/vendorprofile">
          <Text color="blue.blue500" cursor={'pointer'} fontWeight={'bold'}>
            View Profile
          </Text>
        </LinkBox>
      </SimpleGrid>
      <SimpleGrid
        spacing={'0px'}
        mt={{ md: '36px', base: '25px' }}
        maxWidth={'410px'}
        columns={{ base: 1, md: 2 }}
      >
        <Text fontWeight={'bold'}>Delivery Date</Text>
        <Text mt={{ base: '10px', md: '0px' }}>11 OCT 2021</Text>
      </SimpleGrid>
      <Flex cursor={'pointer'}>
        {' '}
        <Spacer /> <HiDownload
          size={22}
          color={theme.colors.orange[500]}
        />{' '}
        <Text color={theme.colors.orange[500]}>Dowload as PDF</Text>
      </Flex>

      <Box mt="40px" overflowY={'auto'}>
        <Table variant="striped" color="background">
          <Tbody>
            <Tr>
              <Td fontSize={'16px'} color="#303030">
                S/N
              </Td>
              <Td fontSize={'16px'} color="#303030">
                Item Name
              </Td>
              <Td fontSize={'16px'} color="#303030">
                Description / Type
              </Td>
              <Td fontSize={'16px'} color="#303030">
                Measurement
              </Td>
              <Td fontSize={'16px'} color="#303030">
                Quantity
              </Td>
              <Td fontSize={'16px'} color="#303030">
                Price Per Unit
              </Td>
              <Td color="#303030">Discount</Td>
              <Td color="#303030">Total Price</Td>
            </Tr>
            <Tr>
              <Td color="#303030" fontSize="16px" fontWeight="normal">
                1
              </Td>
              <Td color="#303030">Grannite</Td>
              <Td color="#303030">Kashmir grannite</Td>
              <Td color="#303030">Tonnes</Td>
              <Td color="#303030">5</Td>
              <Td color="#303030">$1,000</Td>
              <Td color="#303030">4%</Td>
              <Td color="#303030">$9,600</Td>
            </Tr>
            <Tr>
              <Td color="#303030">2</Td>
              <Td color="#303030">Grannite</Td>
              <Td color="#303030">Tan Brown grannite</Td>
              <Td color="#303030">Tonnes</Td>
              <Td color="#303030">10</Td>
              <Td color="#303030">$1,000</Td>
              <Td color="#303030">4%</Td>
              <Td color="#303030">$9,600</Td>
            </Tr>
            <Tr>
              <Td color="#303030">3</Td>
              <Td color="#303030">Sand</Td>
              <Td color="#303030">Tan Brown grannite</Td>
              <Td color="#303030">Tonnes</Td>
              <Td color="#303030">5</Td>
              <Td color="#303030">$1,000</Td>
              <Td color="#303030">5%</Td>
              <Td color="#303030">$5,300</Td>
            </Tr>
            <Tr>
              <Td color="#303030">4</Td>
              <Td color="#303030">Logistic</Td>
              <Td color="#303030">$13, 100</Td>
              <Td color="#303030"></Td>
              <Td color="#303030">1</Td>
              <Td color="#303030">$5,000</Td>
              <Td color="#303030">4%</Td>
              <Td color="#303030">$5,600</Td>
            </Tr>
            <Tr>
              <Td color="#303030"></Td>
              <Td color="#303030"></Td>
              <Td color="#303030"></Td>
              <Td color="#303030"></Td>
              <Td color="#303030"></Td>
              <Td color="#303030"></Td>
              <Td fontSize={'25px'} color="#303030">
                Total
              </Td>
              <Td fontSize={'25px'} fontWeight={'bold'} color="#303030">
                $20,232
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <SimpleGrid
        spacing={'25px'}
        mt={{ base: '20px', md: '50px' }}
        maxWidth={'800px'}
        columns={{ base: 1, md: 3 }}
      >
        <Center
          textAlign="center"
          mt={{ base: '20px', md: '0px' }}
          borderRadius={'8px'}
          h="161px"
          bg="#A2CEF9"
        >
          <Box>
            <Text fontSize="20px">Budget</Text>
            <Text fontWeight={'bold'} fontSize="25px">
              $30,000
            </Text>
          </Box>
        </Center>
        <Center
          textAlign="center"
          mt={{ base: '20px', md: '0px' }}
          borderRadius={'8px'}
          h="161px"
          bg="#A2CEF9"
        >
          <Box>
            <Text fontSize="20px">Proposed Cost</Text>
            <Text fontWeight={'bold'} fontSize="25px">
              $20,230
            </Text>
          </Box>
        </Center>
        <Center
          textAlign="center"
          mt={{ base: '20px', md: '0px' }}
          borderRadius={'8px'}
          h="161px"
          bg="#A2CEF9"
        >
          <Box>
            <Text fontSize="20px">Margin</Text>
            <Text fontWeight={'bold'} fontSize="25px">
              +$6,770
            </Text>
          </Box>
        </Center>
      </SimpleGrid>
      {contractSent ? (
        <>
          {' '}
          <Flex mt="32px">
            <Text>
              You will be notified when this vendor signs the{' '}
              <Box as="span" fontWeight={'bold'}>
                {' '}
                binding contract.
              </Box>{' '}
              Afterwhich you will proceed to payment{' '}
            </Text>
          </Flex>
          <SimpleGrid
            maxWidth={{ base: '100%', md: '450px' }}
            columns={{ base: 1, md: 2 }}
            mt="40px"
          >
            <Button onClick={onOpen}>Proceed to Payment</Button>
            <Button background="white" color="#303030">
              View Contract
            </Button>
          </SimpleGrid>
          <Flex mt="32px">
            <Text fontSize={'12px'}>
              <Box as="span" fontWeight="bold">
                Note:
              </Box>{' '}
              The vendor won’t have access to the payment until you confirm the
              delivery and specification quality of the materials
            </Text>
          </Flex>
        </>
      ) : (
        <>
          <Flex mt="32px">
            <Text>
              To approve, issue binding contract, and proceed to payment, click
              on the button below{' '}
            </Text>
          </Flex>
          <LinkBox as={Link} to="/rfq/request/binding-contract">
            <Box mt="40px" p>
              <Button>Send Contract</Button>
            </Box>
          </LinkBox>
        </>
      )}
      {alert && (
        <Alert
          borderLeft={'5px solid #38A169'}
          bg={'#c6f6d5'}
          mt={'32px'}
          status="success"
          w={{ base: '100%', md: '250px' }}
          rounded={6}
        >
          <AlertIcon color="green" fontSize="16px" fontWeight="400" />
          <AlertDescription>Payment successful</AlertDescription>
          <CloseButton
            position="absolute"
            right="0px"
            top={{ base: '8px', md: '8px' }}
            onClick={() => setAlert(!alert)}
          />
        </Alert>
      )}
    </>
  );
}

export default QuoteSingle;
