import { Box, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Field, Form, Formik } from 'formik';
import MainAppButton from '../../components/buttons/MainAppButton';
import CustomSelectWithIcon from '../../components/select/CustomSelectWithIcon';

const coinOptions = [{ value: 'BTC', label: 'BTC', imageUrl: '/assets/svgs/BTC.svg', }, { value: 'ETH', label: 'ETH', imageUrl: '/assets/svgs/ETH.svg', }]


const Swap = () => {
    const [creditCoin, setCreditCoin] = useState(`${coinOptions[0].value}`)
    const [debitCoin, setDebitCoin] = useState(`${coinOptions[1].value}`)
    const [isPreviewConversionClicked, setIsPreviewConversionClicked] = useState(false)
    return (
        <DashboardLayout>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box >
                    <Flex flexDirection={'column'}>
                        <Text fontSize='5xl' as='b' w={'full'} fontWeight={'extrabold'} align={'center'} >Convert</Text>
                        <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} >Convert your crypto within seconds</Text>
                        <Flex flexDirection={'column'} bg={'appWhiteColor'} p={'4'} mt={'8'}>
                            <Formik
                                initialValues={{ debitCoinValue: '', creditCoinValue: '' }}

                                onSubmit={async (values, { setSubmitting }) => {
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
                                    values,
                                    setFieldValue
                                    /* and other goodies */
                                }) => (
                                    <Form>
                                        <VStack w={{ base: 'xs', md: 'md' }} align='start'>
                                            <Field name='debitCoinValue' >
                                                {({ field, form }: any) => (
                                                    <FormControl isInvalid={form.errors.debitCoinValue && form.touched.debitCoinValue} >
                                                        <Flex justifyContent={'space-between'}>
                                                            <FormLabel fontSize={'xs'} color={'textLightColor'}>From</FormLabel>
                                                            <FormLabel fontSize={'xs'} color={'textLightColor'}>Available:-USDT</FormLabel>
                                                        </Flex>

                                                        <InputGroup>
                                                            <Input autoComplete='off' variant={'outline'} {...field} onChange={(e) => { setFieldValue('debitCoinValue', e.target.value); setFieldValue('creditCoinValue', e.target.value) }} />
                                                            <InputRightElement width={'40'} zIndex={'docked'}>
                                                                <Flex alignItems={'center'} justifyContent={'space-between'} w='full'>
                                                                    <Text fontSize={'sm'} color={'red.400'} >MAX</Text>
                                                                    <Divider orientation='vertical' h='20px' />
                                                                    <CustomSelectWithIcon items={coinOptions} onChange={(selectedValue) => setDebitCoin(selectedValue)} value={debitCoin} />
                                                                </Flex>

                                                            </InputRightElement>
                                                        </InputGroup>
                                                        <FormErrorMessage>{form.errors.debitCoinValue}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name='creditCoinValue' >
                                                {({ field, form }: any) => (
                                                    <FormControl isInvalid={form.errors.creditCoinValue && form.touched.creditCoinValue} py='4'>
                                                        <FormLabel fontSize={'xs'} color={'textLightColor'}>To</FormLabel>
                                                        <InputGroup>
                                                            <Input disabled autoComplete='off' variant={'outline'} {...field} />
                                                            <InputRightElement width={'28'} >
                                                                <CustomSelectWithIcon items={coinOptions} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />
                                                            </InputRightElement>
                                                        </InputGroup>
                                                        <FormErrorMessage>{form.errors.creditCoinValue}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            {isPreviewConversionClicked ? <Flex w={'full'} flexDirection={'column'}>
                                                <Flex w={'full'} justifyContent={'space-between'}> <Text fontSize={'xs'} pb={'2'}>Price</Text>
                                                    <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>1 USDT = 0.00002334 BTC</Text>
                                                </Flex>
                                                <Flex w={'full'} justifyContent={'space-between'}> <Text fontSize={'xs'} pb={'2'}>Inverse Price</Text>
                                                    <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>1 BTC = 42844.5 USDT</Text>
                                                </Flex>
                                                <Flex w={'full'} justifyContent={'space-between'}> <Text fontSize={'xs'} pb={'2'}>You will receive</Text>
                                                    <Text fontSize={'lg'} color={'primaryColor.900'} pb={'2'}>0.23340219 BTC</Text>
                                                </Flex>
                                            </Flex> : <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>Estimated 1 USDT = 0.00002378 BTC</Text>}


                                            {!isPreviewConversionClicked ? <MainAppButton isLoading={isSubmitting} color={values.debitCoinValue && values.creditCoinValue ? 'appWhiteColor' : 'textLightColor'} onClick={() => { setIsPreviewConversionClicked(true) }} backgroundColor={values.debitCoinValue && values.creditCoinValue ? 'primaryColor.900' : 'deselectedButtonColor'} >
                                                Preview Conversion
                                            </MainAppButton> : <Flex justifyContent={'space-between'} w='full'>
                                                <MainAppButton isLoading={isSubmitting} color={'textLightColor'} onClick={() => { setIsPreviewConversionClicked(false) }} backgroundColor={'deselectedButtonColor'} >
                                                    Back
                                                </MainAppButton>
                                                <Box w={'4'}></Box>
                                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} backgroundColor={'primaryColor.900'} >
                                                    Swap
                                                </MainAppButton>
                                            </Flex>}






                                        </VStack>
                                    </Form>


                                )}

                            </Formik>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </DashboardLayout>
    )
}

export default Swap