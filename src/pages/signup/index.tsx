import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Box, HStack, Flex, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AuthLayout from '../../layouts/auth/AuthLayout'
import { Formik, Field, Form } from 'Formik';
import MainAppButton from '../../components/buttons/MainAppButton';
import Link from 'next/link';
import authValidators from '../../helpers/validators/authValidators';
import { useRouter } from "next/router";

const SignUpPage = () => {
    const router = useRouter();
    const [passwordCheckss, setPasswordChecks] = useState<string[]>([])
    const [passwordChecksPassed, setPasswordChecksPassed] = useState<string[]>([])


    let savedEmail = typeof window != 'undefined' && localStorage.getItem('email')
    let savedPassword = typeof window != 'undefined' && localStorage.getItem('password')
    useEffect(() => {
        console.log('passwordCheckssss', passwordCheckss)
    }, [passwordCheckss, passwordChecksPassed])


    const validatePassword = (value: string,) => {
        let error
        let passwordChecks: string[] = []
        if (!value) {
            error = 'Password must Contain '
        } if (value.length < 8) {
            var index = passwordChecksPassed.indexOf('At least 8 characters');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least 8 characters');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least 8 characters')) {
                passwordChecksPassed.push('At least 8 characters')
                setPasswordChecksPassed(passwordChecksPassed)
            }
        }
        if (!/[A-Z]+/g.test(value)) {
            var index = passwordChecksPassed.indexOf('At least one upper case character');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least one upper case character');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least one upper case character')) {
                passwordChecksPassed.push('At least one upper case character')
                setPasswordChecksPassed(passwordChecksPassed)
            }
        } if (!/[0-9]+/i.test(value)) {
            var index = passwordChecksPassed.indexOf('At least one number');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least one number');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least one number')) {
                passwordChecksPassed.push('At least one number')
                setPasswordChecksPassed(passwordChecksPassed)
            }
        } if (!/\W|_/i.test(value)) {
            var index = passwordChecksPassed.indexOf('At least one special character (!@#&$)');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least one special character (!@#&$)');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least one special character (!@#&$)')) {
                passwordChecksPassed.push('At least one special character (!@#&$)')
                setPasswordChecksPassed(passwordChecksPassed)
            }

        }
        console.log(passwordChecks)
        setPasswordChecks(passwordChecks)

        return error
    }
    return (
        <AuthLayout>
            <VStack bg='appWhiteColor' px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b'>Create your account</Text>
                <Formik
                    initialValues={{ email: `${savedEmail ?? ''}`, password: `${savedPassword ?? ''}` }}

                    onSubmit={(values, { setSubmitting }) => {
                        localStorage.setItem('email', values.email)
                        localStorage.setItem('password', values.password)
                        router.push('/signup/personal-information')
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
                        values
                        /* and other goodies */
                    }) => (
                        <Form>
                            <VStack w={{ lg: 'xs', md: 'sm', base: '2xs' }} align='start'>
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
                                            {form.errors.password || passwordCheckss && <Text fontWeight='light' mt='2' mb={passwordCheckss.length >= 0 || passwordChecksPassed.length >= 0 ? '8' : '1'}>{form.errors.password}</Text>}

                                            {passwordChecksPassed && passwordChecksPassed.map((p: any, i: number) => {
                                                return (<Text key={p} fontSize='sm' color='secondaryColor.900' >{'✓ ' + p}</Text>)
                                            })}
                                            {form.errors.password && passwordCheckss.map((p: any, i: number) => {
                                                if (passwordChecksPassed.includes(p)) {
                                                    return (<Text key={p} fontSize='sm' color='secondaryColor.900'>{'✓ ' + p}</Text>)
                                                } else {
                                                    return (<FormErrorMessage key={p} >{'✕ ' + p}</FormErrorMessage>)
                                                }

                                            })}

                                        </FormControl>
                                    )}
                                </Field>

                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit}>
                                    Create Account
                                </MainAppButton>

                                <Link href='/signin'>
                                    <Flex alignItems='center' >
                                        <Text fontSize='sm' fontWeight='medium' mt='4' mr='2'>{'Already registered? '}</Text>
                                        <Text fontSize='sm' fontWeight='medium' color='primaryColor.900' mt='4'>{' Login'}</Text>
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

export default SignUpPage