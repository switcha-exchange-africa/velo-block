import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Box } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import MainAppButton from '../../components/buttons/MainAppButton'
import authValidators from '../../helpers/validators/authValidators'
import AuthLayout from '../../layouts/auth/AuthLayout'

const ForgotPassword = () => {
    const router = useRouter()
    return (
        <AuthLayout title='Forgot Password'>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b'>Forgot Password</Text>
                <Text fontSize='xs' pt={'4'}>Enter your registerd email to recovery password</Text>
                <Formik
                    initialValues={{ email: '', }}

                    onSubmit={async () => {
                        router.push('/forgot-password/verification-code')
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
                                <Field name='email' validate={authValidators.validateEmail}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email} pt='4'>
                                            <FormLabel>Email</FormLabel>
                                            <Input {...field} />
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Box pt={'8'}></Box>

                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit}>
                                    Verify
                                </MainAppButton>

                                <Text cursor={'pointer'} onClick={() => { router.push('/sign-in') }} fontSize='md' fontWeight='medium' color='primaryColor.900' pt='4'>{' Login'}</Text>

                            </VStack>
                        </Form>
                    )}

                </Formik>
            </VStack>
        </AuthLayout>
    )
}

export default ForgotPassword