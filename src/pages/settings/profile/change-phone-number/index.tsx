import { AddIcon, ArrowBackIcon, TriangleDownIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading, Show, HStack, VStack,
  Input, Select, FormControl, FormLabel, FormErrorMessage, Text
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { useRouter } from 'next/router'
import SettingsOptionComponent from '../../../../components/dashboard/settings/SettingsOptionComponent'
import appAlert from "../../../../helpers/appAlert"
import DashboardLayout from '../../../../layouts/dashboard/DashboardLayout'
import { useAddBankMutation, useGetUsersBankQuery } from "../../../../redux/services/bank.service"
import { useGetVerificationStatusQuery } from "../../../../redux/services/kyc.service"

const Verification = () => {
    const Router = useRouter()
    const {data:levelTwoVerificationStatus} = useGetVerificationStatusQuery("two")
    const {data:levelThreeVerificationStatus} = useGetVerificationStatusQuery("three")

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
        <DashboardLayout title='Verification'>
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "5%", base: '0' }} >
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
                        Back
                    </Button>
                    <VStack alignItems={"start"} gap={"1rem"}>
                        <Heading size="md"
                            py={'2rem'}
                            ml={'1rem'}>Add Phone Number</Heading>
                    </VStack>
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
                                ml={'1rem'}>Add Phone Number</Heading>
                        </Button>
                    </Flex>
                </Show>

                <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }}>
                    {/* <SettingsOptionComponent buttonLabel='Verified' title='Level 1 Verification' disabled>Email Authentication and Phone number Authentication</SettingsOptionComponent>

                    {levelTwoVerificationStatus?.data === null && <SettingsOptionComponent onClick={() => Router.push('/settings/profile/verification/level-2-verification')} buttonLabel="verify" title='Level 2 Verification' >Picture of ID</SettingsOptionComponent>}
                    {levelTwoVerificationStatus?.data?.status === "pending" && <SettingsOptionComponent disabled buttonLabel={levelTwoVerificationStatus?.data?.status} title='Level 2 Verification' >Picture of ID</SettingsOptionComponent>}
                    {levelTwoVerificationStatus?.data?.status === "approved" && <SettingsOptionComponent disabled buttonLabel="verified" title='Level 2 Verification' >Picture of ID</SettingsOptionComponent>}
                    {levelTwoVerificationStatus?.data?.status === "declined" && <SettingsOptionComponent onClick={() => Router.push('/settings/profile/verification/level-2-verification')} buttonLabel="try again" title='Level 2 Verification' >Picture of ID</SettingsOptionComponent>}
                    

                    {levelThreeVerificationStatus?.data === null && <SettingsOptionComponent onClick={() => Router.push('/settings/profile/verification/level-3-verification')} buttonLabel="verify" title='Level 3 Verification' >Selfie holding ID</SettingsOptionComponent>}
                    {levelThreeVerificationStatus?.data?.status === "pending" && <SettingsOptionComponent disabled buttonLabel={levelTwoVerificationStatus?.data?.status} title='Level 3 Verification' >Selfie holding ID</SettingsOptionComponent>}
                    {levelThreeVerificationStatus?.data?.status === "approved" && <SettingsOptionComponent disabled buttonLabel="verified" title='Level 3 Verification' >Selfie holding ID</SettingsOptionComponent>}
                    {levelThreeVerificationStatus?.data?.status === "declined" && <SettingsOptionComponent onClick={() => Router.push('/settings/profile/verification/level-3-verification')} buttonLabel="try again" title='Level 3 Verification' >Selfie holding ID</SettingsOptionComponent>}
                     */}
                    
                </Box>
                
                                {/* this is where the form starts from */}
                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    <Box 
                        background={'#FFFFFF'}
                        width={{ lg: "50%", base: '100%' }}
                        justifyContent={"space-between"}
                        p={"20px"}
                    >

                        <Flex justifyContent="space-between" fontSize="14px" color="rgba(0, 0, 0, 0.75)" fontWeight="500">
                            <Text >Old Phone Number</Text>
                            <Text>08141994081</Text>
                        </Flex>
                        <Text fontSize="14px" mt="12px" color="rgba(0, 0, 0, 0.75)" fontWeight="500">Please input the new Phone Number you would like to use.</Text>
                        
                        <Formik
                            initialValues={{name: "", accountName: "", accountNumber: "", code: "" }}

                            onSubmit={async (values:any) => {                                
                                // let res = values.name
                                // let filteredBank =  getBanks?.filter(function(bank:any) {
                                //     return bank.bankName === res;
                                // });
                                // let codeValue = filteredBank.map((code: any) => code?.bankCode)

                                // let newItem = codeValue[0]


                                // const data = {
                                //     ...values,
                                //     accountNumber: values.accountNumber.toString(),
                                //     code: newItem
                                // }
                                // const response:any = await addBank(data)
                                // if (response?.data?.status == 200 || response?.data?.status == 201 ) {
                                //     appAlert.success(response?.data?.message)
                                //     // fetchAllUsersBank.refetch()
                                //     Router.back()
                                // } else {
                                //         appAlert.error(response?.error?.data?.message)
                                //     } 
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
                                        
                                        
                                        
                                        <Field name='accountNumber' validate={validateAccountNumber}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.accountNumber && form.touched.accountNumber}>
                                                    <FormLabel>New Phone Number</FormLabel>
                                                    <Input {...field} type="number" placeholder="215xxxxx900"/>
                                                    <FormErrorMessage>{form.errors.accountNumber}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                                


                                    </VStack>
                                    <Button mt="24px" isLoading={isSubmitting} type="submit" p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} >
                                        Next
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

export default Verification