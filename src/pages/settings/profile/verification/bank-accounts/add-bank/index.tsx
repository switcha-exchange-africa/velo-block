import { AddIcon, ArrowBackIcon, TriangleDownIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading, Show, HStack, VStack,
  Input, Select, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { useRouter } from 'next/router'
import appAlert from "../../../../../../helpers/appAlert"
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout"
import { useAddBankMutation, useGetNigerianBankQuery, useGetUsersBankQuery } from "../../../../../../redux/services/bank.service"


const AddBankAccounts = () => {
    const Router = useRouter()
    const {data:getBanks} = useGetNigerianBankQuery()


    const validateAccountName = (value: string, ) => {
        let error
        if (!value) {
            error = 'Account name should not be empty '
        }
        return error
    }

    const validateAccountNumber = (value: string, ) => {
        let error
        if (!value) {
            error = 'Account number should not be empty '
        }

        return error
    }

    const validateBankName = (value: string, ) => {
        let error
        if (!value) {
            error = 'Bank not selected '
        }

        return error
    }
    
    
    const [addBank] = useAddBankMutation()
    const fetchAllUsersBank = useGetUsersBankQuery()


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
                            fontSize="14px"
                        >
                            bank account
                            <Heading size="md"
                                ml={'2rem'}>
                                Add bank account
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
                       
                        <Formik
                            initialValues={{name: "", accountName: "", accountNumber: "", code: "" }}

                            onSubmit={async (values:any) => {                                
                                let res = values.name
                                let filteredBank =  getBanks?.filter(function(bank:any) {
                                    return bank.bankName === res;
                                });
                                let codeValue = filteredBank.map((code: any) => code?.bankCode)

                                let newItem = codeValue[0]


                                const data = {
                                    ...values,
                                    accountNumber: values.accountNumber.toString(),
                                    code: newItem
                                }
                                const response:any = await addBank(data)
                                if (response?.data?.status == 200 || response?.data?.status == 201 ) {
                                    appAlert.success(response?.data?.message)
                                    fetchAllUsersBank.refetch()
                                    Router.back()
                                } else {
                                        appAlert.error(response?.error?.data?.message)
                                    } 
                                }}
                            validateOnChange
                            validateOnBlur
                            validateOnMount
                        >
                            {({
                                isSubmitting,
                            }) => (
                                <Form  >
                                    <VStack w={{ lg: '100%', md: '100%', base: '100%' }} align='start'>
                                        
                                        <Field name="name" id="name" validate={validateBankName}>
                                            {({ field , form}: any) => (
                                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                <FormLabel>Bank</FormLabel>
                                                    <Select
                                                    {...field}           
                                                    placeholder='Select Bank' cursor="pointer" iconSize={"10px"} icon={<TriangleDownIcon/>}            
                                                >
                                                    {getBanks?.map((item: any, index: number) => (
                                                        <option key={index} value={item?.bankName}>{item?.bankName}</option>
                                                    ))}
                                                </Select>
                                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>    
                                            </FormControl>
                                            )}
                                        </Field>
                                        
                                        <Field name='accountNumber' validate={validateAccountNumber}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.accountNumber && form.touched.accountNumber}>
                                                    <FormLabel>Account Number</FormLabel>
                                                    <Input {...field} type="text" placeholder="215xxxxx900"/>
                                                    <FormErrorMessage>{form.errors.accountNumber}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='accountName' validate={validateAccountName}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.accountName && form.touched.accountName}>
                                                    <FormLabel>Account Name</FormLabel>
                                                    <Input {...field} type="text" placeholder="John Doe"/>
                                                    <FormErrorMessage>{form.errors.accountName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                                


                                    </VStack>
                                    <Button mt="24px" isLoading={isSubmitting} type="submit" p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} >
                                        <AddIcon
                                            mr="5px"
                                            color={"white"}
                                            w={"10px"}
                                            h={"10px"}
                                        />
                                        Add Bank
                                    </Button>

                                </Form>
                            )}

                        </Formik>
                    </Box>

                </Box>


            </Box>
        </DashboardLayout>

    )
}

export default AddBankAccounts
