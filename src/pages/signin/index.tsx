import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Flex, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import MainAppButton from '../../components/buttons/MainAppButton';
import appAlert from '../../helpers/appAlert';
import { useAppDispatch, } from '../../helpers/hooks/reduxHooks';
import authValidators from '../../helpers/validators/authValidators';
import AuthLayout from '../../layouts/auth/AuthLayout';
import { clearFromLocalStorage, setCredentials, setEmailVerified } from '../../redux/features/auth/authSlice';
import { useLoginMutation, useSendOtpQuery, } from '../../redux/services/auth.service';

const LoginPage = () => {
    const router = useRouter();
    const validatePassword = (value: string,) => {
        let error
        // let passwordChecks: string[] = []
        if (!value) {
            error = 'Password should not be empty '
        }

        return error
    }
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const dispatch = useAppDispatch();
    const [login] = useLoginMutation()
    const [shouldSendOtp, setShouldSendOtp] = useState(false)
    // const { isEmailVerified } = useAppSelector((state) => state.auth)

    const sendOtp = useSendOtpQuery(undefined, { skip: shouldSendOtp == false, refetchOnMountOrArgChange: true, })

    return (
        <AuthLayout title='Sign In'>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b'>Login to your account</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}

                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            setSubmitting(true)
                            const response: any = await login({ email: values.email, password: values.password })
                            // alert(JSON.stringify(response))
                            if (response?.data?.status == 201 || response?.data?.status == 200) {
                                setSubmitting(false)
                                dispatch(setEmailVerified({ emailVerified: response?.data?.data?.emailVerified }))
                                // alert(JSON.stringify(response?.data?.data))
                                appAlert.success('Login Successful')
                                dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                dispatch(clearFromLocalStorage())
                                router.replace('/dashboard')
                                // if (isEmailVerified == true) {
                                //     appAlert.success('Login Successful')
                                //     dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                //     dispatch(clearFromLocalStorage())
                                //     router.replace('/dashboard')
                                // } else {
                                //     router.replace('/verify-email')
                                // }

                            } else if (response?.data?.status == 202) {
                                dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                setShouldSendOtp(true)
                                sendOtp.refetch()
                                // alert(JSON.stringify(res))
                                router.replace('/verify-email')
                            } else {
                                setSubmitting(false)
                                appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                            }
                        } catch (error) {
                            setSubmitting(false)
                            console.log(error)
                        }
                        // try {
                        //     await dispatch(login({ email: values.email, password: values.password })).unwrap()
                        //     localStorage.removeItem('lastname')
                        //     localStorage.removeItem('password')

                        //     if (isEmailVerified == true) {
                        //         console.log('check verified', isEmailVerified)
                        //         router.push('/dashboard')
                        //     } else {
                        //         console.log('check verified', isEmailVerified)
                        //         dispatch(sendOtp()).unwrap()
                        //         router.push('/verify-email')

                        //     }

                        // } catch (error) {
                        //     console.log(error)
                        // }
                        // router.push('/dashboard')
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

                                <Field name='password' validate={validatePassword}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password} py='4'>
                                            <FormLabel>Password</FormLabel>
                                            <InputGroup>
                                                <Input {...field} type={isPasswordVisible ? 'text' : 'password'} />
                                                <InputRightElement width='16'  >
                                                    {isPasswordVisible ? <ViewOffIcon cursor={'pointer'} onClick={() => setIsPasswordVisible(false)} /> : <ViewIcon cursor={'pointer'} onClick={() => setIsPasswordVisible(true)} />}
                                                </InputRightElement>
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>

                                        </FormControl>
                                    )}
                                </Field>

                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit}>
                                    Login
                                </MainAppButton>

                                <Link href='/forgot-password'>
                                    <Text cursor={'pointer'} fontSize='sm' fontWeight='medium' mt='16' mr='1'>{'Forgot your password? '}</Text>
                                </Link>
                                <Link href='/signup'>
                                    <Flex cursor={'pointer'} alignItems='center' >
                                        <Text fontSize='sm' fontWeight='medium' mt='2' mr='1'>{'New to Switcha? '}</Text>
                                        <Text fontSize='sm' fontWeight='medium' color='primaryColor.900' mt='2'>{' Create an account'}</Text>
                                    </Flex >
                                </Link>

                            </VStack>
                        </Form>
                    )}

                </Formik>
            </VStack>
        </AuthLayout>
    )
}

export default LoginPage