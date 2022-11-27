import { Box, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Img, Input, InputGroup, InputRightElement, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { Field, Form, Formik } from 'formik';
import MainAppButton from '../../components/buttons/MainAppButton';
import { useGetCoinsByTypeQuery, } from '../../redux/services/buy-sell.service';
import RenderCoinsDropdown from '../../components/select/RenderCoinsDropdown';
import { useSwapMutation } from '../../redux/services/swap.service';
import appAlert from '../../helpers/appAlert';
import { useRouter } from 'next/router';
import SuccessModal from '../../components/SuccessModal';
import LoginPage from '../signin';
import { GetServerSideProps } from 'next';
import { checkValidToken } from '../../helpers/functions/checkValidToken';
import { useLazyGetWalletsQuery } from '../../redux/services/wallet.service';
import { useCalculateTradeFeesQuery } from '../../redux/services/fees.service';
import remoteImages from '../../constants/remoteImages';
import { useSwapConvertQuery, useSwapConvertToGetEstimatedRateQuery } from '../../redux/services/new-conversion.service';
import { useAppSelector } from '../../helpers/hooks/reduxHooks';


const Swap = () => {
    const router = useRouter();
    const { walletBalance } = useAppSelector((state) => state.accountSettings)
    const [creditCoin, setCreditCoin] = useState(`BTC`)
    const [debitCoin, setDebitCoin] = useState(`ETH`)
    const [amount, setAmount] = useState('0')
    const [debitCoinConverted, setDebitCoinConverted] = useState()
    const [isPreviewConversionClicked, setIsPreviewConversionClicked] = useState(false)
    const coinsByType: any = useGetCoinsByTypeQuery('crypto')
    // const inversePriceRate: any = useConvertToGetEstimatedRateQuery({ amount: amount, source: creditCoin, destination: debitCoin }, { refetchOnMountOrArgChange: true })

    const inversePriceRate: any = useSwapConvertQuery({ amount: amount, source: creditCoin, destination: debitCoin }, { refetchOnMountOrArgChange: true })

    // const convertFromDebitCoin: any = useConvertQuery({ amount: amount, source: debitCoin, destination: creditCoin }, { skip: amount == '0', refetchOnMountOrArgChange: true })

    const convertFromDebitCoin: any = useSwapConvertToGetEstimatedRateQuery({ amount: amount, source: debitCoin, destination: creditCoin }, { skip: amount == '0', refetchOnMountOrArgChange: true })

    const calculateSwapFees: any = useCalculateTradeFeesQuery({ amount: amount, operation: 'swap' }, { skip: amount == '0', refetchOnMountOrArgChange: true })
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [swap] = useSwapMutation()
    const [getAllWallets] = useLazyGetWalletsQuery()
    

    const renderBalance:any = (coinName: any) => {
        const obj:any = walletBalance.find((coin:any) => coin?.coin === coinName)
        return obj?.balance?.toLocaleString()
    }

    


    const handleMax = async () => {
        try {
            const walletsResponse = await getAllWallets().unwrap()
            // alert(JSON.stringify(walletsResponse))
            for (let i = 0; i < walletsResponse?.data?.length; i++) {
                if (walletsResponse?.data[i].coin == debitCoin) {
                    setAmount(walletsResponse?.data[i].balance)
                    return walletsResponse?.data[i].balance
                    // try {
                    //     const singleWalletResponse = await getSingleWallet(walletsResponse?.data[i]._id).unwrap()
                    //     setAmount(singleWalletResponse?.data?.balance)
                    //     return singleWalletResponse?.data?.balance
                    // } catch (error) {
                    //     console.log(error)
                    // }
                }
            }
        } catch (error) {
            console.log(error)
        }


    }


    React.useEffect(() => {

        // allCoins?.data?.data && setCreditCoin(allCoins?.data?.data[1]?.coin)
        // allCoins?.data?.data && setDebitCoin(allCoins?.data?.data[1]?.coin)

        // onOpen()
    }, [coinsByType])

    React.useEffect(() => {

        // convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount && alert(debitCoinConverted)
    }, [debitCoinConverted, creditCoin, debitCoin, amount])

    if (coinsByType?.error && coinsByType?.error?.data?.status == 401) {

        // appAlert.warning('Session Expired, please sign in again')
        return <LoginPage />


    }
    return (
        <DashboardLayout title='Swap'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box >
                    <Flex flexDirection={'column'}>
                        <Text fontSize='5xl' as='b' w={'full'} fontWeight={'extrabold'} align={'center'} >Convert</Text>
                        <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} pb={'4'}>Convert your crypto within seconds</Text>
                        <Flex flexDirection={'column'} bg={'appWhiteColor'} p={'4'} mt={'8'}>
                            <Formik
                                initialValues={{ debitCoinValue: '', creditCoinValue: '' }}

                                onSubmit={async (_, { setSubmitting }) => {
                                    try {
                                        setSubmitting(true)
                                        const response: any = await swap({ amount: parseFloat(amount), sourceCoin: debitCoin, destinationCoin: creditCoin })
                                        if (response?.data?.status == 200) {
                                            setSubmitting(false)
                                            onOpen()
                                        } else if (response?.data?.status == 401) {

                                            appAlert.error(`${response?.error?.data?.message}`)
                                            // alert(JSON.stringify(res))
                                            router.replace('/signin')
                                        } else {
                                            setSubmitting(false)
                                            appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                                        }
                                    } catch (error) {
                                        setSubmitting(false)
                                        console.log(error)
                                    }
                                }}
                                validateOnChange
                                validateOnBlur
                                validateOnMount
                                enableReinitialize
                            >
                                {({
                                    // handleChange,
                                    // handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    values,
                                    setFieldValue
                                    /* and other goodies */
                                }) => (
                                    <Form>
                                        <VStack w={{ base: 'xs', md: 'lg' }} align='start'>
                                            <Field name='debitCoinValue' >
                                                {({ field, form }: any) => (
                                                    <FormControl isInvalid={form.errors.debitCoinValue && form.touched.debitCoinValue} >
                                                        <Flex justifyContent={'space-between'}>
                                                            <FormLabel fontSize={'xs'} color={'textLightColor'}>From</FormLabel>
                                                            <FormLabel fontSize={'xs'} color={'textLightColor'}>Available: {renderBalance(debitCoin)} - {debitCoin==="USDT_TRON" ? "USDT-TRON" : debitCoin}</FormLabel>
                                                        </Flex>

                                                        <InputGroup>
                                                            <Input autoComplete='off' variant={'outline'} type="number" placeholder={'Enter an amount'} {...field} onChange={(e) => {
                                                                setFieldValue('debitCoinValue', e.target.value);
                                                                setAmount(e.target.value)
                                                                // alert(amount)
                                                                // setFieldValue('creditCoinValue', e.target.value) 
                                                                !(convertFromDebitCoin.isFetching) && convertFromDebitCoin?.data?.data?.destinationAmount && setDebitCoinConverted(convertFromDebitCoin?.data?.data?.destinationAmount)
                                                                !(convertFromDebitCoin.isFetching) && convertFromDebitCoin?.data?.data?.destinationAmount && setFieldValue('creditCoinValue', convertFromDebitCoin?.data?.data?.destinationAmount)

                                                            }} onKeyDown={(e) => { ['-', '+'].includes(e.key) && e.preventDefault(); }} />
                                                            <InputRightElement width={{ md: '52', base: '36' }}  >
                                                                <Flex alignItems={'center'} justifyContent={'space-between'} w='full'>
                                                                    <Text cursor={'pointer'} onClick={async () => { const max = await handleMax(); setFieldValue('debitCoinValue', max) }} fontSize={'sm'} color={'red.400'} >MAX</Text>
                                                                    <Divider orientation='vertical' h='20px' />
                                                                    {/* <CustomSelectWithIcon items={coinOptions} onChange={(selectedValue) => setDebitCoin(selectedValue)} value={debitCoin} /> */}
                                                                    {coinsByType?.data?.data && <RenderCoinsDropdown items={coinsByType?.data?.data} onChange={(selectedValue) => setDebitCoin(selectedValue)} value={debitCoin} />}
                                                                </Flex>

                                                            </InputRightElement>
                                                        </InputGroup>
                                                        <FormErrorMessage>{form.errors.debitCoinValue}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Flex justifyContent={'center'} w={'full'} pt={'4'} pb={'2'}><Img cursor={'pointer'} src={remoteImages.swapiconsvg} alt='swap icon' onClick={() => { const tempCreditCoin = creditCoin; const tempDebitCoin = debitCoin; setDebitCoin(tempCreditCoin); setCreditCoin(tempDebitCoin) }} /></Flex>





                                            <Field name='creditCoinValue' >
                                                {({ form }: any) => (
                                                    <FormControl isInvalid={form.errors.creditCoinValue && form.touched.creditCoinValue} py='4'>
                                                        <FormLabel fontSize={'xs'} color={'textLightColor'}>To</FormLabel>
                                                        <Flex pl={'4'} w='full' border={'1px'} zIndex={'base'} borderColor={'gray.200'} borderRadius={'8'} justifyContent={'space-between'} alignItems={'center'} ><Text w='full'>{convertFromDebitCoin?.data?.data?.destinationAmount?.toLocaleString() ?? '0'}</Text> {coinsByType?.data?.data && <RenderCoinsDropdown items={coinsByType?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}</Flex>
                                                        {/* <InputGroup>
                                                            <Input disabled autoComplete='off' variant={'outline'} {...field} />
                                                            <InputRightElement width={'40'} >
                                                                {allCoins?.data?.data && <RenderCoinsDropdown items={allCoins?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}
                                                            </InputRightElement>
                                                        </InputGroup> */}
                                                        <FormErrorMessage>{form.errors.creditCoinValue}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>


                                            {isPreviewConversionClicked ? <Flex w={'full'} flexDirection={'column'}>
                                                <Flex w={'full'} justifyContent={'space-between'}> <Text fontSize={'xs'} pb={'2'}>Price</Text>
                                                    <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>1 {debitCoin} = {convertFromDebitCoin?.data?.data?.rate} {creditCoin}</Text>
                                                </Flex>
                                                <Flex w={'full'} justifyContent={'space-between'}> <Text fontSize={'xs'} pb={'2'}>Inverse Price</Text>
                                                    <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>1 {creditCoin} = {inversePriceRate?.data?.data?.rate} {debitCoin}</Text>
                                                </Flex>

                                                <Flex w={'full'} justifyContent={'space-between'}> <Text fontSize={'xs'} pb={'2'}>You will receive</Text>
                                                    <Text fontSize={'lg'} color={'primaryColor.900'} pb={'2'}>{convertFromDebitCoin?.data?.data?.destinationAmount.toLocaleString()} {creditCoin}</Text>
                                                </Flex>
                                                <Flex w={'full'} justifyContent={'space-between'}> <Text fontSize={'xs'} pb={'2'}>Fee</Text>
                                                    <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>{calculateSwapFees?.data?.data?.fee} {debitCoin}</Text>
                                                </Flex>                                                                                     
                                            </Flex> : <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>Estimated 1 {debitCoin==="USDT_TRON" ? "USDT-TRON" : debitCoin} = {parseFloat((convertFromDebitCoin?.data?.data?.rate ? convertFromDebitCoin?.data?.data?.rate : 0 )).toFixed(8)} {creditCoin}</Text>}


                                            {!isPreviewConversionClicked ? <MainAppButton isLoading={isSubmitting} color={values.debitCoinValue && values.creditCoinValue ? 'appWhiteColor' : 'textLightColor'} onClick={() => { setIsPreviewConversionClicked(true) }} backgroundColor={values.debitCoinValue && values.creditCoinValue ? 'primaryColor.900' : 'deselectedButtonColor'} >
                                                Preview Conversion
                                            </MainAppButton> : <Flex justifyContent={'space-between'} w='full'>
                                                <MainAppButton isLoading={false} color={'textLightColor'} onClick={() => { setIsPreviewConversionClicked(false) }} backgroundColor={'deselectedButtonColor'} >
                                                    Back
                                                </MainAppButton>
                                                <Box w={'4'}></Box>
                                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} backgroundColor={'primaryColor.900'} >
                                                    Swap
                                                </MainAppButton>
                                            </Flex>}

                                            <SuccessModal isOpen={isOpen} onClose={onClose} bodyText={`You have successfully Swapped ${amount}\n${debitCoin} to ${convertFromDebitCoin?.data?.data?.destinationAmount?.toLocaleString()} ${creditCoin}`} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}

export default Swap