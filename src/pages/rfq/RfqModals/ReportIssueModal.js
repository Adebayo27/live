import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    SimpleGrid,
    Box,
    Text,
    Textarea,
    Center,
    HStack
  } from '@chakra-ui/react';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { AiOutlinePlus } from 'react-icons/ai';

function ReportIssueModal({ isOpen, onOpen, onClose }) {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader mt="20px">Report Issue</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <SimpleGrid  columns={2} >
          <Box>
            <Text fontWeight={"bold"}>Reason</Text>
            <Text mt="8px" fontSize={"12px"}>What is the issue?</Text>
          </Box>
          <Box>
            <Select placeholder='Defect'></Select>
          </Box>
        </SimpleGrid>
        <SimpleGrid mt="24px"  columns={2}>
          <Box>
            <Text fontWeight={"bold"}>Message</Text>
            <Text mt="8px" fontSize={"12px"}>Leave a message for the supplier</Text>
          </Box>
          <Box>
          <Textarea h="126px" resize={"none"} placeholder='' />
          </Box>
        </SimpleGrid>
        <SimpleGrid mt="24px" columns={2}>
          <Box>
            <Text fontWeight={"bold"}>Proof</Text>
            <Text mt="8px" fontSize={"12px"}>Attach 1 or more files as proof</Text>
          </Box>
          <Center alignItems={"center"} border={"1px dashed #606060"}  borderRadius="5px"> 
                <HStack>
                <AiOutlinePlus pl="13.99px" />
                <Text >  Upload CSV / XLSX </Text>

                </HStack>
              
            </Center>
        </SimpleGrid>

      </ModalBody>

      <Box m="auto" mb="32px" mt="32px">
        <Button onClick={onClose}>Send</Button>
      </Box>
    </ModalContent>
  </Modal>
  )
}

export default ReportIssueModal