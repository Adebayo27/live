import React, { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  Avatar,
  Text,
  Radio,
  RadioGroup,
  Stack,
  HStack,
  useToast,
} from '@chakra-ui/react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import axios from 'axios';
import { httpWithToken } from '../../services/queries';


const Index = () => {
  const toast = useToast()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const [profile, setProfile] = React.useState(null)
  const [IsLoading, setIsLoading] = React.useState(false)
  const [countries, setCountries] = React.useState([])
  const [states, setStates] = React.useState([])
  const [gender, setGender] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('')
  const [selectedCountry, setSelectedCountry] = React.useState('')

  const fetchIndividual = async () => {
    let query = `
      query{
        individuals(where: {user_id: ${user.id}}){
          id
          last_name
          first_name
          picture
          logo
          phone
          gender
          country_id{
            id
            name
          }
          state_id{
            id
            name
          }
        }

        countries{
          id 
          name
        }

        states{
          id
          name
        }
      }
      
    `
    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      let resp = response.data.individuals[0]
      let country_list = response.data.countries
      let state_list = response.data.states
      // console.log(response.data.individuals)
      setProfile(resp)
      setFirstName(resp?.first_name)
      setLastName(resp?.last_name)
      setPhone(resp?.phone)
      setGender(resp?.gender)
      setCountries(country_list)
      setStates(state_list)
      setSelectedState(resp?.state_id.id)
      setSelectedCountry(resp?.country_id.id)

    }
   
  }

  const handleUpdateProfile = async () => {
    setIsLoading(true)

    let query = `
      mutation{
        updateIndividual(id:${profile.id}, data: {
          first_name: "${firstName}"
          last_name: "${lastName}"
          phone: "${phone}"
          gender: "${gender}"
          state_id: ${selectedState}
          country_id: ${selectedCountry}

        }){
          data{
            id
          }
        }	
      }
    `
    let response = await httpWithToken('graphql', query);
    if (response && response !== undefined && response !== null){
      fetchIndividual()

      setIsLoading(false)
      toast({
        title: 'Account updated.',
        description: "We've created your account for you.",
        duration: 9000,
        isClosable: true,
      })
    }

  }
  useEffect(() => {
    fetchIndividual()
  }, [])



  return (
    <Box>
      <Text color="#E5E5E5" fontSize="25px">
        Personal Details
      </Text>
      {/*user details starts */}

      <Stack spacing="30px" mt="5" direction={['column', 'row']} ml={1}>
        <Box mt="6" w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Profile Picture
          </Text>

          <Text fontSize="12px" color="gray.500">
            Choose a picture that will be used across Livend Bulk.
          </Text>
        </Box>

        <Avatar name="" src={profile?.attributes?.picture} size="xl" />
      </Stack>

      {/* ID starts */}
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            User ID
          </Text>
          <Text fontSize="12px" color="gray.500">
            This is your unique ID
          </Text>
        </Box>

        <Box fontSize="16px" color="gray.500">
          123453
        </Box>
      </Stack>
      {/* ID ends */}

      {/* name starts */}
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Full Name
          </Text>
          <Text fontSize="12px" color="gray.500">
            Input your company's registered name
          </Text>
        </Box>
        <Stack mt={5} spacing="30px" direction={['column', 'row']}>
          <Input color={'black'} value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Gideon" fontSize="16px" />

          <Input color={'black'} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Ogunkola" fontSize="16px" />
        </Stack>
      </Stack>
      {/* name ends */}

      {/* country select starts */}
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Country
          </Text>
          <Text fontSize="12px" color="gray.500">
            Choose your country of operation
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '300px' }}>
          <Select
            id="country"
            placeholder="Select country"
            mt="5"
            type="text"
            color="gray.500"
            w={{ base: '85%', md: '308px' }}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {
              countries && countries.map((e, i) => {
                return <option selected={e.id == selectedCountry} value={e.id}>{e.name}</option>
              })
            }

          </Select>
        </Box>
      </Stack>
      {/* country select starts */}

      {/* state select starts */}
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            State
          </Text>
          <Text fontSize="12px" color="gray.500">
            Choose your state of operation
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '300px' }}>
          <Select
            id="state"
            placeholder="Select state"
            mt="5"
            type="text"
            color="gray.500"
            w={{ base: '85%', md: '308px' }}
            onChange={(e) => setSelectedState(e.target.value)}
          > 
            {
              states && states.map((e, i) => {
                return <option selected={e.id == selectedState} key={i} value={e.id}>{e.name}</option>
              })
            }
          </Select>
        </Box>
      </Stack>
      {/* state select ends */}

      {/* phone starts */}
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Phone Number
          </Text>
          <Text fontSize="12px" color="gray.500">
            Your mobile number
          </Text>
        </Box>

        <Box w={{ base: '100%', md: '300px' }}>
          <Input
            // label="Phone Number"
            placeholder="0811234454"
            mt="5"
            w={{ base: '85%', md: '214px' }}
            value={phone}
            color={'black'}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
      </Stack>
      {/* phone ends */}

      {/* gender starts */}
      <Stack spacing="30px" mt={7} direction={['column', 'row']} ml={1}>
        <Box w={{ base: '100%', md: '300px' }}>
          <Text fontWeight={'bold'} fontSize="16px" color="#303030">
            Gender
          </Text>
          <Text fontSize="12px" color="gray.500">
            How would you like to be identified?
          </Text>
        </Box>

        <RadioGroup onChange={setGender} value={gender} color="blue.900">
          <Stack direction={['column', 'row']}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
      {/* gender ends */}

      <HStack
        spacing="30px"
        mt="5"
        mb="5"
        ml={{ base: 0, md: 5 }}
        mr={{ base: '4', md: 5 }}
        flexWrap="row-reverse"
      >
        <Box
          d={{ base: 'none', md: 'block' }}
          w={{ base: '100%', md: '300px' }}
        ></Box>
        <Button isLoading={IsLoading} onClick={() => handleUpdateProfile()}>Save Changes</Button>
      </HStack>
    </Box>
  );
};

export default Index;
