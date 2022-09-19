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
    ListIcon
} from '@chakra-ui/react'
import MainAppButton from '../../components/buttons/MainAppButton'
const Settings = () => {
    const Router = useRouter()
    return(
        <Box background={'#F8FAFC'} height={"100vh"} color="black" px={"10%"}>
            <Box>
            <Heading  
            py={'2rem'}
            ml={'2rem'}>Settings</Heading>
            </Box>
            <HStack 
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={"15px"}
            mt={'1rem'}
            ml={'2rem'}
            mr={'2rem'}
            pl={'1rem'}
            pr={'4rem'}>
                <Box mr={'2rem'}>
                <Link href="/settings/Profile">
                    <a>
         <Heading size='sm' pb={'0.8rem'}>Profile</Heading>
         </a>
         </Link>
         <Text>Email,Username,Phone number,Account verification</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"} width={'15%'}>Update profile</MainAppButton>
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
                <Link href="/settings/security">
                    <a>
         <Heading size='sm'>Security</Heading><br/>
         </a>
         </Link>
         <Text>Password,Email Change,Authenticator</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"} width={'15%'}>Update Security</MainAppButton>
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
         <MainAppButton isLoading={false} size={"md"} width={'12%'}>Disable</MainAppButton>
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
                <Link href="/settings/AccountActivity">
                    <a>
         <Heading size='sm'>Account Activity</Heading><br/>
         </a>
         </Link>
         <Text>Suspicious Account activity?</Text>
         </Box>
         <MainAppButton isLoading={false} size={"md"} width={'15%'}>Disable Account</MainAppButton>
        </HStack>

        </Box>
    )
}

export default Settings