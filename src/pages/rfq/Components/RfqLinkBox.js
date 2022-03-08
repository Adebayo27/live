import { Box, Heading, LinkBox, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import React from 'react'
import ReactTimeAgo from 'react-time-ago'
export default function RfqLinkBox({data}) {
  return (
    <LinkBox as={Link} to={`/rfq/${data.id}/list`} border="1px solid #C0C0C1" borderRadius={"8px"} p="49px">
      <Heading textAlign={"center"} fontWeight="Bold" fontSize={"16px"} color="#303030"> {data.title} </Heading>
      <Text mt="24px" textAlign={"center"} fontWeight="200" fontSize={"12px"} color="#303030">Created <ReactTimeAgo date={data.created_at} locale="en-US"/> <Box as="span" fontWeight= "700">By {data.user_id.username}</Box></Text>
    </LinkBox>
  )
}
