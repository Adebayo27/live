import React, {useState} from 'react';
import DashboardWrapper from '../../layouts/dashboard';

import { Box, Text, Flex, Spacer, HStack, Image, Checkbox, Stack,
    Alert,
	AlertIcon,
	CloseButton,
	AlertDescription

} from '@chakra-ui/react';
import theme from '../../utils/theme';
import Logo from '../../components/Logo';
import { HiDownload } from 'react-icons/hi';
import Button from '../../components/Button'

const BidContract = () => {
    const [alert, setAlert] = useState(false);
	return (
		<DashboardWrapper pageTitle="Bid Board" padding={{base:'10px', md:'24px'}}>
			<Box mt="10px" >
                <Box mb='42px'>
					<Text color={theme.colors.blue.blue500} fontSize="16px">
						{' '}
                        RFQ &gt; Quotation title &gt; Binding contract
					</Text>
				</Box>
				<Stack direction={[ 'column', 'row' ]}>
					<Flex display="column">
						<Box pb="0">
							<Logo />
						</Box>
					</Flex>

					<Spacer />
					<Spacer />

					<HStack>
						<HiDownload color={theme.colors.orange.orange500} />
						<Text fontSize="16px" color={theme.colors.orange.orange500}>
							Download as PDF
						</Text>
					</HStack>
				</Stack>
				<Box w={{ base: '100%', md: '1012px' }} mt={75}  >
					<Text fontSize="16px" color={theme.colors.gray.gray500} pr={{base:'0px', md:"100px"}} >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis est egestas fermentum.
						Venenatis eget massa scelerisque eleifend aliquet. Ut volutpat id tortor tortor, pulvinar.
						Facilisi pellentesque at felis tortor nascetur nisl, duis ut malesuada. Enim ut in neque
						malesuada. Sodales vehicula ante sed volutpat. Turpis sit tortor tempus in iaculis purus tortor,
						sit. Blandit sed sit at in justo, sed enim. Mauris ante eu quam ut luctus. Ipsum sit volutpat
						vehicula vulputate sem. Est consequat fermentum bibendum vestibulum et morbi mi dolor. Arcu
						sagittis eget turpis interdum. Rhoncus, est, vulputate id phasellus lectus amet mattis nulla
						accumsan. Amet enim diam amet, vulputate amet purus.
					</Text>

					<Text fontSize="16px" color={theme.colors.gray.gray500} mt={5} pr={{base:'0px', md:"100px"}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis est egestas fermentum.
						Venenatis eget massa scelerisque eleifend aliquet. Ut volutpat id tortor tortor, pulvinar.
						Facilisi pellentesque at felis tortor nascetur nisl, duis ut malesuada. Enim ut in neque
						malesuada. Sodales vehicula ante sed volutpat. Turpis sit tortor tempus in iaculis purus tortor,
						sit. Blandit sed sit at in justo, sed enim. Mauris ante eu quam ut luctus. Ipsum sit volutpat
						vehicula vulputate sem. Est consequat fermentum bibendum vestibulum et morbi mi dolor. Arcu
						sagittis eget turpis interdum. Rhoncus, est, vulputate id phasellus lectus amet mattis nulla
						accumsan. Amet enim diam amet, vulputate amet purus.
					</Text>

					<Text fontSize="16px"color={theme.colors.gray.gray500} mt={5} pr={{base:'0px', md:"100px"}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam duis est egestas fermentum.
						Venenatis eget massa scelerisque eleifend aliquet. Ut volutpat id tortor tortor, pulvinar.
						Facilisi pellentesque at felis tortor nascetur nisl, duis ut malesuada. Enim ut in neque
						malesuada. Sodales vehicula ante sed volutpat. Turpis sit tortor tempus in iaculis purus tortor,
						sit. Blandit sed sit at in justo, sed enim. Mauris ante eu quam ut luctus. Ipsum sit volutpat
						vehicula vulputate sem. Est consequat fermentum bibendum vestibulum et morbi mi dolor. Arcu
						sagittis eget turpis interdum. Rhoncus, est, vulputate id phasellus lectus amet mattis nulla
						accumsan. Amet enim diam amet, vulputate amet purus.
					</Text>
				</Box>
			
				<HStack spacing={5} direction={['column','row']} mt={6} mb={6}>
                <Text  color={'gray.gray200'}>Client</Text>
					<Checkbox  color={'gray.gray500'}>
                    I agree to this contract
					</Checkbox>

                    <Image
                     src='/assets/images/sign.png'
                      alt='signature'
                      w="50px"
                      /> 
               
             
				</HStack>

                <HStack spacing={8}  mt={6} mb={6}>
                <Text>You</Text>
					<Checkbox  colorScheme='blue.900'>
                    I agree to this contract
					</Checkbox>
   
				</HStack>
            <Button onClick={()=>setAlert(!alert)}> Save Contract</Button>
            {
					alert?
				<Alert bg={'#c6f6d5'} status='success' w={{base:'100%', md:'678px'}} rounded={6} mt='18px'>
				<AlertIcon color='green' fontSize='16px' fontWeight='400'/>
				<AlertDescription>The contract has been sent back to the client. You will be notify when he pays.</AlertDescription>
				<CloseButton position='absolute' right='0px' top='8px' onClick={()=>setAlert(!alert)}/>
				</Alert>: ''
				}
			</Box>
		</DashboardWrapper>
	);
};

export default BidContract;
