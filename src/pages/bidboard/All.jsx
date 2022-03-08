import React from 'react';
import DashboardWrapper from '../../layouts/dashboard';
import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, Divider, Text, SimpleGrid } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import theme from '../../utils/theme';
import BidCard from './Components/BidCard';
import BidFilter from './Components/BidFilter';

const All = () => {
	return (
		<DashboardWrapper pageTitle="Dashboard" padding={{base:'0px', md:'20px'}}>
			<Box w="100%" h="auto" backgroundColor={theme.colors.white} m="auto" color={theme.colors.gray.gray500}>
				<Tabs>
					<TabList fontSize="16px">
						<Tab
							_selected={{
								borderBottomColor: theme.colors.orange.orange500,
								color: theme.colors.blue.blue500
							}}
						>
							All
						</Tab>
						<Tab
							_selected={{
								borderBottomColor: theme.colors.orange.orange500,
								color: theme.colors.blue.blue500
							}}
						>
							Saved
						</Tab>
						<Tab
							_selected={{
								borderBottomColor: theme.colors.orange.orange500,
								color: theme.colors.blue.blue500
							}}
						>
							Submitted
						</Tab>
						<Tab
							_selected={{
								borderBottomColor: theme.colors.orange.orange500,
								color: theme.colors.blue.blue500
							}}
							d={{ base: 'none', md: 'flex' }}
						>
							Invited
						</Tab>
					</TabList>
					<Divider bg={theme.colors.gray.gray100} />
					<TabPanels>
						<TabPanel color="gray.300" mt={6}>
							<BidFilter />
							<SimpleGrid columns={{base:'1', md:'1', lg:'3'}} spacing="32px" mt="35px">
								<BidCard />
								<BidCard />
								<BidCard />
								<BidCard />
								<BidCard />
								<BidCard />
								<BidCard />
								<BidCard />
								<BidCard />
							</SimpleGrid>
						</TabPanel>
						<TabPanel color="gray.300" mt={6}>
							<BidFilter />
							<SimpleGrid columns={[ 1, null, 3 ]} spacing="32px" mt="35px">
								<BidCard />
								<BidCard />
								<BidCard />
							</SimpleGrid>
						</TabPanel>
						<TabPanel color="gray.300" mt={6}>
							<BidFilter />
							<SimpleGrid columns={[ 1, null, 3 ]} spacing="32px" mt="35px">
								<BidCard />
								<BidCard />
								<BidCard />
							</SimpleGrid>
						</TabPanel>
						<TabPanel color="gray.300">
							<Text>Invited</Text>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</DashboardWrapper>
	);
};

export default All;
