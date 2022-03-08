import React from 'react'
import { BsThreeDots, BsPlus } from "react-icons/bs";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
} from '@chakra-ui/react'

export default function MenuItemList() {
  return (
      <Menu>
          <MenuButton colorScheme='pink'>
              <BsThreeDots />
          </MenuButton>
          <MenuList>
              <Box boxShadow='2xl' p='3' rounded='md' bg='white' >
              <MenuGroup >
                  <MenuItem>Activate</MenuItem>
                  <MenuItem>Disable </MenuItem>
                  <MenuItem>Delete </MenuItem>
              </MenuGroup>
              </Box>
          </MenuList>
      </Menu>
  )
}
