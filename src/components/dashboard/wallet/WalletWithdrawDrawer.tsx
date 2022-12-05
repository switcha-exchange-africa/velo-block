import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormControl, FormErrorMessage, FormLabel, Img, Input, InputGroup, InputRightElement, Select, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import remoteImages from '../../../constants/remoteImages';
import { useAppSelector } from '../../../helpers/hooks/reduxHooks';
import MainAppButton from '../../buttons/MainAppButton';

const WalletWithdrawDrawer = (props: any) => {
    const [isNextClicked, setIsNextClicked] = useState(false)
    const { walletBalance } = useAppSelector((state) => state.accountSettings)
    
    const renderBalance:any = (coinName: any) => {
        const obj:any = walletBalance?.find((coin:any) => coin?.coin === coinName)
        return obj?.balance?.toLocaleString() || 0
    }

    console.log("wallet balance ", walletBalance)
    

    console.log("result is ", props?.coin, props?.label)

    return (
        <>
            <Drawer
                isOpen={props.isOpen && props.iswithdrawalOpen}
                placement="right"
                onClose={() => { props.onClose; props.setIsWithdrawalDrawerOpen(false); setIsNextClicked(false) }}
                finalFocusRef={props.btnRef}
                size={"sm"}
            >
                <DrawerOverlay bg="transparent"
                    backdropFilter="blur(3px) " />
                <DrawerContent p={'4'}>
                    <DrawerCloseButton /><br/>
                    <DrawerHeader mt='4'>
                        <Text>Withdraw {props.label}</Text>
                    </DrawerHeader>

                    <DrawerBody mt={'-4'}>
                        <Text fontSize={"sm"}>
                            Paste address or scan QR code to withdraw bitcoin {props.label}
                        </Text>

                        {!isNextClicked ? <Flex justifyContent={'space-evenly'} alignItems={'center'} pt={'12'}>
                            <Flex flexDirection={'column'} alignItems={'center'}>
                                <Flex alignItems={'end'}>
                                    <Text fontWeight={'bold'} py={'2'} color={'rgba(100, 116, 139, 1)'} fontSize={'5xl'}>0</Text>
                                    <Text fontWeight={'semibold'} pl={'2'}>{props.coin=== "USDT_TRON" ? "USDT-TRON" : props.coin}</Text>
                                </Flex>
                                <Text fontWeight={'semibold'} pt={'4'}>$0</Text>
                                <Text fontWeight={'semibold'} color={'primaryColor.900'} pt={'2'}>Send All ({renderBalance(props.coin)} - {props.coin==="USDT_TRON" ? "USDT-TRON" : props.coin})</Text>
                            </Flex>
                            <Flex>
                                <ArrowDownIcon w={6} h={6} />
                                <ArrowUpIcon w={6} h={6} />
                            </Flex>
                        </Flex> :
                            <Flex flexDirection={'column'} alignItems={'center'}>
                                <Flex alignItems={'end'} justifyContent={'center'} pt={{ md: '24', base: '16' }}>
                                    <Text fontWeight={'bold'} py={'2'} color={'rgba(100, 116, 139, 1)'} fontSize={'5xl'}>0.000086</Text>
                                    <Text fontWeight={'semibold'} pl={'2'}>{props.coin}</Text>
                                </Flex>
                                <Text fontWeight={'semibold'} fontSize={'sm'} py={'2'}>will be sent to</Text>
                            </Flex>
                        }


                        {/* <Flex justifyContent={'center'} my={'16'}>
                            <QRCode value="hey" />
                        </Flex> */}
                        <Formik
                            initialValues={{ address: '', }}
                            onSubmit={async (values, { setSubmitting }) => {
                                console.log(values)
                                console.log(setSubmitting)

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
                                // values,
                                setFieldValue
                                /* and other goodies */
                            }) => (
                                <Form>
                                    <VStack w={{ base: 'xs', md: 'sm' }} align='start' my={!isNextClicked ? { md: '16', base: '8' } : {}}>
                                        {!isNextClicked && <Field name='debitCoinValue' >
                                            {({ field, form }: any) => (
                                                <FormControl isInvalid={form.errors.address && form.touched.address} >
                                                    <FormLabel fontSize={'xs'} color={'textLightColor'}>To</FormLabel>

                                                    <InputGroup>
                                                        <Input autoComplete='off' variant={'outline'} {...field} onChange={(e) => { setFieldValue('address', e.target.value); setFieldValue('creditCoinValue', e.target.value) }} />
                                                        <InputRightElement width={'16'} zIndex={'docked'}>
                                                            <Img src={remoteImages.barcodeSVG} alt='' boxSize={'4'} />

                                                        </InputRightElement>
                                                    </InputGroup>

                                                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>}

                                        {isNextClicked && <Text fontWeight="600">{props.address}</Text>}

                                        {props.coin === "USDT" && (
                                            <Box marginBottom={"10px"} w={'full'} mt={'4'}>
                                                <FormLabel fontSize={'sm'} htmlFor="owner">Network</FormLabel>
                                                <Select id="owner" defaultValue="segun" placeholder="Please choose network first">
                                                    <option value="BSC">BNB Smart Chain (BEP20)</option>
                                                    <option value="ERC20">Ethereum (ERC20)</option>
                                                </Select>
                                            </Box>
                                        )}

                                        <Box h={'8'}></Box>

                                        {!isNextClicked ? <MainAppButton isLoading={isSubmitting} onClick={() => { setIsNextClicked(true) }} >
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