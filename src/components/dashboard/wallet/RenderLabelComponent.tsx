import React from 'react'
import { Text } from '@chakra-ui/react'

const RenderLabelComponent = ({ coin }: any) => {
    return (
        <>
            {coin == 'BTC' ? <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                Bitcoin
            </Text> : coin == 'ETH' ? <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                Ethereum
            </Text> : coin == 'NGN' ? <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                Naira
            </Text> : coin == 'USDC' ? <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                USD Coin
            </Text> : coin == 'USDT' ? <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                TetherUS
            </Text> : coin == 'USDT_TRON' ? <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                {coin}
            </Text> : <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                {coin}
            </Text>}

        </>

    )
}

export default RenderLabelComponent