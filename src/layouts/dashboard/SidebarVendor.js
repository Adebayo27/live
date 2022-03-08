import { Avatar, Box, Center, Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Logo from '../../components/Logo';
import NavItem from './NavItem';
import {
  MdContactMail,
  MdDashboard,
  MdGpsOff,
  MdMessage,
  MdNoteAdd,
  MdPeople,
  MdPerson,
  MdReceipt,
} from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import EImage from '../../assets/earning.png'
import BImage from '../../assets/bid.png'
import { FaPowerOff } from 'react-icons/fa';
const Coorperate_Links = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    children: null,
    icon: <MdDashboard />,
  },
  { name: 'Profile', link: '/vendor/profile', children: null, icon: <MdPerson /> },
  { name: 'Earnings', link: '/vendor/profile', children: null, icon: <Image src={EImage}/> },
  { name: 'Bid Board', link: '/bid-board', children: null, icon: <Image src={BImage}/> },
  {
    name: 'Contracts',
    link: '/contracts',
    children: null,
    icon: <MdNoteAdd />,
  },
  {
    name: 'Team Member',
    link: '/team_members',
    children: null,
    icon: <MdPeople />,
  },
  { name: 'Messages', link: '/messages', children: null, icon: <MdMessage /> },
  {
    name: 'Support',
    link: '/support',
    children: null,
    icon: <MdContactMail />,
  },
];

export default function SidebarVendor(props) {
  const LinkItems = Coorperate_Links;

  const [isOpen, setIsOpen] = useState('');

  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg={'#fff'}
      w="240px"
      {...props}
    >
      <Box p="24px" pb="0">
        <Logo/>
      </Box>

      <Center h="160px">
        <Avatar src="/assets/images/avatar.png" w="88px" h="88px" />
      </Center>

      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        pl="24px"
      >
        {LinkItems.map((item, index) => (
          <NavItem
            key={index}
            submenu={item.children}
            icon={item?.icon}
            onClick={() => {
              if (item.children) {
                if (item.name === isOpen) {
                  setIsOpen(null);
                } else {
                  setIsOpen(item.name);
                }
              } else {
                history.push(item.link);
              }
            }}
            isOpen={isOpen}
            active={
              pathname.includes(item.link) ||
              (item?.children &&
                item.children.some(e => pathname.includes(e.link)))
            }
            setIsOpen={setIsOpen}
          >
            {item.name}
          </NavItem>
        ))}
      </Flex>

      <Box pl="24px" pos="absolute" bottom={'20px'} w="100%">
        <NavItem
            icon={<FaPowerOff/>}
          isOpen={isOpen}
        >
          Logout
        </NavItem>
      </Box>
    </Box>
  );
}
