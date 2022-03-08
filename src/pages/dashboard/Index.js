import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdAdb, MdPlusOne } from 'react-icons/md';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';
import DashboardWrapper from '../../layouts/dashboard';

export default function Dashboard() {
  return (
    <DashboardWrapper pageTitle="Dashboard">
      <Stack spacing={'40px'}>
        <Input
          placeholder="Name"
          label="Enter name"
          value="John Chimaobi"
          helper={'Enter name pls'}
          rightIcon={<MdAdb />}
        />

        <Select placeholder="Select chimaobi" label="Select">
          <option>Holandia</option>
        </Select>

        <Box>
          <Button>
            <MdPlusOne /> Save Changes
          </Button>
        </Box>
      </Stack>
    </DashboardWrapper>
  );
}
