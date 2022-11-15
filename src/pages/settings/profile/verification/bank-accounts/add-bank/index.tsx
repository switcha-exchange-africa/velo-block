import { AddIcon, ArrowBackIcon, TriangleDownIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show, Text,
  HStack,
  VStack,
  Input,
  Select
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout"
import { useGetNigerianBankQuery } from "../../../../../../redux/services/bank.service"


const AddBankAccounts = () => {
    const Router = useRouter()
    const {data:getBanks} = useGetNigerianBankQuery()
    
    console.log("the get banks ", getBanks)

    // bankCode: 044
    // bankName: "Access Bank"

    return (
        <DashboardLayout title="Add bank account">
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
                        <Heading size="md"  ml={'1rem'}>Add bank account </Heading>
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
                            Add bank account
                            <Heading size="md"
                                ml={'1rem'}>
                                Add bank account
                            </Heading>
                        </Button>
                    </Flex>
                </Show>

                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    <Box 
                        background={'#FFFFFF'}
                        width={{ lg: "50%", base: '100%' }}
                        justifyContent={"space-between"}
                        p={"20px"}
                    >
                        <VStack width={'100%'} mb="24px"  alignItems="start" >
                            <Text fontSize={{ base: 'sm', lg: 'md' }}>
                                Bank
                            </Text>
                            <Select placeholder='Access Bank' cursor="pointer" iconSize={"10px"} icon={<TriangleDownIcon/>}>
                                {/* this filters access bank out as it is already placed as default on placeholder */}
                                {getBanks?.filter((item: any) => (
                                    item?.bankName !=='Access Bank'
                                )).map((item:any) => (
                                    <option key={item?.bankCode} value='option1'>{ item?.bankName}</option>
                                ))}
                            </Select>

                        </VStack>

                        <VStack width={'100%'} mb="24px"  alignItems="start">
                            <Text fontSize={{ base: 'sm', lg: 'md' }}>
                                Account Number
                            </Text>
                            <Input
                                type="number"
                                placeholder='080xxxxx900'
                                mr={'1rem'}
                            />
                        </VStack>

                        <Button  p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} onClick={() => Router.push('/settings/profile/verification/bank-accounts/add-bank')}>
                            <AddIcon
                                mr="5px"
                                color={"white"}
                                w={"10px"}
                                h={"10px"}
                            />
                            Add Bank
                        </Button>

                    </Box>

                </Box>

            </Box>
        </DashboardLayout>

    )
}

export default AddBankAccounts