import {Box, Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import { RadioCard } from './RadioGroup'


interface PriceTypeProps {
    priceType: string | undefined | any
    setPriceType: React.Dispatch<React.SetStateAction<string>> | undefined | any

}

const PriceType = ({priceType, setPriceType}:PriceTypeProps) => {
    
    const priceTypes = ['Fixed', 'Floating']
    

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'priceTypes',
        defaultValue: 'Fixed',
        onChange: setPriceType
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