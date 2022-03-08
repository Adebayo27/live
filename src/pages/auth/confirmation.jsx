import React from 'react'
import {
    Box,
    SimpleGrid,
    Avatar,
    Text,
    Radio,
    RadioGroup,
    Stack,
    HStack, InputAddon, InputGroup, InputRightAddon, InputLeftAddon, Select, Checkbox, CheckboxGroup, Button, Center, Image

} from '@chakra-ui/react';
import mark from '../../assets/mark.png'
import { default as CustomButton} from '../../components/Button';
import Input from '../../components/Input';
import { default as CustomSelect } from '../../components/Select';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Confirmation() {
    const [value, setValue] = React.useState('1');
    return (
        <Box>
            <Stack spacing="30px" mt={'30px'} direction={['column', 'row']} mb={3} ml={0}>
                <Box w={200}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Terms of Service
                    </Text>
                </Box>
                <Box w={100}><Image src={mark} sizes='20px'></Image></Box>
                
            </Stack>

            <Stack spacing="30px" mt={'30px'} direction={['column', 'row']} mb={3} ml={0}>
                <Box w={200}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Legal Information
                    </Text>
                </Box>
                <Box w={100}><Image src={mark} sizes='20px'></Image></Box>
                
            </Stack>

            <Stack spacing="30px" mt={'30px'} direction={['column', 'row']} mb={3} ml={0}>
                <Box w={200}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Bank Account
                    </Text>
                </Box>
                <Box w={100}><Image src={mark} sizes='20px'></Image></Box>
                
                
            </Stack>

            <Stack spacing="30px" mt={'30px'} direction={['column', 'row']} mb={3} ml={0}>
                <Box w={200}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Document
                    </Text>
                </Box>
                <Box w={100}><Image src={mark} sizes='20px'></Image></Box>
                
            </Stack>

            
            
            <Stack direction={'row'} mt={5}>
                <CustomButton colorScheme='blue' variant='outline'>
                    Proceed to Payment
                </CustomButton>
            </Stack>

            <Text fontSize={'12px'} color={'black'} mt={2}>You need to pay a token of $10 to get your documents verified</Text>
            
            

        </Box>
    )
}
