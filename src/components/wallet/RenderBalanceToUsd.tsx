import _ from "lodash"
import { Text } from '@chakra-ui/react'
import { useLazySwapConvertQuery } from '../../redux/services/new-conversion.service'
import { useEffect, useState } from "react"

interface RenderBalanceToUsdProps {
    balance? : any,
    coin?: any,
    variant?: boolean
}

const RenderBalanceToUsd = ({ balance, coin, variant }: RenderBalanceToUsdProps) => {
    const [convertCoins] = useLazySwapConvertQuery()
    const [convertedValue, setConvertedValue] = useState(0)


    const to8Dp = (number: any) => {
        if (number > 1) {
            const datas = _.floor(number, 8)
            const values = datas?.toLocaleString()
            return values  
        
        } else {
            return number
        }
  }

    

    useEffect(() => {

        const convertBalance = async () => {
            const convert = await convertCoins({ amount: balance, source: coin, destination: 'USDC' }).unwrap()
            setConvertedValue(convert?.data?.destinationAmount)
        }
        if (coin != 'USDC' || coin != 'USDT' || coin != 'USDT_TRON' || coin != 'USDT-TRON') {
            convertBalance()
        }
    }, [balance, coin, convertCoins])
    
    return (
        <>
            {variant == true ? (
                <Text  fontSize={{ md: "sm", base: 'xs' }}>
                    {balance == 0 ? '$0.00' : coin == 'USDC' || coin == 'USDT' || coin == 'USDT_TRON' || coin == 'USDT-TRON' ?  to8Dp(balance) : to8Dp(convertedValue)}
                </Text>
            ) : (

                <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                    = {balance == 0 ? '$0.00' : coin == 'USDC' || coin == 'USDT' || coin == 'USDT_TRON' || coin == 'USDT-TRON' ? '$' + to8Dp(balance) : '$' + to8Dp(convertedValue)}
                </Text>

            )}
        </>        
    )
}

export default RenderBalanceToUsd