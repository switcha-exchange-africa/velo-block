import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Input} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import RenderCoinComponent from '../../components/dashboard/wallet/RenderCoinComponent'
import { checkValidToken } from '../../helpers/functions/checkValidToken'
import { useAppSelector } from '../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { useGetP2pOrderForClientsQuery, useGetP2pOrderForMerchantsQuery } from '../../redux/services/p2p.service'


const AllAds = () => {
    const router = useRouter()
    const [orderType, setOrderType] = useState(`Buy/Sell`)
    const { isClientSelected } = useAppSelector((state) => state.quickTrade)
    const [coinType, setCoinType] = useState(`All Assets`)
    const [statusType, setStatusType] = useState(`All Status`)
    const clientOrders = useGetP2pOrderForClientsQuery()
    const merchantOrders = useGetP2pOrderForMerchantsQuery()

    // console.log("merchant Orders ", merchantOrders?.error?.status)

    // // console.log(merchantOrders?.error?.status)
    // useEffect(() => {0

    //     if(merchantOrders?.error?.status === 401){
    //         console.log("young man")
    //         router.push("/signin")
    //     }

    // }, [])
    


    return (
        <DashboardLayout title='All Ads'>
            <Button
                onClick={() => router.back()}
                leftIcon={<ArrowBackIcon />}
                colorScheme="transparent"
                variant="solid"
                pl={0}
                ml="35px"
                py={"3rem"}
                color={'black'}
                display={{ base: 'none', md: 'block' }}
            >
                Back
            </Button>
            <Flex  flexDirection={'column'} mt='20px' p={{ base: '0px', md: '' }}>
       
                <Flex gap="24px" ml={{ base: '0px', md: '35px' }} direction={{base: 'column', md: 'row'}} cursor="pointer" alignItems="center" mb={{base: "20px", md: "0"}} >
                    <Flex gap="24px">
                        <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                            <Text fontWeight={'medium'} color={'#64748B'}>Asset/Type</Text>
                            <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={coinType} onChange={(e) => {
                                setCoinType(e.target.value);
                            }}>
                                <option value={'buy'}>All Assets</option>
                            </Select>

                        </Flex>

                        <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }} cursor="pointer" >
                            <Text fontWeight={'medium'} color={'#64748B'}>Order Type</Text>
                            
                            <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={orderType} onChange={(e) => {
                                setOrderType(e.target.value);
                            }}>
                                <option value={'buy/sell'}>Buy/Sell</option>
                                <option value={'buy'}>Buy</option>
                                <option value={'sell'}>Sell</option>
                            </Select>
                        </Flex>
                        
                        <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                            <Text fontWeight={'medium'} color={'#64748B'}>Status</Text>
                            <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={statusType} onChange={(e) => {
                                setStatusType(e.target.value);
                            }}>
                                <option value={'buy'}>All Status</option>
                            </Select>
                        </Flex>
                    </Flex>
                    
                    <form style={{padding: "0"}}>
                        <Flex  ml={{ base: '-20px', md: '0' }}  flexDirection={'column'} fontSize={{ base: 'sm', md: '14px' }}>
                            <Text fontWeight={'medium'} color={'#64748B'}>Created Time</Text>
                            
                            <Flex mt={'3'} alignItems="center">
                                <Input  fontSize={{ base: '12px', md: 'md' }} type="date" />
                                <Button mx="25px" color="#FB5e04" bg="transparent" _hover={{ bg: "transparent"}} border="1px solid #FB5E04">Filter</Button>
                                <Button bg="transparent" _hover={{ bg: "transparent"}}>Reset</Button >
                            </Flex>
                        </Flex>
                    </form>


                    <Text  mt={{ base: '0px', md: '25px' }} flex="1" textAlign={{ base: 'left', md: 'right' }} w="100%" color="#FB5E04" fontWeight="600" fontSize="14px">Ad History</Text>
       
                </Flex>
                {/* <Flex bg={'gray.300'} mt={'4'} justifyContent={'space-evenly'}>
                    <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(true) }}>Client</Heading>
                    <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={!isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(false) }}>Merchant</Heading>
                </Flex> */}
                
                
                {merchantOrders?.data && <RenderOrderComponent data={merchantOrders?.data?.data} />}

            </Flex>

            
        </DashboardLayout>
    )
}



