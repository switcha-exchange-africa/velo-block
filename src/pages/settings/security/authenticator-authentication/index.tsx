import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Flex, Heading, Show, Text, VStack
} from "@chakra-ui/react";
import SettingsOptionComponent from "../../../../components/dashboard/settings/SettingsOptionComponent";
import DashboardLayout from "../../../../layouts/dashboard/DashboardLayout";
import { useEnable2faMutation } from "../../../../redux/services/2fa.service";
import { useState } from "react";

const AuthenticatorAuthenticationPage = () => {
  const router = useRouter();
  const [enable2fa] = useEnable2faMutation()

  const [enable, setEnable] = useState(false)

  const handleGoogleAuth = async () => {
    const resp = await enable2fa()
    if (resp?.data?.status === 200 | resp?.data?.status === 201) {
      console.log(resp?.data?.message)  
    } else {

    }
    
  }
  
  
  return (
    <DashboardLayout title="Authenticator Authentication">
      <Box background={"#F8FAFC"} height={"100vh"} color="black" px={{ md: "10%", base: '0' }}>
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
              ml={'1rem'}>Two-Factor Authentication (2FA)</Heading>
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

        <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }}>
          <VStack alignItems={"start"} gap={"1rem"} bg={'white'}  px="4">
            <Text fontSize={{ md: 'md', base: 'sm' }}  pt='4' >
              Enter the OTP code (which will be generated on the app) every time{" "}
              <br />
              you withdraw money or release a transaction to protect your account.
            </Text>
            <SettingsOptionComponent buttonLabel='Enable' title='Google Authenticator/Authy (Recommended)' onClick={handleGoogleAuth}>
              <Text>Protect your account and transactions</Text>
              <Text>Having trouble?</Text>
            </SettingsOptionComponent>


            <Box w="100%" mx="4px" p="1px" bg="rgba(0, 0, 0, 0.25)"></Box>
            
            <SettingsOptionComponent buttonLabel='Enable' title='Phone Number Verification'>
              <Text >Protect your account and transactions</Text>
            </SettingsOptionComponent>
          </VStack>
        </Box>

      </Box>
    </DashboardLayout>
  );
};

export default AuthenticatorAuthenticationPage;
