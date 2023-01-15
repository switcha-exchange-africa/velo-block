import { AddIcon, ArrowBackIcon, TriangleDownIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading, Show, HStack,
  Input, Select, FormControl, FormLabel
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from "react"
import appAlert from "../../../../../../helpers/appAlert"
import { useAppSelector } from "../../../../../../helpers/hooks/reduxHooks"
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout"
import { useGetNigerianBankQuery, useGetUsersBankQuery, useUpdateUsersBankMutation } from "../../../../../../redux/services/bank.service"


const AddBankAccounts = () => {
    const Router = useRouter()
    const {data:getBanks} = useGetNigerianBankQuery()
    const {accountInfo} =  useAppSelector((state) => state.accountSettings)
    const [updateBank] = useUpdateUsersBankMutation()
    const [accountNumber, setAccountNumber] = useState(accountInfo?.accountNumber)
    const [accountName, setAccountName] = useState(accountInfo?.accountName)
    const [name, setName] = useState(accountInfo?.name)
    const fetchAllUsersBank = useGetUsersBankQuery()    
    const [load, setLoad] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        let res = name
        let filteredBank =  getBanks?.filter(function(bank:any) {
            return bank.bankName === res;
        });
    
        let codeValue = filteredBank.map((code: any) => code?.bankCode)
        let newItem = codeValue[0]

        const data = {
            id: accountInfo?.id,
            name: name,
            accountName: accountName,
            accountNumber: accountNumber,
            code: newItem
        }

        const response:any = await updateBank(data)
        if (response?.data?.status == 200 || response?.data?.status == 201 ) {
            appAlert.success(response?.data?.message)
            fetchAllUsersBank.refetch()
            setLoad(false)
            Router.back()
        } else {
            setLoad(false)
            appAlert.error(response?.error?.data?.message)
        } 
    }
    

    return (
        <DashboardLayout title="Edit bank account">
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "10%", base: '0' }} >
                <Show above='md'>
                    <Button
                        onClick={() => Router.back()}
                        leftIcon={<ArrowBackIcon />}
                        colorScheme="transparent"
                        variant="solid"
                        pl={0}
                        py={"3rem"}
                        color={'black'}
                        ml={'1rem'}
                    >
                        Bank Accounts
                    </Button>
                    
                    <HStack width={{ lg: "70%", base: '100%' }}  alignItems={"center"} justifyContent={"space-between"} py={'2rem'} gap={"1rem"}>
                        <Heading size="md"  ml={'1rem'}>Edit bank account </Heading>
                    </HStack>
                </Show>

                <Show below='sm'>
                    <Flex justifyContent={'start'} bg={'white'}>
                        <Button
                            onClick={() => Router.back()}
                            leftIcon={<ArrowBackIcon />}
                            colorScheme="transparent"
                            variant="solid"
                            pl={0}
                            py={"2rem"}
                            color={'black'}
                            ml={'2'}
                            fontSize="14px"
                        >
                            bank account
                            <Heading size="md"
                                ml={'2rem'}>
                                Edit bank account
                            </Heading>
                        </Button>
                    </Flex>
                </Show>

                {/* this is where the form starts from */}
                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    <Box 
                        background={'#FFFFFF'}
                        width={{ lg: "50%", base: '100%' }}
                        justifyContent={"space-between"}
                        p={"20px"}
                    >
                        <form onSubmit={handleSubmit}>

                            <FormControl>
                                <FormControl>
                                    <FormLabel>Bank</FormLabel>
                                        <Select
                                            value={name}  
                                            onChange={(e) =>setName(e.target.value)}
                                        placeholder='Select Bank' cursor="pointer" iconSize={"10px"} icon={<TriangleDownIcon/>}            
                                    >
                                        {getBanks?.map((item: any, index: number) => (
                                            <option key={index} value={item?.bankName}>{item?.bankName}</option>
                                        ))}
                                    </Select>
                                </FormControl>     
                                <FormControl  pt='4'>
                                    <FormLabel>Account Number</FormLabel>
                                    <Input
                                        isRequired
                                        autoComplete='off' variant={'outline'}
                                        type="text" placeholder="215xxxxx900"
                                        defaultValue={accountNumber}
                                        onChange={(e) =>setAccountNumber(e.target.value)}
                                    />
                                </FormControl>


                                <FormControl  pt='4'>
                                    <FormLabel>Account Name</FormLabel>
                                    <Input
                                        isRequired
                                        autoComplete='off' variant={'outline'}
                                        type="text" placeholder="John Doe"
                                        defaultValue={accountName}
                                        onChange={(e) =>setAccountName(e.target.value)}
                                    />
                                </FormControl>


                                <Button mt="24px" isLoading={load}  type="submit" p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} >
                                    <AddIcon
                                        mr="5px"
                                        color={"white"}
                                        w={"10px"}
                                        h={"10px"}
                                    />
                                    Edit Bank
                                </Button>


                            </FormControl>
                        </form>

                    </Box>

                </Box>


            </Box>
        </DashboardLayout>

    )
}

export default AddBankAccounts
