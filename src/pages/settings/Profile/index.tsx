import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {
    Box,
    Text,
    VStack,
    Heading,
    HStack,
    Button,
    List,
    ListIcon,
    Input,
    Flex
} from '@chakra-ui/react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import { ArrowBackIcon } from "@chakra-ui/icons";
const Profile = () =>{
    const Router = useRouter()
    return ( 
        <Box 
        background={"#F8FAFC"} height={"100vh"}
         color="black" px={"10%"} >
            <Button
            onClick = {() => Router.back()}
        leftIcon={<ArrowBackIcon />}
        colorScheme="transparent"
        variant="solid"
        pl={0}
        py={"3rem"}
        color={'black'}
        ml={'1rem'}
      >
        Back
      </Button>
      <VStack alignItems={"start"} gap={"1rem"}>
      
        <Heading size="md"
         py={'2rem'}
         ml={'1rem'}>Profile</Heading>
         
        </VStack>
        <Box  background={'#FFFFFF'}
          width={"60%"}
          justifyContent={"space-between"}
          py={"20px"}>
        <HStack>
            <Flex width={'100%'}>
                <Text
                pl={'2rem'}
                pt={'0.5rem'}>Email
                </Text>
                <Input placeholder='Olumideoyeleye@gmail.com'
                ml={'7rem'} 
                mr={'1rem'}
              
               />
               </Flex>
               </HStack>
               <HStack mt={'2rem'}>
        
          <Flex width={'100%'}>
            <Text
                pl={'2rem'}
                pt={'0.5rem'}>Username
                </Text>
                <Input placeholder='Eclusive'
                ml={'5rem'} 
                mr={'1rem'}
               
               />
                
             
            </Flex>
        </HStack>

        <HStack mt={'2rem'}>
        <Flex width={'100%'}>
            <Text
                pl={'2rem'}
                pt={'0.5rem'}>Name
                </Text>
                <Input placeholder='Temitope'
                ml={'7rem'} 
                mr={'1rem'}
               
               />
                
             
            </Flex>
        </HStack>

        <HStack mt={'2rem'}>
           
                <Text
                pl={'2rem'}>Phone number</Text>
             <Box pl={'3rem'}>
                <Text>***176</Text>
                <Text
                color={'#FB5E04'}>Change phone number</Text>
             </Box>
             
        </HStack>

        <HStack mt={'2rem'} >
           
                <Text
                pl={'2rem'}>Account Status</Text>
           
                <Text pl={'5rem'} pr={'6rem'}>Level 1 Verified</Text>
                <Link href='Profile/Verification'>
                <a>
              <MainAppButton isLoading={false} size={"md"} width={'100%'}>Upgrade Verification</MainAppButton>
              </a>
              </Link>
        </HStack>

        <HStack mt={'2rem'} pl={'26rem'}>
            <MainAppButton isLoading={false} size={"md"} width={'85%'}>Create Ads</MainAppButton>
        </HStack>
        </Box>
        </Box>
        
    )
}

export default Profile;