import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ArrowBackIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Box, Button, Flex, Heading, HStack, Show, Text, VStack,  
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,  
} from "@chakra-ui/react";
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout";
import Image from "next/image";
import { Field, Form, Formik } from "formik"
import { useValid2faMutation } from "../../../../../../redux/services/2fa.service";
import { useAppSelector } from "../../../../../../helpers/hooks/reduxHooks";
import QRCode from 'qrcode'
import { useEffect, useState } from "react";


const AuthVerification = () => {
    const { secretKey, url } = useAppSelector((state) => state.accountSettings)
    
    const router = useRouter();
    const [verify2fa] = useValid2faMutation()
    const [qrSrc, setQrSrc] = useState("")

    useEffect(() => {
        QRCode.toDataURL(url).then((data) => {
            setQrSrc(data)
        })
    }, [])
    
    


    const validateCode = (value: string, ) => {
        let error
        if (!value) {
            error = 'Required Field'
        }
        return error
    }

  
  return (
    <DashboardLayout title="Authenticator Authentication">
      <Box background={"#F8FAFC"} height={"100vh"} color="black" px={{ md: "5%", base: '0' }}>
        <Show above="md">
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="transparent"
            variant="solid"
            pl={0}
            py={"3rem"}
            onClick={() => router.back()}
            color={'black'}
          >
            Back
          </Button>

          <VStack alignItems={"start"} gap={"1rem"}>
            <Heading size="md"
              py={'2rem'}
              ml={'2rem'}>Enable Google Authenticator Authentication</Heading>
          </VStack>
        </Show>


        <Show below='sm'>
          <Flex justifyContent={'start'} bg={'white'} w={'full'}>
            <Button
              onClick={() => router.back()}
              leftIcon={<ArrowBackIcon />}
              colorScheme="transparent"
              variant="solid"
              pl={0}
              py={"2rem"}
              color={'black'}
              ml={'2'}
            >
              Back
              <Heading size="md" textAlign={'start'}
                ml={'1rem'}>Authentication<br />Authenticator</Heading>
            </Button>
          </Flex>
        </Show>


          {/* <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }}> */}
            <VStack  gap={"2rem"} bg={'white'}  px="35px" w={{ md: '90%', base: '100%' }}>
              <Text fontSize={{ md: 'md', base: 'sm' }}  pt='4'  textAlign={"left"} w="100%">
                Scan the image with google authenticator app on your phone and enter the verification code, if you cant use a barcode use the text code instead
              </Text>
              

                <Flex direction={{ md: 'row', base: 'column' }} alignItems={{ md: 'flex-start', base: 'center' }} justifyContent={"space-between"}  w="100%">
                    <Flex w={{ md: '40%', base: '85%' }} direction="column" mb={{ md: '0%', base: '0px' }}  >
                        <HStack  my="24px" w="35%" >
                            <Image src={qrSrc} alt="google Authenticator icon" />
                        </HStack>
                          
                        <VStack mb="24px" alignItems="flex-start">
                            <Text fontSize={"14px"} color="#8E9BAE">Text Code</Text>
                            <HStack>
                                <Text fontSize={"14px"}>{secretKey}</Text>
                                <CopyIcon />
                            </HStack>  
                            
                        </VStack>
                    </Flex>

                    <Box w={{ md: '47%', base: '85%' }}>
                        <Formik
                            initialValues={{code: ""}}

                            onSubmit={async (values:any) => {                                
                                // const response = await confirmcode(values.code)
                                console.log(values)
                                try {
                                    const response = verify2fa(values.code)
                                    console.log(response)
                                } catch(e: any) {
                                    console.log(e)
                                }
                                // if (response?.data?.status === 200 || response?.data?.status === 201 || response?.data?.status === 202 ) {
                                //     appAlert.success(response?.data?.message)
                                //     dispatch(setcode({code:values.code}))
                                //     Router.push("/settings/security/change-password/verification-code")
                                // } else {
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
                                <Form>
                                    <VStack w={{ lg: '100%', md: '100%', base: '100%' }} align='start'>
                                        
                                        <Field name='code' validate={validateCode}>
                                            {({ field, form }: any) => (
                                                <FormControl  pt='4' isInvalid={form.errors.code && form.touched.code}>
                                                    <FormLabel>Verification Code</FormLabel>
                                                    <Input {...field} type="text" placeholder="*********"/>
                                                    <FormErrorMessage>{form.errors.code}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </VStack>


                                    <Flex justifyContent="flex-end" mt={{ md: '150px', base: '30px' }}>
                                        <Button mt="24px"  bg="transparent" fontSize="14px"  onClick={() => router.back()} p={"11px 22px"} color="#FB5E04" border="1px solid #FB5E04" cursor={"pointer"} borderRadius={"5px"} >
                                            Cancel
                                        </Button>
                                        <Button mt="24px" ml="36px" isLoading={isSubmitting} type="submit" p={"11px 22px"} color="white" bg="#FB5E04" cursor={"pointer"} borderRadius={"5px"} fontSize="14px"  >
                                            Verify
                                        </Button>
                                        
                                    </Flex>
                                </Form>
                            )}

                        </Formik>
                    </Box>
                </Flex>

            </VStack>
       
        
      </Box>
    </DashboardLayout>
  );
};

export default AuthVerification;
