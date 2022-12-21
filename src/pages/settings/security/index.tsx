import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Flex, Heading, Show, VStack
} from "@chakra-ui/react";
import SettingsOptionComponent from "../../../components/dashboard/settings/SettingsOptionComponent";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import { useGetUserQuery } from "../../../redux/services/auth.service";
import { useGetTransactionPinQuery } from "../../../redux/services/transactions.service";

const Security = () => {
  const router = useRouter();
    

  const { data: getUser } = useGetUserQuery()
  const {data: getTransactionPin} = useGetTransactionPinQuery()

  console.log("this is the user ", getTransactionPin?.data)
  
  return (
    <DashboardLayout title="Settings">
      <Box background={"#F8FAFC"} height={"100vh"} color="black" px={{ md: "10%", base: '0' }}>
        <Show above="md">
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="transparent"
            variant="solid"
            pl={"1.8rem"}
            py={"3rem"}
            onClick={() => router.back()}
            color={'black'}
          >
            Back
          </Button>

          <VStack alignItems={"start"} gap={"1rem"}>
            <Heading size="md"
              py={'2rem'}
              ml={'2rem'}>Security</Heading>
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
              <Heading size="md"
                ml={'1rem'}>Security</Heading>
            </Button>
          </Flex>
        </Show>
        <VStack alignItems={"start"} gap={"1rem"} px={{ base: '4', md: '0' }} pt={{ base: '12', md: '0' }}>
          <SettingsOptionComponent onClick={() => { router.push('/settings/security/authenticator-authentication') }} buttonLabel={getUser?.data?.authenticator === false  ? "Enable" : "Disable"} title='Two-Factor Authentication (2FA)' >{getUser?.data?.authenticator === false ? "Disabled" : "Enabled"}</SettingsOptionComponent>

          <SettingsOptionComponent onClick={() => { router.push('/settings/security/change-password') }} buttonLabel='Change' title='Login Password' >Login password is used to log in to your account</SettingsOptionComponent>

          <SettingsOptionComponent buttonLabel='Request' title='Email Change' >Email used to open the account</SettingsOptionComponent>

          <SettingsOptionComponent onClick={() => { router.push('/settings/security/withdrawal-pin') }} buttonLabel={getTransactionPin?.data === true ? null : "Enable"} title='Withdrawal Pin' >Pin for validating Withdrawals</SettingsOptionComponent>


        </VStack>
      </Box>
    </DashboardLayout>
  );
};

export default Security;
