import Link from "next/link";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import MainAppButton from "../../../components/buttons/MainAppButton";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Heading, HStack, Text, VStack
} from "@chakra-ui/react";

const Security = () => {
  const router = useRouter();
  return (
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
        <HStack
          background={"white"}
          width={"100%"}
          justifyContent={"space-between"}
          py={"12px"}
        >
          <Box>
            <Link href="/temp-settings/security/AuthPage">
              <a>
                <Heading size="sm">Authentication Authenticator</Heading>
              </a>
            </Link>
            <Text>Disabled</Text>
          </Box>
          <MainAppButton isLoading={false} size={"md"} width={"8%"}>
            Enable
          </MainAppButton>
        </HStack>
        <HStack
          background={"white"}
          width={"100%"}
          justifyContent={"space-between"}
          py={"12px"}
        >
          <Box>
            <Heading size="sm">Login Password</Heading>
            <Text>Login password is used to log in to your account</Text>
          </Box>
          <MainAppButton isLoading={false} size={"md"} width={"8%"}>
            Change
          </MainAppButton>
        </HStack>
        <HStack
          background={"white"}
          width={"100%"}
          justifyContent={"space-between"}
          py={"12px"}
        >
          <Box>
            <Heading size="sm">Email Change</Heading>
            <Text>Email used to open the account</Text>
          </Box>
          <MainAppButton isLoading={false} size={"md"} width={"8%"}>
            Request
          </MainAppButton>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Security;
