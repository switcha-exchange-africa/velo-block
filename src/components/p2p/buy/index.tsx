import React, { useState } from 'react'
import { CheckCircleIcon } from "@chakra-ui/icons"
import {
  Avatar, Box, Button, Flex, Input,
  InputGroup,
  InputRightAddon,  Modal, ModalBody, 
  ModalContent, Tab,
  TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure
} from "@chakra-ui/react"
import { useRouter } from 'next/router';
import P2pTopfilter from '../filter';
import TableComponent from '../../table/TableContainer';
import {  useGetBuyAdsQuery} from '../../../redux/services/p2p-ads.service';
import { P2pAdsComponentProps } from '../../../interfaces/p2p-ads/P2pAdsComponent';
import { Field, Form, Formik } from 'formik';
// import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/reduxHooks';
// import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service';
import { useQuickTradeConvertQuery } from '../../../redux/services/new-conversion.service';
import { useP2pBuyOrderMutation } from '../../../redux/services/p2p.service';
import appAlert from '../../../helpers/appAlert';

const BuyP2p = ({
    pageNumber,
    handlePreviousPage,
    handleNextPage,
    handlePageReset
}: P2pAdsComponentProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const { data:usdt } = useGetBuyAdsQuery({arg: "USDT", pageNumber: `${pageNumber}`})
    const { data:usdc } = useGetBuyAdsQuery({arg: "USDC", pageNumber: `${pageNumber}`})
    const { data:eth } = useGetBuyAdsQuery({arg: "ETH", pageNumber: `${pageNumber}`})
    const { data:btc } = useGetBuyAdsQuery({arg: "BTC", pageNumber: `${pageNumber}`})
    const { data:usdt_tron } = useGetBuyAdsQuery({arg: "USDT-TRON", pageNumber: `${pageNumber}`})
    const [p2pBuyOrder]:any = useP2pBuyOrderMutation()

    const [modalData, setModalData] = useState<any>()

    const percentageCompletion = (completedOrder: number, adsCreated: number) => {
        const percent = !adsCreated || !completedOrder ? 0 :((completedOrder / adsCreated) * 100).toFixed(2) 
        return percent
    }


    const handleOpen = (id: string, apiData: any) => {
        const item = apiData?.data.find((obj: any) => obj._id === id);
        setModalData(item)
        if (item) {
            console.log("this is the modal Data, trying again ", modalData)
            onOpen()
        
        }
    }



    // const dispatch = useAppDispatch()
    // const { amount, cash, coin, creditCoinAmount } = useAppSelector((state) => state.quickTrade)
    const amounts = 0
    const creditCoinAmounts = 0
    const [creditCoin] = useState(modalData?.cash ?? `NGN`)
    // const [debitCoin, setDebitCoin] = useState(modalData?.coin)
    const [amountt, setAmountt] = useState<any>(amounts ? `${amounts}` : '0')
    // const coinsByTypeCrypto: any = useGetCoinsByTypeQuery('crypto')
    // const coinsByTypeFiat: any = useGetCoinsByTypeQuery('fiat')

    // console.log("this is the credit coin ", creditCoin)
    // console.log("this is the debit coin ", debitCoin)
    // const convertFromDebitCoin: any = useConvertQuery({ amount: amountt, source: debitCoin, destination: creditCoin }, { skip: amountt == '0', refetchOnMountOrArgChange: true })

    const convertFromCreditCoin: any = useQuickTradeConvertQuery({ base: creditCoin.toLowerCase(), sub: modalData?.coin?.toLowerCase() == 'btc' ? 'bitcoin' : modalData?.coin?.toLowerCase() == 'eth' ? 'ethereum' : 'tether' }, { refetchOnMountOrArgChange: true })

    const calculateConversion = (numberAmount: number) => {
        return !isNaN(numberAmount) && amountt && amountt != '' ? modalData?.coin?.toLowerCase() == 'btc' ? (convertFromCreditCoin?.data?.data?.bitcoin?.ngn * numberAmount) : modalData?.coin?.toLowerCase() == 'eth' ? (convertFromCreditCoin?.data?.data?.ethereum?.ngn * numberAmount) : (convertFromCreditCoin?.data?.data?.tether?.ngn * numberAmount) : 0
    }


    // console.log("this is the amount ", amountt)
    // console.log("this is it ", convertFromCreditCoin)

    return (
        <Box  position="relative">
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
                <ModalContent
                    maxW={["100%", "100%", "75%", "75%", "79%"]}
                    top={["0", "0", "17rem"]}
                    left={["0", "0", "5.8rem"]}
                    py="20px"
                    pb="30px"
                    w="100%"
                >
                    <ModalBody>
                        <Flex
                            flexDir={["column", "column", "row"]}
                            gap={["20px", "20px", 0]}
                        >
                            <Box flex={1}>
                            <Box
                                display={"flex"}
                                flexDir={["column", "column", "row"]}
                                alignItems={["flex-start", "flex-start", "center"]}
                                gap="5px"
                            >
                                <Avatar
                                    color="white"
                                    size={"md"}
                                    background={"#FB5E04"}
                                    name={modalData?.user[0]?.username}
                                ></Avatar>
                                <Box display={"flex"} gap="10px">
                                <Box display={"flex"} alignItems={"center"} gap="3px">
                                    <Text fontSize={"sm"}>{modalData?.user[0]?.username}</Text>
                                    <CheckCircleIcon
                                        color={"#22C36B"}
                                        w={"10px"}
                                        h={"10px"}
                                    />
                                </Box>
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap="3px"
                                    fontSize={"xs"}
                                    color="#8E9BAE"
                                >
                                    <Text>{modalData?.user[0]?.noOfP2pOrderCompleted} orders</Text>|
                                    <Text>{percentageCompletion(parseInt(modalData?.user[0]?.noOfP2pOrderCompleted), parseInt(modalData?.user[0]?.noOfP2pAdsCreated))} %&nbsp;completion</Text>
                                </Box>
                                </Box>
                            </Box>
                            <Box
                                fontSize={"xs"}
                                marginLeft={["0px", "0px", "40px"]}
                                width={["auto", "auto", "450px"]}
                            >
                                <Flex
                                    mb={"10px"}
                                    wrap={"wrap"}
                                    flexDir={["column", "column", "row"]}
                                    alignItems={["flex-start", "flex-start", "center"]}
                                    gap={["5px", "5px", "100px"]}
                                >
                                <Box display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Price</Text>
                                    <Text>{modalData?.price}</Text>
                                </Box>

                                <Box display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Available</Text>
                                    <Text>{modalData?.totalAmount} {modalData?.coin === "USDT_TRON" ? "USDT-TRON" : modalData?.coin}</Text>
                                </Box>
                                </Flex>
                                <Flex
                                    mb={"10px"}
                                    wrap={"wrap"}
                                    flexDir={["column", "column", "row"]}
                                    alignItems={["flex-start", "flex-start", "center"]}
                                    gap={["5px", "5px", "40px"]}
                                >
                                <Box display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Payment Time Limit</Text>
                                    <Text>15 mins</Text>
                                </Box>

                                <Box alignItems={"center"} display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Buyer’s payment method</Text>
                                    <Text
                                        fontSize={"10px"}
                                        textAlign={"center"}
                                        background={"#FFF7F2"}
                                        color={"#FB5E04"}
                                        borderRadius={"3px"}
                                    >
                                        Bank Transfer
                                    </Text>
                                </Box>
                                </Flex>
                                <Box>
                                    <Text mt={"10px"} color="#FB5E04">
                                        Terms and Condition
                                    </Text>
                                    <Text color={"#8E9BAE"}>
                                        Always online making fast payment
                                    </Text>
                                </Box>
                            </Box>
                            </Box>
                            <Box flex={1} borderLeft={["0", "0", "1px solid  #E2E8F0"]}>
                                <Formik
                                    initialValues={{ debitCoinValue: amounts ?? '', creditCoinValue: creditCoinAmounts ?? '' }}

                                    onSubmit={async () => {
                                        
                                        // dispatch(setQuickBuyPayload({
                                        //     amount: parseFloat(amountt),
                                        //     creditCoinAmount: calculateConversion(parseFloat(amountt)),
                                        //     fee: '0.5%',
                                        //     cash: creditCoin,
                                        //     coin: debitCoin,
                                        //     rate: 'no rate for now'


                                        // }))
                                        // amount: amount,
                                        // cash: cash,
                                        // coin: coin,
                                        // method: "bank",
                                        // type: "sell"
                                        const data = {
                                            // creditCoinAmount: calculateConversion(parseFloat(amountt)),
                                            adId: modalData?._id,
                                            bankId: modalData?.bank[0]?._id,
                                            quantity: parseFloat(amountt),
                                            // cash: modalData?.cash,
                                            // coin: modalData?.coin,
                                            type: "buy"
                                        }

                                        // console.log("this is the data for the buy coin selected ", data)
                                        const response = await p2pBuyOrder(data)

                                        if (response?.data?.status == 200) {
                                            // appAlert.success('order created successfully')
                                            // dispatch(setOrderPayload({ order: response?.data?.data }))
                                            // console.log("this is the response ", response)
                                            appAlert.success(response?.data?.message)
                                            const orderId = response?.data?.data?.order?.orderId
                                            router.push(`/quick-trade/order/${orderId}`)
                                            // console.log("this is the orderId ", orderId)
                                            // console.log("what is this response", response)
                                        } else if (response?.data?.status == 401) {
                                            appAlert.error(`${response?.error?.data?.message}`)
                                            router.replace('/signin')
                                        } else {
                                            appAlert.error(response?.error?.data?.message)
                                        }


                                        // router.push('/quick-trade/confirm-sales')
                                    }}
                                    validateOnChange
                                    validateOnBlur
                                    validateOnMount
                                >
                                    {({
                                        setFieldValue,
                                        // handleSubmit,
                                        // isSubmitting
                                    }) => (
                                        <Form>
                                            <Box w={["full", "full", "300px"]} margin={"0px auto"}>
                                                <Box mb={"10px"}>
                                                    <Text fontSize={"xs"} mb="5px">I want to buy </Text>
                                                    <Field name='debitCoinValue' >
                                                        {({ field }: any) => (
                                                            <InputGroup size="sm">
                                                                <Input
                                                                    borderTopLeftRadius={"5px"}
                                                                    borderBottomLeftRadius={"5px"}
                                                                    placeholder={`Enter Quantity ${modalData?.coin === "USDT_TRON" ? "USDT-TRON" : modalData?.coin}`}
                                                                    borderRight={"none"}
                                                                    autoComplete='off'
                                                                    type="number"
                                                                    variant={'outline'}
                                                                    {...field}
                                                                    onChange={(e) => {
                                                                        setFieldValue('debitCoinValue', e.target.value);
                                                                        setAmountt(e.target.value)
                                                                        !(convertFromCreditCoin.isFetching) && convertFromCreditCoin?.data?.data && setFieldValue('creditCoinValue', calculateConversion(parseFloat(e.target.value)).toLocaleString())
                                                                    }} onKeyDown={(e) => { ['-', '+'].includes(e.key) && e.preventDefault(); }} 
                                                                />
                                                                <InputRightAddon background={"none"} borderLeft="0px">
                                                                    <Flex gap={"20px"}>
                                                                        <Text fontSize={"sm"}>All</Text>
                                                                        <Text fontSize={"sm"}>{modalData?.coin === "USDT_TRON" ? "USDT-TRON" : modalData?.coin}</Text>
                                                                    </Flex>
                                                                </InputRightAddon>
                                                            </InputGroup>
                                                        )}
                                                    </Field>
                                                </Box>
                                                <Box mb={"15px"}>
                                                    <Text fontSize={"xs"} mb="5px">I will pay </Text>
                                                    <InputGroup size="sm">
                                                        <Flex pl={'4'} w='full' border={'1px'} zIndex={'base'} borderColor={'gray.200'} borderTopLeftRadius={"5px"}
                                                            borderBottomLeftRadius={"5px"}
                                                            justifyContent={'space-between'} alignItems={'center'} >
                                                            {/* <Text w='full'>{isNaN(calculateConversion(parseFloat(amountt))) ? 0 : calculateConversion(parseFloat(amountt)).toLocaleString() ?? creditCoinAmounts?.toLocaleString() ?? 0}</Text>  */}
                                                            <Text w='full'>{amountt*modalData?.price}</Text> 
                                                        
                                                        
                                                        </Flex>
                                                        <InputRightAddon background={"none"} borderLeft="0px">
                                                        <Flex gap={"20px"}>
                                                            <Text fontSize={"sm"}>NGN</Text>
                                                        </Flex>
                                                        </InputRightAddon>
                                                    </InputGroup>
                                                </Box>
                                                {/* <Box>
                                                <Text fontSize={"xs"}>Payment Method </Text>
                                                <Flex
                                                    alignItems={"center"}
                                                    justifyContent="space-between"
                                                    border={"1px solid #E2E8F0"}
                                                    padding="5px 10px"
                                                    borderRadius={"5px"}
                                                    mb={"10px"}
                                                >
                                                    <Box display={"flex"} gap="10px" alignItems={"center"}>
                                                    <Text
                                                        fontSize={"10px"}
                                                        textAlign={"center"}
                                                        background={"#FFF7F2"}
                                                        color={"#FB5E04"}
                                                        borderRadius={"3px"}
                                                    >
                                                        Bank Transfer
                                                    </Text>
                                                    <Text fontSize={"xs"}>1522574741</Text>
                                                    </Box>
                                                    <Box>
                                                    <Text fontSize={"sm"}>NGN</Text>
                                                    </Box>
                                                </Flex>
                                                </Box> */}
                                                    <Flex gap={"10px"} justifyContent="center" mt="25px">
                                                        <Button onClick={onClose}>Cancel</Button>
                                                        <Button
                                                            // onClick={() => {
                                                            //     router.push("/p2p/buy");
                                                            // }}
                                                            type="submit"
                                                            color={"#fff"}
                                                            background={"#22C36B"}
                                                        >
                                                            Buy {modalData?.coin === "USDT_TRON" ? "USDT-TRON" : modalData?.coin}
                                                        </Button>
                                                    </Flex>
                                            </Box>            
                                        </Form>
                                    )}

                                </Formik>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            
            <Tabs variant="unstyled" mt={["20px"]} px={["0", "0px", "28px", "28px"]}>
                <TabList gap={["30px", "30px", "60px"]} >
                    <Tab
                        onClick={handlePageReset}
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        BTC
                    </Tab>
                    <Tab
                        onClick={handlePageReset}
                        _selected={{

                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        ETH
                    </Tab>
                    <Tab
                        onClick={handlePageReset}
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        USDT
                    </Tab>
                    <Tab
                        onClick={handlePageReset}
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        USDC
                    </Tab>
                    <Tab
                        onClick={handlePageReset}
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        USDT-TRON
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel paddingLeft={0} >                        
                        <P2pTopfilter routeName='buy-ads'/>
                        {btc?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="Buy BTC"
                                backgroundColor="#22C36B"
                                apiData={btc}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                    </TabPanel>

                    <TabPanel paddingLeft={0}>    
                        <P2pTopfilter routeName='buy-ads'/>
                        {eth?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="Buy ETH"
                                backgroundColor="#22C36B"
                                apiData={eth}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                    </TabPanel>

                    <TabPanel paddingLeft={0}>
                        <P2pTopfilter routeName='buy-ads'/>
                        {usdt?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="Buy USDT"
                                backgroundColor="#22C36B"
                                apiData={usdt}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                    </TabPanel>
                    
                    <TabPanel paddingLeft={0}>
                        <P2pTopfilter routeName='buy-ads'/>
                        {usdc?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="Buy USDC"
                                backgroundColor="#22C36B"
                                apiData={usdc}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                    </TabPanel>

                    <TabPanel paddingLeft={0}>
                        <P2pTopfilter routeName='buy-ads'/>
                        {usdt_tron?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="Buy USDT-TRON"
                                backgroundColor="#22C36B"
                                apiData={usdt_tron}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                    </TabPanel>
                </TabPanels>


            </Tabs>

        </Box>
    )
}

export default BuyP2p



