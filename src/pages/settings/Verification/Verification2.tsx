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
    Image,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import { ArrowBackIcon } from "@chakra-ui/icons";


const Verification2 = () =>{
    return(
        <Box 
        background={"#F8FAFC"} height={"100vh"}
         color="black" px={"10%"} >
            <Button
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
      width={"40%"}
      py={"20px"}
      textAlign={['center']}
      ml={'20rem'}
      justifyContent={'center'}
      alignItems={'center'}
     >
        <Box>
        <HStack>
        <Heading ml={'3rem'}>Level 2 Verification</Heading>

        </HStack>
        </Box>
        <Box
         border='1px' borderColor='orange'
         background={'#FFFFFF'}
         justifyContent={"space-between"}
         py={"20px"}
         height={'60'}
        ml={'3rem'}
         width={'80%'}
         mt={'2rem'}
         >
         
         <Image src='Vectorbar.png' alt='Notification bar'/>
          
          </Box>
          <Box>
          <UnorderedList pl={"2rem"}>
            <ListItem>
          Take a Picture of your valid ID
            </ListItem>
            <ListItem>
              
            </ListItem>
            <ListItem>
              All pending withdrawals will be canceled All open orders will be
              canceled
            </ListItem>
            <ListItem>Your verified information Will not be deleted</ListItem>
          </UnorderedList>
          </Box>
    
    </Box>

    </Box>
      )
      }
export default Verification2;