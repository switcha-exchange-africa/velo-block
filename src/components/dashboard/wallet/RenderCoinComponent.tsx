import { Avatar } from '@chakra-ui/react'
import React from 'react'
import {

    Text,


} from "@chakra-ui/react";

const RenderCoinComponent = ({ coin, size = { md: "sm", base: 'xs' } }: any) => {
    return (
        <>
            {coin == 'BTC' ? <Avatar
                name="Bitcoin"
                src={'/assets/images/bitcoin-logo.png'}
                size={size}
            /> : coin == 'ETH' ? <Avatar
                name="Ethereum"
                src={'/assets/images/eth-logo.png'}
                size={size}
            /> : coin == 'NGN' ? <Avatar
                name="Naira"
                src={'/assets/svgs/NGN.svg'}
                size={size}
            /> : coin == 'USDC' ? <Avatar
                name="USD COIN"
                src={'/assets/images/usdc-logo.png'}
                size={size}
            /> : coin == 'USDT' ? <Avatar
                name="TetherUS"
                src={'/assets/images/usdt-logo.png'}
                size={size} /> : coin == 'USDT-TRON' ? <Avatar
                    name={coin}
                    src={'/assets/images/tronlogo.png'}
                    size={size} /> : <Text borderRadius={'full'} p={{ base: '2', md: '4' }} fontWeight={'black'} color={'#ffff'} bg={'primaryColor.900'}>{coin[0]}</Text>}

        </>

    )
}

export default RenderCoinComponent