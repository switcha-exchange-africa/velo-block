import { Box, Button, Flex, HStack, Input, InputGroup, InputRightElement, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack  } from '@chakra-ui/react';

const BuyStepTwo = () => {
    return (
        <Box mt="80px" p="28px" fontFamily={"Open Sans"} bg="white" mx="10px">
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Total Amount</Text>
            <Flex w="50%" direction={"column"} alignItems={"flex-end"}>
                <InputGroup>
                    <Input autoComplete='off' variant={'outline'} placeholder={'0'} />
                    <InputRightElement width={{ md: '60px', base: '36' }}>
                        <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                    </InputRightElement>
                </InputGroup>
                <Text mt={"12px"} fontSize={"12px"} color={"#8E9BAE"} fontWeight={"600"} fontFamily={"Open Sans"}>=0 NGN</Text>
            </Flex>
            
            <HStack mt="24px"   w={"50%"}>
                <Box w="50%">
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                    <InputGroup mt="12px">
                        <Input autoComplete='off' variant={'outline'} placeholder={'0'} />
                        <InputRightElement width={{ md: '60px', base: '36' }}>
                            <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                        </InputRightElement>
                    </InputGroup>
                
                </Box>

                <Box height="32px">
                     <Text m="20px" mt="17px" >~</Text>
                </Box>
               

                <Box w="50%">
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                    <InputGroup mt="12px">
                        <Input autoComplete='off' variant={'outline'} placeholder={'0'} />
                        <InputRightElement width={{ md: '60px', base: '36' }}>
                            <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </HStack>

            
            <Box mt="48px">
                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Payment Methods</Text>
                <Text>Select up to 5 methods</Text>

            </Box>
            
            <Text mt="24px" color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Payment Time Limit</Text>
            <Select
                mt="12px"
                w="137px"
                bg='transparent'
                border='0.88px solid #8E9BAE'
                borderRadius="5px"
                color='black'
                placeholder='15 Min'
            />

        </Box>
    )
}

export default BuyStepTwo