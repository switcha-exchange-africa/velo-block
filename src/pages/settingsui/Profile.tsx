import React from 'react'
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
import MainAppButton from '../../components/buttons/MainAppButton'
import { ArrowBackIcon } from "@chakra-ui/icons";
const Profile = () =>{
    return (
        <Box 
        background={"#F8FAFC"} height={"100vh"}
         color="black" px={"10%"}>
            <HStack
            pt={'3rem'}>
       <Flex>
        <Button
        leftIcon={<ArrowBackIcon />}
        colorScheme="transparent"
        color={'black'}
        size='lg'
        variant="solid"
        pl={0}
        py={"3rem"}
      >
        Back
      </Button>
        <Heading  
        py={'1rem'}
        ml={'2rem'}>Profile</Heading>
        </Flex>
        </HStack>
        <HStack
          background={'#FFFFFF'}
          width={"100%"}
          justifyContent={"space-between"}
          py={"20px"}
         
          >
            <Flex width={'100%'}>
                <Text
                pl={'2rem'}
                pt={'0.5rem'}>Email
                </Text>
                <Input placeholder='Olumideoyeleye@gmail.com'
                ml={'3rem'} 
                mr={'1rem'}
               />
               </Flex>
               </HStack>
               <HStack
          background={'#FFFFFF'}
          width={"100%"}
          justifyContent={"space-between"}
          py={"12px"}
          >
        
          <Flex width={'100%'}>
            <Text
                pl={'2rem'}
                pt={'0.5rem'}>Username
                </Text>
                <Input placeholder='Eclusive'
                ml={'3rem'} 
                mr={'1rem'}
               />
                
             
            </Flex>
        </HStack>

        <HStack
          background={'#FFFFFF'}
          width={"100%"}
          justifyContent={"space-between"}
          py={"12px"}
          >
        <Flex width={'100%'}>
            <Text
                pl={'2rem'}
                pt={'0.5rem'}>Name
                </Text>
                <Input placeholder='Temitope'
                ml={'3rem'} 
                mr={'1rem'}
               />
                
             
            </Flex>
        </HStack>

        <HStack
         background={'#FFFFFF'}
         width={"100%"}
         justifyContent={"space-between"}
         py={"12px"}>
           
                <Text
                pl={'2rem'}>Phone number</Text>
             <Box pr={'1rem'}>
                <Text>***176</Text>
                <Text
                color={'#FB5E04'}>Change phone number</Text>
             </Box>
        </HStack>

        <HStack
         background={'#FFFFFF'}
         width={"100%"}
         justifyContent={"space-between"}
         py={"12px"}>
           
                <Text
                pl={'2rem'}>Account Status</Text>
             <Box pr={'1rem'}>
                <Text>Level 1 Verification</Text>
              <MainAppButton isLoading={false} size={"md"}>Upgrade Verification</MainAppButton>
             </Box>
        </HStack>

        <HStack
          background={'#FFFFFF'}
          width={"100%"}
          justifyContent={"space-between"}
          py={"40px"}
          pl={'2rem'}
        >
            <MainAppButton isLoading={false} size={"md"}>Create Ads</MainAppButton>
        </HStack>
        </Box>
        
    )
}

export default Profile