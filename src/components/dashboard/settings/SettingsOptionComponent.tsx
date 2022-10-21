import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import SettingsButton from './SettingsButton'

interface SettingsOptionComponentProps {
    title: string
    children: any
    onClick?: () => void
    buttonLabel: string
    disabled?: boolean
}

const SettingsOptionComponent = ({ disabled = false, title, children, onClick, buttonLabel }: SettingsOptionComponentProps) => {
    return (
        <HStack
            background={'#FFFFFF'}
            width={"100%"}
            justifyContent={"space-between"}
            py={{ md: "15px", base: '2' }}
            mt={'1rem'}
            // mx={{ base: '4', md: '0' }}
            mr={{ md: '2rem', base: '2rem' }}
            pl={{ md: '1rem', base: '2' }}
            pr={{ md: '4rem', base: '2' }}
        >
            <Box mr={{ md: '2rem', base: '2' }}>
                <Heading size='sm' pb={'0.8rem'}>{title}</Heading>
                <Text fontSize={{ base: 'xs', lg: 'md' }}>{children}</Text>
            </Box>
            {/* <MainAppButton isLoading={false} size={"md"} width={'fit-content'} onClick={() => router.push('/settings/profile')}>Update profile</MainAppButton> */}
            <SettingsButton disabled={disabled} onClick={onClick}>{buttonLabel}</SettingsButton>
        </HStack>
    )
}

export default SettingsOptionComponent