export const RenderOrderComponent = ({ data }: any) => {
    
    const router = useRouter()

    const handleClick = (orderId: string) => {
        router.push('/quick-trade/order/'+orderId)
    }
    
    return (
        <Box>

            <TableContainer display={{base: "none", md: "block"}} key="" mt="60px" position="relative" w="100%">
                <Table >
                    <Thead borderBottomColor={"transparent"} >
                        <Tr >
                            <Th textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px" >
                                <Flex direction="column" height="50px">
                                    <Text>Ad Number</Text>
                                    <Text>Type</Text>
                                    <Text>Asset/Fiat</Text>
                                </Flex>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Available Amount</Text>
                                    <Text>Completed Trade QTY</Text>
                                    <Text>Limit</Text>
                                </Flex>
                            </Th>
                            <Th pl="0" textAlign={"left"}  fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Price</Text>
                                </Flex>
                                {/* <Text>Exchange Rate</Text> */}
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Payment Method</Text>
                                </Flex>
                                
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                               <Flex direction="column"  height="50px">
                                    <Text>Last Updated</Text>
                                    <Text>Create Time</Text>    
                                </Flex>
                                
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column" height="50px">
                                    <Text>Status</Text>  
                                </Flex>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Actions</Text>    
                                </Flex>
                                
                            </Th>
                        </Tr>
                    </Thead>

                    
                    <Tbody bg="white" mt="20px" >
                        {data.map((ad: any) => (
                            <>
                                <Tr w="100%" height="24px" ></Tr>
                                    <Tr>
                                        <Td fontSize="14px" color="#000000" fontWeight="600" >
                                            <Flex direction="column" h="100px">
                                                <Text mb="11px">{ad?.adId}</Text>
                                                <Text mb="11px" textTransform="uppercase" color={ad?.ad[0]?.type === 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'}>{ad?.ad[0]?.type}</Text>
                                                <Text mb="11px">{ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin} / {ad?.ad[0]?.cash}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" color="#000000" pt="0" pb="0" fontWeight="600" >
                                            <Flex direction="column" height="100px"  justifyContent="flex-start" alignItems="flex-start">
                                                <Text mb="11px">{ad?.ad[0]?.totalAmount?.toLocaleString()}</Text>
                                                <Text mb="11px">{ad?.quantity.toLocaleString()}</Text>
                                                <Text mb="11px">{ad?.ad[0]?.minLimit.toLocaleString()} - {ad?.ad[0]?.maxLimit.toLocaleString()} {ad?.ad[0]?.cash}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" color="#000000" fontWeight="600" pt="0" pb="0">
                                            <Flex  height="100px"  direction="column" >
                                                <Text mb="11px">{ad?.ad[0]?.price.toLocaleString()}</Text>
                                                <Text mb="11px">--</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="12px">
                                            <Flex direction="column" height="100px" >
                                                <Text mb="11px">Bank Transfer</Text>
                                                <Text >{ad?.ad[0]?.bank[0]?.name}</Text>
                                                <Text>{ad?.ad[0]?.bank[1]?.name}</Text>
                                            </Flex>
                                            
                                        </Td>

                                        <Td pl="0" fontSize="12px" >
                                            <Flex height="100px"  direction="column">
                                                <Text mb="11px">{moment(ad?.ad[0]?.bank[1]?.updatedAt).format('YYYY-MM-DD HH:mm')}</Text>
                                                <Text mb="11px">{moment(ad?.ad[0]?.bank[1]?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" color="#22C36B" fontSize="14px" fontWeight="600">
                                            <Flex height="100px"  direction="column">
                                                <Text mb="11px">Published</Text>
                                            </Flex>
                                        </Td>

                                    <Td pl="0" fontSize="14px" color="#000000" fontWeight="600">
                                        <Flex height="100px"  direction="column">
                                            <Text mb="11px" cursor="pointer">Download</Text>
                                            <Text mb="11px" cursor="pointer">Edit</Text>
                                            <Text mb="11px" cursor="pointer" color="#FF1F00">Delete</Text>
                                        </Flex>
                                            
                                    </Td>
                                </Tr>
                            </>
                            
                        ))}
                    </Tbody>
                    
                </Table>
            </TableContainer>

        
            {/* mobile */}
            {data.length !== 0 ? data.map((ad: any) => (
            // <Show below='sm' key="">
                <Flex key={ad?._id} direction="column"  display={{base: "flex", md: "none"}} justifyContent={'space-between'} my={'25px'} p={'3'} bg={'white'} boxShadow={'md'} borderRadius={'sm'}>
                    <Flex justifyContent="space-between">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Ad Number</Text>
                            <Text>Type</Text>
                            <Text mb="11px">Asset/Fiat</Text>

                            <Flex direction="column" h="100px" fontSize="14px" color="#000000" fontWeight="600">
                                <Text  mb="8px">{ad?.adId}</Text>
                                <Text mb="8px" textTransform="uppercase" color={ad?.ad[0]?.type === 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'}>{ad?.ad[0]?.type}</Text>
                                <Text mb="8px">{ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin} / {ad?.ad[0]?.cash}</Text>
                            </Flex>
                        
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Price</Text>

                            <Flex direction="column" mt="20px"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end" justifyContent="center">
                                <Text mb="8px">{ad?.ad[0]?.price.toLocaleString()}</Text>
                                <Text mb="8px">--</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" border="1px solid #8E9BAE" />

                    <Flex justifyContent="space-between" mt="10px">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Available Amount</Text>
                            <Text>Completed Trade QTY</Text>
                            <Text mb="11px">Limit</Text>

                            <Flex direction="column"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-start">
                                <Text mb="8x">{ad?.ad[0]?.totalAmount?.toLocaleString()}</Text>
                                <Text mb="8px">{ad?.quantity.toLocaleString()}</Text>
                                <Text mb="8px">{ad?.ad[0]?.minLimit.toLocaleString()} - {ad?.ad[0]?.maxLimit.toLocaleString()} {ad?.ad[0]?.cash}</Text>
                            </Flex>
                        
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text mb="11px">Payment Method</Text>
                            <Flex direction="column" mt="20px" w="80%" height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end" justifyContent="center">
                                <Text mb="8px">Bank Transfer</Text>
                                <Text >{ad?.ad[0]?.bank[0]?.name}</Text>
                                <Text >{ad?.ad[0]?.bank[1]?.name}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" border="1px solid #8E9BAE" />


                    <Flex justifyContent="space-between" mt="10px">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Last Updated</Text>
                            <Text mb="11px">Create Time</Text>

                            <Flex direction="column"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-start">
                                <Text mb="8px">{moment(ad?.ad[0]?.bank[1]?.updatedAt).format('YYYY-MM-DD HH:mm')}</Text>
                                <Text mb="8px">{moment(ad?.ad[0]?.bank[1]?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                            </Flex>
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text mb="11px">Actions</Text>
                            <Flex direction="column" mt="20px"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end">
                                <Text mb="8px" cursor="pointer">Download</Text>
                                <Text mb="8px" cursor="pointer">Edit</Text>
                                <Text mb="8px" cursor="pointer" color="#FF1F00">Delete</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>
            // </Show> 
            )) : "You Don't Have Any Order Yet"}
 

                
                
            


            
        </Box>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return checkValidToken(context)
}

export default AllAds