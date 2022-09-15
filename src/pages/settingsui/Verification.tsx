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
    Flex
} from '@chakra-ui/react'
import MainAppButton from '../../components/buttons/MainAppButton'
import { ArrowBackIcon } from "@chakra-ui/icons";

const Verification = () =>{
    return(
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
        ml={'2rem'}>Verification</Heading>
        </Flex>
        </HStack>

        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            ml={'2rem'}
            pl={'1rem'}
            pr={'2rem'}>
                <Box>
         <Heading size='sm'>Level 1 Verification</Heading><br/>
         <Text>Email Authentication and Phone number Authentication</Text>
         </Box>
         <Button isLoading={false} size={"md"} background={'#E5E5E5'} width={'50%'}>Verified</Button>
        </HStack>

        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            ml={'2rem'}
            pl={'1rem'}
            pr={'2rem'}>
                <Box>
         <Heading size='sm'>Level 2 Verification</Heading><br/>
         <Text>Picture of ID</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"}>Verify</MainAppButton>
        </HStack>
       
        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            ml={'2rem'}
            pl={'1rem'}
            pr={'2rem'}>
                <Box>
         <Heading size='sm'>Level 3 Verification</Heading><br/>
         <Text>Selfie holding ID</Text>
         </Box>
         <Button isLoading={false} size={"md"} background={'#E5E5E5'} width={'50%'}>Verified</Button>
        </HStack>

        </Box>
    )
}

export default Verification