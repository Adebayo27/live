import React, { useEffect, useState } from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Spacer,
  WrapItem,
  Wrap,
  Table,
  Th,
  Tr,
  Tbody,
  Thead,
  Td,
  Tfoot,
  TableCaption,
  useDisclosure,
  HStack,
  InputRightElement,
  InputGroup,
  LinkBox,
  Stack,
  Skeleton,
} from '@chakra-ui/react';
import Input from '../../components/Input';
import { FaEye, FaSearch } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import Button from '../../components/Button';
import Select from '../../components/Select';
import RfqModal from './RfqModals/RfqModal';
import RfqListModal from './RfqModals/RfqListModal';
import { Link } from 'react-router-dom';
import RfqListTd from './Components/RfqListTd';
import { httpWithToken } from '../../services/queries';
import { useParams } from 'react-router-dom';
import moment from 'moment';

function RfqList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let params = useParams()
  const [rfqReq, setRFQ ] = useState(null)
  const [project, setProject ] = useState(null)
  const [rfqCategories, setrfqCategories ] = useState([])
  const [loadingList, setloadingList ] = useState(true)
  const fetchRFQList = async () => {
    let query = `
    query{
      rfqCategories{
        id
        title
      }
      rfqProject(id: ${params.id}){
        id
        title
      }
      rfqRequests(where: {
        rfq_project_id: ${params.id}
      }){
        id
        title
        rfq_category_id{
          id
          title
        }
        rfq_qoutes{
          id
        }
        status
        created_at
        rfq_project_id{
          title
          user_id{
            id
            username
          }
        }
      }
    }
    `
    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      setRFQ(response.data.rfqRequests)
      setProject(response.data.rfqProject)
      setrfqCategories(response.data.rfqCategories)
      setloadingList(false)
    }
  }

  useEffect(()=>{
    fetchRFQList()
  }, [])
  return (
    <DashboardWrapper pageTitle="Request For Quote">
      <RfqListModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} category={rfqCategories} data={params.id} />
      <Box>
        <Flex
          spacing="10px"
          fontWeight="400"
          color="#2C346D"
          flexWrap={'wrap'}
          mb="32px"
          mt="26px"
        >
          <Text pr="3px" as={Link} to={`/rfq`}>RFQ </Text>
          &gt;
          <Text pl="3px" pr="3px">
            {project?.title}
          </Text>
        </Flex>

          <Stack direction={['column', 'row']}>
            <Stack w="100%"  direction={['row', 'row']}>
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
              <Box >
                <Select
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
                Request for Quote
              </Button>
            </Box>
          </Stack>


        <Box mt="40px" overflowY={'auto'}>
          <Text fontSize={'25px'} color="#C0C0C1" mb="27">
            RFQ
          </Text>
          <Table variant="striped" color="background">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'} color="#303030">
                  Title
                </Td>
                <Td fontWeight={'bold'} color="#303030">
                  Category
                </Td>
                <Td fontWeight={'bold'} color="#303030">
                  Date Posted
                </Td>
                <Td fontWeight={'bold'} color="#303030">
                  Submission
                </Td>
                <Td fontWeight={'bold'} color="#303030">
                  Status
                </Td>
                <Td fontWeight={'bold'} color="#303030">
                  See Details
                </Td>
              </Tr>
              {
                !loadingList ?
                rfqReq && rfqReq.map((e,i) => (
                  <RfqListTd
                    title={e.title}
                    category={e.rfq_category_id.title}
                    datePosted={moment(e.created_at).format("L")}
                    submission={'19'}
                    status={e.status}
                    pid={e.id}
                  />
                )) :
                
                <>
                  <Tr>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                  </Tr>
                  <Tr>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                  </Tr>
                  <Tr>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                    <Td><Skeleton h={10} w={'100%'}/></Td>
                  </Tr>
                </>

              }
              
            </Tbody>
          </Table>
        </Box>
        <Flex mt="20px">
          <Spacer />
          <HStack spacing="10px">
            <IoIosArrowBack cursor={'pointer'} />
            <Text>1 of 3</Text>
            <IoIosArrowForward cursor={'pointer'} />
          </HStack>
        </Flex>
      </Box>
    </DashboardWrapper>
  );
}

export default RfqList;
