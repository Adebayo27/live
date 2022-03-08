import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab, 
  TabPanel,
  Divider,
  useColorModeValue,
  Box,
  Text,
} from '@chakra-ui/react';
import AccountTabSection from './AccountTabSection';
import SecuirtyTabSection from './SecurityTabSection';

const TabPills = () => {
  const bg = useColorModeValue('white.500', 'gray.500');
  const color = useColorModeValue('black', 'gray.800'); 

  return (
    <Box>
      <Tabs variant="unstyled" color={'#211F5C'}>
        <TabList>
          <Tab
            px={0}
            ml={5}
            _selected={{
              borderBottomWidth: 4, 
              borderBottomColor: 'orange.500',
              color: 'blue.500',
            }}
          >
            Account
          </Tab>
          <Tab
            px={0}
            ml={5}
            _selected={{
              borderBottomWidth: 4,
              borderBottomColor: 'orange.500',
              color: 'blue.500',
            }}
          >
            Security
          </Tab>
        </TabList>

        <Divider ml={5} />
        <TabPanels>
          <TabPanel>
            <p>
              <Text color="#E5E5E5" fontSize="25px">
                <AccountTabSection />
              </Text>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Text color="#E5E5E5" fontSize="25px">
                <SecuirtyTabSection />
              </Text>
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabPills;
