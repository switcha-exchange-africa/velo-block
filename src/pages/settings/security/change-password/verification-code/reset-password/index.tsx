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
import { useState } from "react"
// import appAlert from "../../../../../../helpers/appAlert"
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout"

const ResetPassword = () => {
    const Router = useRouter()


    const [passwordChecks, setPasswordChecks] = useState<string[]>([])
    const [passwordChecksPassed, setPasswordChecksPassed] = useState<string[]>([])

    const validatePassword = (value: string,) => {
        let error
        let passwordChecks: string[] = []
        if (!value) {
            error = 'Password must Contain '
        } if (value.length < 8) {
            var index = passwordChecksPassed.indexOf('At least 8 characters');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least 8 characters');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least 8 characters')) {
                passwordChecksPassed.push('At least 8 characters')
                setPasswordChecksPassed(passwordChecksPassed)
            }
        }
        if (!/[A-Z]+/g.test(value)) {
            var index = passwordChecksPassed.indexOf('At least one upper case character');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least one upper case character');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least one upper case character')) {
                passwordChecksPassed.push('At least one upper case character')
                setPasswordChecksPassed(passwordChecksPassed)
            }
        } if (!/[0-9]+/i.test(value)) {
            var index = passwordChecksPassed.indexOf('At least one number');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least one number');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least one number')) {
                passwordChecksPassed.push('At least one number')
                setPasswordChecksPassed(passwordChecksPassed)
            }
        } if (!/\W|_/i.test(value)) {
            var index = passwordChecksPassed.indexOf('At least one special character (!@#&$)');
            if (index > -1) {
                passwordChecksPassed.splice(index, 1);
            }
            error = 'Password must Contain '
            passwordChecks.push('At least one special character (!@#&$)');
            setPasswordChecks(passwordChecks)
        } else {
            if (!passwordChecksPassed.includes('At least one special character (!@#&$)')) {
                passwordChecksPassed.push('At least one special character (!@#&$)')
                setPasswordChecksPassed(passwordChecksPassed)
            }

        }
        setPasswordChecks(passwordChecks)

        return error
    }


    const validateConfirmPassword = (value: any) => {
        let error
        if (!value) {
            error = 'Required Field'
        } else if (value !== passwordChecksPassed) {
            error = "Password do not match"
        }
        return error
    }

    console.log("password check ", passwordChecks)

    

    return (
        <DashboardLayout title="Add bank account">
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "10%", base: '0' }} >
                <Show above='md'>
                    <Button
                        onClick={() => Router.push("/settings/security")}
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
                        <Heading size="md"  ml={'1rem'}>Change Password </Heading>
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
                                Change Password
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
                       
                        <Text fontSize="14px" color="rgba(0, 0, 0, 0.75)">Input the new password you want for your account</Text>

                        <Formik
                            initialValues={{password: "", confirmPassword: ""}}

                            // let password =
                            onSubmit={async (values:any) => {                                

                                const data = {
                                    ...values,
                                
                                }
                                console.log(data)
                                // const response:any = await addBank(data)
                                // if (response?.data?.status == 200 || response?.data?.status == 201 ) {
                                //     appAlert.success(response?.data?.data?.message)
                                //     fetchAllUsersBank.refetch()
                                //     Router.back()
                                // } else {
                                //     console.log(response?.error?.data?.message)
                                //         appAlert.error(response?.error?.data?.message)
                                //     } 
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
                                        
                                    
                                        <Field name='password' validate={validatePassword}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.password && form.touched.password}>
                                                    <FormLabel>New Passoword</FormLabel>
                                                    <Input {...field} type="text" placeholder="*********"/>
                                                    {form.errors.password || passwordChecks && <Text fontWeight='light' mt='2' mb={passwordChecks.length >= 0 || passwordChecksPassed.length >= 0 ? '8' : '1'}>{form.errors.password}</Text>}

                                                    {passwordChecksPassed && passwordChecksPassed.map((p: any,) => {
                                                        return (<Text key={p} fontSize='sm' color='secondaryColor.900' >{'✓ ' + p}</Text>)
                                                    })}
                                                    {form.errors.password && passwordChecks.map((p: any,) => {
                                                        if (passwordChecksPassed.includes(p)) {
                                                            return (<Text key={p} fontSize='sm' color='secondaryColor.900'>{'✓ ' + p}</Text>)
                                                        } else {
                                                            return (<FormErrorMessage key={p} >{'✕ ' + p}</FormErrorMessage>)
                                                        }

                                                    })}
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='confirmPassword' validate={validateConfirmPassword}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                                                    <FormLabel>New Passoword</FormLabel>
                                                    <Input {...field} type="text" placeholder="*********" />
                                                    <FormErrorMessage>{'✕' + form.errors.confirmPassword}</FormErrorMessage>
                                                    {/* {form.errors.password || passwordChecks && <Text fontWeight='light' mt='2' mb={passwordChecks.length >= 0 || passwordChecksPassed.length >= 0 ? '8' : '1'}>{form.errors.password}</Text>}

                                                    {passwordChecksPassed && passwordChecksPassed.map((p: any,) => {
                                                        return (<Text key={p} fontSize='sm' color='secondaryColor.900' >{'✓ ' + p}</Text>)
                                                    })}
                                                    {form.errors.password && passwordChecks.map((p: any,) => {
                                                        if (passwordChecksPassed.includes(p)) {
                                                            return (<Text key={p} fontSize='sm' color='secondaryColor.900'>{'✓ ' + p}</Text>)
                                                        } else {
                                                            return (<FormErrorMessage key={p} >{'✕ ' + p}</FormErrorMessage>)
                                                        }

                                                    })} */}
                                                </FormControl>
                                            )}
                                        </Field>
                                        
                                    </VStack>


                                    <Flex alignItems="center">
                                        <Button mt="24px" mr="36px" fontSize="14px"  isLoading={isSubmitting} type="submit" p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} >
                                            Change password
                                        </Button>
                                        <Button mt="24px" fontSize="14px"  isLoading={isSubmitting} bg="transparent" onClick={() => Router.push("/settings/security")} p={"11px 22px"} color="#FB5E04" border="1px solid #FB5E04" cursor={"pointer"} borderRadius={"5px"} >
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

export default ResetPassword
