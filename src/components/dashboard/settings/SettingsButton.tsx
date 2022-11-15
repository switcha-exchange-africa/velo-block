import { Box } from '@chakra-ui/react'
import React from 'react'

interface SettingsButtonProps {
    onClick?: () => void
    children: any
    disabled?: boolean
}

const SettingsButton = ({ onClick, children, disabled = false }: SettingsButtonProps) => {
    return (
        <Box minW={'max-content'} textAlign={'center'} px={{ base: '2', lg: '4' }} py={{ base: '1', lg: '2' }} fontSize={{ base: 'xs', lg: '14px' }} backgroundColor={disabled ? 'deselectedButtonColor' : 'primaryColor.900'} onClick={onClick} color={'white'} cursor={'pointer'}>{children}</Box>
    )
}

export default SettingsButton