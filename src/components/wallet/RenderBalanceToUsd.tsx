import React from 'react'
import _ from "lodash"


import { Text } from '@chakra-ui/react'
import { useLazyConvertQuery } from '../../redux/services/buy-sell.service'

const RenderBalanceToUsd = ({ balance, coin }: any) => {
    const [convertCoins] = useLazyConvertQuery()
    const [convertedValue, setConvertedValue] = React.useState(0)

    
    const to8Dp = (number: any) => {
        const datas = _.round(number, 8)
        const values = datas.toLocaleString()
        return values
    }

    

    React.useEffect(() => {

        const convertBalance = async () => {
            const convert = await convertCoins({ amount: balance, source: coin, destination: 'USDC' }).unwrap()
            setConvertedValue(convert?.data?.destinationAmount?.destinationAmount)
        }
        if (coin != 'USDC' || coin != 'USDT' || coin != 'USDT_TRON' || coin != 'USDT-TRON') {
            convertBalance()
        }


    }, [balance, coin, convertCoins])
    return (
        <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
            = {balance == 0 ? '$0.00' : coin == 'USDC' || coin == 'USDT' || coin == 'USDT_TRON' || coin == 'USDT-TRON' ? '$' + to8Dp(balance) : '$' + to8Dp(convertedValue)}
            {/* $200.33 */}
        </Text>
    )
}

export default RenderBalanceToUsd