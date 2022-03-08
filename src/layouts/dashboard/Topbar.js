import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { MdArrowDropDown, MdMenu } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Notifications from './Notifications';

export default function Topbar({ isBack, pageTitle, sidebar }) {
  const history = useHistory()
  const logout = () =>{
    localStorage.clear();
    history.push('/auth/login')
  }
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px={{ base: '20px', md: '32px' }}
      background="background"
      boxShadow={'0px 4px 8px rgba(208, 220, 250, 0.25)'}
      h="72px"
    >
      <Flex spacing={'24px'} align="center">
        <IconButton
          aria-label="Menu"
          display={{ base: 'inline-flex', md: 'none' }}
          onClick={sidebar.onOpen}
          icon={<MdMenu size={24} />}
          size="sm"
          mr="20px"
        />
        <Text fontSize={{ base: '16px', md: '25px' }} fontWeight={'700'}>
          {pageTitle}
        </Text>
      </Flex>

      <HStack spacing={{ base: '0', md: '21px' }} pos={'relative'}>
        <Notifications />
        <Flex alignItems={'center'} pos={'relative'} zIndex={'100'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar src="/assets/images/avatar.png" size={'sm'} />
                <Stack
                  align={'flex-start'}
                  spacing="0"
                  display={{ base: 'none', md: 'flex' }}
                >
                  <Text fontSize={'12px'} fontWeight="700">
                    Debbie George
                  </Text>
                  <HStack spacing={'0'}>
                    <Text fontSize={'12px'}>Team Member</Text>
                    <MdArrowDropDown size={'24px'} />
                  </HStack>
                </Stack>
              </HStack>
            </MenuButton>
            <MenuList bg="#fff">
              <MenuItem>View Profile</MenuItem>
              <MenuDivider />
              <MenuItem onClick={()=>logout()}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
