import { Box, Button, Flex, Input, InputGroup, InputRightAddon, Select, Text } from '@chakra-ui/react'

const P2pTopfilter = () => {
    return (
        <>
            <Flex
                justifyContent={"space-between"}
                wrap={"wrap"}
                alignItems={"flex-end"}
                mb="40px"
            >
                <Flex alignItems={"flex-end"}  wrap={"wrap"} gap="20px" >
                    <Box>
                        <Text fontSize={"xs"} mb="10px">Amount</Text>
                        <InputGroup size="sm">
                            <Input
                                borderTopLeftRadius={"5px"}
                                borderBottomLeftRadius={"5px"}
                                placeholder="Enter amount NGN"
                            />
                            <InputRightAddon
                                borderTopRightRadius={"5px"}
                                borderBottomRightRadius={"5px"}
                                children="Search"
                                bg={"none"}
                                color={"#FB5E04"}
                                cursor="pointer"
                            />
                        </InputGroup>
                        </Box>
                    <Box>
                    <Text fontSize={"xs"} mb="10px">Fiat</Text>
                    <Select cursor="pointer" size={"sm"} defaultValue="NGN" borderRadius={"5px"}>
                        <option value="NGN">NGN</option>
                    </Select>
                    </Box>
                    <Box>
                        <Text fontSize={"xs"} mb="10px">Payment</Text>
                        <Select
                            size={"sm"}
                            defaultValue="NGN"
                            placeholder="All Payment"
                            borderRadius={"5px"}
                            cursor="pointer"
                        >
                            <option value="NGN">Bank Transfer</option>
                        </Select>
                    </Box>
                    <Button background={"#FB5E04"} color={"#fff"} size={"sm"} cursor="pointer">
                        Create Ads
                    </Button>
                    <Box
                        display={["block", "block", "none"]}
                        background={"#FFF7F2"}
                        padding={"5px 20px"}
                        borderRadius={"5px"}
                    >
                        <Text>0 Fee</Text>
                    </Box>
                </Flex>
                <Box
                    display={["none", "none", "block"]}
                    background={"#FFF7F2"}
                    padding={"5px 20px"}
                    borderRadius={"5px"}
                >
                    <Text>0 Fee</Text>
                </Box>
            </Flex>
        </>

    )
}

export default P2pTopfilter