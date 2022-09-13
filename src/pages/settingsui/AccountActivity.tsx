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

const AccountActivity = () => {
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
        ml={'2rem'}>Account Activity</Heading>
        </Flex>
        </HStack>
      <VStack alignItems={"start"} gap={"1rem"}>
        <Heading size="md">Account Activity</Heading>
        <VStack w={"50%"} gap={"0.5rem"} alignItems={"start"}>
          <Heading size="sm">Disable your Account</Heading>
          <Text>Disabling your account will cause the following:</Text>
          <UnorderedList pl={"2rem"}>
            <ListItem>
              All trading capacities and login for vour account will be disabled
            </ListItem>
            <ListItem>
              All API keys for your account will be deleted All devices for your
              account will be deleted
            </ListItem>
            <ListItem>
              All pending withdrawals will be canceled All open orders will be
              canceled
            </ListItem>
            <ListItem>Your verified information Will not be deleted</ListItem>
          </UnorderedList>
          <Text>
            Once your account is disabled. vou will not be able to begin the
            reactivation process until at least two hours have passed
          </Text>
        </VStack>
        <MainAppButton isLoading={false} width={"sm"}>
          Disable this Account
        </MainAppButton>
      </VStack>
    </Box>
  );
};

export default AccountActivity;
