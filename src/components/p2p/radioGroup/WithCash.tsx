import {Box, Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service'
import { RadioCard } from './RadioGroup'

const WithCash = () => {
    const { data } = useGetCoinsByTypeQuery("fiat")
    const cashOptions = data?.data?.map((item: any) => item.coin)
    const [withCash, setWithCash] = useState('NGN')
    
    // console.log(data?.data?.map((item: any) => item.coin)    )
    

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'WithCashs',
        defaultValue: 'NGN',
        onChange: setWithCash
    })
    
    const withCashGroup = getRootProps()


    return (
        <Box>
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>With Cash</Text>
            <RadioGroup onChange={setWithCash} value={withCash} mt="12px" mb="48px">
                <Flex {...withCashGroup} w={"100%"}  gap={["20px", "20px", "24px 78px"]} flexWrap={"wrap"}>
                    {cashOptions?.map((value:any) => {
                        const radio = getRadioProps({ value })
                        return (
                            <Flex  key={value} alignItems="center"  >
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

export default WithCash