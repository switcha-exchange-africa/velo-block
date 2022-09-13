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

const Verfication2 = () =>{
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
         py={"20px"}>
         <Box justifyContent={'center'}>
            <Heading>Level 2 Verification</Heading>

       </Box>

       <HStack
       border={'1px solid orange'}
       >

       </HStack>
        </HStack>
        

        </Box>
    )
}

export default Verfication2;