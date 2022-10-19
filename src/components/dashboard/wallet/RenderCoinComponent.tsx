import { Avatar } from '@chakra-ui/react'
import React from 'react'
import {

    Text,


} from "@chakra-ui/react";

const RenderCoinComponent = ({ coin }: any) => {
    return (
        <>
            {coin == 'BTC' ? <Avatar
                name="Bitcoin"
                src={'/assets/images/bitcoin-logo.png'}
                size={{ md: "sm", base: 'xs' }}
            /> : coin == 'ETH' ? <Avatar
                name="Ethereum"
                src={'/assets/images/eth-logo.png'}
                size={{ md: "sm", base: 'xs' }}
            /> : coin == 'NGN' ? <Avatar
                name="Naira"
                src={'/assets/svgs/NGN.svg'}
                size={{ md: "sm", base: 'xs' }}
            /> : coin == 'USDC' ? <Avatar
                name="USD COIN"
                src={'/assets/images/usdc-logo.png'}
                size={{ md: "sm", base: 'xs' }}
            /> : coin == 'USDT' ? <Avatar
                name="TetherUS"
                src={'/assets/images/usdt-logo.png'}
                size={{ md: "sm", base: 'xs' }} /> : coin == 'USDT_TRON' ? <Avatar
                    name={coin}
                    src={'/assets/images/tronlogo.png'}
                    size={{ md: "sm", base: 'xs' }} /> : <Text p={{ base: '2', md: '4' }} fontWeight={'black'} color={'#ffff'} bg={'primaryColor.900'}>{coin[0]}</Text>}

        </>

    )
}

export default RenderCoinComponent