import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Box } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import AuthLayout from '../../../layouts/auth/AuthLayout'

const VerificationCode = () => {
    const router = useRouter()
    const validatePin = (value: string,) => {
        let error
        if (!value) {
            error = 'Code is Required'
        } else if (value.length < 6) {
            error = 'Complete pin to proceed'
        }
        return error
    }
    return (
        <AuthLayout title='Forgot Password'>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px={{ lg: '12', md: '4', base: '0' }} align='start' py='20'>
                <Text fontSize='2xl' as='b'>Forgot Password</Text>
                <Text fontSize='lg' pt={'3'} fontWeight={'medium'}>Verification Code</Text>
                <Text w={'xs'} fontSize='xs' pt={'4'}>A verification code has been sent to your email input the code to proceed</Text>
                <Formik
                    initialValues={{ code: '', }}

                    onSubmit={async (values, { }) => {
                        router.push('/forgot-password/change-password')
                        // try {
                        //     setSubmitting(true)
                        //     const response: any = await login({ email: values.email, password: values.password })
                        //     // alert(JSON.stringify(response))
                        //     if (response?.data?.status == 201 || response?.data?.status == 200) {
                        //         setSubmitting(false)
                        //         dispatch(setEmailVerified({ emailVerified: response?.data?.data?.emailVerified }))
                        //         // alert(JSON.stringify(response?.data?.data))
                        //         appAlert.success('Login Successful')
                        //         dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                        //         dispatch(clearFromLocalStorage())
                        //         router.replace('/dashboard')


                        //     } else if (response?.data?.status == 202) {
                        //         dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                        //         setShouldSendOtp(true)
                        //         sendOtp.refetch()
                        //         // alert(JSON.stringify(res))
                        //         router.replace('/verify-email')
                        //     } else {
                        //         setSubmitting(false)
                        //         appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                        //     }
                        // } catch (error) {
                        //     setSubmitting(false)
                        //     console.log(error)
                        // }

                    }}
                    validateOnChange
                    validateOnBlur
                    validateOnMount
                >
                    {({
                        // handleChange,
                        // handleBlur,
                        handleSubmit,
                        isSubmitting,
                        // values
                        /* and other goodies */
                    }) => (
                        <Form>
                            <VStack w={{ lg: 'xs', md: 'sm', base: 'xs' }} align='start'>
                                <Field name='code' validate={validatePin}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.code && form.touched.code} pt='4'>
                                            <FormLabel>Verification Code</FormLabel>
                                            <Input {...field} />
                                            <FormErrorMessage>{form.errors.code}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Box pt={'6'}></Box>

                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit}>
                                    Verify
                                </MainAppButton>

                                <Box pb={'6'}></Box>

                            </VStack>
                        </Form>
                    )}

                </Formik>
            </VStack>
        </AuthLayout>)
}

export default VerificationCode