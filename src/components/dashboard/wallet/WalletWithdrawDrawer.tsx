import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormControl, FormErrorMessage, FormLabel, Img, Input, InputGroup, InputRightElement,  Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import remoteImages from '../../../constants/remoteImages';
import appAlert from '../../../helpers/appAlert';
import { useAppSelector } from '../../../helpers/hooks/reduxHooks';
// import { setOrderPayload } from '../../../redux/features/quick-trade/quickTradeSlice';
import { useWithdrawCryptoMutation } from '../../../redux/services/wallet.service';
import MainAppButton from '../../buttons/MainAppButton';
import RenderBalanceToUsd from '../../wallet/RenderBalanceToUsd';

const WalletWithdrawDrawer = (props: any) => {
    const [isNextClicked, setIsNextClicked] = useState(false)
    const { walletBalance } = useAppSelector((state) => state.accountSettings)
    const [amountState, setAmountState] = useState("")
    const [addressState, setAddressState] = useState("")
    
    const renderBalance: any = (coinName: any) => {
        const obj:any = walletBalance?.find((coin:any) => coin?.coin === coinName)
        return obj?.balance?.toLocaleString() || 0
    }

    const [withdrawCrypto]:any = useWithdrawCryptoMutation()

    const handleClose = () => {
        props?.onClose;
        props?.setIsWithdrawalDrawerOpen(false);
        setIsNextClicked(false)
    }

    const validateAddress = (value: string, ) => {
        setAddressState(value)
        let error
        if (!value) {
            error = 'Destination should not be empty '
        }

        return error
    }

    // const handleIncrease = () => {
    //     setAmountState(amountState + 1)
    // }

    // const handleDecrease = () => {
    //     setAmountState(amountState - 1)
    // }

    // const handleSendAll = (value: any) => {
    //     // const renderBalance = renderBalance(value)
    //     console.log("this is the value ", renderBalance)

    // }

    return (
        <>
            <Drawer
                isOpen={props?.isOpen && props?.iswithdrawalOpen}
                placement="right"
                onClose={handleClose}
                initialFocusRef={props?.btnRef}
                size={"sm"}
            >
                <DrawerOverlay bg="transparent"
                    backdropFilter="blur(3px) " />
                <DrawerContent p={'4'}>
                    <DrawerCloseButton /><br/>
                    <DrawerHeader mt='4'>
                        <Text>Withdraw {props?.label=== "USDT_TRON" ? "USDT-TRON" : props?.label}</Text>
                    </DrawerHeader>

                    <DrawerBody mt={'-4'}>
                        {!isNextClicked ? (
                            <Text fontSize={"sm"}>
                                Paste address or scan QR code to withdraw {props?.label=== "USDT_TRON" ? "USDT-TRON" : props?.label}
                            </Text>
                        ): (
                            <Text fontSize={"sm"}>
                                Confirm your address and amount of  {props?.label=== "USDT_TRON" ? "USDT-TRON" : props?.label} to withdraw
                            </Text>
                        )}
                
                        
                        {/* <Flex justifyContent={'center'} my={'16'}>
                            <QRCode value="hey" />
                        </Flex> */}
                        <Formik
                            initialValues={{ address: '', amount: '' }}
                            onSubmit={async (values) => {
                                const data = {
                                    destination: values?.address,
                                    coin: props?.coin,
                                    amount: parseFloat(amountState)
                                }

                                
                                const response = await withdrawCrypto(data) 
                                // console.log(response)
                                if (response?.data?.status == 200 || response?.data?.status == 201 ) {
                                    handleClose()
                                    appAlert.success(response?.data?.message)
                                } else {
                                    handleClose()
                                    // console.log("this is the response ", response)
                                    appAlert.error(response?.error?.data?.message)
                                }
                            }}
                            validateOnChange
                            validateOnBlur
                            validateOnMount
                        >
                            {({
                                // handleChange,
                                // handleBlur,
                                setFieldValue,
                                handleSubmit,
                                isSubmitting,
                                // values,
                                // setFieldValue
                                /* and other goodies */
                            }) => (
                                <Form>
                                    {!isNextClicked  ? <Flex justifyContent={'space-evenly'} alignItems={'center'} pt={'12'}>
                                        <Flex flexDirection={'column'} alignItems={'center'} justifyContent="center"  >
                                            <Flex  justifyContent="center" w="75%" >
                                                <Field name='amount' >
                                                    {({ field, form }: any) => (
                                                        <FormControl isInvalid={form.errors.amount && form.touched.amount} >                                                            
                                                            <InputGroup py="5px">
                                                                <Input width="100%" height="100%" ref={props?.btnRef} isRequired type="text" border="none" textAlign="center" placeholder="0" fontWeight={'bold'} py={'15px'} color={'rgba(100, 116, 139, 1)'} fontSize={'4xl'} autoComplete='off' variant={'outline'} {...field}
                                                                    onChange={(e) => {
                                                                        setFieldValue('amount', e.target.value);
                                                                        setAmountState(e.target.value)
                                                                    }}
                                                                />
                                                            </InputGroup>

                                                            <FormErrorMessage textAlign={"center"}>{form.errors.amount}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>
                                                
                                                <Text fontWeight={'semibold'} mt="30px"  ml="10px">{props?.coin=== "USDT_TRON" ? "USDT-TRON" : props?.coin}</Text>
                                            </Flex>
                                            <Text fontWeight={'semibold'} pt={'4'}>
                                                <RenderBalanceToUsd coin={props?.coin} balance={amountState} />
                                            </Text>
                                            
                            
                                            <Text fontWeight={'semibold'} color={'primaryColor.900'} pt={'2'}
                                                onClick={() => {
                                                    setFieldValue('amount', renderBalance(props?.coin));
                                                    setAmountState(renderBalance(props?.coin))
                                                }}
                                                cursor="pointer"
                                            >
                                                Send All ({renderBalance(props?.coin)} )
                                            </Text>
                                        </Flex>
                                        {/* <Flex>
                                            <ArrowDownIcon  w={6} h={6} />
                                            <ArrowUpIcon w={6} h={6} />
                                        </Flex> */}
                                    </Flex> :
                                        <Flex flexDirection={'column'} alignItems={'center'}>
                                            <Flex alignItems={'end'} justifyContent={'center'} pt={{ md: '24', base: '16' }}>
                                                <Text fontWeight={'bold'} py={'2'} color={'rgba(100, 116, 139, 1)'} fontSize={'5xl'}>{amountState?.toLocaleString()}</Text>
                                                <Text fontWeight={'semibold'} pl={'2'}>{props?.coin==="USDT_TRON" ? "USDT-TRON" : props?.coin}</Text>
                                            </Flex>
                                            <Text fontWeight={'semibold'} fontSize={'sm'} py={'2'}>will be sent to</Text>
                                        </Flex>
                                    }


                                    <VStack w={{ base: 'xs', md: 'sm' }} align='start' my={!isNextClicked ? { md: '16', base: '8' } : {}}>
                                        {!isNextClicked  && <Field name='address' validate={validateAddress} >
                                            {({ field, form }: any) => (
                                                <FormControl isInvalid={form.errors.address && form.touched.address} >
                                                    <FormLabel fontSize={'xs'} color={'textLightColor'}>To</FormLabel>
                                                    <InputGroup>
                                                        <Input autoComplete='off' variant={'outline'} {...field}
                                                            />
                                                        <InputRightElement width={'16'} zIndex={'docked'}>
                                                            <Img src={remoteImages.barcodeSVG} alt='' boxSize={'4'} />

                                                        </InputRightElement>
                                                    </InputGroup>

                                                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>}

                                        {isNextClicked && <Text fontWeight="600"  w="100%" textAlign="center">{addressState}</Text>}

                                        {/* I shall be back for you blood */}
                                        {/* {props?.coin === "USDT" && (
                                            <Box marginBottom={"10px"} w={'full'} mt={'4'}>
                                                <FormLabel fontSize={'sm'} htmlFor="owner">Network</FormLabel>
                                                <Select id="owner" defaultValue="segun" placeholder="Please choose network first">
                                                    <option value="BSC">BNB Smart Chain (BEP20)</option>
                                                    <option value="ERC20">Ethereum (ERC20)</option>
                                                </Select>
                                            </Box>
                                        )} */}

                                        <Box h={'8'}></Box>

                                        {!isNextClicked ? <MainAppButton isLoading={isSubmitting} onClick={() => {
                                            if (!amountState && !addressState) {
                                                appAlert.error("Please enter amount and destination")
                                            } else if (!addressState) {
                                                appAlert.error("Please enter destination")
                                            } else if (!addressState) {
                                                appAlert.error("Please enter Address")
                                            } else {
                                                setIsNextClicked(true)
                                            }
                                        }} >
                                            Next
                                        </MainAppButton> : <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} >
                                            Confirm
                                        </MainAppButton>}
                                    </VStack>
                                </Form>
                            )}
                        </Formik>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default WalletWithdrawDrawer