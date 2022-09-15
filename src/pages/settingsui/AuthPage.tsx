import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainAppButton from "../../components/buttons/MainAppButton";

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
  Flex
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const AuthPage = () => {
  return (
    <Box background={"#F8FAFC"} height={"100vh"} color="black" px={"10%"}>
      <HStack
            pt={'3rem'}>
       <Flex>
        <Button
        leftIcon={<ArrowBackIcon />}
        colorScheme="transparent"
        color={'black'}
        size='lg'
        variant="solid"
        pl={0}
        py={"3rem"}
      >
        Back
      </Button>
        <Heading  
        py={'1rem'}
        ml={'2rem'}>Authenticator Authentication</Heading>
        </Flex>
        </HStack>
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
