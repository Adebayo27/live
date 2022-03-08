import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  Box,
  Text,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Checkbox,
  HStack,
  theme,
  Spacer,
} from '@chakra-ui/react';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Input from '../../../components/Input';

function PaymentModal({ isOpen, onOpen, onClose, setAlert, alert }) {

  const closeAndAlert =()=>{
    onClose()
    setAlert(!alert)
  }
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mt="20px">Complete Your Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid spacing={'100px'} columns={2}>
            <Box>
              <Text>Vendor</Text>
            </Box>
            <Box>
              <Text>Builder First Source</Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid spacing={'100px'} mt="24px" columns={2}>
            <Box>
              <Text>Description</Text>
            </Box>
            <Box>
              <Text>Quotation Title</Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid spacing={'100px'} mt="24px" columns={2}>
            <Box>
              <Text>Cost</Text>
            </Box>
            <Box>
              <Text>$20,232</Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid spacing={'99px'} mt="24px" columns={2}>
            <Box>
              <Text fontSize={"16px"} fontWeight="bold">Withholding Tax(7.5%)</Text>
            </Box>
            <Box>
              <Text>-$232</Text>
            </Box>
          </SimpleGrid>

          <Box mt="8px">
            <Text fontSize={'12px'}>
              You are to remit the WHT to the neccessary quaters
            </Text>
          </Box>
          <SimpleGrid spacing={'100px'} mt="25px" columns={2}>
            <Box>
              <Text fontSize={'16px'} fontWeight="bold">
                Total
              </Text>
            </Box>
            <Box>
              <Text fontSize={'20px'} fontWeight="bold">
                $20,000
              </Text>
            </Box>
          </SimpleGrid>
          <Box mt="56px">
            <Select placeholder="Mastercard ******* 2134"></Select>
          </Box>
          <Box mt="32px">
            <Text>Enter the three-digit security code on your card</Text>
          </Box>
          <Box mt="14px" w="102px">
            <Input placeholder="124" label="CVV"></Input>
          </Box>
        </ModalBody>

        <Box ml="25px" mb="32px" mt="32px">
          <Button onClick={closeAndAlert}>Pay</Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default PaymentModal;
