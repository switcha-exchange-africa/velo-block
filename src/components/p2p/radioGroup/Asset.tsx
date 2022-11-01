import {Box, Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import  { useState } from 'react'
import { RadioCard } from './RadioGroup'

const Asset = () => {
    const [asset, setAsset] = useState('1')
    
    const assets = ['USDT', 'BTC', 'BUSD', 'BNB', 'ETH', 'DAI', 'NGN']
    

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'assets',
        defaultValue: 'USDT',
        onChange: console.log
    })
    
    const assetGroup = getRootProps()


    return (
        <Box>
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Asset</Text>
            <RadioGroup onChange={setAsset} value={asset} mt="12px" mb="48px">
                <Flex {...assetGroup} w={"100%"} gap={"20px"} flexWrap={"wrap"}>
                    {assets.map((value) => {
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