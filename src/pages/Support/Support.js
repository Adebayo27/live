import { Box, Flex, Heading, Text, VStack, Stack, HStack, Input, Textarea, Divider, useDisclosure, Spacer, Alert, AlertIcon, CloseButton} from '@chakra-ui/react';
import React from 'react'
import { FaLess } from 'react-icons/fa';
import Button from '../../components/Button';
import DashboardWrapper from '../../layouts/dashboard';
import Chat from './Chat';


export default function Support() {
    const [submitted, setSubmitted] = React.useState(false)

    const handleSubmit = () => {
     setSubmitted(true)
    }
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <DashboardWrapper pageTitle="Support">
          <Box w='full'>
    
                  <Flex direction='column' w='full'>

                      <Stack >
                      <Heading size='md' color="#C0C0C1"> Submit Support ticket </Heading>
                          <Text> Need help? We're ready to answer your question 24/7 </Text>
                      </Stack>
      
                      <HStack w={{base: '100%', md: '100%'}}>
                      <Flex alignItems='flex-start' justifyContent={'flex-start'} mt={10} mb={5} w='full' direction={{base: 'column', md: 'row'}} >

                              <Box direction='column' flex = "2">
                              <Heading size='sm' mb={3}> Subject </Heading>
                              <Text mb={{base: 3, md: ''}}>Input your issue subject</Text>
                              </Box>

                          <Box flex="4">
                              <Input w={{base: '100%', md: '50%'}} size={'lg'} placeholder='subject issue'></Input>
                         </Box>
                          </Flex>
                      </HStack>
                      

                      <HStack>
                      <Flex alignItems='flex-start' justifyContent={'flex-start'} w={'full'} direction={{base: 'column', md: 'row'}}>

                          <Flex direction='column' flex='2' >
                                  <Heading size='sm' mb={3}> Message </Heading>
                              <Text mb={{ base: 3, md: '' }}>Give support Message</Text>
                              </Flex>
                        
                          <Box flex='4'>
                              <Textarea w={{ base: '100%', md: '80%' }}  size={'lg'} rows={8} placeholder='I have an issue with your platform' ></Textarea>
                              <Box py={5}> <Button onClick={handleSubmit} >Submit</Button></Box>
                              </Box>
                          </Flex>
                      </HStack>
                  {/* <HStack alignItems={'center'} justifyContent='center' > </HStack> */}
                    
                      {/* <Divider mt={20}></Divider> */}
               {
                      submitted ? (<Box mb={10}>
                          <Alert bg={'#C6F6D5;'} status='success' variant='left-accent'>
                              <AlertIcon color={"green"} />
                              You ticket has been submitted. We will get back to you via email within the next 2 hours.
                              <CloseButton position='absolute' right='8px' top='8px' onClick={()=>setSubmitted(false)} />
                          </Alert>
                      </Box>) : ''
               }

                  <Stack spacing={5} direction={'column'}>
                      <Heading size={'lg'} color="#C0C0C1"> or use the chat support </Heading>
                      <Text>Have a live chat support with our member</Text>
                      {/* <HStack w='sm' >  <Chat /></HStack> */}
                      <HStack w='sm' ><Button>Start Live Chat</Button>

                       </HStack>
                  </Stack>
                  </Flex> 
          </Box>
          
      </DashboardWrapper>
  )
}
