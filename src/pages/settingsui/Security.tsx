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

const Security = () => {
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
        ml={'2rem'}>Security</Heading>
        </Flex>
        </HStack>
      <VStack alignItems={"start"} gap={"1rem"}>
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