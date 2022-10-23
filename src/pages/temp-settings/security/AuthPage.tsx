import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import MainAppButton from "../../../components/buttons/MainAppButton";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Heading, HStack, Text, VStack
} from "@chakra-ui/react";

const AuthPage = () => {
  const router = useRouter();
  return (
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
        <Text>
          Enter the OTP code (which will be generated on the app) every time{" "}
          <br />
          you withdraw money or release a transaction to protect your account.
        </Text>
        <HStack
          background={"white"}
          width={"100%"}
          justifyContent={"space-between"}
          py={"12px"}
        >
          <Box>
            <Heading size="sm">Authentication Authenticator</Heading>
            <Text>Disabled</Text>
          </Box>
          <MainAppButton isLoading={false} size={"md"} width={"8%"}>
            Enable
          </MainAppButton>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AuthPage;
