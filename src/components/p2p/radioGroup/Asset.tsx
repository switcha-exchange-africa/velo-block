import {Box, Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service'
import { RadioCard } from './RadioGroup'


    
interface AssetProps {
    coin: string,
    setCoin: React.Dispatch<React.SetStateAction<string>>
}

const Asset = ({coin,setCoin}: AssetProps) => {
    // fetches all the coins to be used as asset using the useGetCoinsByTypeQuery
    const { data } = useGetCoinsByTypeQuery("crypto")
    const coinAssets = data?.data?.map((item: any) => {
        if (item.coin === "USDT_TRON") {
            return "USDT-TRON"
        } else {
            return item.coin
        }
    })

    console.log("this is the coin Assets ", coinAssets?.sort())
    
   
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'coin',
        defaultValue: 'BTC',
        onChange: setCoin
    })

    
    const assetGroup = getRootProps()

    return (
        <Box>
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Asset</Text>
            <RadioGroup onChange={setCoin} value={coin} mt="12px" mb="48px">
                <Flex {...assetGroup} w={"100%"} gap={["20px", "20px", "24px 75px"]} flexWrap={"wrap"}>
                    {coinAssets?.map((value:any) => {
                        const radio = getRadioProps({ value })
                        return (
                            <Flex key={value} alignItems="center"  >
                                <RadioCard {...radio}> </RadioCard>
                                <Text fontSize="14px" fontWeight={"600"} fontFamily={"Open Sans"} ml="5px">{value}</Text>
                            </Flex>
                        )
                    })}
                </Flex>
            </RadioGroup>
        </Box>
    )
}

export default Asset