import { Box, Divider, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import MainAppButton from '../buttons/MainAppButton'

const ConfirmRelease = ({ isOpen, onClose, size = { md: 'lg', base: 'sm' }, }: any) => {
    // const router = useRouter()
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
                    <Heading size="md">Confirm Release</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={{ md: '4', base: '2' }}>
                    <Flex flexDirection={'column'}>
                        <Divider mt={'2'} mb={'4'} orientation='horizontal' h={'2px'} borderColor={'rgba(142, 155, 174, 1)'} />
                        <Text fontSize={'sm'} color={'#64748B'}>Attention. Please LOG IN THE RECEVING (e.g. Banks/ ewallet) ACCOUNI to connrm that the money has arrived in the "Available Balance"</Text>
                        <Divider mt={'2'} mb={'4'} orientation='horizontal' h={'2px'} borderColor={'rgba(142, 155, 174, 1)'} />

                        <Flex justifyContent={'space-between'} w='full' pt={'12'}>
                            <MainAppButton isLoading={false} color={'textLightColor'} backgroundColor={'deselectedButtonColor'} onClick={() => { onClose() }}>
                                Cancel
                            </MainAppButton>
                            <Box w={'12'}></Box>
                            <MainAppButton isLoading={false} backgroundColor={'primaryColor.900'} >
                                Comfirm Release
                            </MainAppButton>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ConfirmRelease