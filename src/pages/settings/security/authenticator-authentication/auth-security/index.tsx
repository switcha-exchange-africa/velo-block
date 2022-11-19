import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Flex, Heading, HStack, Show, Text, VStack,    
} from "@chakra-ui/react";
import Authy from "../../../../../../public/assets/svgs/authy.svg"
import GoogleAuth from "../../../../../../public/assets/svgs/googleAuth.svg"
import DashboardLayout from "../../../../../layouts/dashboard/DashboardLayout";
import MainAppButton from "../../../../../components/buttons/MainAppButton";
import Image from "next/image";
import { useGenerate2faMutation } from "../../../../../redux/services/2fa.service";
import { useState } from "react";
import appAlert from "../../../../../helpers/appAlert";
import { useAppDispatch } from "../../../../../helpers/hooks/reduxHooks";
import { setAuthSecurity } from "../../../../../redux/features/accountSettings/accounSettingsSlice";

const AuthSecurity = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const [generateKey] = useGenerate2faMutation()
    const [loading, setLoading] = useState({
        googleAuth: false,
        authy: false
    })


    const handleKeyGeneration = async (value: number) => {
        if (value === 1) {
            setLoading({googleAuth: true, authy: false})
        } else setLoading({googleAuth: false, authy: true})
        const response = await generateKey()
        if (response?.data?.status === 200 || response?.data?.status === 201) {
            if (value === 1) {
                setLoading({googleAuth: false, authy: false})
            } else setLoading({googleAuth: false, authy: false})
            appAlert.success(response?.data?.message) 
            console.log(response.data.data)
            dispatch(setAuthSecurity({
                secretKey: response?.data?.data?.secret,
                url: response?.data?.data?.url
            }))
            // router.push("/settings/security/authenticator-authentication/auth-security")
        } else {
            if (value === 1) {
                setLoading({googleAuth: false, authy: false})
            } else setLoading({googleAuth: false, authy: false})
            
            appAlert.error(response?.data?.message)    
        }
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
              ml={'1rem'}>Authenticator Authentication</Heading>
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
            <VStack  gap={"2rem"} bg={'white'}  px="20px" w={{ md: '90%', base: '100%' }}>
              <Text fontSize={{ md: 'md', base: 'sm' }}  pt='4'  textAlign={"left"} w="100%">
                How would you like to receive your security code?
              </Text>
              

                <Flex direction={{ md: 'row', base: 'column' }} alignItems={{ md: 'center', base: 'center' }} justifyContent={"space-between"}  w="100%">
                    <Box w={{ md: '47%', base: '85%' }} mb={{ md: '0%', base: '30px' }} p="20px" boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.4)"} borderRadius={"5px"} bg="white">
                        <Box pb="20px" mb="24px" borderBottom={"2px solid rgba(51, 51, 51, 0.05)"}>
                            <Heading size='md' textAlign={"center"} fontSize="18px"> Google Authenticator</Heading>
                        </Box>

                          <HStack justifyContent={"center"} my="24px" w="35%" mx="auto">
                              <Image src={GoogleAuth} alt="google Authenticator icon" />
                          </HStack>
                          
                        <HStack mb="24px" justifyContent={"center"}>
                            <Text fontSize={"13px"}>Security code will be generated by Google Authenticator.</Text>
                        </HStack>
                        <HStack>
                            <MainAppButton isLoading={loading.googleAuth} size={{ base: "sm", md: 'md' }} onClick={()=>handleKeyGeneration(1)} width={{ base: '100%', md: '100%' }}>Use Google Auth</MainAppButton>
                        </HStack>
                    </Box>

                    <Box w={{ md: '47%', base: '85%' }} p="20px" boxShadow={"0px 4px 15px rgba(0, 0, 0, 0.4)"} borderRadius={"5px"} bg="white">
                        <Box pb="20px" mb="24px" borderBottom={"2px solid rgba(51, 51, 51, 0.05)"}>
                            <Heading size='md' textAlign={"center"} fontSize="18px"> Authy</Heading>
                          </Box>
                          
                          <HStack justifyContent={"center"} my="24px" w="35%" mx="auto">
                              <Image src={Authy} alt="google Authenticator icon" />
                          </HStack>
                        <HStack mb="24px" justifyContent={"center"}>
                            <Text  fontSize={"13px"}>Security code will be generated by Authy.</Text>
                        </HStack>
                        <HStack>
                            <MainAppButton isLoading={loading.authy} size={{ base: "sm", md: 'md' }} onClick={()=>handleKeyGeneration(2)} width={{ base: '100%', md: '100%' }}>Authy</MainAppButton>
                        </HStack>
                    </Box>
                          
                </Flex>


             </VStack>
          
        
      </Box>
    </DashboardLayout>
  );
};

export default AuthSecurity;
