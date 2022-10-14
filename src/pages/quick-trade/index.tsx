import { Flex, Box, Text, VStack, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, Button, Menu, MenuButton, MenuItem, MenuList, Select, Img } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import MainAppButton from '../../components/buttons/MainAppButton';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CustomSelectWithIcon from '../../components/select/CustomSelectWithIcon';
import QuickBuyComponent from '../../components/quick-trade/QuickBuyComponent';
import QuickSellComponent from '../../components/quick-trade/QuickSellComponent';
import DashboardLayout from '../../layouts/dashboard/DashboardLayout';


const coinOptions = [{ value: 'BTC', label: 'BTC', imageUrl: '/assets/svgs/BTC.svg', }, { value: 'ETH', label: 'ETH', imageUrl: '/assets/svgs/ETH.svg', }]
const currencyOptions = [{ value: 'NGN', label: 'NGN', imageUrl: '/assets/svgs/NGN.svg', },]
const QuickTrade = () => {
    const [isBuySelected, setIsBuySelected] = useState(true)
    const [creditCoin, setCreditCoin] = useState(`${coinOptions[0].value}`)
    const [debitCoin, setDebitCoin] = useState(`${coinOptions[1].value}`)

    const toggleBuySelected = (type: string) => {
        if (type == 'buy') {
            setIsBuySelected(true)
        } else {
            setIsBuySelected(false)
        }

    }
    return (
        <DashboardLayout>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'}>
                    <Flex flexDirection={'column'}>
                        <Flex>
                            <Text fontSize='2xl' as='b' py={'2'} w={'full'} align={'center'} bg={isBuySelected == true ? 'appWhiteColor' : 'gray.200'} cursor={'pointer'} onClick={() => setIsBuySelected(true)}>Buy</Text>
                            <Text fontSize='2xl' as='b' py={'2'} w={'full'} align={'center'} bg={isBuySelected == false ? 'appWhiteColor' : 'gray.200'} cursor={'pointer'} onClick={() => setIsBuySelected(false)}>Sell</Text>
                        </Flex>
                        {isBuySelected ? <QuickBuyComponent /> : <QuickSellComponent />}

                    </Flex>

                </Box>
            </Flex>
        </DashboardLayout>

    )
}

export default QuickTrade