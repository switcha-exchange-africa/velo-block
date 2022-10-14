import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import SettingsButton from '../../components/dashboard/settings/SettingsButton'
import SettingsOptionComponent from '../../components/dashboard/settings/SettingsOptionComponent'
const Settings = () => {
    const router = useRouter()
    return (
        <DashboardLayout>
            <Box background={'#F8FAFC'} height={"full"} color="black" px={{ md: "10%", base: '0' }}>
                <Box bg={{ base: 'white', md: 'transparent' }}>
                    <Heading
                        py={{ md: '2rem', base: '4' }}
                        pl={{ base: '4', md: '0' }}
                        fontSize={{ base: '24', md: '38' }}
                    >Settings</Heading>
                </Box>
                <Box px={{ base: '4', md: '0' }} pt={{ base: '8', md: '0' }}>
                    <SettingsOptionComponent onClick={() => router.push('/settings/profile')} buttonLabel='Update profile' title='Profile' >Email,Username,Phone number,Account verification</SettingsOptionComponent>

                    <SettingsOptionComponent onClick={() => router.push('/settings/security')} buttonLabel='Update Security' title='Security' >Password,Email Change,Authenticator</SettingsOptionComponent>

                    <SettingsOptionComponent buttonLabel='Disable' title='Notification' >Enabled</SettingsOptionComponent>

                    <SettingsOptionComponent onClick={() => router.push('/settings/account-activity')} buttonLabel='Disable Account' title='Account Activity' >Suspicious Account activity?</SettingsOptionComponent>
                </Box>




            </Box >
        </DashboardLayout >
    )
}

export default Settings