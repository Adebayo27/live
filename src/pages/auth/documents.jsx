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
import { AiOutlinePlus } from 'react-icons/ai';

export default function Documents() {
    const [value, setValue] = React.useState('1');
    return (
        <Box>
            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Business Certificate
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Box
                    alignItems={'center'}
                    border={'1px dashed #606060'}
                    p="12px 58px "
                    borderRadius="5px"
                    >
                    <HStack>
                        <AiOutlinePlus pl="13.99px" />
                        <Text color={'#303030'}> Upload jpg / png / pdf </Text>
                    </HStack>
                    </Box>
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        VAT Certificate
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Box
                    alignItems={'center'}
                    border={'1px dashed #606060'}
                    p="12px 58px "
                    borderRadius="5px"
                    >
                    <HStack>
                        <AiOutlinePlus pl="13.99px" />
                        <Text> Upload jpg / png / pdf </Text>
                    </HStack>
                    </Box>
                </Box>
            </Stack>

            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Insurance Certificate
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Box
                    alignItems={'center'}
                    border={'1px dashed #606060'}
                    p="12px 58px "
                    borderRadius="5px"
                    >
                    <HStack>
                        <AiOutlinePlus pl="13.99px" />
                        <Text> Upload jpg / png / pdf </Text>
                    </HStack>
                    </Box>
                </Box>
            </Stack>
            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                        Confirmation of Address
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Box
                    alignItems={'center'}
                    border={'1px dashed #606060'}
                    p="12px 58px "
                    borderRadius="5px"
                    >
                    <HStack>
                        <AiOutlinePlus pl="13.99px" />
                        <Text> Upload jpg / png / pdf </Text>
                    </HStack>
                    </Box>
                </Box>
            </Stack>
            <Stack spacing="30px" mt={'40px'} direction={['column', 'row']} mb={3}>
                <Box w={{ base: '100%', md: '300px' }}>
                    <Text fontWeight={'bold'} fontSize="16px" color="#303030">
                    Proof of Identity
                    </Text>
                    <Text fontSize="12px" color="gray.500">
                    Upload any proof of identity of your primary contact
                    </Text>
                </Box>
                <Box mt={5} w={'30%'} spacing="30px" direction={['column', 'row']}>
                    <Box
                    alignItems={'center'}
                    border={'1px dashed #606060'}
                    p="12px 58px "
                    borderRadius="5px"
                    >
                    <HStack>
                        <AiOutlinePlus pl="13.99px" />
                        <Text> Upload jpg / png / pdf </Text>
                    </HStack>
                    </Box>
                </Box>
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
