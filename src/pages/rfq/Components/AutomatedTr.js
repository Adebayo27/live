import React, { useEffect, useState } from 'react'
import {
     Box,
     Text,
     Grid,
     Flex,
     Container,
     SimpleGrid,
     Spacer,
     InputRightElement,
     LinkOverlay,
     Heading,
     InputGroup,
     useDisclosure,
     HStack,
     Stack,
     Checkbox,
     CheckboxGroup,
     Link,
     Progress,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     VStack,
     Tag,
     useToast,
     Alert,
     AlertIcon,
     AlertTitle,
     AlertDescription,
     CloseButton,
     NumberInput,
     NumberInputField,
     NumberInputStepper,
     NumberIncrementStepper,
     NumberDecrementStepper,
} from '@chakra-ui/react';

import Select from '../../../components/Select';
import { httpWithToken } from '../../../services/queries';

export default function AutomatedTr({ i }) {
     const [details, setDetails] = useState(null);
     const fetchDetails = async () => {
          let query = `
          query{
               rfqMeasurementNameOptions{
                    id
                    title
               }
               
               rfqNameOptions{
                    id
                    title
               }
               
               rfqDescriptionOptions{
                    id
                    title
               }
          }
          `
          let response = await httpWithToken('graphql', query);
          if (response && response !== undefined && response !== null) {
               setDetails(response.data)
          }


     }
     useEffect(() => {
          fetchDetails()
     }, [])
     return (
          <Tr fontWeight="normal">
               <Td textAlign="center">{i}</Td>
               <Td textAlign="center">
                    <Select placeholder="Quartzite">
                         {
                              details && details?.rfqNameOptions.map((e, i) => (
                                   <option value={e.id}>
                                        {e.title}
                                   </option>
                              ))
                         }

                    </Select>
               </Td>
               <Td textAlign="center">
                    <Select placeholder="Kashmir grannite">
                         {
                              details && details?.rfqDescriptionOptions.map((e, i) => (
                                   <option value={e.id}>
                                        {e.title}
                                   </option>
                              ))
                         }
                    </Select>
               </Td>
               <Td textAlign="center">
                    <Select placeholder="Tonnes">
                         {
                              details && details?.rfqMeasurementNameOptions.map((e, i) => (
                                   <option value={e.id}>
                                        {e.title}
                                   </option>
                              ))
                         }
                    </Select>
               </Td>
               <Td textAlign="center">
                    <NumberInput defaultValue={0} min={0} max={200000000000000}>
                         <NumberInputField />
                         <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                         </NumberInputStepper>
                    </NumberInput>
               </Td>
          </Tr>
     )
}
