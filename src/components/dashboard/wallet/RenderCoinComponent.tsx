import { Avatar } from '@chakra-ui/react'
import React from 'react'
import {
    Text,
} from "@chakra-ui/react";
import remoteImages from '../../../constants/remoteImages';

const RenderCoinComponent = ({ coin, size = { md: "sm", base: 'xs' } }: any) => {
    return (
        <>
            {coin == 'BTC' ? <Avatar
                name="Bitcoin"
                src={remoteImages.bitcoinLogo}
                size={size}
            /> : coin == 'ETH' ? <Avatar
                name="Ethereum"
                src={remoteImages.ethLogo}
                size={size}
            /> : coin == 'NGN' ? <Avatar
                name="Naira"
                src={remoteImages.ngnsvg}
                size={size}
            /> : coin == 'USDC' ? <Avatar
                name="USD COIN"
                src={remoteImages.usdcLogo}
                size={size}
            /> : coin == 'USDT' ? <Avatar
                name="TetherUS"
                src={remoteImages.usdtLogo}
                size={size} /> : coin == 'USDT_TRON' ? <Avatar
                    name={'USDT-TRON'}
                    src={remoteImages.tronlogo}
                    size={size} /> : <Text borderRadius={'full'} p={{ base: '2', md: '4' }} fontWeight={'black'} color={'#ffff'} bg={'primaryColor.900'}>{coin[0]}</Text>}
        </>

    )
}

export default RenderCoinComponent