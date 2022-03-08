import {
  Avatar,
  Badge,
  Box,
  Divider,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MdNotifications } from 'react-icons/md';

export default function Notifications() {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Box pos="relative">
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<MdNotifications size={26} />}
            rounded={'full'}
          />
          <Badge
            bg={'red.red500'}
            color="#fff"
            rounded={'full'}
            pos="absolute"
            right={'2'}
            top={'2'}
          >
            3
          </Badge>
        </Box>
      </PopoverTrigger>
      <PopoverContent bg="#fff" w={{ base: '360px', md: '500px' }}>
        <PopoverArrow bg={'#fff'} />
        <PopoverCloseButton />
        <PopoverHeader>
          <SimpleGrid textAlign={'center'} columns={2}>
            <Text fontSize={'12px'}>Notifications</Text>
            <Text fontSize={'12px'}>Mark all as read</Text>
          </SimpleGrid>
        </PopoverHeader>
        <PopoverBody>
          <Stack spacing={'10px'}>
            {[1, 1, 1, 1].map((item, index) => (
              <>
                <HStack key={index} w="100%" as="a" href="#" spacing={'20px'}>
                  <Avatar src="/assets/images/avatar.png" />
                  <Box>
                    <Text isTruncated maxW="50%">
                      Dewalt Construction has delivered your material{' '}
                    </Text>
                    <Text fontSize={'10px'}>2 days ago</Text>
                  </Box>
                </HStack>
                <Divider />
              </>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
