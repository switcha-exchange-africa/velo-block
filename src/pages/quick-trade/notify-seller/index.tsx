import { Box, Divider, Flex, Img, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ConfirmSuccessfulPaymentModal from '../../../components/quick-trade/ConfirmSuccessfulPaymentModal';
import { useAppSelector } from '../../../helpers/hooks/reduxHooks';
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import Currency from 'react-currency-formatter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import moment from 'moment';
import appAlert from '../../../helpers/appAlert';

const NotifySeller = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { order } = useAppSelector((state) => state.quickTrade)
    const createdAt = moment(order?.order?.createdAt).format('YYYY-MM-DD HH:mm')
    const timeInMin = moment(order?.timeInMiliSeconds).format('mm:ss')
    // React.useEffect(() => {

    // }, [])
    return (
        <DashboardLayout title='Notify Seller'>
            <Flex flexDirection={'column'} w={'full'} alignItems={'center'} p={'4'}>
                <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }} w={'full'} bg={'#ffffff'} p={{ base: '2', md: '4' }}>
                    <Flex flexDirection={'column'} w={'full'} alignItems={'start'}>
                        <Text fontWeight={'bold'} fontSize={'lg'}>Buy {order?.ad?.coin} from {order?.ad?.userId?.firstName}</Text>
                        <Flex alignItems={'center'} pt={{ base: '2', md: '4' }}>
                            <Text fontSize={'sm'} color={'#64748B'}>The order is created, please wait for system confirmation.</Text>
                            <Text fontWeight={'medium'} fontSize={'sm'} color={'#ffffff'} ml={'2'} borderRadius={'md'} px={'2'} bg={'primaryColor.900'}>{timeInMin}</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'} w={'full'} alignItems={{ base: 'start', lg: 'end' }} pt={{ base: '4', lg: '0px' }}>
                        <Flex alignItems={'center'}>
                            <Text fontWeight={'medium'} flexDirection={'row'} fontSize={'sm'} color={'#64748B'} >Order number</Text>
                            <Text display={'flex'} alignItems={'center'} fontWeight={'medium'} fontSize={'sm'} px={'2'}>{order?.order?.orderId} <CopyToClipboard text={order?.order?.orderId}
                                onCopy={() => appAlert.success('copied to clipboard')}>
                                <Img src={'/assets/svgs/copyIcon.svg'} alt='' />
                            </CopyToClipboard></Text>

                        </Flex>
                        <Flex pt={{ base: '2', md: '4' }} alignItems={'center'}>
                            <Text fontWeight={'medium'} flexDirection={'row'} fontSize={'md'} color={'#64748B'} >Time created</Text>
                            <Text fontWeight={'medium'} fontSize={'md'} px={'2'}>{createdAt}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDirection={{ base: 'column', lg: 'row' }} pt={'8'} w={'full'}>
                    <Flex flexDirection={'column'} w={'full'}>
                        <Text fontWeight={'medium'} fontSize={'sm'} color={'primaryColor.900'} w={'fit-content'} ml={'12'} borderRadius={'md'} px={'2'} bg={'rgba(251, 94, 4, .4)'}>Transfered and Notify Seller</Text>
                        <Steps activeStep={order?.order?.status == 'pending' ? 1 : order?.order?.status == 'completed' ? 3 : 2} />
                        <StepLabels activeStep={order?.order?.status == 'pending' ? 1 : order?.order?.status == 'completed' ? 3 : 2} />

                        <Box w={'full'} pt={'8'}>
                            <Box w={'full'}>
                                <Flex>
                                    <Text fontSize={'sm'} pr={'2'} color={'primaryColor.900'}>○</Text>
                                    <Text fontSize={'sm'} >Confirm order info</Text>
                                </Flex>
                                <Flex>
                                    <Divider orientation='vertical' borderColor={'rgba(142, 155, 174, 1)'} borderStyle={'dashed'} h={'20'} mx={'1.5'} pr={'2'} />

                                    <Flex pt={'4'}>
                                        <Flex flexDirection={'column'} pr={'8'}>
                                            <Text fontSize={'xs'} color={'#64748B'}>Amount</Text>
                                            <Text fontSize={'sm'} color={'primaryColor.900'}><Currency
                                                quantity={order?.order?.totalAmount}
                                                currency={order?.ad?.cash}
                                            /> </Text>
                                        </Flex>
                                        <Flex flexDirection={'column'} pr={'8'}>
                                            <Text fontSize={'xs'} color={'#64748B'}>Price</Text>
                                            <Text fontSize={'sm'} ><Currency
                                                quantity={order?.order?.price}
                                                currency={order?.ad?.cash}
                                            /></Text>
                                        </Flex>
                                        <Flex flexDirection={'column'} pr={'8'}>
                                            <Text fontSize={'xs'} color={'#64748B'}>Quantity</Text>
                                            <Text fontSize={'sm'} >{order?.order?.quantity} {order?.ad?.coin}</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Box>

                            <Box w={'full'}>
                                <Flex>
                                    <Text fontSize={'sm'} pr={'2'} color={'primaryColor.900'}>○</Text>
                                    <Text fontSize={'sm'} >Transfer the funds to the seller’s account provided below</Text>
                                </Flex>
                                <Flex>
                                    <Divider orientation='vertical' borderColor={'rgba(142, 155, 174, 1)'} borderStyle={'dashed'} h={'40'} mx={'1.5'} pr={'2'} />


                                    <Flex flexDirection={'column'}>
                                        <Flex pt={'4'}>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'xs'} color={'#64748B'}>Paymemth Method</Text>
                                                <Text fontSize={'sm'} color={'primaryColor.900'}>{order?.order?.method}</Text>
                                            </Flex>

                                        </Flex>
                                        <Flex pt={'4'}>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'xs'} color={'#64748B'}>Account Name</Text>
                                                <Text display={'flex'} fontSize={'sm'} >OLUMIDE OYELEYE <Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></Text>
                                            </Flex>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'xs'} color={'#64748B'}>Account Number</Text>
                                                <Text display={'flex'} fontSize={'sm'} >2016939941 <Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></Text>
                                            </Flex>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'xs'} color={'#64748B'}>Bank Name</Text>
                                                <Text display={'flex'} fontSize={'sm'} >KUDA <Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Box>

                            <Box w={'full'}>
                                <Flex>
                                    <Text fontSize={'sm'} pr={'2'} color={'primaryColor.900'}>○</Text>
                                    <Text fontSize={'sm'} >After transfering the funds, click on the “Transfered, notify seller” button</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Text fontWeight={'medium'} fontSize={'sm'} cursor={'pointer'} color={'white'} w={'fit-content'} ml={'4'} mt={'8'} borderRadius={'md'} py={'2'} px={'4'} bg={'primaryColor.900'} onClick={() => onOpen()}>Transfered and Notify Seller</Text>

                                <ConfirmSuccessfulPaymentModal isOpen={isOpen} onClose={onClose} />

                                <Text fontWeight={'medium'} fontSize={'md'} cursor={'pointer'} color={'primaryColor.900'} w={'fit-content'} ml={'4'} mt={'8'} borderRadius={'md'} py={'2'} px={'4'} >Cancel Order</Text>
                            </Flex>



                        </Box>
                    </Flex>
                    <Box w={{ lg: '48%', md: '80%', base: 'full' }} pt={{ base: '8', lg: '0px' }}>
                        <Flex flexDirection={'column'} pl={'8'} >
                            <Flex p={'2'} bg={'#F1F5F9'} borderTopRadius={'lg'}>
                                <Flex w={'full'}>
                                    <Flex alignItems={'center'} justifyContent={'center'} fontWeight={'medium'} fontSize={'md'} color={'#ffffff'} rounded={'full'} borderRadius={'full'} bg={'primaryColor.900'} w={'8'} h={'8'}>{order?.ad?.userId?.username[0]}</Flex>
                                    <Flex flexDirection={'column'} pl={'2'} w={'full'}>
                                        <Text fontSize={'xs'} color={'primaryColor.900'}>{order?.ad?.userId?.username}</Text>
                                        <Text fontSize={'xs'} >Verified Merchant</Text>

                                        <Flex justifyContent={'space-between'} pt={'2'} w={'full'}>
                                            <Flex flexDirection={'column'} >
                                                <Text fontSize={'xs'} color={'rgba(142, 155, 174, 1)'}>30d Trades</Text>
                                                <Text fontSize={'xs'} >{order?.ad?.userId?.noOfP2pOrderCompleted}</Text>
                                            </Flex>

                                            <Flex flexDirection={'column'} >
                                                <Text fontSize={'xs'} color={'rgba(142, 155, 174, 1)'}>30d Completion Rate</Text>
                                                <Text fontSize={'xs'} >{order?.ad?.userId?.noOfP2pOrderCompleted == 0 || order?.ad?.userId?.noOfP2pAdsCreated == 0 ? 0 : (order?.ad?.userId?.noOfP2pOrderCompleted / order?.ad?.userId?.noOfP2pAdsCreated) * 100}%</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex bg={'#ffffff'} flexDirection={'column'} p={'2'} h={'2xs'} borderBottomRadius={'lg'}>
                                <Flex w={'full'} h={'full'}></Flex>
                                <Divider orientation='horizontal' w={'full'} />
                                <Flex w={'full'} alignItems={'center'} pr={'4'}>
                                    <Input type={'text'} w={'full'} border={'none'} placeholder={'Type your Message'} _placeholder={{ fontSize: 'xs' }} />
                                    <Text display={'flex'} cursor={'pointer'} fontSize='xs' color={'primaryColor.900'} fontWeight={'medium'}>Send <Img pl={'1'} src={'/assets/svgs/image-icon.svg'} alt='' /></Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </DashboardLayout>
    )
}

