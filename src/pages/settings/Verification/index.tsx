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
    Flex
} from '@chakra-ui/react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import { ArrowBackIcon } from "@chakra-ui/icons";

const Verification = () =>{
    const Router = useRouter()
    return(
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
         ml={'1rem'}>Verification</Heading>
        </VStack>

        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
         
            pl={'1rem'}
            pr={'2rem'}>
                <Box>
         <Heading size='sm'>Level 1 Verification</Heading><br/>
         <Text>Email Authentication and Phone number Authentication</Text>
         </Box>
         <Button isLoading={false} size={"md"} background={'#E5E5E5'} width={'10%'}>Verified</Button>
        </HStack>

        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            pl={'1rem'}
            pr={'2rem'}>
                <Box>
         <Heading size='sm'>Level 2 Verification</Heading><br/>
         <Text>Picture of ID</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"} width={'10%'}>Verify</MainAppButton>
        </HStack>
       
        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            pl={'1rem'}
            pr={'2rem'}>
                <Box>
         <Heading size='sm'>Level 3 Verification</Heading><br/>
         <Text>Selfie holding ID</Text>
         </Box>
         <Button isLoading={false} size={"md"} background={'#E5E5E5'} width={'10%'}>Verify</Button>
        </HStack>

        </Box>
    )
}

export default Verification