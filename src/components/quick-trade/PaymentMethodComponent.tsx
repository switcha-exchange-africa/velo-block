import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface PaymentMethodComponentProps {
    borderColor: any
    label: string
    rate: any
    disabled?: boolean
}

const PaymentMethodComponent = ({ borderColor, label, rate, disabled = false }: PaymentMethodComponentProps) => {
    return (
        <Box borderRight={'4px'} borderTop={'1px'} borderLeft={'1px'} borderBottom={'1px'} borderColor={disabled ? 'gray' : borderColor} w={'sm'} mb={'1'} p={'1'} borderRadius={'md'}>
            <Flex justifyContent={'space-between'} >
                <Text fontSize='sm' as='p' align={'center'} color={disabled ? 'gray' : ''} fontWeight={'semibold'} >{label}</Text>
                <Flex flexDirection={'column'}>
                    <Text fontSize='xs' as='p' color={disabled ? 'gray' : ''} fontWeight={'light'} w={'full'} align={'center'} >N{rate}</Text>
                    <Text fontSize='xs' color={disabled ? 'gray' : 'primaryColor.900'} as='p' fontWeight={'light'} w={'full'} align={'center'} >Best Offer</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default PaymentMethodComponent