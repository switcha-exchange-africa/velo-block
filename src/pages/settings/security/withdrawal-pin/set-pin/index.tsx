import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show,
  HStack,
  VStack,
  FormControl,
  FormErrorMessage,
  Text,
  PinInputField,
  PinInput
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { useRouter } from 'next/router'
import { useState } from "react"
import MainAppButton from "../../../../../components/buttons/MainAppButton"
import DashboardLayout from "../../../../../layouts/dashboard/DashboardLayout"

const VerificationCode = () => {
    const Router = useRouter()
    const [pin, setPin] = useState("")


    const validatePin = (value: string,) => {
        let error
        setPin(value)

        // console.log("this is the values ", value )
        if (!value) {
            error = 'Pin is Required'
        } else if (value.length < 6) {
            error = 'Complete pin to proceed'
        } else if (value === "123456" || value === "654321") {
            error = "Password cannot be 123456 or 654321"
        }
        return error
    }

    const validateConfirmPin = (value: string) => {
        let error

        if (!value) {
            error = 'Pin is Required'
        } else if (value.length < 6) {
            error = 'Complete pin to proceed'
        } else if (value === "123456" || value === "654321") {
            error = "Password cannot be 123456 or 654321"
        } else if (value !== pin) {
            error = "Pin do not match"
        }
        return error
    }

    return (
        <DashboardLayout title="Verify password">
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "10%", base: '0' }} >
                <Show above='760px'>
                    <Button
                        onClick={() => Router.back()}
                        leftIcon={<ArrowBackIcon />}
                        colorScheme="transparent"
                        variant="solid"
                        pl={0}
                        py={"3rem"}
                        color={'black'}
                        ml={'1rem'}
                    >
                        Back
                    </Button>
                    
                    <HStack width={{ lg: "70%", base: '100%' }}  alignItems={"center"} justifyContent={"space-between"} py={'2rem'} gap={"1rem"}>
                        <Heading size="md"  ml={'1rem'}>Withdrawal Pin</Heading>
                        <Box  p={"11px 22px"} color="white" bg="#FB5E04" border={"0.88px solid #FB5e04"} cursor={"pointer"} borderRadius={"5px"} onClick={() => Router.push('/settings/security/withdrawal-pin/set-pin')}>
                            Disable
                        </Box>
                    </HStack>
                </Show>

                <Show below='768px'>
                    <Flex justifyContent={'start'} bg={'white'}>
                        <Button
                            onClick={() => Router.back()}
                            leftIcon={<ArrowBackIcon />}
                            colorScheme="transparent"
                            variant="solid"
                            pl={0}
                            py={"2rem"}
                            color={'black'}
                            ml={'2'}
                        >
                            Back
                        <Heading size="md"
                            ml={'1rem'}>Withdrawal Pin</Heading>
                        </Button>
                    </Flex>

                     <Flex justifyContent="flex-end">
                        <Box  p={"11px 22px"} mt="20px" color="white" bg="#FB5E04" border={"0.88px solid #FB5e04"} cursor={"pointer"} borderRadius={"5px"} onClick={() => Router.push('/settings/security/withdrawal-pin/set-pin')}>
                            Disable
                        </Box>
                     </Flex>
                </Show>


                {/* this is where the form starts from */}
                <Box  mb="24px" pt={{ md: '0', base: '12' }} >
                    <Box 
                        background={'#FFFFFF'}
                        width={{ lg: "70%", base: '100%' }}
                        justifyContent={"space-between"}
                        p={{ lg: "20px", sm:"20px", base: '20px' }}
                    >
                        <Text fontSize="14px" color="rgba(0, 0, 0, 0.75)">Set the withdrawal Pin that will be used to validate your withdrawals</Text>

                        
                        <Formik
                        initialValues={{ pin: "", confirmPin: "" }}

                        onSubmit={async (values, { setSubmitting }) => {

                            const data = {
                                pin: values.pin,
                                confirmPin: values.confirmPin
                            }
                            console.log(data)
                            try {
                                // setSubmitting(true)
                                // const response: any = await verifyOtp(values.pin)
                                // if (response?.data?.status == 201 || response?.data?.status == 200) {
                                //     setSubmitting(false)
                                //     appAlert.success('Verification Successful')
                                //     dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                //     dispatch(clearFromLocalStorage())
                                //     dispatch(setEmailVerified({ emailVerified: response?.data?.data?.emailVerified }))
                                //     router.replace('/dashboard')
                                // Router.push('/settings/security/withdrawal-pin/set-pin/success')
                                // } else {
                                //     setSubmitting(false)
                                //     appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                                // }
                            } catch (error) {
                                // setSubmitting(false)
                                // console.log(error)
                            }
                            // try {
                            //     await dispatch(verifyOtp(values.pin)).unwrap()
                            //     localStorage.removeItem('lastname')
                            //     localStorage.removeItem('email')
                            //     // router.push('/dashboard')
                            //     router.replace('/signin')

                            // } catch (error) {
                            //     console.log(error)
                            // }
                            // router.replace('/signin')

                        }}
                        validateOnChange
                        validateOnBlur
                        validateOnMount
                    >
                        {({
                            // submitForm,
                            handleSubmit,
                            isSubmitting,
                            setFieldValue
                        }) => (
                            <Form>
                                <VStack w={{ lg: 'xs', md: 'sm', base: 'xs' }} align='left' >
                                    
                                    <Text mt="20px">Set Pin</Text>
                                    <Field name='pin' validate={validatePin}>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.pin && form.touched.pin} pb="24px" >
                                                <HStack justify='space-evenly'  >
                                                
                                                <PinInput {...field}       
                                                    mask={false}
                                                    onChange={(e) => {
                                                        setFieldValue('pin', e)
                                                    }}
                                                    placeholder='' type='number' otp
                                                >
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                    </PinInput>
                                                </HStack>

                                                <FormErrorMessage>{form.errors.pin}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                        
                                    <Text >Confirm Pin</Text>
                                    <Field name='confirmPin' validate={validateConfirmPin}>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.confirmPin && form.touched.confirmPin} pb="24px" >
                                                <HStack justify='space-evenly'  >
                                                
                                                <PinInput {...field}
                                                    mask={false}
                                                    onChange={(e) => {
                                                        setFieldValue('confirmPin', e)
                                                    }}
                                                    placeholder='' type='number' otp
                                                >
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                    </PinInput>
                                                </HStack>

                                                <FormErrorMessage>{form.errors.confirmPin}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>




                                    <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} width="150px" >
                                        Set Pin
                                    </MainAppButton>






                                </VStack>
                            </Form>


                        )}

                    </Formik>
                    </Box>

                </Box>


            </Box>
        </DashboardLayout>

    )
}

export default VerificationCode
