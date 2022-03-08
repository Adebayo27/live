import React, {useState} from 'react'

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

  } from '@chakra-ui/react';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Option from '../Components/Option';
import Input from '../../../components/Input';


function CompareModal({ isOpen, onOpen, onClose }) {

const [range, setrange] = useState({
    lowest: "",
    highest: ""
})


const handleChange = (e)=>{
    let value = e.target.value
    setrange({...range, [e.target.id]: value})
}

  return (
<Modal size="md" isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader fontSize={"25px"} mt="25px">Compare prices by range</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <SimpleGrid spacing={"10px"} columns={2}>
        <Box>
            <Select onChange={handleChange} id="lowest" placeholder='Lowest amount'>
                <Option value={6000}/>
            </Select>
          </Box>
          <Box>
            <Select onChange={handleChange} id="highest" placeholder='Highest amount'>
            <Option value={10000}/>
            </Select>
          </Box>
        </SimpleGrid>

   
      </ModalBody>

      <Box ml="25px" mb="25px" mt="20px">
        <Button disabled={!range.lowest || !range.highest && true} onClick={onClose}>Filter</Button>
      </Box>
    </ModalContent>
  </Modal>
  )
}

export default CompareModal