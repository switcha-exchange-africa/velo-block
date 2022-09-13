import React from 'react'
import {
    Box,
    Text,
    VStack,
    Heading,
    HStack,
    Button,
    List,
    ListIcon
} from '@chakra-ui/react'
import MainAppButton from '../../components/buttons/MainAppButton'
const Settings = () => {
    return(
        <Box background={'#F8FAFC'}>
            <Box background={'#FFFFFF'}>
            <Heading  
            py={'1rem'}
            ml={'2rem'}>Settings</Heading>
            </Box>
            <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            ml={'2rem'}
            mr={'2rem'}
            pl={'1rem'}
            pr={'4rem'}>
                <Box mr={'2rem'}>
         <Heading size='sm'>Profile</Heading><br/>
         <Text>Email,Username,Phone number,Account verification</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"}>Update profile</MainAppButton>
        </HStack>

        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            ml={'2rem'}
            pl={'1rem'}
            pr={'4rem'}>
                <Box>
         <Heading size='sm'>Security</Heading><br/>
         <Text>Password,Email Change,Authenticator</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"}>Update Security</MainAppButton>
        </HStack>
        
        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            ml={'2rem'}
            pl={'1rem'}
            pr={'4rem'}>
                <Box>
         <Heading size='sm'>Notification</Heading><br/>
         <Text color={'#E5E5E5'}>Enabled</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"}>Disable</MainAppButton>
        </HStack>

        <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"12px"}
            mt={'2rem'}
            ml={'2rem'}
            pl={'1rem'}
            pr={'4rem'}>
                <Box>
         <Heading size='sm'>Account Activity</Heading><br/>
         <Text>Suspicious Account activity?</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"}>Disable Account</MainAppButton>
        </HStack>

        </Box>
    )
}

export default Settings