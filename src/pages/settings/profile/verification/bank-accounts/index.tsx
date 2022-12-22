import { AddIcon, ArrowBackIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Show, Text, HStack, VStack, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import DashboardLayout from "../../../../../layouts/dashboard/DashboardLayout"
import { useDeleteUsersBankMutation, useGetUsersBankQuery } from "../../../../../redux/services/bank.service"
import uuid from "react-uuid"
import appAlert from "../../../../../helpers/appAlert"
import { useAppDispatch } from "../../../../../helpers/hooks/reduxHooks"
import { setAccountInfo } from "../../../../../redux/features/accountSettings/accounSettingsSlice"

const BankAccounts = () => {
    const Router = useRouter()
    const getUsersBank = useGetUsersBankQuery()
    const dispatch = useAppDispatch()
    const [deleteAddedBank] =   useDeleteUsersBankMutation()


        
    const handleBankDelete = async (id: string) => {
        const obj:any = getUsersBank?.data?.data?.find((o:any) => o._id === id);
        const data = {
            id: obj?._id,
            name: obj?.name,
            accountName: obj.accountName,
            code: obj?.code,
            accountNumber: obj?.accountNumber
        }

        const response = await deleteAddedBank(data)
        if (response?.data?.status == 200 || response?.data?.status == 201 ) {
            appAlert.success(response?.data?.message)
            getUsersBank.refetch()
        } else {
            appAlert.error(response?.error?.data?.message)
        } 
    }

    const handleEdit = (id: string) => {
        const obj:any = getUsersBank?.data?.data?.find((o:any) => o._id === id);
        const data = {
            id: obj?._id,
            name: obj?.name,
            accountName: obj.accountName,
            code: obj?.code,
            accountNumber: obj?.accountNumber
        }

        dispatch(setAccountInfo({accountInfo: data}))
        Router.push("/settings/profile/verification/bank-accounts/edit-bank")        
    } 

    return (
        <DashboardLayout title="Bank account">
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "10%", base: '0' }} >
                <Show above='760px'>
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
                        Profile
                    </Button>
                    
                    <HStack width={{ lg: "70%", base: '100%' }}  alignItems={"center"} justifyContent={"space-between"} py={'2rem'} gap={"1rem"}>
                        <Heading size="md"  ml={'1rem'}>Bank Accounts </Heading>
                        <Box  p={"11px 22px"} color="white" bg="#FB5E04" border={"0.88px solid #FB5e04"} cursor={"pointer"} borderRadius={"5px"} onClick={() => Router.push('/settings/profile/verification/bank-accounts/add-bank')}>
                            <AddIcon
                                mr="5px"
                                color={"white"}
                                w={"10px"}
                                h={"10px"}
                            />
                            Add Bank
                        </Box>
                    </HStack>
                </Show>

                <Show below='768px'>
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
                        >
                            Back
                        <Heading size="md"
                            ml={'1rem'}>Profile</Heading>
                        </Button>
                    </Flex>

                     <Flex justifyContent="flex-end">
                        <Box  p={"11px 22px"} mt="20px" color="white" bg="#FB5E04" border={"0.88px solid #FB5e04"} cursor={"pointer"} borderRadius={"5px"} onClick={() => Router.push('/settings/profile/verification/bank-accounts/add-bank')}>
                            <AddIcon
                                mr="5px"
                                color={"white"}
                                w={"10px"}
                                h={"10px"}
                            />
                            Add Bank
                        </Box>
                     </Flex>
                </Show>

                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    {getUsersBank.isFetching ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> :(
                        getUsersBank?.data?.data?.map((bank: any) => (      
                            <>
                                <Box
                                    key={uuid()} 
                                    background={'#FFFFFF'}
                                    width={{ lg: "70%", base: '100%' }}
                                    justifyContent={"space-between"}
                                    p={{ lg: "20px", base: '0' }}
                                    display={{ lg: "block", base: 'none' }}
                                >
                                    <Flex borderRadius={"5px"}  mb={"24px"} border={"1px solid #64748B"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                                        <VStack flex="1"   alignItems="flex-start" justifyContent="space-between">
                                            <Text  color="#8E9BAE">Name</Text>
                                            <Text py="10px" color="#8E9BAE">Account Number</Text>
                                            <Text  color="#8E9BAE">Bank name</Text>
                                            
                                        </VStack>
                                        <VStack flex="1.78" alignItems="flex-start" justifyContent="space-between">
                                            <Text  color="#000000">{bank?.accountName} </Text>
                                            <Text py="10px"  color="#000000">{bank?.accountNumber} </Text>
                                            <Text  color="#000000">{bank?.name} </Text>
                                            
                                        </VStack>
                                        <VStack flex="0.5" justifyContent="space-between">
                                            <Box  p={"5px 11px"} onClick={() => handleEdit(bank?._id)} color="#fc1f00" bg="transparent" border={"0.88px solid #FB5e04"} fontSize="14px" cursor={"pointer"} borderRadius={"5px"} >
                                                <EditIcon
                                                    mr="5px"
                                                    color={"#fc1f00"}
                                                    w={"10px"}
                                                    h={"10px"}
                                                />
                                                Edit
                                            </Box>

                                            <Box  color="#fc1f00" bg="transparent" cursor={"pointer"} borderRadius={"5px"} onClick={()=> handleBankDelete(bank?._id)}  >
                                                <DeleteIcon
                                                    mr="5px"
                                                    color={"#fc1f00"}
                                                    w={"10px"}
                                                    h={"10px"}
                                                />
                                                Delete 
                                            </Box>
                                        </VStack>

                                    </Flex>

                                </Box>

                                <Box
                                    key={uuid()} 
                                    background={'#FFFFFF'}
                                    width={{ lg: "70%", base: '100%' }}
                                    justifyContent={"space-between"}
                                    p={"0px"}
                                    display={{ lg: "none", base: 'block' }}
                                >
                                    <VStack borderRadius={"5px"} mb={"24px"} border={"1px solid #64748B"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                                        <HStack w="100%" alignItems="flex-start">
                                            <Text flex="1" color="#8E9BAE">Name</Text>
                                            <Text flex="1.76" color="#000000">{bank?.accountName} </Text>
                                            <Box  p={"5px 11px"} onClick={() => handleEdit(bank?._id)} color="#fc1f00" bg="transparent" border={"0.88px solid #FB5e04"} fontSize="14px" cursor={"pointer"} borderRadius={"5px"} >
                                                <EditIcon
                                                    mr="5px"
                                                    color={"#fc1f00"}
                                                    w={"10px"}
                                                    h={"10px"}
                                                />
                                                Edit
                                            </Box>
                                        </HStack>
                                        <HStack w="100%"  alignItems="center">
                                            <Text flex="1" color="#8E9BAE">Account Number</Text>
                                            <Text  flex="2.2" color="#000000">{bank?.accountNumber} </Text>
                                            
                                        </HStack>
                                        <HStack w="100%"  alignItems="flex-start">
                                            <Text flex="1" color="#8E9BAE">Bank name</Text>
                                            <Text flex="1.79" color="#000000" >{bank?.name} </Text>
                                            <Box  color="#fc1f00" bg="transparent" cursor={"pointer"} borderRadius={"5px"} onClick={()=> handleBankDelete(bank?._id)}>
                                                <DeleteIcon
                                                    mr="5px"
                                                    color={"#fc1f00"}
                                                    w={"10px"}
                                                    h={"10px"}
                                                />
                                                Delete
                                            </Box>
                                        </HStack>

                                        <HStack w="100%">
                                            {/* <Text flex="1" color="#8E9BAE">Transactions</Text> */}
                                            {/* <Text flex="2.2" color="#000000">{bank?.code}</Text> */}
                                        </HStack>
                                    </VStack>
                                </Box>
                            </>    
                        ))
                    )}

                    {getUsersBank?.data?.data?.length === 0 && (
                        <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" p="100px" px="10px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'} textAlign="center">Click the "Add Bank" Button to Add Bank</Text>
                        </Flex>
                    )}                    
                </Box>
            </Box>
        </DashboardLayout>

    )
}

export default BankAccounts