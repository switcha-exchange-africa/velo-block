import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import TableComponent from '../../table/TableContainer'

const SellCoin = () => {
    return (
        <>
            <HStack px={["0", "0px", "28px", "28px"]} fontSize="14px" mb="14px" spacing="56px">
                <Link href="/" color="#8B8CA7">BTC</Link> 
                <Link href="/" color="#8B8CA7">ETH</Link>
                <Link href="/" color="#8B8CA7">USDT</Link>
                <Link href="/" color="#8B8CA7">USDC</Link>
            </HStack>
            
            <Box bg="#E2E8F0" height="0.1px" width="100%" mb="8px"></Box>
            <TableComponent
                buttonTitle="Sell BTC"
                backgroundColor="#EB4335"
            />
        </>  
    )
}

export default SellCoin