const StepNumber = ({ number, deselected = true }: any) => {
    return (<Flex alignItems={'center'} justifyContent={'center'} fontWeight={'medium'} fontSize={'md'} color={deselected ? 'rgba(142, 155, 174, 1)' : '#ffffff'} rounded={'full'} borderRadius={'full'} bg={deselected ? '#E2E8F0' : 'primaryColor.900'} w={'20'} h={'8'}>{number}</Flex>)
}

const Steps = ({ activeStep }: any) => {
    return (<Flex w={'full'} alignItems={'center'}>
        <StepNumber number={1} deselected={activeStep >= 1 ? false : true} />
        <Divider orientation='horizontal' borderColor={'rgba(142, 155, 174, 1)'} borderStyle={'dashed'} w={'full'} />
        <StepNumber number={2} deselected={activeStep >= 2 ? false : true} />
        <Divider orientation='horizontal' borderColor={'rgba(142, 155, 174, 1)'} borderStyle={'dashed'} w={'full'} />
        <StepNumber number={3} deselected={activeStep >= 3 ? false : true} />
    </Flex>)
}

const StepLabels = ({ activeStep }: any) => {
    return (<Flex pt={'4'} justifyContent={'space-between'} w={'full'} alignItems={'center'}>
        <Text decoration={activeStep == 1 ? 'underline' : 'none'} fontSize={'md'} fontWeight={'light'} >Transfer payment to Seller</Text>
        <Text decoration={activeStep == 2 ? 'underline' : 'none'} fontSize={'md'} fontWeight={'light'} >Pending Seller to Release Cryptos</Text>
        <Text decoration={activeStep == 3 ? 'underline' : 'none'} fontSize={'md'} fontWeight={'light'} >Completed</Text>
    </Flex>)
}

export default NotifySeller