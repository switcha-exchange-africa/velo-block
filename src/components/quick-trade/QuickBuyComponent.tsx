import { Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Field, Form, Formik } from 'Formik';
import CustomSelectWithIcon from '../select/CustomSelectWithIcon';
import MainAppButton from '../buttons/MainAppButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

const coinOptions = [{ value: 'BTC', label: 'BTC', imageUrl: '/assets/svgs/BTC.svg', }, { value: 'ETH', label: 'ETH', imageUrl: '/assets/svgs/ETH.svg', }]
const currencyOptions = [{ value: 'NGN', label: 'NGN', imageUrl: '/assets/svgs/NGN.svg', },]
const QuickBuyComponent = () => {
    const router = useRouter()
    const [creditCoin, setCreditCoin] = useState(`${coinOptions[0].value}`)
    const [debitCoin, setDebitCoin] = useState(`${currencyOptions[0].value}`)
    return (
        <Flex flexDirection={'column'} p={'4'}>
            <Formik
                initialValues={{ email: '', password: '' }}

                onSubmit={async (values, { setSubmitting }) => {
                    router.push('/quick-trade/confirm-purchase')
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
                        <VStack w='xs' align='start'>
                            <Field name='email' >
                                {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email} pt='4'>
                                        <FormLabel fontSize={'xs'} color={'textLightColor'}>I want to pay</FormLabel>
                                        <InputGroup>
                                            <Input autoComplete='off' variant={'outline'} {...field} />
                                            <InputRightElement width={'28'} zIndex={'docked'}>
                                                <CustomSelectWithIcon items={currencyOptions} onChange={(selectedValue) => setDebitCoin(selectedValue)} value={debitCoin} />
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name='password' >
                                {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password} py='4'>
                                        <FormLabel fontSize={'xs'} color={'textLightColor'}>I will receive</FormLabel>
                                        <InputGroup>
                                            <Input disabled autoComplete='off' variant={'outline'} {...field} />
                                            <InputRightElement width={'28'} >
                                                <CustomSelectWithIcon items={coinOptions} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>Rate per dollar N550</Text>

                            <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} backgroundColor={'secondaryColor.900'} >
                                Buy with 0 fee
                            </MainAppButton>





                        </VStack>
                    </Form>


                )}

            </Formik>
        </Flex>
    )
}

export default QuickBuyComponent