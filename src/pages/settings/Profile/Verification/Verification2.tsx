import React from 'react'
import {
    Box,
    Text,
    VStack,
    Heading,
    HStack,
    Button,
    ListIcon,
    Flex,
    Img,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons";
import {useRouter} from 'next/router'
import Link from 'next/link';
import MainAppButton from '../../../../components/buttons/MainAppButton';

const Verification2 = () =>{
  const Router = useRouter()
    return(
        <Box 
        background={"#F8FAFC"}
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

      <Box
      background={'#FFFFFF'}
      width={"35%"}
      py={"20px"}
      ml={'20rem'}

     >
        <Box>
        <HStack>
        <Heading ml={'6rem'} fontSize={'1.5rem'}>Level 2 Verification</Heading>

        </HStack>
        </Box>
        <Box
         border='1px' borderColor='orange'
         background={'#FFFFFF'}
         justifyContent={"space-between"}
         py={"20px"}
         height={'80'}
        ml={'2.5rem'}
         width={'80%'}
         mt={'2rem'}
         >
         
         <Img src='/assets/images/Vectorbar.png' alt=''ml={'6.5rem'} mt={'5rem'} />
          
          </Box>
          <Box w={"100%"} gap={"0.5rem"} alignItems={"start"}>
          <UnorderedList ml={'3rem'} mt={'2rem'} >
            <ListItem>
          Take a Picture of your valid ID
            </ListItem>
            <ListItem>
              Ensure the Picture is clear and readable
            </ListItem>
            <ListItem>
              Ensure your picture on the ID is clear
            </ListItem>
            <Box mt={'2rem'} ml={'4rem'}  >
              
          <MainAppButton isLoading={false} size={"md"} width={'70%'}>Take a snapshot
          <Img src='/assets/images/Vectorcamera.png' alt=''pl={'1rem'}/>
          </MainAppButton>
          
          
          </Box>
          <Box mt={'1rem'} ml={'2rem'}>
           <Button  width={'80%'} color={'orange'}>Import from gallery 
           <Img src='/assets/images/Vectorfiles.png' alt='' pl={'1rem'} />
           </Button> 
          </Box>
        
         
</UnorderedList>
           
          </Box>

    
    </Box>

    </Box>
      )
      }
export default Verification2;