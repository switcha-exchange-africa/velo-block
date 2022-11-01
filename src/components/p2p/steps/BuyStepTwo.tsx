import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Input, InputGroup, InputRightElement, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack  } from '@chakra-ui/react';

const BuyStepTwo = () => {
    return (
        <Box mt="80px" p="28px" fontFamily={"Open Sans"} bg="white" mx="10px" pb="70px">
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Total Amount</Text>
            <Flex w={["100%", "100%", "50%"]} direction={"column"} alignItems={"flex-end"}>
                <InputGroup>
                    <Input autoComplete='off' variant={'outline'} placeholder={'0'} />
                    <InputRightElement width={{ md: '60px', base: '70px' }}>
                        <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                    </InputRightElement>
                </InputGroup>
                <Text mt={"12px"} fontSize={"12px"} color={"#8E9BAE"} fontWeight={"600"} fontFamily={"Open Sans"}>=0 NGN</Text>
            </Flex>
            
            <HStack mt="24px"  w={["100%", "100%", "50%"]}>
                <Box w="50%">
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                    <InputGroup mt="12px">
                        <Input autoComplete='off' variant={'outline'} placeholder={'0'} />
                        <InputRightElement width={{ md: '60px', base: '62px' }}>
                            <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                        </InputRightElement>
                    </InputGroup>
                
                </Box>

                <Box height="32px">
                     <Text m={["5px", "5px", "20px"]}  mt="17px" >~</Text>
                </Box>
               

                <Box w="50%">
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                    <InputGroup mt="12px">
                        <Input autoComplete='off' variant={'outline'} placeholder={'0'} />
                        <InputRightElement width={{ md: '60px', base: '62px' }}>
                            <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </HStack>

            
            <Box mt="48px" fontSize={"14px"}>
                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Payment Methods</Text>
                <Text fontWeight={"400"} mt="12px">Select up to 5 methods</Text>
                <Button p={"11px 22px"} mt="12px" color="#FB5E04" border={"0.88px solid #FB5e04"} bg={"transparent"}>
                    <AddIcon
                        mr="5px"
                        color={"#FB5E04"}
                        w={"10px"}
                        h={"10px"}
                    />
                    Add
                </Button>
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