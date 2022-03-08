import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
    SimpleGrid,
    GridItem,
    Text,
    Flex,
    Heading,
    Stack,
    Spacer
} from '@chakra-ui/react';
import Button from '../../components/Button';
import Input from '../../components/Input';



export default function AddMember({ isOpen, onOpen, onClose }) {
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />

            <ModalContent bg="white" m={{ base: 5, md: 0 }} alignItems={{ base: 'flex-start', md: 'flex-start'}} justifyContent='center' p={5}>
           
            
              
             <ModalHeader mx={-6}>Add Member</ModalHeader>
              <SimpleGrid columns={6} rowGap={6} spacingX={2}>
                  <GridItem colSpan={{base:6, md: 2}}>
                        <Flex direction='column'>
                            <Heading size='sm'>Name</Heading>
                            <Text fontSize='sm'>Member full Name</Text>
                        </Flex>
                        </GridItem>

                       <GridItem colSpan={{base:6, md: 2}} >

                            <Input size={'lg'} placeholder='First Name'></Input>
                       </GridItem>
                            <GridItem colSpan={{base:6, md:2}}>
                            <Input size={'lg'} placeholder='Last Name'></Input>

                            </GridItem>
                           
                        <GridItem colSpan={{base: 6, md: 2}} >
                        <Flex direction='column'>
                            <Heading size='sm'>Email</Heading>
                            <Text fontSize='sm'>Member's email address</Text>
                        </Flex>
                        </GridItem>

                        <GridItem colSpan={{base: 6, md: 4}}>
                        <Input size={'lg'} placeholder='Email'></Input>
                        </GridItem>
                 
                  <GridItem gridColumn={{base: 1, md: 3}} >
                        <Button>Invite Member</Button>
                  </GridItem>
              </SimpleGrid>
                <ModalCloseButton />
            </ModalContent>
        </Modal>
    );
}