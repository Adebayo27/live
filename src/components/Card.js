import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Card({ children, ...rest }) {
  return (
    <Box
      w="100%"
      h="auto"
      p="24px"
      borderRadius={'8px'}
      pos="relative"
      {...rest}
    >
      {children}
    </Box>
  );
}
