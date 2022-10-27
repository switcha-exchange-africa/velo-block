import Verified from "../../../public/assets/svgs/verified.svg"
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
} from '@chakra-ui/react'
import Image from 'next/image'

type TableComponentProps = {
    backgroundColor?: "#22C36B" | "#EB4335",
    onClick?: () => void,
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
    

    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Advertiser</Th>
                            <Th>Price</Th>
                            <Th>Available</Th>
                            <Th>Limit</Th>
                            <Th>Payment</Th>
                            <Th>Trade</Th>
                        </Tr>
                    </Thead>

                    {apiData?.data?.map((api:any) => (
                        <Tbody key={api.id}>
                            <Tr>
                                <Td>
                                    <HStack>
                                        <Box bg="#FB5E04" color="white" padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px">M</Box>
                                        <HStack flexDirection="column"  alignItems="flex-start" >
                                            <HStack>
                                                <Text fontSize="14px" fontWeight="400" color="#FB5E04">{ api?.user?.map((data:any) => data?.username)}</Text>
                                                <Flex>
                                                    <Image src={Verified} alt="verified icon" />
                                                </Flex>
                                            </HStack>
                                            <HStack color="#8E9BAE" fontSize="12px">
                                                <Text ml="-8px" >{ api?.user?.map((data:any) => data?.noOfP2pOrderCreated)}&nbsp;orders</Text>
                                                <Box>
                                                    <Image src={Line} alt="line division" />
                                                </Box>
                                                <Text>{ api?.user?.map((data:any) => data?.noOfP2pOrderCompleted)}%&nbsp;completion</Text>
                                            </HStack>
                                        </HStack>
                                        
                                    </HStack>
                                </Td>
                                <Td>
                                    <Text fontSize="14px">{api.price}&nbsp;<Text as="span" fontSize="10px">{api.cash}</Text></Text>
                                </Td>
                                <Td fontSize="14px">0.00346</Td>
                                <Td fontSize="14px">{api.minLimit}&nbsp;-&nbsp;{api.maxLimit}&nbsp;USD</Td>
                                <Td fontSize="14px">
                                    <Button fontSize="14px" fontWeight="200"  color="#FB5E04" bg="#FFF7F2" borderRadius="2px" p="2px 5px">Bank Transfer</Button>
            
                                </Td>
                                <Td>
                                    <Button onClick={onClick} color="white" fontWeight="bold" bg={backgroundColor}>
                                        {buttonTitle}
                                    </Button>
            
                                </Td>
                            </Tr>
                        </Tbody>    
                    ))}
                </Table>
            </TableContainer>

            {/* Pagination data */}
            <HStack px={["0", "0px", "28px", "28px"]} borderBottom="1px solid #E2E8F0" borderTop="1px solid #E2E8F0" py="20px" mt="35px" justifyContent="space-between">
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
        </>
        
    )
}

export default TableComponent