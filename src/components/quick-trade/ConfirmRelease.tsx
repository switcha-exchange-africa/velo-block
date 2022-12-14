import { Box, Checkbox, Divider, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppDispatch } from '../../helpers/hooks/reduxHooks'
import { resetQuickTradePayload } from '../../redux/features/quick-trade/quickTradeSlice'
import { useConfirmP2pOrderWithoutCodeMutation } from '../../redux/services/p2p.service'
import MainAppButton from '../buttons/MainAppButton'
import SecurityVerification from './SecurityVerification'

const ConfirmRelease = ({ isOpen, onClose, size = { md: 'md', base: 'sm' }, id, status }: any) => {
    const [onConfirm, setOnConfirm] = useState(false)
    const dispatch = useAppDispatch()
    const { isOpen: isVerifyOpen, onOpen: onVerifyOpen, onClose: onVerifyClose } = useDisclosure();

    const confirmP2pOrderWithoutCodeFunction =  () => {
        onVerifyOpen()
        dispatch(resetQuickTradePayload())
    }
    
    return (
        <Modal size={size} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay
                bg="blackAlpha.600"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    <Heading size="md">Confirm Release</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={{ md: '4', base: '2' }}>
                    <Flex flexDirection={'column'}>
                        <Divider mt={'2'} mb={'4'} orientation='horizontal' h={'2px'} borderColor={'rgba(142, 155, 174, 1)'} />
                        <Text fontSize={'sm'} color={'#64748B'}>Attention. Please LOG IN THE RECEVING (e.g. Banks/ ewallet) ACCOUNT to confirm that the money has arrived in the "Available Balance"</Text>
                        <Divider mt={'4'} mb={'4'} orientation='horizontal' h={'2px'} borderColor={'rgba(142, 155, 174, 1)'} />
                        <Checkbox alignItems={'start'} isChecked={onConfirm} onChange={(e) => setOnConfirm(e.target.checked)} colorScheme={'yellow'} mt={'6'}>I confirm that the payment is successiull received with correct amount and sender information</Checkbox>
                        <Flex justifyContent={'space-between'} w='full' pt={'6'}>
                            <MainAppButton isLoading={false} color={'textLightColor'} backgroundColor={'deselectedButtonColor'} onClick={() => { onClose() }}>
                                Cancel
                            </MainAppButton>
                            <Box w={'12'}></Box>
                            <MainAppButton disabled={onConfirm == true ? false : true}  backgroundColor={'primaryColor.900'} onClick={() => confirmP2pOrderWithoutCodeFunction()}>
                                Submit
                            </MainAppButton>
                            <SecurityVerification isOpen={isVerifyOpen} onClose={onVerifyClose} id={id} onReleaseClose={onClose} status={ status} />
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ConfirmRelease