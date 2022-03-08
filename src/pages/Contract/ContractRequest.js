import { Box, Checkbox, HStack, InputGroup, InputRightElement, LinkOverlay, SimpleGrid, Stack, Table, Tbody, Td, Text, Th, Thead, theme, Tr, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import React from 'react'
import { AiFillPlusCircle, AiOutlinePlus } from 'react-icons/ai';
import { MdUnfoldMore } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';
import VendorCategoryModal from '../rfq/RfqModals/VendorCategoryModal';
import VendorsInvitedModal from '../rfq/RfqModals/VendorsInvitedModal';

function ContractRequest() {
    const navigate = useLocation();
    const toast = useToast();
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
    return (
        <>
            <Stack spacing={'32px'} mt="32px">
                <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
                    <Box>
                        <Text fontWeight="700" color="#303030" fontSize={'16px'}>
                            Budget
                        </Text>
                        <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
                            Client’s benchmark cost.
                        </Text>
                    </Box>

                    <Box>
                        <InputGroup>
                            <Input type="number" placeholder="$ 0" />
                            <InputRightElement pt="10px" children={<MdUnfoldMore />} />
                        </InputGroup>

                        <Checkbox onChange={handleCheckBox} mt={'10px'}>
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
                        <Input type="date" />
                    </Box>
                </SimpleGrid>
                <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
                    <Box>
                        <Text fontWeight="700" color="#303030" fontSize={'16px'}>
                            Quote Deadline
                        </Text>
                        <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
                            Your REQUEST won’t be visible to vendors after the deadline
                        </Text>
                    </Box>

                    <Box>
                        <Input type="date" />
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
                            onChange={e => {
                                if (e.target.value == 'by_invitation') {
                                    onOpen();
                                }
                            }}
                            placeholder="Request Type"
                        >
                            <option value="Public">Public</option>
                            <option value="by_invitation">By Invitation</option>
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
                        <Checkbox mt={'10px'}>
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
                        <Input type="text" placeholder="Tax Percentage" />
                    </Box>
                </SimpleGrid>

                <SimpleGrid maxWidth={'700px'} columns={{ base: 1, md: 2 }}>
                    <Box>
                        <Text fontWeight="700" color="#303030" fontSize={'16px'}>
                            REQUEST File
                        </Text>
                        <Text mt="8px" fontWeight="400" color="#303030" fontSize={'12px'}>
                            Select a REQUEST File
                        </Text>
                    </Box>

                    <Box>
                        <Select placeholder="Upload a CSV / XLSX File">
                            <option value="Use Our Automated Template">
                                Use Our Automated Template
                            </option>
                            <option value="Upload a CSV / XLSX File">
                                Upload a CSV / XLSX File
                            </option>
                        </Select>
                    </Box>
                </SimpleGrid>
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
                    <Box>
                        <Text fontWeight="400" color="#303030" fontSize={'16px'}>
                            Upload a csv / xlsx file in the format below or{' '}
                            <Link color={'blue.600'}>Click here</Link> to see a sample.
                        </Text>
                        <Text mt="8px" fontWeight="400" color="#303030" fontSize={'16px'}>
                            Note: Your REQUEST will be made visible when then admin approves it
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
            </Stack>
            <HStack>
                <Text> Add new row </Text>

                <AiFillPlusCircle color={theme.colors.orange.orange500} />
            </HStack>
            <Box mt={'32px'}>
                <Button
                    onClick={() =>
                        toast({
                            description:
                                'Your Request has been sent, it will be made visible when the admin approves it.',
                            duration: 2000,
                            isClosable: true,
                        })
                    }
                >
                    Send Request
                </Button>
            </Box>
        </>
    )
}

export default ContractRequest