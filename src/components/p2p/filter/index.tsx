import { Box, Button, Divider, Flex, Input, InputGroup, InputRightElement, Select, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useGetFeesQuery } from '../../../redux/services/p2p-ads.service';

interface P2pTopfilterProps {
    routeName?: string
}

const P2pTopfilter = ({routeName}: P2pTopfilterProps) => {
    const router = useRouter();
    const getFees = useGetFeesQuery("p2p-buy")


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

                            <InputRightElement width={{ md: '70px', base: '36' }}  >
                                <Flex alignItems="center">
                                    <Divider orientation='vertical' h='25px' mr="5px" />
                                    <Text cursor={'pointer'}  fontSize={'sm'} color={"#FB5E04"} >Search</Text>
                                </Flex>
                            </InputRightElement>
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
                    <Button background={"#FB5E04"} color={"#fff"} size={"sm"} cursor="pointer"
                        onClick={() => {
                        router.push("/p2p/"+routeName);
                    }}>
                        Create Ads
                    </Button>
                    <Box
                        display={["block", "block", "none"]}
                        background={"#FFF7F2"}
                        padding={"5px 20px"}
                        borderRadius={"5px"}
                    >
                        <Text>{getFees?.data?.data?.amountInPercentage}% Fee</Text>
                    </Box>
                </Flex>
                <Box
                    display={["none", "none", "block"]}
                    background={"#FFF7F2"}
                    padding={"5px 20px"}
                    borderRadius={"5px"}
                >
                    <Text>{getFees?.data?.data?.amountInPercentage}% Fee</Text>
                </Box>
            </Flex>
        </>

    )
}

export default P2pTopfilter