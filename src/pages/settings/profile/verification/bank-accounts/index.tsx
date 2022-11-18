import { AddIcon, ArrowBackIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show, Text,
  HStack,
  VStack,
  Spinner
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import DashboardLayout from "../../../../../layouts/dashboard/DashboardLayout"
import { useGetUsersBankQuery } from "../../../../../redux/services/bank.service"


const BankAccounts = () => {
    const Router = useRouter()

    const {data:getUsersBank, isLoading} = useGetUsersBankQuery()


    return (
        <DashboardLayout title="Bank account">
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
                        >
                        Back
                        <Heading size="md"
                            ml={'1rem'}>Profile</Heading>
                        </Button>
                    </Flex>
                </Show>

                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    {isLoading ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> :(
                        getUsersBank?.data?.map((bank: any) => (       
                            <Box
                                key={bank?._id} 
                                background={'#FFFFFF'}
                                width={{ lg: "70%", base: '100%' }}
                                justifyContent={"space-between"}
                                p={"20px"}
                            >
                                <VStack borderRadius={"5px"} mb={"24px"} border={"1px solid #64748B"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                                    <HStack w="100%">
                                        <Text flex="1" color="#8E9BAE">Name</Text>
                                        <Text flex="1.76" color="#000000">{bank?.accountName} </Text>
                                        <Box  p={"5px 11px"} color="#fc1f00" bg="transparent" border={"0.88px solid #FB5e04"} fontSize="14px" cursor={"pointer"} borderRadius={"5px"} >
                                            <EditIcon
                                                mr="5px"
                                                color={"#fc1f00"}
                                                w={"10px"}
                                                h={"10px"}
                                            />
                                            Edit
                                        </Box>
                                    </HStack>
                                    <HStack w="100%">
                                        <Text flex="1" color="#8E9BAE">Bank Account N..</Text>
                                        <Text  flex="2.2" color="#000000">{bank?.accountNumber} </Text>
                                        
                                    </HStack>
                                    <HStack w="100%">
                                        <Text flex="1" color="#8E9BAE">Bank name</Text>
                                        <Text flex="1.79" color="#000000">{bank?.name} </Text>
                                        <Box  color="#fc1f00" bg="transparent" cursor={"pointer"} borderRadius={"5px"} >
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
                                        <Text flex="1" color="#8E9BAE">Transactions</Text>
                                        {/* <Text flex="2.2" color="#000000">{bank?.code}</Text> */}
                                    </HStack>
                                </VStack>

                            </Box>
                        ))
                       
                    )}
                    

                </Box>

            </Box>
        </DashboardLayout>

    )
}

export default BankAccounts