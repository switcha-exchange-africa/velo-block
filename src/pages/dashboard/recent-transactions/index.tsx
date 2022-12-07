import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import { ArrowBackIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Text, HStack } from '@chakra-ui/layout'
import { Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
    TableContainer,
  
} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import { useRouter } from 'next/router'
import { useState } from 'react'
// import Image from 'next/image'
import { useAppSelector } from '../../../helpers/hooks/reduxHooks'
import { useGetAllTransactionsQuery } from '../../../redux/services/transactions.service'
import RenderBalanceToUsd from '../../../components/wallet/RenderBalanceToUsd'

const RecentTransaction = () => {
    const router = useRouter()
    const [orderType, setOrderType] = useState(`Buy/Sell`)
    const [coinType, setCoinType] = useState(`All Assets`)
    const [pageNumber, setPageNumber] = useState(1)
    const { user } = useAppSelector((state) => state.auth)
    const getTransactions = useGetAllTransactionsQuery({userId: user?._id, pageNumber: pageNumber})

    const apiData = getTransactions?.data
    console.log(user?._id)

    console.log(getTransactions)

    return (
        <DashboardLayout title="Recent Transactions">
            <Button
                onClick={() => router.back()}
                leftIcon={<ArrowBackIcon />}
                colorScheme="transparent"
                variant="solid"
                pl={0}
                ml="35px"
                color={'#F24E1E'}
                display={{ base: 'none', md: 'block' }}
            >
                Home
            </Button>
            <Flex  flexDirection={'row'} justifyContent="space-between" mt={{base: "100px", md: "30px"}} p={{ base: '0px', md: '' }}>
                <Text fontSize="24px" color="#10192D" fontWeight="800" lineHeight="39px">Recent Transactions</Text>
                
                <Flex gap="24px" ml={{ base: '0px', md: '35px' }} direction={{ base: 'column', md: 'row' }} cursor="pointer" alignItems="center" mb={{ base: "20px", md: "0" }} >
                    
                    <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                        <Text fontWeight={'medium'} color={'#64748B'}>Sort By Date</Text>
                        <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={orderType} onChange={(e) => {
                            setOrderType(e.target.value);
                        }}>
                            <option value={'buy'}>Descending</option>
                        </Select>
                    </Flex>
                    
                    <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                        <Text fontWeight={'medium'} color={'#64748B'}>Type</Text>
                        <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={coinType} onChange={(e) => {
                            setCoinType(e.target.value);
                        }}>
                            <option value={'buy'}>All</option>
                        </Select>

                    </Flex>
                    
                </Flex>
            </Flex>

            
            {/* Table container here */}
            {/* for desktop view */}
            {apiData?.data?.length !== 0 ? (
                <TableContainer display={["none", "none", "block"]}  paddingLeft="0" mt="45px" borderTop={"0.88px solid #E2E8F0"}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr >
                                <Th fontSize="14px" color="#8E9BAE" fontWeight="500" paddingLeft="0">Sender/recepient</Th>
                                <Th fontSize="14px" color="#8E9BAE" fontWeight="500">Type</Th>
                                <Th fontSize="14px" color="#8E9BAE" fontWeight="500">Currency</Th>
                                <Th fontSize="14px" color="#8E9BAE" fontWeight="500">Amount</Th>
                                <Th fontSize="14px" color="#8E9BAE" fontWeight="500">USDT equivalent</Th>
                                <Th fontSize="14px" color="#8E9BAE" fontWeight="500">Date</Th>
                                <Th fontSize="14px" color="#8E9BAE" fontWeight="500">Time</Th>
                            </Tr>
                        </Thead>

                        {apiData?.data?.map((api:any) => (
                            <Tbody key={api?.id}>
                                <Tr>
                                    <Td paddingLeft="0">
                                        <HStack>
                                            <Box bg="#FB5E04"  padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px" color="#8E9BAE">M</Box>
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
                                                    {/* <Box>
                                                        </Box>
                                                    <Text>
                                                        %&nbsp;completion
                                                    </Text> */}
                                                </HStack>{ api?.user?.map((data:any) => data?.noOfP2pAdsCreated)}
                                            </HStack>
                                            
                                        </HStack>
                                    </Td>
                                    <Td fontSize="14px" color="#8E9BAE" fontWeight="500" textTransform="capitalize">{api?.type}</Td>
                                    <Td fontSize="14px" color="#8E9BAE" fontWeight="500">{api?.currency === "USDT_TRON" ? "USDT-TRON" : api?.currency}</Td>
                                    <Td fontSize="14px" color="#8E9BAE" fontWeight="500">{api?.amount ? api?.amount?.toLocaleString() : api?.amount}&nbsp; {api?.currency === "USDT_TRON" ? "USDT-TRON" : api?.currency}</Td>
                                    <Td fontSize="14px" color="#8E9BAE" fontWeight="500">
                                        <Flex>
                                            <RenderBalanceToUsd coin={api?.currency} balance={api?.amount} variant={true} /> <Text ml="5px"> USDT</Text>
                                        </Flex>
                                    </Td>
                                    <Td>
                                 
                                    </Td>
                                </Tr>
                            </Tbody>    
                        ))}
                    </Table>
                </TableContainer>
            ) : (
                <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                    <Text fontSize="20px" fontWeight="700" color={'#64748B'}>All Your Transactions Will Appear Here</Text>
                </Flex>
            )}
        </DashboardLayout>
    )
}

export default RecentTransaction