import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Text,
    Menu, MenuButton, MenuList,
    MenuItem, MenuGroup,
    Button,
    MenuItemOption,
    MenuOptionGroup} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import PaymentMethodComponent from '../../../components/quick-trade/PaymentMethodComponent'
import appAlert from '../../../helpers/appAlert'
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import { setOrderPayload } from '../../../redux/features/quick-trade/quickTradeSlice'
import { useQuickTradeMutation } from '../../../redux/services/quick-trade.service'
import Currency from 'react-currency-formatter';
import { GetServerSideProps } from 'next'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import { ChevronDownIcon, AddIcon } from '@chakra-ui/icons'
import { useGetUsersBankQuery } from '../../../redux/services/bank.service'
import uuid from "react-uuid"


const ConfirmSales = () => {
    const router = useRouter()
    const { amount, cash, coin, creditCoinAmount, fee, rate } = useAppSelector((state) => state.quickTrade)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        // alert(`${amount}, ${cash}, ${coin}, ${creditCoinAmount}, ${fee}`)
    }, [amount, cash, coin, creditCoinAmount, fee, rate])

    const [quickTrade, { isLoading }] = useQuickTradeMutation()

        // console.log("this is the amount", amount


    const {data:getUsersBank} = useGetUsersBankQuery()

    // const [bank, setBank] = useState("")
    const [clientAccountName, setClientAccountName] = useState("")
    const [clientBankName, setClientBankAccountName] = useState("")
    const [clientAccountNumber, setClientAccountNumber] = useState("")
    
    const handleSubmit = async () => {
        const data = {
            amount: amount,
            cash: cash,
            coin: coin,
            method: "bank",
            type: "sell",
            clientAccountName: clientAccountName,
            clientAccountNumber: clientAccountNumber,
            clientBankName: clientBankName
        }
        
        if (clientAccountNumber === "") {
            appAlert.error("Please select Payment method")
        } else {

            try {
                const response: any = await quickTrade(data)
                if (response?.data?.status == 200) {
                    appAlert.success('order created successfully')
                    dispatch(setOrderPayload({ order: response?.data?.data }))
                    const orderId = response?.data?.data?.order?.orderId
                    router.push(`/quick-trade/order/${orderId}`)
                    // console.log("what is this response", response)
                } else if (response?.data?.status == 401) {
                    appAlert.error(`${response?.error?.data?.message}`)
                    router.replace('/signin')
                } else {
                    appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                }
            } catch (error) {
                console.log(error)
            }
        } 
    }


    const handleValue = (bName:string, bAccountNumber: string, clientName: string) => {
        setClientBankAccountName(bName)
        setClientAccountName(clientName)
        setClientAccountNumber(bAccountNumber)
    }

    // settings/profile/verification/bank-accounts
    return (
        <DashboardLayout title='Confirm Sales'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'} p={'4'}>
                    <Flex flexDirection={'column'}>
                        <Flex alignItems={'center'} pb={'4'}>
                            <ChevronLeftIcon onClick={() => { router.replace({ pathname: '/quick-trade', query: { type: 'sell' } }) }} />
                            <Text fontSize='lg' as='p' fontWeight={'light'} py={'2'} w={'full'} align={'center'} >Confirm Sales</Text>
                        </Flex>
                        <Text fontSize='2xl' as='b' w={'full'} align={'center'} >{amount} {coin=== "USDT_TRON" ? "USDT-TRON" : coin}</Text>
                        <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} >I will receive <Currency
                            quantity={creditCoinAmount}
                            currency={cash}
                        />
                            {/* {coin=== "USDT_TRON" ? "USDT-TRON" : coin} */}
                        </Text>
                        <Text fontSize='xs' as='p' fontWeight={'semibold'} color={'textLightColor'} w={'full'} align={'left'} pt={'8'} pb={'1'}>Select payment method</Text>
                        {/* <PaymentMethodComponent borderColor={'primaryColor.900'} label={'Bank Transfer'} rate={'550.67'} /> */}
                        
                        <Box borderRight={'4px'} borderTop={'1px'} borderLeft={'1px'} w="100%" borderBottom={'1px'} p={'1'} borderRadius={'md'}  mb={'1'} borderColor={'primaryColor.900'}>
                            <Menu closeOnSelect={true}>
                                <MenuButton as={Button} colorScheme='transparent' w="100%" rightIcon={<ChevronDownIcon color="black" />} textAlign="left">
                                    <Text fontSize='sm' as='p' align={'left'} color="black" fontWeight={'semibold'}>Bank Transfer</Text>

                                </MenuButton>
                                
                                <MenuList minWidth='380px' border="none" boxShadow={"1px 1px 0px red"}>
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
                        
                        
                        <Box py={'2'}></Box>
                        <PaymentMethodComponent borderColor={'paymentMethodColor2'} label={'Switch NG Wallet'} rate={'550.67'} disabled />
                        <Box p={'12'}></Box>
                       
                        <MainAppButton isLoading={isLoading} onClick={() => handleSubmit()} backgroundColor={'secondary2Color.900'} >
                            Confirm Sale
                        </MainAppButton>


                    </Flex>

                </Box>
            </Flex>
        </DashboardLayout>

    )
}
export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}
export default ConfirmSales