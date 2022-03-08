import React from 'react'
import {
    Box,
    SimpleGrid,
    Avatar,
    Text,
    Radio,
    RadioGroup,
    Stack,
    HStack, InputAddon, InputGroup, InputRightAddon, InputLeftAddon, Select, Checkbox, CheckboxGroup, Button, Center

} from '@chakra-ui/react';
import { default as CustomButton} from '../../components/Button';
import Input from '../../components/Input';
import { default as CustomSelect } from '../../components/Select';

export default function LegalInfo() {
    const [value, setValue] = React.useState('1');
    return (
        <Box>
            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Company Name
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input your company’s registered name
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="Company Name" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Trading Name
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input your company's trading name
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="Trading Name" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={7} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Business Size
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        How big is your company?
                    </Text>
                </Box>

                <Box w={{ base: '100%', md: '30%' }}>
                    <Select
                        id="size"
                        placeholder="Nigeria"
                        mt="5"
                        color="gray.500"
                        w={{ base: '85%', md: '100%' }}
                    >
                        <option>Micro (1-9 Employees)</option>
                        <option>Ghana</option>
                    </Select>
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Registration Number
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input your company’s registered number
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="RC 23451234" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Email
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input your company's official email
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="name@company.com" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Phone Number
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input the procurement dept  phone number
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <InputGroup>
                        <InputLeftAddon p={0} bg={'#fff'} children={
                            <Select h={'70px'} border={0}>
                                <option value={''}>+234</option>
                                <option>+573</option>
                                <option>+444</option>
                            </Select>
                        } />
                        <Input placeholder="812 345 6768" type='text' fontSize="20px" size='lg' />
                    </InputGroup>

                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Address
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input your company's office street address
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="name@company.com" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} ml={1}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Location
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Select your country and state
                    </Text>
                </Box>
                <Stack mt={5} spacing="30px" direction={['column', 'row']}>
                    <CustomSelect placeholder='Select country' width="140px">
                        <option value={''}>Nigeria</option>
                        <option>+573</option>
                        <option>+444</option>
                    </CustomSelect>
                    <CustomSelect placeholder='Select state' width="140px">
                        <option value={''}>Lagos</option>
                        <option>+573</option>
                        <option>+444</option>
                    </CustomSelect>
                </Stack>
            </Stack>

            <Stack spacing="30px" mt="40px" direction={['column', 'row']}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Category
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Select all that apply
                    </Text>
                </Box>

                <Box w={{ base: '100%', md: '560px' }} color="gray.500">
                    <CheckboxGroup >
                        <Stack spacing={[3, 5]} direction={['column', 'row']} textAlign="left" mb={3} d="flex" justify={"space-between"}>
                            <Checkbox width={["100%", "33%"]} value='aluminium'>Aluminium / Glass</Checkbox>
                            <Checkbox width={["100%", "33%"]} value='brick_mansory'>Brick / Mansory</Checkbox>
                            <Checkbox width={["100%", "33%"]} value='ceramic'>Ceramic</Checkbox>
                        </Stack>
                        <Stack spacing={[1, 5]} direction={['column', 'row']} mb={3} d="flex" justify={"space-between"}>
                            <Checkbox width={["100%", "33%"]} value='concrete_plaster'>Concrete / Plasters</Checkbox>
                            <Checkbox width={["100%", "33%"]} value='copper'>Copper</Checkbox>
                            <Checkbox width={["100%", "33%"]} value='plumbering'>Plumber</Checkbox>
                        </Stack>
                        <Stack spacing={[1, 5]} direction={['column', 'row']} mb={3} d="flex" justify={"space-between"}>
                            <Checkbox width={["100%", "33%"]} value='concrete_plaster'>Roofing</Checkbox>
                            <Checkbox width={["100%", "33%"]} value='copper'>Steel</Checkbox>
                            <Checkbox width={["100%", "33%"]} value='sand_stone'>Sand / Stone</Checkbox>
                        </Stack>
                        <Stack spacing={[1, 5]} direction={['column', 'row']} mb={3} d="flex" justify={"space-between"}>
                            <Checkbox width={["100%", "33%"]} value='roofing'>Roofing</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Primary Contact / Director
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input your company's primary contact name
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="Primary Contact Name" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                    Primary Contact’s Email
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                    Input the person’s email address
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="name@company.com" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                    Primary Contact’s Number
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                    Input the person’s phone number
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <InputGroup>
                        <InputLeftAddon p={0} bg={'#fff'} children={
                            <Select h={'70px'} border={0}>
                                <option value={''}>+234</option>
                                <option>+573</option>
                                <option>+444</option>
                            </Select>
                        } />
                        <Input placeholder="812 345 6768" type='text' fontSize="20px" size='lg' />
                    </InputGroup>

                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} ml={1}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                    Tax Compliance
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                    Are you tax compliance?
                    </Text>
                </Box>

                <RadioGroup onChange={setValue} value={value} color="blue.900">
                    <Stack direction={['column', 'row']}>
                        <Radio value="1">Yes</Radio>
                        <Radio value="2">No</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} ml={1}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                    Racial Equality
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                    Do you belive in racial equality?
                    </Text>
                </Box>

                <RadioGroup onChange={setValue} value={value} color="blue.900">
                    <Stack direction={['column', 'row']}>
                        <Radio value="1">Yes</Radio>
                        <Radio value="2">No</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
            <Center>
            <Stack direction={'row'} mt={5} ml={{ base: 0, md: 5 }}>
                <Button variant='none' w='160px' h='48px' borderRadius='8px' background='#FFFFFF' color='black' border='1px solid black'>Save and Exit</Button>
                <CustomButton colorScheme='blue' variant='outline'>
                    Save and Continue
                </CustomButton>
            </Stack>
            </Center>
            

        </Box>
    )
}
