import {
    Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text,
    Menu, MenuButton, MenuList,
    MenuItem, MenuGroup,
    MenuItemOption,
    MenuOptionGroup,
    InputGroup,
    InputRightAddon,  Modal, ModalBody, ModalCloseButton,
    ModalContent,
    Avatar,
    Input,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import TableComponent from '../../table/TableContainer'
import { Field, Form, Formik } from 'formik';
import {useGetSellAdsQuery} from "../../../redux/services/p2p-ads.service";
import { P2pAdsComponentProps } from '../../../interfaces/p2p-ads/P2pAdsComponent';
import { useState } from 'react';
import { useQuickTradeConvertQuery } from '../../../redux/services/new-conversion.service';
import { AddIcon, CheckCircleIcon, ChevronDownIcon } from '@chakra-ui/icons';
import uuid from "react-uuid"
import appAlert from '../../../helpers/appAlert';
import { useGetUsersBankQuery } from '../../../redux/services/bank.service';
import { useRouter } from 'next/router';

const SellCoin = ({pageNumber, handlePreviousPage, handleNextPage, handlePageReset}: P2pAdsComponentProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const { data:usdt } = useGetSellAdsQuery({arg: "USDT" , pageNumber: `${pageNumber}`})
    const { data:usdc } = useGetSellAdsQuery({arg: "USDC" , pageNumber: `${pageNumber}`})
    const { data:eth } = useGetSellAdsQuery({arg: "ETH" , pageNumber: `${pageNumber}`})
    const { data:btc } = useGetSellAdsQuery({arg: "BTC" , pageNumber: `${pageNumber}`})
    const { data:usdt_tron } = useGetSellAdsQuery({arg: "USDT_TRON" , pageNumber: `${pageNumber}`})
    
    const [p2pSellOrder]: any = useP2pBuyOrderMutation()

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


    const amounts = 0
    const creditCoinAmounts = 0
    const [creditCoin] = useState(modalData?.cash ?? `NGN`)
    // const [debitCoin, setDebitCoin] = useState(modalData?.coin)
    const [amountt, setAmountt] = useState<any>(amounts ? `${amounts}` : '0')

    const convertFromCreditCoin: any = useQuickTradeConvertQuery({ base: creditCoin.toLowerCase(), sub: modalData?.coin?.toLowerCase() == 'btc' ? 'bitcoin' : modalData?.coin?.toLowerCase() == 'eth' ? 'ethereum' : 'tether' }, { refetchOnMountOrArgChange: true })

    const calculateConversion = (numberAmount: number) => {
        return !isNaN(numberAmount) && amountt && amountt != '' ? modalData?.coin?.toLowerCase() == 'btc' ? (convertFromCreditCoin?.data?.data?.bitcoin?.ngn * numberAmount) : modalData?.coin?.toLowerCase() == 'eth' ? (convertFromCreditCoin?.data?.data?.ethereum?.ngn * numberAmount) : (convertFromCreditCoin?.data?.data?.tether?.ngn * numberAmount) : 0
    }



    const {data:getUsersBank} = useGetUsersBankQuery()

    // const [bank, setBank] = useState("")
    const [clientAccountName, setClientAccountName] = useState("")
    const [clientBankName, setClientBankAccountName] = useState("")
    const [clientAccountNumber, setClientAccountNumber] = useState("")
    

    const handleValue = (bName:string, bAccountNumber: string, clientName: string) => {
        setClientBankAccountName(bName)
        setClientAccountName(clientName)
        setClientAccountNumber(bAccountNumber)
    }


    return (
        <>
            <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalContent
                    maxW={["100%", "100%", "65.2em"]}
                    top={["0", "0", "21rem"]}
                    left={["0", "0", "6rem"]}
                    py="10px"
                >
                    <ModalCloseButton />
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
                                    <Text fontSize={"sm"} textTransform="capitalize">{modalData?.user[0]?.username}</Text>
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
                                    <Text>{(modalData?.totalAmount)?.toLocaleString()} {modalData?.coin === "USDT_TRON" ? "USDT-TRON" : modalData?.coin}</Text>
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
                                        const data = {
                                            adId: modalData?._id,
                                            bankId: modalData?.bank[0]?._id,
                                            quantity: parseFloat(amountt),
                                            type: "sell",
                                            clientAccountName: clientAccountName,
                                            clientAccountNumber: clientAccountNumber,
                                            clientBankName: clientBankName
                                        }
                                        
                                        if (clientAccountNumber === "") {
                                            appAlert.error("Please select Payment method")
                                        } else {
                                            const response = await p2pSellOrder(data)

                                            if (response?.data?.status == 200) {
                                                appAlert.success(response?.data?.message)
                                                const orderId = response?.data?.data?.order?.orderId
                                                router.push(`p2p/sell/${orderId}`)
                                            } else if (response?.data?.status == 401) {
                                                appAlert.error(`${response?.error?.data?.message}`)
                                                router.replace('/signin')
                                            } else {
                                                appAlert.error(response?.error?.data?.message)
                                            }
                                        } 
                                }}
                                    validateOnChange
                                    validateOnBlur
                                    validateOnMount
                                >
                                    {({
                                        setFieldValue,
                                    }) => (
                                        <Form>
                                            <Box w={["full", "full", "300px"]} margin={"0px auto"}>
                                                <Box mb={"10px"}>
                                                    <Text fontSize={"xs"} mb="5px">I want to Sell </Text>
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
                                                    <Text fontSize={"xs"} mb="5px">I will receive </Text>
                                                    <InputGroup size="sm">
                                                        <Flex pl={'4'} w='full' border={'1px'} zIndex={'base'} borderColor={'gray.200'} borderTopLeftRadius={"5px"}
                                                            borderBottomLeftRadius={"5px"}
                                                            justifyContent={'space-between'} alignItems={'center'} >
                                                            <Text w='full'>{(amountt * modalData?.price).toLocaleString()}</Text> 
                                                        </Flex>
                                                        <InputRightAddon background={"none"} borderLeft="0px">
                                                        <Flex gap={"20px"}>
                                                            <Text fontSize={"sm"}>NGN</Text>
                                                        </Flex>
                                                        </InputRightAddon>
                                                    </InputGroup>
                                                </Box>
                                                <Box>
                                                    <Text fontSize={"xs"}>Payment Method </Text>
                                                </Box>
                                                <Box borderRight={'4px'} borderTop={'1px'} borderLeft={'1px'} w="100%" borderBottom={'1px'} p={'1'} borderRadius={'md'}  mb={'1'} borderColor={'#E2E8F0'}>
                                                    <Menu closeOnSelect={true}>
                                                        <MenuButton as={Button} colorScheme='transparent' w="100%" rightIcon={<ChevronDownIcon color="black" />} textAlign="left">
                                                            <Text fontSize='sm' as='p' align={'left'} color="black" fontWeight={'semibold'}>Bank Transfer</Text>

                                                        </MenuButton>
                                                        
                                                        <MenuList minWidth='380px' border="none" boxShadow={"1px 1px 0px #E2E8F0"}>
                                                            <MenuOptionGroup defaultValue='asc'>
                                                                {getUsersBank?.data.length !== 0 ? (
                                                                    getUsersBank?.data?.map((item: any) => (
                                                                        <MenuItemOption key={uuid()} onClick={() => handleValue(item?.name, item?.accountNumber, item?.accountName)}>
                                                                            <Flex direction="column" pb="5px">
                                                                                <Text>{item?.accountNumber}</Text>
                                                                                <Text>{item?.accountName}</Text>    
                                                                                <Text>{item?.name}</Text>
                                                                            </Flex>       
                                                                        </MenuItemOption>
                                                                    ))
                                                                ) : (
                                                                    <MenuItem p="20px" cursor="pointer" alignItems="center">
                                                                        No payment method Added
                                                                    </MenuItem>
                                                                )}
                                                            </MenuOptionGroup>
                                                            
                                                            <Box border="1px solid gray"></Box>
                                                            <MenuGroup>
                                                                <MenuItem p="10px 20px 5px" cursor="pointer" alignItems="center"  onClick={() => router.push("/settings/profile/verification/bank-accounts")}>
                                                                    <AddIcon color="black" mr="5px" w="10px" height="10px"  />
                                                                    Add Payment Method
                                                                </MenuItem>
                                                            </MenuGroup>
                                                        </MenuList>
                                                        

                                                        <Text fontSize='sm' as='p'  p="0 15px" align={'left'} color="black" >{clientAccountNumber ? clientAccountNumber : ""}</Text>
                                                        <Text fontSize='sm' as='p'  p="0 15px" align={'left'} color="black" >{clientAccountName ? clientAccountName : ""}</Text>
                                                        <Text fontSize='sm' as='p'  p="0 15px" align={'left'} color="black" >{clientBankName ? clientBankName : ""}</Text>
                                                    

                                                    </Menu>
                                                </Box>



                                                <Flex gap={"10px"} justifyContent="center" mt="25px">
                                                    <Button onClick={onClose}>Cancel</Button>
                                                    <Button
                                                        type="submit"
                                                        color={"#fff"}
                                                        background={"#EB4335"}
                                                    >
                                                        Sell {modalData?.coin === "USDT_TRON" ? "USDT-TRON" : modalData?.coin}
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
        
            <Tabs variant='unstyled'>
                <TabList gap={"36px"} px={["0", "0px", "28px", "28px"]} >
                    <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">BTC</Tab>
                    <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">ETH</Tab>
                    <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDT</Tab>
                    <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDC</Tab>
                    <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDT-TRON</Tab>
                </TabList>                
                
                <Box background="#E2E8F0" height="0.1px" width={["100%", "100%", "97%"]} m="14px auto 8px"></Box>
                
                <TabPanels>
                    {/* Tab panel 1 */}
                    <TabPanel px={["0", "0px", "28px", "28px"]}>
                        {btc?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="SELL BTC"
                                backgroundColor="#EB4335"
                                apiData={btc}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                                <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO BUY ADS YET</Text>
                            </Flex>}
                    </TabPanel>
                    {/* Tab panel 2 */}
                    <TabPanel px={["0", "0px", "28px", "28px"]}>
                        {eth?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="SELL ETH"
                                backgroundColor="#EB4335"
                                apiData={eth}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                                <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO BUY ADS YET</Text>
                            </Flex>}
                    </TabPanel>
                    {/* Tab panel 3 */}
                    <TabPanel px={["0", "0px", "28px", "28px"]}>
                        {usdt?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="SELL USDT"
                                backgroundColor="#EB4335"
                                apiData={usdt}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                                <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO BUY ADS YET</Text>
                            </Flex>}            
                    </TabPanel>
                    {/* Tab panel 4 */}
                    <TabPanel px={["0", "0px", "28px", "28px"]}>
                        {usdc?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="SELL USDC"
                                backgroundColor="#EB4335"
                                apiData={usdc}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                                <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO BUY ADS YET</Text>
                            </Flex>}
                                
                    </TabPanel>

                    {/* Tab panel 5 */}
                    <TabPanel px={["0", "0px", "28px", "28px"]}>
                        {usdt_tron?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="SELL USDT-TRON"
                                backgroundColor="#EB4335"
                                apiData={usdt_tron}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={handleOpen}
                            />      
                        ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                                <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO BUY ADS YET</Text>
                            </Flex>}
                                
                    </TabPanel>
                </TabPanels>
            </Tabs>


          </>
    )
}

export default SellCoin