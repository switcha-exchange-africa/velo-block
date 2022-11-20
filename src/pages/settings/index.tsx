import {
    Box, Heading
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import SettingsOptionComponent from '../../components/dashboard/settings/SettingsOptionComponent'
import { checkValidToken } from '../../helpers/functions/checkValidToken'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'

const Settings = () => {
    const router = useRouter()
    
    

    return (
        <DashboardLayout title='Settings'>
            <Box background={'#F8FAFC'} height={"full"} color="black" px={{ md: "5%", base: '0' }} >
                <Box bg={{ base: 'white', md: 'transparent' }} px="2rem">
                    <Heading
                        py={{ md: '2rem', base: '4' }}
                        pl={{ base: '4', md: '0' }}
                        fontSize={{ base: '24', md: '38' }}
                    >Settings</Heading>
                </Box>
                <Box px={{ base: '4', md: '0' }} pt={{ base: '8', md: '0' }}>
                    <SettingsOptionComponent  onClick={() => router.push('/settings/profile')} buttonLabel='Update profile' title='Profile' >Email,Username,Phone number,Account verification</SettingsOptionComponent>

                    <SettingsOptionComponent onClick={() => router.push('/settings/security')} buttonLabel='Update Security' title='Security' >Password,Email Change,Authenticator</SettingsOptionComponent>

                    <SettingsOptionComponent buttonLabel='Disable' title='Notification' >Enabled</SettingsOptionComponent>

                    <SettingsOptionComponent onClick={() => router.push('/settings/account-activity')} buttonLabel='Disable Account' title='Account Activity' >Suspicious Account activity?</SettingsOptionComponent>
                </Box>




            </Box >
        </DashboardLayout >
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}

export default Settings