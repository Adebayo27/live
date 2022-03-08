import React, { useState } from 'react';
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
  LinkOverlay,
  Heading,
  InputGroup,
  useDisclosure,
  HStack,
  Stack,
  Checkbox,
  CheckboxGroup,
  Link,
  Progress,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  VStack,
  Tag,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import { IoIosArrowForward } from 'react-icons/io';
import {
  AiTwotoneEdit,
  AiOutlinePlus,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai';
import { MdModeEdit, MdUnfoldMore } from 'react-icons/md';
import RfqModal from './RfqModals/RfqModal';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import Card from '../../components/Card';
import theme from '../../utils/theme';
import { HiDownload } from 'react-icons/hi';
import { RiErrorWarningFill } from 'react-icons/ri';
import VendorCategoryModal from './RfqModals/VendorCategoryModal';
import VendorsInvitedModal from './RfqModals/VendorsInvitedModal';
import { useLocation, useNavigate } from 'react-router-dom';
import AutomatedTr from './Components/AutomatedTr';

export default function RequestQ({data}) {
  const navigate = useLocation();

  const handleCheckBox = e => {
    if (e.target.checked) {
      navigate('/rfq/request/binding-contract');
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const [alert, setAlert] = useState(false);
  const [Upload, setUpload] = useState(true);
  const [Automated, setAutomated] = useState(false);
  const [Payload, setPayload] = useState(
       [{
        item_name: "",
        description: "",
        measurement: "",
        quantity: ""
      }
    ]
     
  );

  const addNew = ()=> {
    setPayload([...Payload, {
        item_name: "",
        description: "",
        measurement: "",
        quantity: ""
      } ])
  }

  return (
    <>
      <Stack spacing={'32px'} mt="32px">
        <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight="700" color="#303030" fontSize={'16px'}>
              Budget
            </Text>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              Client's benchmark cost.
            </Text>
          </Box>

          <Box>
              <NumberInput defaultValue={data?.budget} min={0} max={200000000000000}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Checkbox onChange={handleCheckBox} isChecked={data?.budget_visibility} mt={'10px'}>
              <Text fontWeight="400" color="#303030" fontSize={'12px'}>
                Make budget visible to vendors
              </Text>
            </Checkbox>
          </Box>
        </SimpleGrid>
        <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight="700" color="#303030" fontSize={'16px'}>
              Expected Delivery Date
            </Text>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              Let the vendors know when you are expecting delivery.
            </Text>
          </Box>

          <Box>
            <Input type="date" value={data?.delivery_date}/>
          </Box>
        </SimpleGrid>
        <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight="700" color="#303030" fontSize={'16px'}>
              Quote Deadline
            </Text>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              Your RFQ won't be visible to vendors after the deadline
            </Text>
          </Box>

          <Box>
            <Input type="date" value={data?.qoute_deadline}/>
          </Box>
        </SimpleGrid>
        <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight="700" color="#303030" fontSize={'16px'}>
              Delivery Address
            </Text>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              Input the address where the supplier will deliver to
            </Text>
          </Box>

          <Box>
            <Input
              type="text"
              placeholder="Site Address"
              label="Site Address"
              value={data?.delivery_address}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight="700" color="#303030" fontSize={'16px'}>
              Request Type
            </Text>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              Select how you want your request to be visible
            </Text>
          </Box>

          <Box>
            <VendorCategoryModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
            <VendorsInvitedModal
              isOpen={isOpen1}
              onOpen={onOpen1}
              onClose={onClose1}
            />
            <Select
              defaultValue={data?.request_type}
              onChange={e => {
                if (e.target.value == 'by_invitation') {
                  onOpen();
                }
              }}
              placeholder="Request Type"
            >
              <option value="public" selected={data?.request_type == "public"}>Public</option>
              <option value="by_invitation" selected={data?.request_type == "by_invitation"}>By Invitation</option>
            </Select>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              3 vendors selected for invitation.{' '}
              <Link onClick={onOpen1} color={'blue.600'}>
                Click here
              </Link>{' '}
              to see the list
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid maxWidth={'lg'} columns={{ base: 1, md: 1 }}>
          <Box>
            <Checkbox mt={'10px'} isChecked={data?.task}>
              <Text fontWeight="400" color="#303030" fontSize={'12px'}>
                Add withholding tax on payment. <br />
                This is optional, only check the box if you will be remitting
                the tax to the regulators.
              </Text>
            </Checkbox>
          </Box>
        </SimpleGrid>
        <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight="700" color="#303030" fontSize={'16px'}>
              Tax Percentage
            </Text>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              Input tax percentage
            </Text>
          </Box>

          <Box>
            <Input type="text" placeholder="Tax Percentage" label="Tax Percentage" value={data?.tax_percentage} />
          </Box>
        </SimpleGrid>

        <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text fontWeight="700" color="#303030" fontSize={'16px'}>
              RFQ File
            </Text>
            <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
              Select a RFQ File
            </Text>
          </Box>
            
          <Box>
            <Select   onChange={(e)=>{
                if(e.target.value == "Automated"){
                    setUpload(false)
                    setAutomated(true)
                }else if(e.target.value == "Upload"){
                    setUpload(true)
                    setAutomated(false)
                }
          }} placeholder="Upload">
              <option value="Automated">
                Use Our Automated Template
              </option>
              <option value="Upload">
                Upload a CSV / XLSX File
              </option>
            </Select>
          </Box>
        </SimpleGrid>

        {
            Upload && (
                <Box >
                <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
                <Box
                  alignItems={'center'}
                  border={'1px dashed #606060'}
                  p="15px 62px "
                  borderRadius="5px"
                >
                  <HStack>
                    <AiOutlinePlus pl="13.99px" />
                    <Text> Upload CSV / XLSX </Text>
                  </HStack>
                </Box>
              </SimpleGrid>
      
              <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 1 }}>
                <Box mt={"32px"}>
                  <Text fontWeight="400" color="#303030" fontSize={'16px'}>
                    Upload a csv / xlsx file in the format below or{' '}
                    <Link color={'blue.600'}>Click here</Link> to see a sample.
                  </Text>
                  <Text mt="8px" fontWeight="400" color="#303030" fontSize={'16px'}>
                    Note: Your RFQ will be made visible when then admin approves it
                  </Text>
                </Box>
              </SimpleGrid>
      
              <Stack direction={{ base: 'column', md: 'row' }} spacing="42px">
                <Box overflowY={'auto'}>
                  <Table
                    variant="striped"
                    colortheme={theme.colors.background}
                    mt="24px"
                    textAlign="center"
                  >
                    <Thead>
                      <Tr color={theme.colors.gray.gray500} fontWeight="bold">
                        <Th textAlign="center">S/N</Th>
                        <Th textAlign="center">Item Name</Th>
                        <Th textAlign="center">Description / Type</Th>
                        <Th textAlign="center">Measurement</Th>
                        <Th textAlign="center">Quantity</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr fontWeight="normal">
                        <Td textAlign="center">1</Td>
                        <Td textAlign="center">Grannite</Td>
                        <Td textAlign="center">Kashmir grannite</Td>
                        <Td textAlign="center">Tonnes</Td>
                        <Td textAlign="center">10</Td>
                      </Tr>
                      <Tr fontWeight="normal">
                        <Td textAlign="center">2</Td>
                        <Td textAlign="center">Grannite</Td>
                        <Td textAlign="center">Tan Brown grannite</Td>
                        <Td textAlign="center">Tonnes</Td>
                        <Td textAlign="center">5</Td>
                      </Tr>
                      <Tr fontWeight="normal">
                        <Td textAlign="center">3</Td>
                        <Td textAlign="center">Sand</Td>
                        <Td textAlign="center">Mansory sand</Td>
                        <Td textAlign="center">Tonnes</Td>
                        <Td textAlign="center">12</Td>
                      </Tr>
                      <Tr fontWeight="normal">
                        <Td textAlign="center">4</Td>
                        <Td textAlign="center">Logistic</Td>
                        <Td textAlign="center">Logistic</Td>
                        <Td textAlign="center" />
                        <Td textAlign="center">1</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
      
                <Card
                  border="1px"
                  borderColor={theme.colors.gray.gray300}
                  w={{ base: '100%', md: '348px' }}
                  h="302px"
                  mt={6}
                >
                  <VStack alignItems="left">
                    <HStack color={theme.colors.orange.orange500}>
                      <RiErrorWarningFill />
                      <Text color={theme.colors.blue.blue500}>Important</Text>
                    </HStack>
                    <Text lineHeight="2" fontSize="16px" fontWeight="400px">
                      It is important that you clearly state the items and
                      description.{' '}
                      <LinkOverlay fontSize="16px" fontWeight="700" color="#303030">
                        Also, ensure that you add Logistics to your quote request, and
                        input 1 for the quantity.
                      </LinkOverlay>
                    </Text>
                    <Text fontSize="16px" fontWeight="400px" color="#303030">
                      * Use the plus icon below to add new rows to the table.
                    </Text>
                  </VStack>
                </Card>
              </Stack>
                </Box>
            )
        }

        {
            Automated ? (
                <>
              <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 1 }}>
                <Box>
                
                  <Text mt="8px" fontWeight="400" color="#303030" fontSize={'16px'}>
                  Go through each cell to select or input an item, description, measurement and Quantity
                  </Text>
                </Box>
              </SimpleGrid>
      
              <Stack direction={{ base: 'column', md: 'row' }} spacing="42px">
                <Box overflowY={'auto'}>
                  <Table
                    variant="striped"
                    colortheme={theme.colors.background}
                    mt="24px"
                    textAlign="center"
                  >
                    <Thead>
                      <Tr color={theme.colors.gray.gray500} fontWeight="bold">
                        <Th textAlign="center">S/N</Th>
                        <Th textAlign="center">Item Name</Th>
                        <Th textAlign="center">Description / Type</Th>
                        <Th textAlign="center">Measurement</Th>
                        <Th textAlign="center">Quantity</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Payload.map((item, i)=>(
                                <AutomatedTr i ={i+1}/>
                            ))
                        }
                    
                     
                    </Tbody>
                  </Table>
                </Box>
      
                <Card
                  border="1px"
                  borderColor={theme.colors.gray.gray300}
                  w={{ base: '100%', md: '348px' }}
                  h="302px"
                  mt={6}
                >
                  <VStack alignItems="left">
                    <HStack color={theme.colors.orange.orange500}>
                      <RiErrorWarningFill />
                      <Text color={theme.colors.blue.blue500}>Important</Text>
                    </HStack>
                    <Text lineHeight="2" fontSize="16px" fontWeight="400px">
                      It is important that you clearly state the items and
                      description.{' '}
                      <LinkOverlay fontSize="16px" fontWeight="700" color="#303030">
                        Also, ensure that you add Logistics to your quote request, and
                        input 1 for the quantity.
                      </LinkOverlay>
                    </Text>
                    <Text fontSize="16px" fontWeight="400px" color="#303030">
                      * Use the plus icon below to add new rows to the table.
                    </Text>
                  </VStack>
                </Card>
              </Stack>
              <HStack cursor={"pointer"} onClick={addNew}>
              <Text > Add new row </Text>
      
              <AiFillPlusCircle color={theme.colors.orange.orange500} />
            </HStack>
                </>
            ):("")
        }

      </Stack>
     
      <Box mt={'32px'}>
        <Button
          onClick={() => {
            console.log(Payload)
            setAlert(true)
          }
            
          }
        >
          Publish RFQ
        </Button>
        {
            alert ? (
                <Alert borderLeft={"5px solid #38A169"} bg={'#c6f6d5'} mt={"32px"} status='success' w={{base:'100%', md:'778px'}} rounded={6}>
				<AlertIcon color='green' fontSize='16px' fontWeight='400'/>
				<AlertDescription>Your RFQ has been published, it will be made visible when the admin approves it.</AlertDescription>
				<CloseButton position='absolute' right='0px'  top={{base: "25px", md: "8px"}} onClick={()=>setAlert(!alert)}/>
		        </Alert>
            ):("")
        }
        
      </Box>
    </>
  );
}
