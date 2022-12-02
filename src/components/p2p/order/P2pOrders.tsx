import { Flex, Text } from '@chakra-ui/layout'
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
    const filterMerchantOrderByTypeAndStatus = useGetP2pOrderFilterForMerchantQuery({type:(orderType==="buy/sell" ? "" : orderType), status:(statusType==="All Status" ? "" : statusType), coin: creditCoin})

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
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return checkValidToken(context)
}

export default P2pOrders