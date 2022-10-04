import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainAppButton from "../../../components/buttons/MainAppButton";
import Link from "next/link";
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
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import SettingsOptionComponent from "../../../components/dashboard/settings/SettingsOptionComponent";

const Security = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
      <Box background={"#F8FAFC"} height={"100vh"} color="black" px={"10%"}>
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
          <Heading size="md">Security</Heading>
          <SettingsOptionComponent onClick={() => { router.push('/settings/security/authenticator-authentication') }} buttonLabel='Enable' title='Authentication Authenticator' >Disabled</SettingsOptionComponent>

          <SettingsOptionComponent buttonLabel='Change' title='Login Password' >Login password is used to log in to your account</SettingsOptionComponent>

          <SettingsOptionComponent buttonLabel='Request' title='Email Change' >Email used to open the account</SettingsOptionComponent>

        </VStack>
      </Box>
    </DashboardLayout>
  );
};

export default Security;
