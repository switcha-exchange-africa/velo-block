import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import { useAppSelector } from '../../../helpers/hooks/reduxHooks'
import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service'
import {  useGetP2pOrderFilterForMerchantQuery } from '../../../redux/services/p2p.service'
import RenderCoinsDropdown from '../../select/RenderCoinsDropdown'
import { RenderOrder } from './RenderOrder'


const P2pOrders = () => {
    const [orderType, setOrderType] = useState(`buy/sell`)
    const {  coin } = useAppSelector((state) => state.quickTrade)
    const [statusType, setStatusType] = useState(`All Status`)
    const coinsByTypeCrypto: any = useGetCoinsByTypeQuery('crypto')
    const [creditCoin, setCreditCoin] = useState(coin ?? `USDT`)
    const [pageNumber, setPageNumber] = useState(1)
    const filterMerchantOrderByTypeAndStatus = useGetP2pOrderFilterForMerchantQuery({ type: (orderType === "buy/sell" ? "" : orderType), status: (statusType === "All Status" ? "" : statusType), coin: creditCoin, pageNumber: pageNumber })
    
    const handlePreviousPage = () => {
        setPageNumber(pageNumber - 1)
    }

    const handleNextPage = () => {
        setPageNumber(pageNumber + 1)
     }

    

    return (
        <>
            <Flex flexDirection={'column'} mt='20px' p={{ base: '0px', md: '' }}>
                <Flex gap="24px" cursor="pointer">
                    <Flex flexDirection={'column'}  fontSize={{ base: 'sm', md: 'md' }}>
                        <Text fontWeight={'medium'} color={'#64748B'}>Coins</Text>
                        <Flex mt={'2'} fontSize={{ base: '12px', md: 'md' }} border="1px solid #8B94A5" borderRadius="5px">
                            {coinsByTypeCrypto?.data?.data && <RenderCoinsDropdown items={coinsByTypeCrypto?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}
                        </Flex>                        
                    </Flex>

                    <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }} cursor="pointer" >
                        <Text fontWeight={'medium'} color={'#64748B'}>Order Type</Text>
                        
                        <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={orderType} border="1px solid #8B94A5" onChange={(e) => {
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
                            <option value={'All Status'}>All Status</option>
                            <option value={'pending'}>Pending</option>
                            <option value={'processing'}>Processing</option>
                            <option value={'completed'}>Completed</option>
                            <option value={'expired'}>Expired</option>
                        </Select>
                    </Flex>
                </Flex>
                
                {filterMerchantOrderByTypeAndStatus?.data && <RenderOrder data={filterMerchantOrderByTypeAndStatus?.data?.data} />}
                        
                
            </Flex>  
            {filterMerchantOrderByTypeAndStatus?.data?.data.length !== 0 && (        
                <>
                    
                    {filterMerchantOrderByTypeAndStatus?.data?.pagination?.lastPage > 1 ? (
                        <HStack px={["0", "0px", "0px", "0px"]} borderBottom="1px solid #E2E8F0" borderTop="1px solid #E2E8F0" py="20px" mt="35px" justifyContent="space-between">
                            <HStack >
                                <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                                    {filterMerchantOrderByTypeAndStatus?.data?.pagination?.currentPage}
                                </Box>
                                <Text>of</Text>
                                <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                                    {filterMerchantOrderByTypeAndStatus?.data?.pagination?.lastPage}
                                </Box>
                            </HStack>

                            <HStack>
                                <Button onClick={handlePreviousPage} disabled={filterMerchantOrderByTypeAndStatus?.data?.pagination?.currentPage === 1}>
                                    Prev
                                </Button>
                                <Button onClick={handleNextPage} disabled={filterMerchantOrderByTypeAndStatus?.data?.pagination?.hasNext === false}>
                                    Next
                                </Button>    
                            </HStack>
                        </HStack>
                    ) : null}
                </>
            ) }

        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return checkValidToken(context)
}

export default P2pOrders