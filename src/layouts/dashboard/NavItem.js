import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export default function NavItem(props) {
  const { icon, children, submenu, isOpen, setIsOpen, active, ...rest } = props;
  const [hover, setHover] = useState(active);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      if (submenu && active) {
        setIsOpen(children);
      }
    }, 500);
  }, [submenu]);

  return (
    <Box
      px="4"
      pl="4"
      py="4"
      cursor="pointer"
      color={isOpen === children || hover ? 'blue.blue500' : 'gray.gray300'}
      bg={(isOpen === children || hover) && 'background'}
      _hover={{
        bg: 'background',
        color: 'blue.blue500',
      }}
      role="group"
      textTransform={'capitalize'}
      fontSize={'16px'}
      borderStartRadius="28px"
      pos={'relative'}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        if (!active) {
          setHover(false);
        }
      }}
      {...rest}
    >
      <Flex align="center">
        {icon && (
          <Box
            fontSize={'24px'}
            color={
              isOpen === children || hover ? 'orange.orange500' : 'gray.gray300'
            }
            mr="5px"
          >
            {icon}
          </Box>
        )}
        {children}
        {submenu && (
          <Icon
            transition={'0.3s ease'}
            as={FaChevronRight}
            size={24}
            ml="auto"
            transform={isOpen === children && 'rotate(90deg)'}
          />
        )}
      </Flex>
      {submenu && (
        <Collapse in={isOpen === children}>
          <Stack spacing={'4'} py="4">
            {submenu?.map((item, index) => (
              <NavItem
                py="0"
                key={index}
                textTransform="capitalize"
                onClick={() => {
                  history.push(item.link);
                }}
                hasCurve={false}
              >
                <Text> {item.name}</Text>
              </NavItem>
            ))}
          </Stack>
        </Collapse>
      )}
    </Box>
  );
}
