import React, { useEffect } from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import {
  Box,
  Text,
  Grid,
  Flex,
  Container,
  SimpleGrid,
  Spacer,
  InputRightElement,
  InputGroup,
  LinkBox,
  LinkOverlay,
  Heading,
  InputLeftElement,
  Avatar,
  useDisclosure,
  HStack,
  Stack,
  Skeleton,
} from '@chakra-ui/react';
import RfqLinkBox from './Components/RfqLinkBox';
import RfqModal from './RfqModals/RfqModal';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import CreateProjectModal from './RfqModals/CreateProjectModal';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { httpWithToken } from '../../services/queries';

export default function RFQ() {
  const user = JSON.parse(localStorage.getItem('user'))
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projects, setProjects] = React.useState([])
  const [fetchLoading, setFetchLoading] = React.useState(true)

  const  fetchProjects = async () => {
    let query = `
    query{
      rfqProjects(where: {user_id : ${user.id}}){
        title
        id
        created_at
        user_id{
          username
        }
      }
    }
    `

    let response = await httpWithToken('graphql', query)
    if (response && response !== undefined && response !== null){
      setProjects(response.data.rfqProjects)
      setFetchLoading(false)
      
    }
  }

  useEffect(()=>{
    fetchProjects()
  }, [])
  return (
    <DashboardWrapper pageTitle="Request For Quote">
      <Box pt="32px" bgColor="#FFFFFF" borderRadius="8px">
        <CreateProjectModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Text fontSize="16px" color="#211F5C">
          Create or select a project in order to request for quotes
        </Text>

        <Stack direction={['column', 'row']} mt="32px">
            <Stack w="100%" direction={['row', 'row']}>
              <Box>
                <InputGroup>
                  <Input
                    type="text"
                    color="#858383"
                    placeholder="Search for project"
                    label="Search for project"
                  />
                  <InputRightElement
                    pt="10px"
                    children={<AiOutlineSearch color="green.500" />}
                  />
                </InputGroup>
              </Box>
              <Spacer/>
              <Box>
                <Select
                  // display={{ base: 'flex', md: 'flex' }}
                  placeholder="Sorted by"
                >
                  <option value="option1">Oldest to Newest</option>
                  <option value="option2">Newest to Oldest</option>
                </Select>
              </Box>
            </Stack>
    
            <Box
              ml={{ md: '0px', base: '0px', lg: '0px', xl: '20px' }}
              mt={{ base: '30px', md: '32px', lg: '32px', xl: '0px' }}
            >
              <Button onClick={onOpen}>
                <AiOutlinePlus pl="13.99px" />
                Create Project
              </Button>
            </Box>
          </Stack>

        <SimpleGrid
          pb={'108px'}
          columns={{ base: 1, lg: 3, md: 2 }}
          spacing={'32px'}
          mt="40px"
        >
          {
            !fetchLoading ? 
              projects && projects?.map((e => {
                return <RfqLinkBox data={e} />
              })) :
            <>
            <Skeleton height='50px' />
            <Skeleton height='50px' />
            <Skeleton height='50px' />
            <Skeleton height='50px' />
            </>
            
          }
          
        </SimpleGrid>
      </Box>
    </DashboardWrapper>
  );
}
