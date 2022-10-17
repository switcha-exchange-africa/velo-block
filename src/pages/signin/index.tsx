import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Flex } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import MainAppButton from '../../components/buttons/MainAppButton';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import authValidators from '../../helpers/validators/authValidators';
import AuthLayout from '../../layouts/auth/AuthLayout';
import { login, sendOtp } from '../../redux/auth/authSlice';

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

    const dispatch = useAppDispatch();
    const { isEmailVerified } = useAppSelector((state) => state.auth)
    return (
        <AuthLayout>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b'>Login to your account</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}

                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            await dispatch(login({ email: values.email, password: values.password })).unwrap()
                            localStorage.removeItem('lastname')
                            localStorage.removeItem('password')

                            if (isEmailVerified == true) {
                                console.log('check verified', isEmailVerified)
                                router.push('/dashboard')
                            } else {
                                console.log('check verified', isEmailVerified)
                                dispatch(sendOtp()).unwrap()
                                router.push('/verify-email')

                            }

                        } catch (error) {
                            console.log(error)
                        }
                        router.push('/dashboard')
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
                                            <Input {...field} type='password' />
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>

                                        </FormControl>
                                    )}
                                </Field>

                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit}>
                                    Login
                                </MainAppButton>

                                <Link href=''>
                                    <Text fontSize='sm' fontWeight='medium' mt='16' mr='1'>{'Forgot your password? '}</Text>
                                </Link>
                                <Link href='/signup'>
                                    <Flex alignItems='center' >
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