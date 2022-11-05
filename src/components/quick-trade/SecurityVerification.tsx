import { Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import appAlert from '../../helpers/appAlert'
import { useConfirmP2pOrderWithCodeMutation, useLazyGetOrderDetailQuery } from '../../redux/services/p2p.service'
import MainAppButton from '../buttons/MainAppButton'

const SecurityVerification = ({ isOpen, onClose, size = { md: 'md', base: 'sm' }, id, onReleaseClose }: any) => {
    const router = useRouter()
    const { orderId } = router.query
    const [confirmP2pOrderWithCode, { isLoading }] = useConfirmP2pOrderWithCodeMutation()
    const [getOrderDetail] = useLazyGetOrderDetailQuery()
    return (
        <Modal size={size} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay
                bg="blackAlpha.600"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader textAlign={"center"}>
                    <Heading size="md">Security Verification</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={{ md: '4', base: '2' }}>
                    <Flex flexDirection={'column'}>

                        <Text fontSize={'sm'} color={'#64748B'}>To secure our account. please complete the following verification</Text>

                        <Formik
                            initialValues={{ code: '' }}

                            onSubmit={async (values, { }) => {
                                try {
                                    // onOpen()

                                    const response: any = await confirmP2pOrderWithCode({ orderId: id, code: values.code })
                                    if (response?.data?.status == 200 || response?.data?.status == 201 || response?.data?.status == 202) {
                                        getOrderDetail(orderId)
                                        onClose()
                                        onReleaseClose()

                                        // dispatch(setIsModalOpen({ isOpen: true }))
                                    } else if (response?.data?.status == 401) {

                                        appAlert.error(`${response?.error?.data?.message}`)
                                        // alert(JSON.stringify(res))
                                        router.replace('/signin')
                                    } else {

                                        appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                                    }


                                } catch (error) {

                                }
                            }}
                            validateOnChange
                            validateOnBlur
                            validateOnMount
                        >
                            {({
                                // handleChange,
                                // handleBlur,
                                // setFieldValue,
                                handleSubmit,
                                // isSubmitting,
                                // // values
                                // /* and other goodies */
                            }) => (
                                <Form>
                                    <VStack w={'full'} align='start'>
                                        <Field name='code' >
                                            {({ field, form }: any) => (
                                                <FormControl isInvalid={form.errors.code && form.touched.code} pt='4'>
                                                    <FormLabel fontSize={'sm'} color={'textLightColor'}>Phone Number Verification code</FormLabel>
                                                    <InputGroup size={'lg'}>
                                                        <Input autoComplete='off' variant={'outline'} {...field} />
                                                        <InputRightElement width='48'  >

                                                            <Text fontSize={'sm'} >Verification Code sent</Text>
                                                        </InputRightElement>
                                                    </InputGroup>
                                                    <FormLabel pt={'1'} fontSize={'xs'} color={'textLightColor'}>Enter the 6-digit code code sent to 090......3763</FormLabel>
                                                    <FormErrorMessage>{form.errors.code}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>


                                        <Text fontSize={'sm'} pt={'8'} pb={'4'} color={'primaryColor.900'}>Security verification unavailable?</Text>



                                        <MainAppButton onClick={handleSubmit} isLoading={isLoading} backgroundColor={'primaryColor.900'} >
                                            Submit
                                        </MainAppButton>



                                    </VStack>
                                </Form>


                            )}

                        </Formik>





                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SecurityVerification