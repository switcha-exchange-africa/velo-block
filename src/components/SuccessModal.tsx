import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, Img, Flex, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import remoteImages from '../constants/remoteImages'
import MainAppButton from './buttons/MainAppButton'

const SuccessModal = ({ isOpen, onClose, size = { md: 'xl', base: 'sm' }, bodyText }: any) => {
    const router = useRouter()
    return (
        <Modal size={size} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered >
            <ModalOverlay
                bg="blackAlpha.800"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent background="white" color="black" p={{ base: '2', }}>

                <ModalCloseButton size={'16'} p={'4'} />
                <ModalBody py={12} textAlign={{ md: 'left', base: 'center' }}>
                    <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Img src={remoteImages.successImageSvg} alt="" />
                        <Text textAlign={'center'} py={'8'} fontWeight={'bold'} fontSize={'xl'} >
                            Success!
                        </Text>
                        <Text textAlign={'center'} color={'#8E9BAE'}>
                            {bodyText}
                        </Text>

                        <Flex justifyContent={'space-between'} w={{ base: 'full', md: '80%' }} pt={'12'}>
                            <MainAppButton isLoading={false} color={'textLightColor'} onClick={() => { router.replace('/wallet') }} backgroundColor={'deselectedButtonColor'} >
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

export default SuccessModal