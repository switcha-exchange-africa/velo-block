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
    ListIcon,
    Flex,
    Show
} from '@chakra-ui/react'
import MainAppButton from '../../../../components/buttons/MainAppButton'
import { ArrowBackIcon } from "@chakra-ui/icons";
import DashboardLayout from '../../../../layouts/dashboard/DashboardLayout'
import SettingsOptionComponent from '../../../../components/dashboard/settings/SettingsOptionComponent'

const Verification = () => {
    const Router = useRouter()
    return (
        <DashboardLayout>
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "10%", base: '0' }} >
                <Show above='md'>
                    <Button
                        onClick={() => Router.back()}
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
                </Show>


                <Show below='sm'>
                    <Flex justifyContent={'start'} bg={'white'}>
                        <Button
                            onClick={() => Router.back()}
                            leftIcon={<ArrowBackIcon />}
                            colorScheme="transparent"
                            variant="solid"
                            pl={0}
                            py={"2rem"}
                            color={'black'}
                            ml={'2'}
                        >
                            Back
                            <Heading size="md"
                                ml={'1rem'}>Verification</Heading>
                        </Button>
                    </Flex>
                </Show>

                <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }}>
                    <SettingsOptionComponent buttonLabel='Verified' title='Level 1 Verification' disabled>Email Authentication and Phone number Authentication</SettingsOptionComponent>

                    <SettingsOptionComponent onClick={() => Router.push('/settings/profile/verification/level-2-verification')} buttonLabel='Verify' title='Level 2 Verification' >Picture of ID</SettingsOptionComponent>

                    <SettingsOptionComponent buttonLabel='Verify' title='Level 3 Verification' disabled>Selfie holding ID</SettingsOptionComponent>
                </Box>





            </Box>
        </DashboardLayout>
    )
}

export default Verification