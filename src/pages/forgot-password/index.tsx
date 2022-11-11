import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Box } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import MainAppButton from '../../components/buttons/MainAppButton'
import appAlert from '../../helpers/appAlert'
import { useAppDispatch } from '../../helpers/hooks/reduxHooks'
import authValidators from '../../helpers/validators/authValidators'
import AuthLayout from '../../layouts/auth/AuthLayout'
import { setForgotPasswordCredentials } from '../../redux/features/auth/authSlice'
import { useForgotPasswordMutation } from '../../redux/services/auth.service'

const ForgotPassword = () => {
    const router = useRouter()
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation()
    const dispatch = useAppDispatch()
    return (
        <AuthLayout title='Forgot Password'>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px={{ lg: '12', md: '4', base: '0' }} align='start' py='20'>
                <Text fontSize='2xl' as='b'>Forgot Password</Text>
                <Text fontSize='xs' pt={'4'}>Enter your registerd email to recovery password</Text>
                <Formik
                    initialValues={{ email: '', }}

                    onSubmit={async (values, { }) => {

                        try {

                            const response: any = await forgotPassword({ email: values.email })
                            // alert(JSON.stringify(response))
                            if (response?.data?.status == 201 || response?.data?.status == 200 || response?.data?.status == 202) {

                                dispatch(setForgotPasswordCredentials({ email: values.email, fptoken: response?.data?.data }))
                                // alert(JSON.stringify(response?.data?.data))
                                appAlert.success(`${response?.data?.message}`)

                                router.push('/forgot-password/verification-code')
                            }
                            else {

                                appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                            }
                        } catch (error) {

                            console.log(error)
                        }

                    }}
                    validateOnChange
                    validateOnBlur
                    validateOnMount
                >
                    {({
                        // handleChange,
                        // handleBlur,
                        handleSubmit,
                        // isSubmitting,
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

                                <MainAppButton isLoading={isLoading} onClick={handleSubmit}>
                                    Verify
                                </MainAppButton>

                                <Text cursor={'pointer'} onClick={() => { router.push('/signin') }} fontSize='md' fontWeight='medium' color='primaryColor.900' pt='4'>{' Login'}</Text>

                            </VStack>
                        </Form>
                    )}

                </Formik>
            </VStack>
        </AuthLayout>
    )
}

export default ForgotPassword