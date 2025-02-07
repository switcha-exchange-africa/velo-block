import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Flex, InputGroup, InputRightElement, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AuthLayout from '../../layouts/auth/AuthLayout'
import { Formik, Field, Form } from 'formik';
import MainAppButton from '../../components/buttons/MainAppButton';
import Link from 'next/link';
import authValidators from '../../helpers/validators/authValidators';
import { useRouter } from "next/router";
import { useAppDispatch } from '../../helpers/hooks/reduxHooks';
import { setEmailAndPassword } from '../../redux/features/auth/authSlice';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignUpPage = () => {
    const router = useRouter();
    const [passwordChecks, setPasswordChecks] = useState<string[]>([])
    const [passwordChecksPassed, setPasswordChecksPassed] = useState<string[]>([])
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)


    let savedEmail = typeof window != 'undefined' && localStorage.getItem('email')
    let savedPassword = typeof window != 'undefined' && localStorage.getItem('password')
    useEffect(() => {
        console.log('passwordChecks', passwordChecks)
    }, [passwordChecks, passwordChecksPassed])

    const dispatch = useAppDispatch();
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
        setPasswordChecks(passwordChecks)

        return error
    }
    return (
        <AuthLayout title='Sign Up'>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b'>Create your account</Text>
                <Formik
                    initialValues={{ email: `${savedEmail ?? ''}`, password: `${savedPassword ?? ''}` }}

                    onSubmit={(values, _) => {
                        // localStorage.setItem('email', values.email)
                        // localStorage.setItem('password', values.password)
                        dispatch(setEmailAndPassword({ email: values.email, password: values.password }))
                        router.push('/signup/personal-information')
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

                                            {form.errors.password || passwordChecks && <Text fontWeight='light' mt='2' mb={passwordChecks.length >= 0 || passwordChecksPassed.length >= 0 ? '8' : '1'}>{form.errors.password}</Text>}

                                            {passwordChecksPassed && passwordChecksPassed.map((p: any,) => {
                                                return (<Text key={p} fontSize='sm' color='secondaryColor.900' >{'✓ ' + p}</Text>)
                                            })}
                                            {form.errors.password && passwordChecks.map((p: any,) => {
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
                                    <Flex cursor={'pointer'} alignItems='center' >
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