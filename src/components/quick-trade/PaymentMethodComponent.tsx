import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface PaymentMethodComponentProps {
    borderColor: any
    label: string
    rate: any
}

const PaymentMethodComponent = ({ borderColor, label, rate }: PaymentMethodComponentProps) => {
    return (
        <Box borderRight={'4px'} borderTop={'1px'} borderLeft={'1px'} borderBottom={'1px'} borderColor={borderColor} w={'sm'} mb={'1'} p={'1'} borderRadius={'md'}>
            <Flex justifyContent={'space-between'}>
                <Text fontSize='sm' as='p' align={'center'} fontWeight={'semibold'} >{label}</Text>
                <Flex flexDirection={'column'}>
                    <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} >N{rate}</Text>
                    <Text fontSize='xs' color={'primaryColor.900'} as='p' fontWeight={'light'} w={'full'} align={'center'} >Best Offer</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default PaymentMethodComponent