import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { VStack, Text, Flex, FormControl, FormLabel, InputGroup, Input, InputRightElement, FormErrorMessage } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import appAlert from '../../../helpers/appAlert'
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/reduxHooks'
import AuthLayout from '../../../layouts/auth/AuthLayout'
import { clearForgotPasswordCredentials } from '../../../redux/features/auth/authSlice'
import { useResetPasswordMutation } from '../../../redux/services/auth.service'

const ChangePassword = () => {
    const router = useRouter()
    const [passwordChecks, setPasswordChecks] = React.useState<string[]>([])
    const [passwordChecksPassed, setPasswordChecksPassed] = React.useState<string[]>([])
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

    const { fpemail, fptoken } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    const [resetPassword, { isLoading }] = useResetPasswordMutation()
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
        <AuthLayout title='Change Password'>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px={{ lg: '12', md: '4', base: '0' }} align='start' py='16'>
                <Text fontSize='2xl' as='b'>Forgot Password</Text>
                <Text fontSize='lg' pt={'3'} fontWeight={'medium'}>Change password</Text>
                <Text w={'xs'} fontSize='xs' pt={'4'}>Input a new password you want for you account</Text>
                <Formik
                    initialValues={{ password: '', confirmPassword: '' }}

                    onSubmit={async (values, { }) => {
                        router.push('/signin')
                        try {

                            const response: any = await resetPassword({ email: fpemail, password: values.password, token: fptoken })
                            // alert(JSON.stringify(response))
                            if (response?.data?.status == 201 || response?.data?.status == 200) {


                                // alert(JSON.stringify(response?.data?.data))
                                appAlert.success('Reset Password Successful, Login to continue')

                                dispatch(clearForgotPasswordCredentials())
                                router.replace('/dashboard')


                            } else {

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
                        values
                        /* and other goodies */
                    }) => (
                        <Form>
                            <VStack w={{ lg: 'xs', md: 'sm', base: 'xs' }} align='start'>
                                <Field name='password' validate={validatePassword}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password} py='4'>
                                            <FormLabel>New Password</FormLabel>
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

                                <Field name='confirmPassword' validate={(value: string) => {
                                    let error
                                    if (!value) {
                                        error = 'Please reconfirm password'
                                    } else if (value != values.password) {
                                        error = 'Passwords do not match'
                                    }
                                    return error
                                }}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword} py='4'>
                                            <FormLabel>Verify Password</FormLabel>
                                            <InputGroup>
                                                <Input {...field} type={isPasswordVisible ? 'text' : 'password'} />
                                                <InputRightElement width='16'  >
                                                    {isPasswordVisible ? <ViewOffIcon cursor={'pointer'} onClick={() => setIsPasswordVisible(false)} /> : <ViewIcon cursor={'pointer'} onClick={() => setIsPasswordVisible(true)} />}
                                                </InputRightElement>
                                            </InputGroup>

                                            <FormErrorMessage>{'x ' + form.errors.confirmPassword}</FormErrorMessage>

                                        </FormControl>
                                    )}
                                </Field>



                                <Flex>
                                    <Text fontWeight={'medium'} fontSize={'sm'} cursor={'pointer'} color={'white'} w={'fit-content'} mt={'2'} borderRadius={'md'} py={'2'} px={'4'} bg={'primaryColor.900'} onClick={() => { handleSubmit() }}>{isLoading ? 'Please wait...' : 'Change Password'}  </Text>



                                    <Text onClick={() => { router.push('/signin') }} fontWeight={'medium'} fontSize={'md'} cursor={'pointer'} color={'primaryColor.900'} w={'fit-content'} ml={'4'} mt={'2'} borderRadius={'md'} py={'2'} px={'4'} >Cancel</Text>
                                </Flex>



                            </VStack>
                        </Form>
                    )}

                </Formik>
            </VStack>
        </AuthLayout>
    )
}

export default ChangePassword