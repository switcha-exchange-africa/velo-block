import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Flex, Heading, Show, VStack
} from "@chakra-ui/react";
import SettingsOptionComponent from "../../../components/dashboard/settings/SettingsOptionComponent";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";

const Security = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
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
              ml={'1rem'}>Security</Heading>
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
          <SettingsOptionComponent onClick={() => { router.push('/settings/security/authenticator-authentication') }} buttonLabel='Enable' title='Authentication Authenticator' >Disabled</SettingsOptionComponent>

          <SettingsOptionComponent buttonLabel='Change' title='Login Password' >Login password is used to log in to your account</SettingsOptionComponent>

          <SettingsOptionComponent buttonLabel='Request' title='Email Change' >Email used to open the account</SettingsOptionComponent>

        </VStack>
      </Box>
    </DashboardLayout>
  );
};

export default Security;
