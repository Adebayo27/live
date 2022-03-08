import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
    Box,
    Text,
    Grid,
    Flex,
    Container,
    SimpleGrid,
    Spacer,
    InputRightElement,
    LinkBox,
    LinkOverlay,
    Heading,
    InputGroup,
    InputLeftElement,
    Avatar,
  } from '@chakra-ui/react';
  import Input from '../../../components/Input';
  import Button from "../../../components/Button"
import { useHistory } from 'react-router-dom';
import { httpWithToken } from '../../../services/queries';


export default function CreateProjectModal({ isOpen, onOpen, onClose }) {
    const [project, setProject] = useState("")
    const user = JSON.parse(localStorage.getItem('user'))
    const [IsLoading, setIsLoading] = useState(false)
    const history = useHistory()
    // console.log(project)
    const addProject = async () => {
      setIsLoading(true)
      let query = `
      mutation{
        createRfqProject(input: {
          data: {
            title: "${project}"
            user_id: ${user.id}
          }
        }){
          rfqProject{
            id
          }
        }
      }
      `

      let response = await httpWithToken('graphql', query);
      if (response && response !== undefined && response !== null){
        setIsLoading(false)

        history.push(`/rfq/${response.data.createRfqProject.rfqProject.id}/list`)
      }
    }
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
  
  <ModalContent bg="white">
      <ModalHeader> <Text color ="blue.blue500" mt={"32px"}>Create a Project</Text> </ModalHeader>
      <ModalCloseButton  mt={"41.64px"}/>
      <ModalBody>
        <SimpleGrid columns={{base: 1, md: 2}}>
            <Box mb={{base: "16px", md: "0px"}}>
                <Text fontSize={"16px"} color= "#303030">Title</Text>
                <Text mt={"8px"} fontSize={"12px"} color= "#303030" >Input your project title</Text>
           
            </Box>
            <Box mb={"40px"}>
                <Input
                    placeholder="Project Title"
                    label="Project Title"
                   onChange={(e)=>setProject(e.target.value)}
                    
                />
            </Box>
        </SimpleGrid>
        <Box>{ project !== "" ? (
            <Button onClick={addProject} isLoading={IsLoading}>Continue</Button>):(
                <Button disabled color='orange.orange100' onClick={addProject}>Continue</Button>)}</Box>
      </ModalBody>

      <ModalFooter>
      
     
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}
