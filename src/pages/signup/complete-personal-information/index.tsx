import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Flex } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import AuthLayout from '../../../layouts/auth/AuthLayout'
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/reduxHooks'
import { AuthState } from '../../../interfaces/auth/AuthState'
import { createAccount, sendOtp } from '../../../redux/auth/authSlice'

const PersonalInformationPage2 = () => {
    const router = useRouter();
    const query = router.query;
    let savedEmail = typeof window != 'undefined' && localStorage.getItem('email')
    let savedPassword = typeof window != 'undefined' && localStorage.getItem('password')
    let savedFirstName = typeof window != 'undefined' && localStorage.getItem('firstname')
    let savedLastName = typeof window != 'undefined' && localStorage.getItem('lastname')

    const dispatch = useAppDispatch();
    const { isLoading, token, user, } = useAppSelector((state) => state.auth)

    const validateUserName = (value: string,) => {
        let error
        if (!value) {
            error = 'Username is Required'
        }
        return error
    }
    return (
        <AuthLayout>
            <VStack bg='appWhiteColor' px='8' align='start' p='20'>
                <Text fontSize='2xl' as='b'>Personal Information</Text>
                <Flex alignItems='center' justifyContent='space-between' width='full' >
                    <Text fontSize='md' fontWeight='medium' mt='4' mr='2'>{savedFirstName + ' ' + savedLastName}</Text>
                    <Link href='/auth/PersonalInformationPage1'>
                        <Text fontSize='md' fontWeight='medium' color='primaryColor.900' mt='4'>Change legal name</Text>
                    </Link>

                </Flex >
                <Formik
                    initialValues={{ username: '', }}

                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            await dispatch(createAccount({ email: savedEmail, password: savedPassword, firstName: savedFirstName, lastName: savedLastName, device: 'web', agreedToTerms: true, username: values.username })).unwrap()
                            // await dispatch(sendOtp()).unwrap()
                            localStorage.removeItem('firstname')
                            localStorage.removeItem('lastname')
                            localStorage.removeItem('password')
                            // router.push('/verify-email')
                            router.replace('/verify-email')

                        } catch (error) {
                            console.log(error)
                        }

                    }}
                    validateOnChange
                    validateOnBlur
                    validateOnMount
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form>
                            <VStack w='xs' align='start'>
                                <Field name='username' validate={validateUserName}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.username && form.touched.username} py='4'>
                                            <FormLabel>Username</FormLabel>
                                            <Input {...field} />
                                            <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} >
                                    Next
                                </MainAppButton>


                            </VStack>
                        </Form>


                    )}

                </Formik>
            </VStack>
        </AuthLayout>
    )
}

export default PersonalInformationPage2