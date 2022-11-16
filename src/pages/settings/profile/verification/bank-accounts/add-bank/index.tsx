import { AddIcon, ArrowBackIcon, TriangleDownIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show,
  HStack,
  VStack,
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { useRouter } from 'next/router'
import { useState } from "react"
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
    
    
    const [addBank] = useAddBankMutation()
    const {data:getUsersBank} = useGetUsersBankQuery()


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
                                    appAlert.success(response?.data?.data?.message)
                                } else {
                                        appAlert.error(response?.error?.data?.message)
                                    } 
                                }}
                            validateOnChange
                            validateOnBlur
                            validateOnMount
                        >
                            {({
                                // handleChange,
                                // handleBlur,
                                // handleSubmit,
                                isSubmitting,
                                // values
                                /* and other goodies */
                            }) => (
                                <Form  >
                                    <VStack w={{ lg: '100%', md: '100%', base: '100%' }} align='start'>
                                        
                                        <Field name="name" id="name">
                                            {({ field }: any) => (
                                            <FormControl >
                                                <FormLabel>Bank</FormLabel>
                                                    <Select
                                                            
                                                    {...field}           
                                                    placeholder='Select Bank' cursor="pointer" iconSize={"10px"} icon={<TriangleDownIcon/>}            
                                                >
                                                    {getBanks?.map((item: any, index: number) => (
                                                        // item?.bankCode
                                                        <option key={index} value={item?.bankName}>{item?.bankName}</option>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            )}
                                        </Field>
                                        
                                        <Field name='accountNumber' validate={validateAccountNumber}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.accountNumber && form.touched.accountNumber}>
                                                    <FormLabel>Account Number</FormLabel>
                                                    <Input {...field} type="number"/>
                                                    <FormErrorMessage>{form.errors.accountNumber}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='accountName' validate={validateAccountName}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.accountName && form.touched.accountName}>
                                                    <FormLabel>Account Name</FormLabel>
                                                    <Input {...field} />
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





// <VStack width={'100%'} mb="24px"  alignItems="start" >
// <Text fontSize={{ base: 'sm', lg: 'md' }}>
//     Bank
// </Text>
// <Select placeholder='Access Bank' cursor="pointer" iconSize={"10px"} icon={<TriangleDownIcon/>}>
//     {/* this filters access bank out as it is already placed as default on placeholder */}
//     {getBanks?.filter((item: any) => (
//         item?.bankName !=='Access Bank'
//     )).map((item:any) => (
//         <option key={item?.bankCode} value='option1'>{ item?.bankName}</option>
//     ))}
// </Select>

// </VStack>

// <VStack width={'100%'} mb="24px"  alignItems="start">
// <Text fontSize={{ base: 'sm', lg: 'md' }}>
//     Account Number
// </Text>
// <Input
//     type="number"
//     placeholder='080xxxxx900'
//     mr={'1rem'}
// />
// </VStack>