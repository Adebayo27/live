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

export default function BankDetails() {
    const [value, setValue] = React.useState('1');
    return (
        <Box>
            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Bank
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Your company's bank
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="Bank Name" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Account Name
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                        Input the account name
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Input placeholder="Account Name" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            <Stack spacing="30px" mt={7} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Account Number
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                    Input your account number
                    </Text>
                </Box>

                <Box w={{ base: '100%', md: '30%' }}>
                    <Input placeholder="Account Number" fontSize="20px" size='lg' />
                </Box>
            </Stack>

            

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} ml={1}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                    Need Finance?
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                    Do you need financing assistance?
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
