import { ArrowBackIcon} from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading, Show,VStack,
  Input, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { useRouter } from 'next/router'
import MainAppButton from "../../../../components/buttons/MainAppButton"
import appAlert from "../../../../helpers/appAlert"
import DashboardLayout from '../../../../layouts/dashboard/DashboardLayout'
import { useChangeNumberMutation, useGetUserQuery } from "../../../../redux/services/auth.service"

const Verification = () => {
    const Router = useRouter()
     
    const validatePhoneNumber = (value: string, ) => {
        let error
        if (!value) {
            error = 'Phone number should not be empty '
        }

        return error
    }


    const getUser = useGetUserQuery()

    const [changeNumber]:any = useChangeNumberMutation()

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

                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    <Box 
                        background={'#FFFFFF'}
                        width={{ lg: "50%", base: '100%' }}
                        justifyContent={"space-between"}
                        p={"20px"}
                    >

                        <Formik
                            initialValues={{phoneNumber: "" }}

                            onSubmit={async (values:any) => {             
                                const data = {
                                    phone: values.phoneNumber
                                }

                                const resp = await changeNumber(data)
                                if (resp?.data?.status === 200) {
                                    appAlert.success(resp?.data?.message)
                                    getUser.refetch()
                                    Router.push("/settings/profile/add-phone-number/success")
                                } else if (resp?.data?.status == 401) {
                                    Router.push("/signin")
                                } else {
                                    appAlert.error(resp?.error?.data?.message)
                                }
                            }}
                            validateOnChange
                            validateOnBlur
                            validateOnMount
                        >
                            {({
                                isSubmitting,
                                handleSubmit
                            }) => (
                                <Form  >
                                    <VStack w={{ lg: '100%', md: '100%', base: '100%' }} align='start' >
                                        <Field name='phoneNumber' validate={validatePhoneNumber}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}>
                                                    <FormLabel fontSize="18px">New Phone Number</FormLabel>
                                                    <Input {...field} type="text" pattern="[0-9]*" placeholder="0000000"/>
                                                    <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </VStack>


                                    <Flex justifyContent="center" mt="24px">
                                        <Button  mr="20px" onClick={() => Router.back()}  p={"11px 22px"} color="#FB5E04" bg="white" cursor={"pointer"}  borderRadius={"5px"} >
                                            Back
                                        </Button>
                                    
                                        <MainAppButton  isLoading={isSubmitting} onClick={handleSubmit} backgroundColor="#FB5E04" width="150px" >
                                            Add Phone
                                        </MainAppButton>

                                    </Flex>
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