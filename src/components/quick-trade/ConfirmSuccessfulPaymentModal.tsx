import { Box, Divider, Flex, Heading, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'

import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import appAlert from '../../helpers/appAlert'
import { useLazyGetBankByIdQuery } from '../../redux/services/bank.service'
import MainAppButton from '../buttons/MainAppButton'

const ConfirmSuccessfulPaymentModal = ({ isOpen, onClose, size = { md: 'lg', base: 'sm' }, ad }: any) => {
    // React.useEffect(() => {
    //     alert(JSON.stringify(ad.banks))
    // }, [ad])
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
                        <Flex flexDirection={'column'} pt={'6'}>
                            <Text fontSize={'sm'} color={'#64748B'}>Recommended</Text>

                            {ad?.banks && ad?.banks.map((b: any) => {
                                return <div key={b}> <RenderAccountName bankId={b} /></div>
                            })}
                        </Flex>
                        <Flex flexDirection={'column'} pt={'6'}>
                            <Text fontSize={'sm'} color={'#64748B'}>Bank Account Number</Text>
                            {ad?.banks && ad?.banks.map((b: any) => {
                                return <div key={b}><RenderAccountNumber bankId={b} /></div>
                            })}
                        </Flex>
                        <Flex flexDirection={'column'} pt={'6'}>
                            <Text fontSize={'sm'} color={'#64748B'}>Bank Name</Text>
                            {ad?.banks && ad?.banks.map((b: any) => {
                                return <div key={b}><RenderBankName bankId={b} /></div>
                            })}
                        </Flex>
                        <Flex flexDirection={'column'} pt={'6'}>
                            <Text fontSize={'sm'} color={'#64748B'}>Account opening branch</Text>
                            <Text fontSize={'sm'} >No crypto related words on payment DESCRIPTION</Text>
                        </Flex>
                        <Divider mt={'4'} mb={'6'} orientation='horizontal' h={'2px'} borderColor={'rgba(142, 155, 174, 1)'} />
                        <Text fontSize={'sm'} >{`WARNING! If you click on "Transferred, next" without making the payment (you need to transfer the money with the payment account, not on Binance). Your account will potentially be suspended. The platform reserve the rights to claim any damage caused.`}</Text>
                        <Flex justifyContent={'space-between'} w='full' pt={'12'}>
                            <MainAppButton isLoading={false} color={'textLightColor'} backgroundColor={'deselectedButtonColor'} >
                                View Wallet
                            </MainAppButton>
                            <Box w={'12'}></Box>
                            <MainAppButton isLoading={false} backgroundColor={'primaryColor.900'} >
                                View History
                            </MainAppButton>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export const RenderBankName = ({ bankId }: any) => {
    const [getSingleBank] = useLazyGetBankByIdQuery()
    const [bankName, setBankName] = React.useState('')
    React.useEffect(() => {
        const getBank = async () => {
            const bank = await getSingleBank(bankId).unwrap()
            setBankName(bank?.data?.name)
        }

        getBank()


    }, [bankId, getSingleBank])
    return <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{bankName} <CopyToClipboard text={bankName}
        onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></CopyToClipboard> </Text>
}
export const RenderAccountName = ({ bankId }: any) => {
    const [getSingleBank] = useLazyGetBankByIdQuery()
    const [accountName, setAccountName] = React.useState('')
    React.useEffect(() => {
        const getBank = async () => {
            const bank = await getSingleBank(bankId).unwrap()
            setAccountName(bank?.data?.accountName)
        }

        getBank()

    }, [bankId, getSingleBank])
    return <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{accountName} <CopyToClipboard text={accountName}
        onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></CopyToClipboard> </Text>
}
export const RenderAccountNumber = ({ bankId }: any) => {
    const [getSingleBank] = useLazyGetBankByIdQuery()
    const [accountNumber, setAccountNumber] = React.useState('')
    React.useEffect(() => {
        const getBank = async () => {
            const bank = await getSingleBank(bankId).unwrap()
            setAccountNumber(bank?.data?.accountNumber)
        }

        getBank()

    }, [bankId, getSingleBank])
    return <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{accountNumber} <CopyToClipboard text={accountNumber}
        onCopy={() => appAlert.success('copied to clipboard')}><Img pl={'1'} src={'/assets/svgs/copyIcon.svg'} alt='' /></CopyToClipboard> </Text>
}

export default ConfirmSuccessfulPaymentModal