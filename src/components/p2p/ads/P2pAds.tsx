import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Button} from "@chakra-ui/react"
import moment from 'moment'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../../helpers/hooks/reduxHooks'
import { setSingleAds } from '../../../redux/features/accountSettings/accounSettingsSlice'

export const P2pAds = ({ data }: any) => {   
    const router = useRouter()
    const dispatch= useAppDispatch()

    console.log("this is the data for ads ", data)
    
    const handleEdit = async (adIds: any) => {
        const singleAds = data?.find((ads:any) => ads._id === adIds);        
        dispatch(setSingleAds({singleAds: singleAds}))
        router.push('/p2p/edit-ads/' + adIds)    
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
                                    {/* <Text>Completed Trade QTY</Text> */}
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
                        {data?.map((ad: any) => (
                            <>
                                <Tr w="100%" height="24px" key={ad?._id}></Tr>
                                    <Tr>
                                        <Td fontSize="14px" color="#000000" fontWeight="600" >
                                            <Flex direction="column" h="100px">
                                                <Text mb="11px">{ad?._id}</Text>
                                                <Text mb="11px" textTransform="uppercase" color={ad?.type === 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'}>{ad?.type}</Text>
                                                <Text mb="11px">{ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin} / {ad?.cash}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" color="#000000" pt="0" pb="0" fontWeight="600" >
                                            <Flex direction="column" height="100px"  justifyContent="flex-start" alignItems="flex-start">
                                                <Text mb="11px">{ad?.totalAmount?.toLocaleString()} {ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin}</Text>
                                                {/* <Text mb="11px">{ad?.quantity.toLocaleString()} {ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin}</Text> */}
                                                <Text mb="11px">{ad?.minLimit.toLocaleString()} - {ad?.maxLimit.toLocaleString()} {ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" color="#000000" fontWeight="600" pt="0" pb="0">
                                            <Flex  height="100px"  direction="column" >
                                                <Text mb="11px">{ad?.price.toLocaleString()} {ad?.cash}</Text>
                                                <Text mb="11px">--</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="12px">
                                            <Flex direction="column" height="100px" >
                                                <Text mb="11px">Bank Transfer</Text>
                                                {/* {ad?.bank?.filter((index:any)=> index < 2).map((filterItem:any )=> {

                                                    return <Text key={filterItem?._id}>{filterItem?.name}</Text>
                                                })} */}

                                                <Text >{ad?.bank[0]?.name}</Text>
                                                <Text >{ad?.bank[1]?.name}</Text>
                                            </Flex>
                                            
                                        </Td>

                                        <Td pl="0" fontSize="12px" >
                                            <Flex height="100px"  direction="column">
                                                <Text mb="11px">{moment(ad?.updatedAt).format('YYYY-MM-DD HH:mm')}</Text>
                                                <Text mb="11px">{moment(ad?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" fontWeight="600">
                                            <Flex height="100px"  direction="column">
                                                <Text mb="11px" textTransform="capitalize">{ad?.status}</Text>
                                            </Flex>
                                        </Td>

                                    <Td pl="0" fontSize="14px" color="#000000" fontWeight="600">
                                        <Flex height="100px"  direction="column">
                                            <Button px="0" isDisabled mb="11px" cursor="pointer">Download</Button>
                                            <Button px="0" bg="transparent" mb="11px" cursor="pointer" onClick={()=>handleEdit(ad?._id)}>Edit</Button>
                                            <Button px="0" isDisabled mb="11px" cursor="pointer" color="#FF1F00">Delete</Button>
                                        </Flex>
                                            
                                    </Td>
                                </Tr>
                            </>
                            
                        ))}
                    </Tbody>
                    
                </Table>
            </TableContainer>

        
            {/* mobile */}
            {data?.map((ad: any) => (
                <Flex key={ad?._id} direction="column"  display={{base: "flex", md: "none"}} justifyContent={'space-between'} my={'25px'} p={'3'} bg={'white'} boxShadow={'md'} borderRadius={'sm'}>
                    <Flex justifyContent="space-between">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Ad Number</Text>
                            <Text>Type</Text>
                            <Text mb="11px">Asset/Fiat</Text>

                            <Flex direction="column" h="100px" fontSize="14px" color="#000000" fontWeight="600">
                                <Text  mb="8px">{ad?._id}</Text>
                                <Text mb="8px" textTransform="uppercase" color={ad?.type === 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'}>{ad?.type}</Text>
                                <Text mb="8px">{ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin} / {ad?.cash}</Text>
                            </Flex>
                        
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Price</Text>

                            <Flex direction="column" mt="20px"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end" justifyContent="center">
                                <Text mb="8px">{ad?.price.toLocaleString()} {ad?.cash}</Text>
                                <Text mb="8px">--</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" border="1px solid #8E9BAE" />

                    <Flex justifyContent="space-between" mt="10px">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Available Amount</Text>
                            {/* <Text>Completed Trade QTY</Text> */}
                            <Text mb="11px">Limit</Text>

                            <Flex direction="column"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-start">
                                <Text mb="8x">{ad?.totalAmount?.toLocaleString()} {ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin}</Text>
                                {/* <Text mb="8px">{ad?.quantity.toLocaleString()} {ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin}</Text> */}
                                <Text mb="8px">{ad?.minLimit.toLocaleString()} - {ad?.maxLimit.toLocaleString()} {ad?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.coin}</Text>
                            </Flex>
                        
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text mb="11px">Payment Method</Text>
                            <Flex direction="column" mt="20px" w="80%" height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end" justifyContent="center">
                                <Text mb="8px">Bank Transfer</Text>
                                <Text >{ad?.bank[0]?.name}</Text>
                                <Text >{ad?.bank[1]?.name}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" border="1px solid #8E9BAE" />


                    <Flex justifyContent="space-between" mt="10px">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Last Updated</Text>
                            <Text mb="11px">Create Time</Text>

                            <Flex direction="column"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-start">
                                <Text mb="8px">{moment(ad?.updatedAt).format('YYYY-MM-DD HH:mm')}</Text>
                                <Text mb="8px">{moment(ad?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                            </Flex>
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text mb="11px">Actions</Text>
                            <Flex direction="column" mt="20px"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end">
                                <Text mb="8px" cursor="pointer">Download</Text>
                                <Text mb="8px" cursor="pointer" onClick={()=>handleEdit(ad?._id)}>Edit</Text>
                                <Text mb="8px" cursor="pointer" color="#FF1F00">Delete</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>
            ))}
 
        </Box>
    )
}
