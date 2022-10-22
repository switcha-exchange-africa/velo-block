import { VStack, Text, FormControl, FormLabel, Input, FormErrorMessage, Flex } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import AuthLayout from '../../../layouts/auth/AuthLayout'
import { useRouter } from "next/router";
import { useAppDispatch } from '../../../helpers/hooks/reduxHooks'
import { setFirstNameAndLastName } from '../../../redux/features/auth/authSlice'

const PersonalInformationPage1 = () => {
    const router = useRouter();

    let savedEmail = typeof window != 'undefined' && localStorage.getItem('email')
    let savedFirstName = typeof window != 'undefined' && localStorage.getItem('firstname')
    let savedLastName = typeof window != 'undefined' && localStorage.getItem('lastname')
    const dispatch = useAppDispatch();
    const validateFirstName = (value: string,) => {
        let error
        if (!value) {
            error = 'First Name is Required'
        }
        return error
    }
    const validateLastName = (value: string,) => {
        let error
        if (!value) {
            error = 'Last Name is Required'
        }
        return error
    }
    return (
        <AuthLayout>
            <VStack bg={{ md: 'appWhiteColor', base: 'transparent' }} px='8' align='start' py='20'>
                <Text fontSize='2xl' as='b' w='full' textAlign={{ md: 'left', base: 'center' }}>Personal Information</Text>

                <Flex alignItems='center' justifyContent='space-between' width='full' >
                    <Text fontSize='md' fontWeight='medium' mt='4' mr='2'>{savedEmail}</Text>
                    <Link href='/signup'>
                        <Text fontSize='md' fontWeight='medium' color='primaryColor.900' mt='4'>Change email</Text>
                    </Link>

                </Flex >

                <Formik
                    initialValues={{ firstname: `${savedFirstName ?? ''}`, lastname: `${savedLastName ?? ''}` }}

                    onSubmit={(values, _) => {
                        // localStorage.setItem('firstname', values.firstname)
                        // localStorage.setItem('lastname', values.lastname)
                        dispatch(setFirstNameAndLastName({ firstname: values.firstname, lastname: values.lastname }))
                        router.push('/signup/complete-personal-information')
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
                        <Form>
                            <VStack w={{ lg: 'xs', md: 'sm', base: 'xs' }} align='start'>
                                <Field name='firstname' validate={validateFirstName}>
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.firstname && form.touched.firstname} pt='4'>
                                            <FormLabel>Firstname</FormLabel>
                                            <Input {...field} />
                                            <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name='lastname' validate={validateLastName} >
                                    {({ field, form }: any) => (
                                        <FormControl isInvalid={form.errors.lastname && form.touched.lastname} py='4'>
                                            <FormLabel>Lastname</FormLabel>
                                            <Input {...field} />
                                            <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>



                                <MainAppButton isLoading={isSubmitting} onClick={handleSubmit}>
                                    Next
                                </MainAppButton>


                            </VStack>
                        </Form>


                    )}

                </Formik>
            </VStack>
        </AuthLayout>
    )
}

export default PersonalInformationPage1