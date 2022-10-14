import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainAppButton from "../../../../components/buttons/MainAppButton";
import { useRouter } from "next/router";

import {
  Box,
  HStack,
  IconButton,
  Text,
  Heading,
  VStack,
  Button,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import DashboardLayout from "../../../../layouts/dashboard/DashboardLayout";
import SettingsOptionComponent from "../../../../components/dashboard/settings/SettingsOptionComponent";

const AuthenticatorAuthenticationPage = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
      <Box background={"#F8FAFC"} height={"100vh"} color="black" px={"10%"}>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="white"
          variant="solid"
          pl={0}
          py={"3rem"}
          color="black"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <VStack alignItems={"start"} gap={"1rem"}>
          <Heading size="md">Authentication Authenticator</Heading>
          <Text fontSize={{ md: 'md', base: 'sm' }}>
            Enter the OTP code (which will be generated on the app) every time{" "}
            <br />
            you withdraw money or release a transaction to protect your account.
          </Text>
          <SettingsOptionComponent buttonLabel='Enable' title='Authentication Authenticator' >Disabled</SettingsOptionComponent>
        </VStack>
      </Box>
    </DashboardLayout>
  );
};

export default AuthenticatorAuthenticationPage;
