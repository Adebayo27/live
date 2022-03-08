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
  useToast,
} from '@chakra-ui/react';
import Button from '../../../components/Button';

function SendBindingModal({ isOpen, onOpen, onClose ,setAlert, alert }) {
  const toast = useToast();

  const closeAndToast = () => {
    onClose();
    localStorage.setItem("binding", "binding")
    setAlert(!alert)
    
  };
  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mt="40px">
          Do You Want to Send Binding Contract?
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Sending a binding contract to this vendor means that you have
            accepted the quote. Other vendors quotes will be rejected
            automatically when this vendor signs the contract.
          </Text>
        </ModalBody>

        <Box ml="25px" mb="32px" mt="32px">
          <Button onClick={closeAndToast}>Yes, Send</Button>
          <Button color="#303030" background="white">
            No, Go Back
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default SendBindingModal;
