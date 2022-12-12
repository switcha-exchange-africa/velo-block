import Line from "../../../public/assets/svgs/line.svg"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Box,
  Flex,
  Text,
  Button,
  Avatar,
} from '@chakra-ui/react'
import Image from 'next/image'
import { CheckCircleIcon } from "@chakra-ui/icons"

type TableComponentProps = {
    backgroundColor?: "#22C36B" | "#EB4335",
    onClick?: any,
    buttonTitle?: string,
    apiData: any,
    handlePreviousPage?: () => void,
    handleNextPage?: () => void
}

const TableComponent = ({
    apiData,
    buttonTitle,
    backgroundColor,
    onClick,
    handlePreviousPage,
    handleNextPage
}: TableComponentProps) => {
    
    const percentageCompletion = (completedOrder: number, adsCreated: number) => {
        const percent = !adsCreated || !completedOrder ? 0 :((completedOrder / adsCreated) * 100).toFixed(2) 
        return percent
    }


    // console.log("this is the apiData ", apiData)

    return (
        <>

            {/* for mobile screen */}
            {apiData?.data?.map((api: any) => (
                <Box key={api?.id} mt={"2rem"} w={"full"} display={["block", "block", "none"]}>
                    <Flex
                        alignItems="center"
                        w="100%"
                    >
                    <Flex w={"full"} flexDirection="column">
                        <Box display={"flex"} alignItems={"center"} gap="5px">
                        <Avatar
                            size={"md"}
                            background={"#FB5E04"}
                            name="Maximus"
                        >
                                    
                        </Avatar>
                        <Box>
                            <Box display={"flex"} alignItems={"center"} gap="3px">
                                <Text fontSize={"sm"}>{ api?.user?.map((data:any) => data?.username)}</Text>
                                <CheckCircleIcon
                                    color={"#22C36B"}
                                    w={"10px"}
                                    h={"10px"}
                                />
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap="3px"
                                fontSize={"xs"}
                                color="#8E9BAE"
                            >
                                <Text>{ api?.user?.map((data:any) => data?.noOfP2pOrderCompleted)}&nbsp;orders</Text>|
                                <Text>
                                    {percentageCompletion(parseInt(api?.user?.map((data: any) => data?.noOfP2pOrderCompleted)), parseInt(api?.user?.map((data: any) => data?.noOfP2pAdsCreated)))}
                                     %&nbsp;completion
                                </Text>
                            </Box>
                        </Box>
                        </Box>
                        <Box
                        mt={"0.5rem"}
                        display={["flex"]}
                        flexDir={["column", "column", "row"]}
                        >
                        <Flex alignItems={"center"} gap="5px">
                            <Flex gap={"5px"} alignItems="center">
                            <Text fontSize={"xs"} color={"#8E9BAE"}>
                                Price
                            </Text>
                            <Box display={"flex"}>
                                <Text fontSize={"xs"}>{api?.price ? api?.price.toLocaleString() : api?.price}</Text>
                                <Text fontSize={"xs"}> {api?.cash}</Text>
                            </Box>
                            </Flex>

                            <Flex alignItems="center" gap={"10px"}>
                            <Text fontSize={"xs"} color={"#8E9BAE"}>
                                Available
                            </Text>
                            <Text fontSize={"xs"}>{api?.totalAmount ? api?.totalAmount.toLocaleString() : api?.totalAmount}</Text>
                            </Flex>
                        </Flex>
                        <Flex alignItems={"center"} gap="10px">
                            <Flex gap={"5px"} alignItems="center">
                            <Text fontSize={"xs"} color={"#8E9BAE"}>
                                {" "}
                                Limit
                            </Text>
                            {/* // mark */}
                            <Text fontSize={"xs"}>{api?.minLimit ? api?.minLimit.toLocaleString() : api?.minLimit}&nbsp;-&nbsp;{api?.maxLimit ? api?.maxLimit.toLocaleString(): api?.maxLimit}&nbsp;{api?.coin}</Text>
                            </Flex>
                            <Box>
                            <Text
                                fontSize={"10px"}
                                textAlign={"center"}
                                background={"#FFF7F2"}
                                color={"#FB5E04"}
                                borderRadius={"3px"}
                            >
                                Bank Transfer
                            </Text>
                            </Box>
                        </Flex>
                        </Box>
                    </Flex>
                    <Button
                        width={"150px"}
                        fontSize={"12px"}
                        bg={backgroundColor}
                        textAlign={"center"}
                        color="#FFF"
                        borderRadius={"3px"}
                        onClick={() => onClick(api?._id,  apiData)}
                    >
                        {buttonTitle}
                    </Button>
                    </Flex>
                 </Box>
            ))}

            {/* for desktop view */}
            <TableContainer display={["none", "none", "block"]}  paddingLeft="0">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th  paddingLeft="0">Advertiser</Th>
                            <Th>Price</Th>
                            <Th>Available</Th>
                            <Th>Limit</Th>
                            <Th>Payment</Th>
                            <Th>Trade</Th>
                        </Tr>
                    </Thead>

                    {apiData?.data?.map((api:any) => (
                        <Tbody key={api?.id}>
                            <Tr>
                                <Td paddingLeft="0">
                                    <HStack>
                                        <Box bg="#FB5E04" color="white" padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px">M</Box>
                                        <HStack flexDirection="column"  alignItems="flex-start" >
                                            <HStack>
                                                <Text fontSize="14px" fontWeight="400" color="#FB5E04">{ api?.user?.map((data:any) => data?.username)}</Text>
                                                <Flex>
                                                    <CheckCircleIcon
                                                        color={"#22C36B"}
                                                        w={"10px"}
                                                        h={"10px"}
                                                    />
                                                </Flex>
                                            </HStack>
                                            <HStack color="#8E9BAE" fontSize="12px">
                                                <Text ml="-8px" >{ api?.user?.map((data:any) => data?.noOfP2pOrderCompleted)}&nbsp;orders</Text>
                                                <Box>
                                                    <Image src={Line} alt="line division" />
                                                </Box>
                                                <Text>
                                                    {percentageCompletion(parseInt(api?.user?.map((data: any) => data?.noOfP2pOrderCompleted)), parseInt(api?.user?.map((data: any) => data?.noOfP2pAdsCreated)))}
                                                    %&nbsp;completion
                                                </Text>
                                            </HStack>{ api?.user?.map((data:any) => data?.noOfP2pAdsCreated)}
                                        </HStack>
                                        
                                    </HStack>
                                </Td>
                                <Td>
                                    <Text fontSize="14px">{api?.price ? api?.price?.toLocaleString() : api?.price}&nbsp;<Text as="span" fontSize="10px">{api?.cash}</Text></Text>
                                </Td>
                                <Td fontSize="14px">{api?.totalAmount ?  api?.totalAmount?.toLocaleString() : api?.totalAmount}</Td>
                                <Td fontSize="14px">{api?.minLimit ? api?.minLimit?.toLocaleString() : api?.minLimit}&nbsp;-&nbsp;{api?.maxLimit ? api?.maxLimit?.toLocaleString() : api?.maxLimit}&nbsp;{api?.coin === "USDT_TRON" ? "USDT-TRON" : api?.coin}</Td>
                                <Td fontSize="14px">
                                    <Text
                                        fontSize={"12px"}
                                        textAlign={"center"}
                                        background={"#FFF7F2"}
                                        color={"#FB5E04"}
                                        fontWeight="200"
                                        borderRadius={"3px"}
                                    >
                                        Bank Transfer
                                    </Text>
                                </Td>
                                <Td>
                                    <Button onClick={() => onClick(api?._id,  apiData)} color="white"  fontWeight="bold" bg={backgroundColor} fontSize="14px">
                                        {buttonTitle}
                                    </Button>
            
                                </Td>
                            </Tr>
                        </Tbody>    
                    ))}
                </Table>
            </TableContainer>


            {apiData?.pagination?.lastPage > 1 ? (
                <HStack px={["0", "0px", "0px", "0px"]} borderBottom="1px solid #E2E8F0" borderTop="1px solid #E2E8F0" py="20px" mt="35px" justifyContent="space-between">
                    <HStack >
                        <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                            {apiData?.pagination?.currentPage}
                        </Box>
                        <Text>of</Text>
                        <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                            {apiData?.pagination?.lastPage}
                        </Box>
                    </HStack>

                    <HStack>
                        <Button onClick={handlePreviousPage} disabled={apiData?.pagination?.currentPage === 1}>
                            Prev
                        </Button>
                        <Button onClick={handleNextPage} disabled={apiData?.pagination?.hasNext === false}>
                            Next
                        </Button>    
                    </HStack>
                </HStack>
            ) : null}
                
        </>
        
    )
}

export default TableComponent