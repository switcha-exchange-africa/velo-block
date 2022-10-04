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
            <Box background={'#F8FAFC'} height={"full"} color="black" px={{ lg: "10%", base: '4' }}>
                <Box>
                    <Heading
                        py={'2rem'}
                        ml={'2rem'}>Settings</Heading>
                </Box>
                <SettingsOptionComponent onClick={() => router.push('/settings/profile')} buttonLabel='Update profile' title='Profile' >Email,Username,Phone number,Account verification</SettingsOptionComponent>

                <SettingsOptionComponent onClick={() => router.push('/settings/security')} buttonLabel='Update Security' title='Security' >Password,Email Change,Authenticator</SettingsOptionComponent>

                <SettingsOptionComponent buttonLabel='Disable' title='Notification' >Enabled</SettingsOptionComponent>

                <SettingsOptionComponent onClick={() => router.push('/settings/account-activity')} buttonLabel='Disable Account' title='Account Activity' >Suspicious Account activity?</SettingsOptionComponent>



            </Box >
        </DashboardLayout >
    )
}

export default Settings