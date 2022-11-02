import {Box, Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import  { useState } from 'react'
import { RadioCard } from './RadioGroup'

const PriceType = () => {
    const [priceType, setPriceType] = useState('1')
    
    const priceTypes = ['Fixed', 'Floating']
    

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'priceTypes',
        defaultValue: 'Fixed',
        onChange: console.log
    })
    
    const priceTypeGroup = getRootProps()


    return (
        <Box>
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Price Type</Text>
            <RadioGroup onChange={setPriceType} value={priceType} mt="12px" mb="48px">
                <Flex {...priceTypeGroup} w={"100%"} gap={"20px"} flexWrap={"wrap"}>
                    {priceTypes.map((value) => {
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

export default PriceType