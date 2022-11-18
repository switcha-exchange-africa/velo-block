import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show,
  HStack,
  VStack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { useRouter } from 'next/router'
import appAlert from "../../../../helpers/appAlert"
import { useAppDispatch } from "../../../../helpers/hooks/reduxHooks"
import DashboardLayout from "../../../../layouts/dashboard/DashboardLayout"
import { setOldPassword } from "../../../../redux/features/accountSettings/accounSettingsSlice"
import { useConfirmOldAccountPasswordMutation } from "../../../../redux/services/2fa.service"

const ChangePassword = () => {
    const Router = useRouter()
    const dispatch = useAppDispatch();

    const [confirmOldPassword] = useConfirmOldAccountPasswordMutation()

    const validatePassword = (value: string, ) => {
        let error
        if (!value) {
            error = 'Required Field'
        }
        return error
    }

    

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
                        Security
                    </Button>
                    
                    <HStack width={{ lg: "70%", base: '100%' }}  alignItems={"center"} justifyContent={"space-between"} py={'2rem'} gap={"1rem"}>
                        <Heading size="md"  ml={'1rem'}>Change Login password </Heading>
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
                            Security
                            <Heading size="md"
                                ml={'2rem'}>
                                Change Login Password
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
                       
                        <Text fontSize="14px" color="rgba(0, 0, 0, 0.75)">Input your old password to confirm its really you</Text>

                        <Formik
                            initialValues={{oldPassword: ""}}

                            onSubmit={async (values:any) => {                                
                                const response = await confirmOldPassword(values.oldPassword)
                                console.log(response)

                                if (response?.data?.status === 200 || response?.data?.status === 201 || response?.data?.status === 202 ) {
                                    appAlert.success(response?.data?.message)
                                    dispatch(setOldPassword({oldPassword:values.oldPassword}))
                                    Router.push("/settings/security/change-password/verification-code")
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
                                        
                                        

                                        <Field name='oldPassword' validate={validatePassword}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.oldPassword && form.touched.oldPassword}>
                                                    <FormLabel>Old password</FormLabel>
                                                    <Input {...field} type="text" placeholder="*********"/>
                                                    <FormErrorMessage>{form.errors.oldPassword}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </VStack>


                                    <Flex alignItems="center">
                                        <Button mt="24px" mr="36px" isLoading={isSubmitting} type="submit" p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} fontSize="14px"  >
                                            Next
                                        </Button>
                                        <Button mt="24px" isLoading={isSubmitting} bg="transparent" fontSize="14px"  onClick={() => Router.back()} p={"11px 22px"} color="#FB5E04" border="1px solid #FB5E04" cursor={"pointer"} borderRadius={"5px"} >
                                            Cancel
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

export default ChangePassword
