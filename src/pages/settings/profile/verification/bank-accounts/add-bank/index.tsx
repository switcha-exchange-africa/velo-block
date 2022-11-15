import { AddIcon, ArrowBackIcon, TriangleDownIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show, Text,
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
// import MainAppButton from "../../../../../../components/buttons/MainAppButton"
// import authValidators from "../../../../../../helpers/validators/authValidators"
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout"
import { useGetNigerianBankQuery } from "../../../../../../redux/services/bank.service"


const AddBankAccounts = () => {
    const Router = useRouter()
    const {data:getBanks} = useGetNigerianBankQuery()

//     {
//     "name":"Guaranty Trust Bank",
//     "code":"058",
//     "accountName":"Goodness Chinemerem Ezeokafor",
//     "accountNumber":"0553561556"
// }

    // const data = {
    //     name: "",
    //     code: "",
    //     accountName: "",
    //     accountNumber: ""
    // }

    const validateAccountName = (value: string, ) => {
        let error
        // let passwordChecks: string[] = []
        if (!value) {
            error = 'Account name should not be empty '
        }

        return error
    }

    const validateAccountNumber = (value: string, ) => {
        let error
        // let passwordChecks: string[] = []
        if (!value) {
            error = 'Account number should not be empty '
        }

        return error
    }
    
    
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

                {/* this is where the form starts from */}
                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    <Box 
                        background={'#FFFFFF'}
                        width={{ lg: "50%", base: '100%' }}
                        justifyContent={"space-between"}
                        p={"20px"}
                    >
                       

                        <Formik
                    initialValues={{name: "", accountName: "", accountNumber: "" }}

                    onSubmit={async (values, { setSubmitting }) => {

                        console.log(values)
                        try {
                            setSubmitting(true)
                            // const response: any = await login({ email: values.email, password: values.password })
                            // alert(JSON.stringify(response))
                            // if (response?.data?.status == 201 || response?.data?.status == 200) {
                            //     setSubmitting(false)
                            //     // dispatch(setEmailVerified({ emailVerified: response?.data?.data?.emailVerified }))
                                // // alert(JSON.stringify(response?.data?.data))
                                // appAlert.success('Login Successful')
                                // dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                // dispatch(clearFromLocalStorage())
                                // router.replace('/dashboard')
                                // if (isEmailVerified == true) {
                                //     appAlert.success('Login Successful')
                                //     dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                //     dispatch(clearFromLocalStorage())
                                //     router.replace('/dashboard')
                                // } else {
                                //     router.replace('/verify-email')
                                // }

                            // } else if (response?.data?.status == 202) {
                                // dispatch(setCredentials({ user: response?.data?.data, token: response?.data?.token }))
                                // setShouldSendOtp(true)
                                // sendOtp.refetch()
                                // // alert(JSON.stringify(res))
                            //     // router.replace('/verify-email')
                            // } else {
                            //     setSubmitting(false)
                            //     // appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
                            // }
                        } catch (error) {
                            // setSubmitting(false)
                            // console.log(error)
                        }
                        // try {
                        //     await dispatch(login({ email: values.email, password: values.password })).unwrap()
                        //     localStorage.removeItem('lastname')
                        //     localStorage.removeItem('password')

                        //     if (isEmailVerified == true) {
                        //         console.log('check verified', isEmailVerified)
                        //         router.push('/dashboard')
                        //     } else {
                        //         console.log('check verified', isEmailVerified)
                        //         dispatch(sendOtp()).unwrap()
                        //         router.push('/verify-email')

                        //     }

                        // } catch (error) {
                        //     console.log(error)
                        // }
                        // router.push('/dashboard')
                    }}
                    validateOnChange
                    validateOnBlur
                    validateOnMount
                >
                    {({
                        // handleChange,
                        // handleBlur,
                        handleSubmit,
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
                                            placeholder='Access Bank' cursor="pointer" iconSize={"10px"} icon={<TriangleDownIcon/>}            
                                        >
                                            {getBanks?.filter((item: any) => (
                                                item?.bankName !=='Access Bank'
                                            )).map((item: any, index: number) => (
                                                // item?.bankCode
                                                <option key={index} value={ item?.bankName}>{ item?.bankName}</option>
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