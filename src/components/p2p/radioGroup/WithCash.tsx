import { InfoOutlineIcon } from '@chakra-ui/icons'
import {Box, Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service'
import { RadioCard } from './RadioGroup'

interface WithCashProps {
    cash: string,
    setCash: React.Dispatch<React.SetStateAction<string>>
}


const WithCash = ({cash, setCash}: WithCashProps) => {
    const { data } = useGetCoinsByTypeQuery("fiat")
    const cashOptions = data?.data?.map((item: any) => item.coin)

    console.log("this is the cash options ", cashOptions?.sort())

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'WithCashs',
        defaultValue: 'NGN',
        onChange: setCash
    })
    
    const withCashGroup = getRootProps()


    return (
        <Box>
            <Flex alignItems="center">
                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>
                    With Cash    
                </Text>
                <InfoOutlineIcon
                    ml="5px"
                    color={"#8E9BAE"}
                    w={"10px"}
                    h={"10px"}
                />    
            </Flex>
            
            <RadioGroup onChange={setCash} value={cash} mt="12px" mb="48px">
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