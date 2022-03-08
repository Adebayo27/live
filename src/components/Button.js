import { Button as ButtonBox } from '@chakra-ui/button';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Button({
  children,
  onClick = () => {},
  isLoading = false,
  link = false,
  isSubmit = false,
  size = 'lg',
  disabled = false,
  full = false,
  background = 'orange.orange500',
  color = '#fff',
}) {
  const history = useHistory();

  return (
    <ButtonBox
      fontSize={size === 'xs' ? 'xs' : size === 'sm' ? 'sm' : '16px'}
      fontWeight={'700'}
      color={color}
      bg={background}
      _hover={{
        bg: background,
      }}
      _active={{
        bg: background,
      }}
      rounded="8px"
      size={size}
      as="button"
      onClick={() => {
        link ? history.push(link) : onClick();
      }}
      isLoading={isLoading}
      loadingText="Please wait . . ."
      type={isSubmit ? 'submit' : 'button'}
      disabled={isLoading || disabled}
      w={full && '100%'}
      px="32px"
    >
      {children}
    </ButtonBox>
  );
}
