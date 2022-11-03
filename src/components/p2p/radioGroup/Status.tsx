import { Flex, RadioGroup, Text, useRadioGroup } from '@chakra-ui/react'
import  { useState } from 'react'
import { RadioCard } from './RadioGroup'

const Status = () => {
    const [status, setstatus] = useState('1')
    
    const statusOptions = ['Online right now', 'Offline, Manually later']
    

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'status',
        defaultValue: 'online right now',
        onChange: console.log
    })
    
    const statusGroup = getRootProps()


    return (
        <>
            <RadioGroup onChange={setstatus} value={status} mt="10px" >
                <Flex {...statusGroup} w={"100%"} gap={["20px", "20px", "24px 75px"]} flexWrap={"wrap"}>
                    {statusOptions.map((value) => {
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
        </>
    )
}

export default Status