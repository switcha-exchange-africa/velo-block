import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading, Show, VStack,
  Input, FormControl, FormLabel, FormErrorMessage, Text
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { useRouter } from 'next/router'
import DashboardLayout from '../../../../layouts/dashboard/DashboardLayout'
import { useAppDispatch } from "../../../../helpers/hooks/reduxHooks"
import { setPhoneNumber } from "../../../../redux/features/accountSettings/accounSettingsSlice"

const Verification = () => {
    const Router = useRouter()
    const dispatch = useAppDispatch()
    const validatePhoneNumber = (value: string, ) => {
        let error
        if (!value) {
            error = 'Phone number should not be empty '
        }

        return error
    }
    
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
                            ml={'1rem'}>Change Phone Number</Heading>
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
                                ml={'1rem'}>Change Phone Number</Heading>
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

                        <Flex justifyContent="space-between" fontSize="14px" color="rgba(0, 0, 0, 0.75)" fontWeight="500">
                            <Text >Old Phone Number</Text>
                            <Text>08141994081</Text>
                        </Flex>
                        <Text fontSize="14px" mt="12px" color="rgba(0, 0, 0, 0.75)" fontWeight="500">Please input the new Phone Number you would like to use.</Text>
                        
                        <Formik
                            initialValues={{phoneNumber: ""}}

                            onSubmit={async (values:any) => {                                
                                dispatch(setPhoneNumber({phoneNumber: values.phoneNumber}))
                                Router.push("/settings/profile/change-phone-number/verify-change")
                                }}
                            validateOnChange
                            validateOnBlur
                            validateOnMount
                        >
                            {({
                                isSubmitting,
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
                                    <Flex>
                                        <Button mt="24px" mr="20px" onClick={() => Router.back()} p={"11px 22px"} color="#FB5E04" bg="white" cursor={"pointer"} borderRadius={"5px"} >
                                            Cancel
                                        </Button>
                                    
                                        <Button mt="24px" isLoading={isSubmitting} type="submit" p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} >
                                            Next
                                        </Button>
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