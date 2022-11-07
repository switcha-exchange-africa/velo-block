import {Box, Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import  { useState } from 'react'
import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service'
import { RadioCard } from './RadioGroup'

const Asset = () => {
    // fetches all the coins to be used as asset using the useGetCoinsByTypeQuery
    const { data } = useGetCoinsByTypeQuery("crypto")
    const coinAssets = data?.data?.map((item: any) => item.coin)
    const [asset, setAsset] = useState('BTC')

    console.log("data is ", data)
   
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'assets',
        defaultValue: 'BTC',
        onChange: setAsset
    })

    
    const assetGroup = getRootProps()

    return (
        <Box>
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Asset</Text>
            <RadioGroup onChange={setAsset} value={asset} mt="12px" mb="48px">
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