import { Button, HStack, InputGroup, Input, Text, VStack, InputRightElement, InputLeftElement } from '@chakra-ui/react'

interface InputContainerProps {
    price: any
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    addPrice: () => void
    minusPrice: () => void
}

const InputCounter = ({
    price, handleChange,
    addPrice, minusPrice
}: InputContainerProps) => {
    
  
    return (
        <VStack alignItems={"flex-start"}>
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Floating Price Margin</Text>
            
            <HStack>
                <InputGroup size='sm' border="1px solid #8E9BAE" p="9px" borderRadius="5px">
                    <InputLeftElement  mx="5px">
                        <Button size='sm' mt="5px" border="1px solid #8E9BAE" bg="none" fontWeight="bold" onClick={minusPrice}>
                            -
                        </Button>
                    </InputLeftElement>
                    <Input
                        defaultValue={price}
                        onChange={handleChange}
                        placeholder='₦550.47'
                        type="number"
                        border="none"
                        variant="unstyled"
                        textAlign="center"
                    />
                    <InputRightElement mx="5px">
                        <Button size='sm' mt="5px" border="1px solid #8E9BAE" bg="none" fontWeight="bold"   onClick={addPrice}>
                            +
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </HStack>
            
        </VStack>
    )
}

export default InputCounter