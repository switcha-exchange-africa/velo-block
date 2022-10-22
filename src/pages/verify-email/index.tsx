import { Flex, FormControl, FormErrorMessage, HStack, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import MainAppButton from '../../components/buttons/MainAppButton';
import appAlert from '../../helpers/appAlert';
import { useAppDispatch } from '../../helpers/hooks/reduxHooks';
import AuthLayout from '../../layouts/auth/AuthLayout';
import { clearFromLocalStorage, setCredentials, setEmailVerified } from '../../redux/features/auth/authSlice';
import { useVerifyOtpMutation } from '../../redux/services/auth.service';
// import { sendOtp, verifyOtp } from '../../redux/auth/authSlice';

const VerificationPage = () => {
    const router = useRouter();
    let savedEmail = typeof window != 'undefined' && localStorage.getItem('email')
    const validatePin = (value: string,) => {
        let error
        if (!value) {
            error = 'Pin is Required'
        } else if (value.length < 6) {
            error = 'Complete pin to proceed'
        }
        return error
    }

    const dispatch = useAppDispatch();
    const [verifyOtp] = useVerifyOtpMutation()
    // const { isLoading, token, user, } = useAppSelector((state) => state.auth)

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(false);

    useEffect(() => {

        let timerId: string | number | NodeJS.Timeout | undefined;

        if (runTimer) {
            setCountDown(60 * 10);
            timerId = setInterval(() => {
                setCountDown((countDown) => countDown - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [runTimer]);


    useEffect(() => {
        const resendOtpView = async () => {
            // await dispatch(sendOtp()).unwrap()
        }
        if (countDown < 0 && runTimer) {
            console.log("expired");
            // setRunTimer(false);
            // setCountDown(0);
            setCountDown(60 * 10);
            resendOtpView()
        }

    }, [countDown, dispatch, runTimer]);

    useEffect(() => {
        togglerTimer()
    }, []);


    const togglerTimer = () => setRunTimer((t) => !t);

    const seconds = String(countDown % 60).padStart(2, '0');
    const minutes = String(Math.floor(countDown / 60)).padStart(2, '0');

    return (
        <AuthLayout>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b' textAlign='left'>Enter Verification Code</Text>
                <Text fontSize='sm' fontWeight='medium' color='gray.400' mt='4' >Enter the 6 digit code we sent to your email address</Text>
                <Text fontSize='sm' fontWeight='medium' mt='1' >{savedEmail}</Text>
                <Flex w={'full'} justifyContent={'center'}>
                    <Formik
                        initialValues={{ pin: '', }}

                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true)
                                const response: any = await verifyOtp(values.pin)
                                if (response?.data?.status == 201 || response?.data?.status == 200) {
                                    setSubmitting(false)
                                    appAlert.success('Verification Successful')
                                    dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                    dispatch(clearFromLocalStorage())
                                    dispatch(setEmailVerified({ emailVerified: response?.data?.data?.emailVerified }))
                                    router.replace('/signin')
                                } else {
                                    setSubmitting(false)
                                    appAlert.error(`${response?.error?.data?.message}`)
                                }
                            } catch (error) {
                                setSubmitting(false)
                                console.log(error)
                            }
                            // try {
                            //     await dispatch(verifyOtp(values.pin)).unwrap()
                            //     localStorage.removeItem('lastname')
                            //     localStorage.removeItem('email')
                            //     // router.push('/dashboard')
                            //     router.replace('/signin')

                            // } catch (error) {
                            //     console.log(error)
                            // }
                            // router.replace('/signin')

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
                            setFieldValue
                            /* and other goodies */
                        }) => (
                            <Form>
                                <VStack w={{ lg: 'xs', md: 'sm', base: 'xs' }} align='center' >
                                    <Field name='pin' validate={validatePin}>
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.pin && form.touched.pin} py='8'>
                                                <HStack justify='space-evenly' >
                                                    <PinInput {...field} mask={false} onChange={(e) => { setFieldValue('pin', e) }} placeholder=''>
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                        <PinInputField />
                                                    </PinInput>
                                                </HStack>

                                                <FormErrorMessage>{form.errors.pin}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>


                                    <Flex alignItems='center' >
                                        <Text fontSize='sm' fontWeight='medium' mt='2' mb='8' mr='1'>{'Resend Code in '}</Text>
                                        <Text fontSize='sm' fontWeight='medium' color='primaryColor.900' mt='2' mb='8'>{minutes + ':' + seconds}</Text>
                                    </Flex >


                                    <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} >
                                        Verify
                                    </MainAppButton>






                                </VStack>
                            </Form>


                        )}

                    </Formik>
                </Flex>
            </VStack>
        </AuthLayout>
    )
}

export default VerificationPage