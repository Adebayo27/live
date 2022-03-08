import { useDisclosure, useToast,Box, Icon, PseudoBox, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import Button from '../../components/Button';
import CompareModal from './RfqModals/CompareModal';
import PaymentModal from './RfqModals/PaymentModal';
import ReportIssueModal from './RfqModals/ReportIssueModal';
import SendBindingModal from './RfqModals/SendBindingModal';
import VendorCategoryModal from './RfqModals/VendorCategoryModal';
import VendorsInvitedModal from './RfqModals/VendorsInvitedModal';


function CallModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
  return (
    <div>
        {/* <VendorsInvitedModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
        {/* <ReportIssueModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
        {/* <PaymentModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
        <SendBindingModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        {/* <CompareModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
        {/* <VendorCategoryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/> */}
         <Button
    mt={{ base: '32px' }}
    size="sm"
    full={false}
    onClick={onOpen}
  >
   Call modal
  </Button>
  <Button
  onClick={() =>
    toast({
      title: 'Account created.',
      // description: "We've created your account for you.",
      // status: 'success',
      duration: 9000,
      isClosable: true,
      bg:" black"
    })
  }
>toast</Button>
  
  </div>
  )
}

export default CallModal