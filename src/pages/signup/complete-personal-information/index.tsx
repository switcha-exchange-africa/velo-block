import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from "next/router"
import MainAppButton from '../../../components/buttons/MainAppButton'
import endpoints from '../../../constants/endpoints'
import appAlert from '../../../helpers/appAlert'
import { useAppDispatch } from '../../../helpers/hooks/reduxHooks'
import AuthLayout from '../../../layouts/auth/AuthLayout'
import { setCredentials } from '../../../redux/features/auth/authSlice'
import { useCreateAccountMutation } from '../../../redux/services/auth.service'

const PersonalInformationPage2 = () => {
    const router = useRouter();
    // const query = router.query;
    let savedEmail = typeof window != 'undefined' && localStorage.getItem('email')
    let savedPassword = typeof window != 'undefined' && localStorage.getItem('password')
    let savedFirstName = typeof window != 'undefined' && localStorage.getItem('firstname')
    let savedLastName = typeof window != 'undefined' && localStorage.getItem('lastname')

    const dispatch = useAppDispatch();
    // const { isLoading, token, user, } = useAppSelector((state) => state.auth)
    const [createAccount] = useCreateAccountMutation()

    const validateUserName = (value: string,) => {
        let error
        if (!value) {
            error = 'Username is Required'
        }
        return error
    }
    return (
        <AuthLayout>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b' w='full' textAlign={{ md: 'left', base: 'center' }}>Personal Information</Text>
                <Flex alignItems='center' justifyContent='space-between' width='full' >
                    <Text fontSize='md' fontWeight='medium' mt='4' mr='2'>{savedFirstName + ' ' + savedLastName}</Text>
                    <Link href='/auth/personal-information'>
                        <Text cursor={'pointer'} fontSize='md' fontWeight='medium' color='primaryColor.900' mt='4'>Change legal name</Text>
                    </Link>

                </Flex >
                <Formik
                    initialValues={{ username: '', }}

                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            console.log("base url", endpoints.BASE_URL)
                            setSubmitting(true)
                            const response: any = await createAccount({ email: savedEmail, password: savedPassword, firstName: savedFirstName, lastName: savedLastName, device: 'web', agreedToTerms: true, username: values.username })
                            // alert(JSON.stringify(response))
                            if (response?.data?.status == 201 || response?.data?.status == 200) {
                                setSubmitting(false)
                                appAlert.success('Sign Up Successful')
                                dispatch(setCredentials({ user: response?.date?.data, token: response?.data?.token }))
                                router.replace('/verify-email')
                            } else {
                                setSubmitting(false)
                                // alert(JSON.stringify(response?.error?.data?.message))
                                appAlert.error(`${response?.error?.data?.message}`)
                            }
                            // alert(JSON.stringify(response))
                            // await dispatch(createAccount({ email: savedEmail, password: savedPassword, firstName: savedFirstName, lastName: savedLastName, device: 'web', agreedToTerms: true, username: values.username })).unwrap()
                            // await dispatch(sendOtp()).unwrap()
                            // localStorage.removeItem('firstname')
                            // localStorage.removeItem('lastname')
                            // localStorage.removeItem('password')
                            // router.push('/verify-email')
                        } catch (error) {
                            setSubmitting(false)
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
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form>
                            <VStack w={{ lg: 'xs', md: 'sm', base: 'xs' }} align='start'>
                                <Field name='username' validate={validateUserName} >
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