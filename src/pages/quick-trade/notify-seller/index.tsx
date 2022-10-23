import { Box, Divider, Flex, Img, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ConfirmSuccessfulPaymentModal from '../../../components/quick-trade/ConfirmSuccessfulPaymentModal';
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'

const NotifySeller = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // React.useEffect(() => {

    // }, [])
    return (
        <DashboardLayout>
            <Flex flexDirection={'column'} w={'full'} alignItems={'center'} p={'4'}>
                <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }} w={'full'} bg={'#ffffff'} p={{ base: '2', md: '4' }}>
                    <Flex flexDirection={'column'} w={'full'} alignItems={'start'}>
                        <Text fontWeight={'bold'} fontSize={'xl'}>Buy USDT from Olu4mide</Text>
                        <Flex alignItems={'center'} pt={{ base: '2', md: '4' }}>
                            <Text fontSize={'md'} color={'#64748B'}>The order is created, please wait for system confirmation.</Text>
                            <Text fontWeight={'medium'} fontSize={'md'} color={'#ffffff'} ml={'2'} borderRadius={'md'} px={'2'} bg={'primaryColor.900'}>15:00</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'} w={'full'} alignItems={{ base: 'start', lg: 'end' }} pt={{ base: '4', lg: '0px' }}>
                        <Flex alignItems={'center'}>
                            <Text fontWeight={'medium'} flexDirection={'row'} fontSize={'md'} color={'#64748B'} >Order number</Text>
                            <Text fontWeight={'medium'} fontSize={'md'} px={'2'}>2033306723458238923405</Text>
                            <Img src={'/assets/svgs/copyIcon.svg'} alt='' />
                        </Flex>
                        <Flex pt={{ base: '2', md: '4' }} alignItems={'center'}>
                            <Text fontWeight={'medium'} flexDirection={'row'} fontSize={'md'} color={'#64748B'} >Time created</Text>
                            <Text fontWeight={'medium'} fontSize={'md'} px={'2'}>2022-03-06 16:11:23</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDirection={{ base: 'column', lg: 'row' }} pt={'8'} w={'full'}>
                    <Flex flexDirection={'column'} w={'full'}>
                        <Text fontWeight={'medium'} fontSize={'md'} color={'primaryColor.900'} w={'fit-content'} ml={'12'} borderRadius={'md'} px={'2'} bg={'rgba(251, 94, 4, .4)'}>Transfered and Notify Seller</Text>
                        <Steps activeStep={2} />
                        <StepLabels activeStep={2} />

                        <Box w={'full'} pt={'8'}>
                            <Box w={'full'}>
                                <Flex>
                                    <Text fontSize={'md'} pr={'2'} color={'primaryColor.900'}>○</Text>
                                    <Text fontSize={'md'} >Confirm order info</Text>
                                </Flex>
                                <Flex>
                                    <Divider orientation='vertical' borderColor={'rgba(142, 155, 174, 1)'} borderStyle={'dashed'} h={'20'} mx={'1.5'} pr={'2'} />

                                    <Flex pt={'4'}>
                                        <Flex flexDirection={'column'} pr={'8'}>
                                            <Text fontSize={'sm'} color={'#64748B'}>Amount</Text>
                                            <Text fontSize={'md'} color={'primaryColor.900'}>10,000.00 NGN</Text>
                                        </Flex>
                                        <Flex flexDirection={'column'} pr={'8'}>
                                            <Text fontSize={'sm'} color={'#64748B'}>Amount</Text>
                                            <Text fontSize={'md'} >10,000.00 NGN</Text>
                                        </Flex>
                                        <Flex flexDirection={'column'} pr={'8'}>
                                            <Text fontSize={'sm'} color={'#64748B'}>Amount</Text>
                                            <Text fontSize={'md'} >10,000.00 NGN</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Box>

                            <Box w={'full'}>
                                <Flex>
                                    <Text fontSize={'md'} pr={'2'} color={'primaryColor.900'}>○</Text>
                                    <Text fontSize={'md'} >Transfer the funds to the seller’s account provided below</Text>
                                </Flex>
                                <Flex>
                                    <Divider orientation='vertical' borderColor={'rgba(142, 155, 174, 1)'} borderStyle={'dashed'} h={'40'} mx={'1.5'} pr={'2'} />


                                    <Flex flexDirection={'column'}>
                                        <Flex pt={'4'}>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'sm'} color={'#64748B'}>Paymemth Method</Text>
                                                <Text fontSize={'md'} color={'primaryColor.900'}>Bank Transfer</Text>
                                            </Flex>

                                        </Flex>
                                        <Flex pt={'4'}>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'sm'} color={'#64748B'}>Account Name</Text>
                                                <Text display={'flex'} fontSize={'md'} >OLUMIDE OYELEYE <Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></Text>
                                            </Flex>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'sm'} color={'#64748B'}>Account Number</Text>
                                                <Text display={'flex'} fontSize={'md'} >2016939941 <Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></Text>
                                            </Flex>
                                            <Flex flexDirection={'column'} pr={'8'}>
                                                <Text fontSize={'sm'} color={'#64748B'}>Bank Name</Text>
                                                <Text display={'flex'} fontSize={'md'} >KUDA <Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Box>

                            <Box w={'full'}>
                                <Flex>
                                    <Text fontSize={'md'} pr={'2'} color={'primaryColor.900'}>○</Text>
                                    <Text fontSize={'md'} >After transfering the funds, click on the “Transfered, notify seller” button</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Text fontWeight={'medium'} fontSize={'md'} cursor={'pointer'} color={'white'} w={'fit-content'} ml={'4'} mt={'8'} borderRadius={'md'} py={'2'} px={'4'} bg={'primaryColor.900'} onClick={() => onOpen()}>Transfered and Notify Seller</Text>

                                <ConfirmSuccessfulPaymentModal isOpen={isOpen} onClose={onClose} />

                                <Text fontWeight={'medium'} fontSize={'md'} cursor={'pointer'} color={'primaryColor.900'} w={'fit-content'} ml={'4'} mt={'8'} borderRadius={'md'} py={'2'} px={'4'} >Cancel Order</Text>
                            </Flex>



                        </Box>
                    </Flex>
                    <Box w={{ lg: '45%', md: '80%', base: 'full' }} pt={{ base: '8', lg: '0px' }}>
                        <Flex flexDirection={'column'} px={'8'} >
                            <Flex p={'2'} bg={'#F1F5F9'} borderTopRadius={'lg'}>
                                <Flex w={'full'}>
                                    <Flex alignItems={'center'} justifyContent={'center'} fontWeight={'medium'} fontSize={'md'} color={'#ffffff'} rounded={'full'} borderRadius={'full'} bg={'primaryColor.900'} w={'8'} h={'8'}>M</Flex>
                                    <Flex flexDirection={'column'} pl={'2'} w={'full'}>
                                        <Text fontSize={'sm'} color={'primaryColor.900'}>Maximus</Text>
                                        <Text fontSize={'sm'} >Verified Merchant</Text>

                                        <Flex justifyContent={'space-between'} pt={'2'} w={'full'}>
                                            <Flex flexDirection={'column'} >
                                                <Text fontSize={'sm'} color={'rgba(142, 155, 174, 1)'}>30d Trades</Text>
                                                <Text fontSize={'sm'} >1534</Text>
                                            </Flex>

                                            <Flex flexDirection={'column'} >
                                                <Text fontSize={'sm'} color={'rgba(142, 155, 174, 1)'}>30d Completion Rate</Text>
                                                <Text fontSize={'sm'} >89.25%</Text>
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
        <Text decoration={activeStep == 1 ? 'underline' : 'none'} fontSize={'lg'} fontWeight={'light'} >Transfer payment to Seller</Text>
        <Text decoration={activeStep == 2 ? 'underline' : 'none'} fontSize={'lg'} fontWeight={'light'} >Pending Seller to Release Cryptos</Text>
        <Text decoration={activeStep == 3 ? 'underline' : 'none'} fontSize={'lg'} fontWeight={'light'} >Completed</Text>
    </Flex>)
}

export default NotifySeller