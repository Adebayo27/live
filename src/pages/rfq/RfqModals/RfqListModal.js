import React, { useState } from 'react';
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
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { httpWithToken } from '../../../services/queries';

function RfqListModal({ isOpen, onOpen, onClose, category, data }) {

  const [title, setTitle] = useState('')
  const history = useHistory()
  const [loading, setloading ] = useState(false)
  const [selectedcategory, setCategory] = useState('')
  const handleCreateRFQ = async () => {
    setloading(true)
    let query = `
      mutation{
        createRfqRequest(input: {
          data: {
            title: "${title}"
            rfq_project_id: ${data}
            rfq_category_id: ${selectedcategory}
            rfq_delivery_confirmation: false
          }
        }){
          rfqRequest{
            id
          }
        }
      }
    `
    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      setloading(false)
      history.push(`/rfq/${data}/request/${response.data.createRfqRequest.rfqRequest.id}`)
    }
  } 

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent bg="white" mt="32px">
        <ModalHeader>Request For Quote</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SimpleGrid columns={{ base: 1, md: 2 }} mr="32px" ml={{}}>
            <Box mb="8px">
              <Text fontSize="16px">Title</Text>
              <Text fontSize="12px">Input your quote</Text>
            </Box>
            <Box mb={{ base: '50px', md: '82px' }}>
              <Input
                placeholder="Quote Title"
                label="Quote Title"
                id="quote"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Box>
            <Box mb="8px">
              <Text fontSize="16px">Category</Text>
              <Text fontSize="12px">Input your quote</Text>
            </Box>
            <Box mb="8px">
              <Select
                placeholder="Send/Store"
                id="category"
                value={selectedcategory}
                onChange={(e)=>setCategory(e.target.value)}
              >
                {
                  category.map((e,i) => (
                    <option value={e.id} key={i}>
                      {e.title}
                    </option>
                  ))
                }
                
              </Select>
            </Box>
          </SimpleGrid>
        </ModalBody>
        <Box ml="30px" mt="41px" mb="40px">
          
        <Button onClick={()=>handleCreateRFQ()} isLoading={loading} disabled={title == '' && selectedcategory == ''}>
           Continue
        </Button>
          
         
        </Box>
        {/* <ModalFooter mr="270px">
            <Button >Continue</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

export default RfqListModal;
