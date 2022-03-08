import React from 'react';
import { Box, Center, Divider, Stack, Text, List,
    ListItem,
    ListIcon,
    HStack,
    } from '@chakra-ui/react';
const Side = () => {
  return (
    <Box
      zIndex="sticky"
      w="593px"
      color="#fff"
      bgColor="#211F5C"
      bgImage={'/assets/images/layer.png'}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      minH={'100vh'}
    >
      <Box>
        <Box p="24px" pb="0" ml='15%' mt={5}>
          <img src="/assets/images/livevend.png" w="88px" h="88px" />
        </Box>

    
        <Box ml='15%' p="24px" mt='25%'>
          <List spacing={4}>
            <ListItem>
                <HStack>
              <ListIcon as={CustumeListIcon} color="green.500" />
             <Text>Transparacy</Text>
             </HStack>
            </ListItem>    
          </List>

          <List spacing={4} mt={5}>
            <ListItem>
                <HStack>
              <ListIcon as={CustumeListIcon} color="green.500" />
             <Text>User Accountability</Text>
             </HStack>
            </ListItem>    
          </List>

          <List spacing={4} mt={5}>
            <ListItem>
                <HStack>
              <ListIcon as={CustumeListIcon} color="green.500" />
             <Text>Efficient Delivery</Text>
             </HStack>
            </ListItem>    
          </List>

          <List spacing={4} mt={5}>
            <ListItem>
                <HStack>
              <ListIcon as={CustumeListIcon} color="green.500" />
             <Text>Escrow Payment</Text>
             </HStack>
            </ListItem>    
          </List>

          <List spacing={4} mt={5}>
            <ListItem>
                <HStack>
              <ListIcon as={CustumeListIcon} color="green.500" />
             <Text>Specification Confidence</Text>
             </HStack>
            </ListItem>    
          </List>

          <List spacing={4} mt={5}>
            <ListItem>
                <HStack>
              <ListIcon as={CustumeListIcon} color="green.500" />
             <Text>Competitive Prices</Text>
             </HStack>
            </ListItem>    
          </List>

          <List spacing={4} mt={5}>
            <ListItem>
                <HStack>
              <ListIcon as={CustumeListIcon} color="green.500" />
             <Text>Financing Options</Text>
             </HStack>
            </ListItem>    
          </List>

        </Box>
      

      </Box>
    </Box>
  );
};

export default Side;

const CustumeListIcon = () => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_718_39111)">
      <path
        d="M24.3546 5.21641L3.10662 5.07378C2.33245 5.06912 1.5881 5.37197 1.03711 5.91581C0.48611 6.45964 0.173544 7.19997 0.168083 7.97412L0.0254532 29.2226C0.0203896 29.9968 0.322979 30.7412 0.866682 31.2922C1.41039 31.8433 2.15069 32.1558 2.92479 32.1612L24.1728 32.3038C24.947 32.3089 25.6915 32.0062 26.2426 31.4624C26.7937 30.9186 27.1061 30.1782 27.1113 29.404L27.254 8.15594C27.259 7.38174 26.9565 6.6372 26.4128 6.08599C25.8691 5.53478 25.1288 5.222 24.3546 5.21641ZM25.562 27.955C25.5599 28.2943 25.4909 28.6298 25.3591 28.9424C25.2273 29.2549 25.0352 29.5385 24.7938 29.7768C24.5524 30.0152 24.2664 30.2036 23.9521 30.3314C23.6378 30.4592 23.3015 30.5238 22.9622 30.5216L4.16167 30.3954C3.82231 30.3933 3.48669 30.3243 3.17401 30.1924C2.86132 30.0605 2.57769 29.8682 2.33934 29.6266C2.10098 29.3851 1.91257 29.0989 1.78486 28.7845C1.65716 28.47 1.59267 28.1335 1.59508 27.7941L1.72127 8.99407C1.72355 8.65477 1.79264 8.31924 1.92461 8.00664C2.05657 7.69404 2.24883 7.4105 2.49038 7.17221C2.73194 6.93392 3.01807 6.74554 3.33244 6.61785C3.64681 6.49015 3.98325 6.42563 4.32255 6.42798L23.1231 6.55417C23.8081 6.55917 24.463 6.83592 24.944 7.3236C25.425 7.81129 25.6927 8.46999 25.6882 9.15495L25.562 27.955Z"
        fill="#EEF3FF"
      />
      <path
        d="M28.2307 2.65281C24.3579 5.96089 20.8017 9.4741 17.7905 13.593C16.4623 15.4101 15.4142 17.4316 14.4446 19.4542C13.9887 20.4061 13.7135 21.3978 13.4544 22.3896C11.6294 20.6703 9.85369 18.9028 7.84792 17.3718C6.41771 16.2807 1.57005 19.6397 3.2465 20.92C6.25118 23.2122 8.74714 26.0576 11.6661 28.4502C12.8885 29.4499 15.6263 27.3163 16.2704 26.4161C18.3908 23.4552 18.7022 19.8177 20.2555 16.5816C22.6268 11.6329 26.7995 7.58532 30.9147 4.06786C33.9874 1.44442 30.3001 0.885162 28.2317 2.65082"
        fill="#F5862E"
      />
    </g>
    <defs>
      <clipPath id="clip0_718_39111">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0.214844 0.64209) rotate(0.384589)"
        />
      </clipPath>
    </defs>
  </svg>
);
