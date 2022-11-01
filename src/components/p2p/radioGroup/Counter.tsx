import { Button, HStack, InputGroup, InputLeftAddon, Input, InputRightAddon, Text, VStack, InputRightElement, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'

const InputCounter = () => {
    const [counter, setCounter] = useState(0)
  
    const incrementCounter = () => {
        let incrementedCounter = counter + 1
        setCounter(incrementedCounter)
    }

    const decrementCounter = () => {
        let decrementedCounter = counter - 1
        setCounter(decrementedCounter)
    }


    return (
        <VStack alignItems={"flex-start"}>
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Floating Price Margin</Text>
            
            <HStack>
                {/* <Button onClick={incrementCounter}>+</Button>
                <input />
                <Button onClick={decrementCounter}>-</Button> */}

                <InputGroup size='sm' border="1px solid #8E9BAE" p="5px" borderRadius="5px">
                    <InputLeftElement  m="5px">
                        <Button size='sm' border="1px solid #8E9BAE" bg="none" fontWeight="bold">
                            -
                        </Button>
                    </InputLeftElement>
                    <Input placeholder='mysite' border="none" outline="none" textAlign="center" />
                    <InputRightElement m="5px">
                        <Button size='sm' border="1px solid #8E9BAE" bg="none" fontWeight="bold">
                            +
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </HStack>
            
        </VStack>
    )
}

export default InputCounter