import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  WrapItem,
  Wrap,
  Th,
  Tr,
  Tbody,
  Thead,
  Td,
  Tfoot,
  TableCaption,
  useDisclosure,
  HStack,
  InputRightElement,
  InputGroup,
  LinkBox,
} from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
//   import { FaEye } from 'react-icons/fa';


function RfqListTd({ title, category, datePosted, submission, status, pid }) {
  let params  = useParams()
  return (
    <Tr>
      <Td color="#303030" fontSize="16px" fontWeight="normal">
        {title}
      </Td>
      <Td color="#303030" textTransform={'senetnce'}>{category}</Td>
      <Td color="#303030">{datePosted}</Td>
      <Td color="#303030">{submission}</Td>
      <Td
        color={
          status === 'Closed'
            ? '#211F5C'
            : status === 'Visible'
            ? '#38A169'
            : status === 'Flagged'
            ? '#EE4223'
            :status === 'Pending'
            ? '#F5862E'
            : '#38A169'
        }
      >
        {status}
      </Td>
      <Td color="#303030">
        <LinkBox as={Link} to={`/rfq/${params.id}/request/${pid}`}>
          <FaEye cursor="pointer" />
        </LinkBox>
      </Td>
    </Tr>
  );
}

export default RfqListTd;
