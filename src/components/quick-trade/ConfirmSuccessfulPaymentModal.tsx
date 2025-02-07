import { Box, Divider, Flex, Heading, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import remoteImages from '../../constants/remoteImages'
import appAlert from '../../helpers/appAlert'
import { useAppDispatch } from '../../helpers/hooks/reduxHooks'
import { resetQuickTradePayload } from '../../redux/features/quick-trade/quickTradeSlice'
// import { useLazyGetBankByIdQuery } from '../../redux/services/bank.service'
import { useNotifyMerchantMutation } from '../../redux/services/p2p.service'
import MainAppButton from '../buttons/MainAppButton'

const ConfirmSuccessfulPaymentModal = ({ isOpen, onClose, size = { md: 'lg', base: 'sm' }, ad, id }: any) => {
    const router = useRouter()
    // React.useEffect(() => {
    //     alert(JSON.stringify(ad.banks))
    // }, [ad])
    const [notifyMerchant, { isLoading }] = useNotifyMerchantMutation()
    const dispatch = useAppDispatch()

    const notifyMerchantFunction = async () => {
        try {
            // onOpen()

            const response: any = await notifyMerchant(id)
            // console.log("this s  ", response)
            if (response?.data?.status == 200) {
                // onOpen()
                onClose()
                // dispatch(setIsModalOpen({ isOpen: true }))
                dispatch(resetQuickTradePayload())
            } else if (response?.data?.status == 401) {

                appAlert.error(`${response?.error?.data?.message}`)
                // alert(JSON.stringify(res))
                router.replace('/signin')
            } else {

                appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
            }
        } catch (error) {

        }
    }


    console.log('this is the add ', ad)
    return (
        <Modal size={size} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay
                bg="blackAlpha.600"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    <Heading size="md">Confirm Successful Payment</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={{ md: '4', base: '2' }}>
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'sm'} color={'#64748B'}>Please confirm that payment has been made to the seller. Malicious clicks WIll lead to account frozen.</Text>
                        <Divider mt={'2'} mb={'4'} orientation='horizontal' h={'2px'} borderColor={'rgba(142, 155, 174, 1)'} />
                        <Text fontWeight={'medium'} fontSize={'sm'} >Bank Transfer</Text>
                        
                        {ad?.type === "sell" ? (
                            <>
                                <Flex flexDirection={'column'} pt={'6'}>
                                <Text fontSize={'sm'} color={'#64748B'}>Recommended</Text>
                                <div>
                                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{ad?.clientAccountName} <CopyToClipboard text={ad?.clientAccountName}
                                    onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                                </div>
                            </Flex>

                            <Flex flexDirection={'column'} pt={'6'}>
                                <Text fontSize={'sm'} color={'#64748B'}>Bank Account Number</Text>
                                <div>
                                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{ad?.clientAccountNumber} <CopyToClipboard text={ad?.clientAccountNumber}
                                    onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                                </div>
                            </Flex>

                            <Flex flexDirection={'column'} pt={'6'}>
                                <Text fontSize={'sm'} color={'#64748B'}>Bank Name</Text>
                                <div>
                                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{ad?.clientBankName} <CopyToClipboard text={ad?.clientBankName}
                                    onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                                </div>
                            </Flex>
                            
                            </>
                        ) : (ad?.ad[0]?.bank?.map((item: any) => (
                            <>
                                    <Flex flexDirection={'column'} pt={'6'}>
                                <Text fontSize={'sm'} color={'#64748B'}>Recommended</Text>
                                <div>
                                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{item?.accountName} <CopyToClipboard text={item?.accountName}
                                    onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                                </div>
                            </Flex>

                            <Flex flexDirection={'column'} pt={'6'}>
                                <Text fontSize={'sm'} color={'#64748B'}>Bank Account Number</Text>
                                <div>
                                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{item?.accountNumber} <CopyToClipboard text={item?.accountNumber}
                                    onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                                </div>
                            </Flex>

                            <Flex flexDirection={'column'} pt={'6'}>
                                <Text fontSize={'sm'} color={'#64748B'}>Bank Name</Text>
                                <div>
                                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{item?.name} <CopyToClipboard text={item?.name}
                                    onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                                </div>
                            </Flex>      
                                
                                </>
                        ))
                                
                        )}

                        

                        <Flex flexDirection={'column'} pt={'6'}>
                            <Text fontSize={'sm'} color={'#64748B'}>Account opening branch</Text>
                            <Text fontSize={'sm'} >No crypto related words on payment DESCRIPTION</Text>
                        </Flex>
                        <Divider mt={'4'} mb={'6'} orientation='horizontal' h={'2px'} borderColor={'rgba(142, 155, 174, 1)'} />
                        <Text fontSize={'sm'} >{`WARNING! If you click on "Transferred, next" without making the payment (you need to transfer the money with the payment account, not on Binance). Your account will potentially be suspended. The platform reserve the rights to claim any damage caused.`}</Text>
                        <Flex justifyContent={'space-between'} w='full' pt={'12'}>
                            <MainAppButton isLoading={false} color={'textLightColor'} backgroundColor={'deselectedButtonColor'} onClick={() => { onClose() }}>
                                Cancel
                            </MainAppButton>
                            <Box w={'12'}></Box>
                            <MainAppButton isLoading={isLoading} onClick={() => { notifyMerchantFunction() }} backgroundColor={'primaryColor.900'} >
                                Confirm
                            </MainAppButton>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

// export const RenderBankName = ({ bankId }: any) => {
//     const [getSingleBank] = useLazyGetBankByIdQuery()
//     const [bankName, setBankName] = React.useState('')
//     React.useEffect(() => {
//         const getBank = async () => {
//             const bank = await getSingleBank(bankId).unwrap()
//             setBankName(bank?.data?.name)
//         }

//         getBank()


//     }, [bankId, getSingleBank])
//     return <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{bankName} <CopyToClipboard text={bankName}
//         onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
// }
// export const RenderAccountName = ({ bankId }: any) => {
//     const [getSingleBank] = useLazyGetBankByIdQuery()
//     const [accountName, setAccountName] = React.useState('')
//     React.useEffect(() => {
//         const getBank = async () => {
//             const bank = await getSingleBank(bankId).unwrap()
//             setAccountName(bank?.data?.accountName)
//         }

//         getBank()

//     }, [bankId, getSingleBank])
//     return <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{accountName} <CopyToClipboard text={accountName}
//         onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
// }
// export const RenderAccountNumber = ({ bankId }: any) => {
//     const [getSingleBank] = useLazyGetBankByIdQuery()
//     const [accountNumber, setAccountNumber] = React.useState('')
//     React.useEffect(() => {
//         const getBank = async () => {
//             const bank = await getSingleBank(bankId).unwrap()
//             setAccountNumber(bank?.data?.accountNumber)
//         }

//         getBank()

//     }, [bankId, getSingleBank])
//     return <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{accountNumber} <CopyToClipboard text={accountNumber}
//         onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
// }

export default ConfirmSuccessfulPaymentModal