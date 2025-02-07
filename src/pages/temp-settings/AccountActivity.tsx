import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import MainAppButton from "../../components/buttons/MainAppButton";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Heading, ListItem, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList, useDisclosure, VStack
} from "@chakra-ui/react";

const AccountActivity = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Heading size="md">Account Activity</Heading>
        <VStack w={"50%"} gap={"0.5rem"} alignItems={"start"}>
          <Heading size="sm">Disable your Account</Heading>
          <Text>Disabling your account will cause the following:</Text>
          <UnorderedList pl={"2rem"}>
            <ListItem>
              All trading capacities and login for vour account will be disabled
            </ListItem>
            <ListItem>All API keys for your account will be deleted</ListItem>
            <ListItem>All devices for your account will be deleted</ListItem>
            <ListItem>All open orders will be canceled</ListItem>
            <ListItem>All open orders will be canceled</ListItem>
            <ListItem>Your verified information Will not be deleted</ListItem>
          </UnorderedList>
          <Text>
            Once your account is disabled. vou will not be able to begin the
            reactivation process until at least two hours have passed
          </Text>
        </VStack>
        <MainAppButton isLoading={false} width={"sm"} onClick={onOpen}>
          Disable this Account
        </MainAppButton>
      </VStack>

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.800"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent background="white" color="black">
          <ModalHeader textAlign={"center"}>
            <Heading size="md">Disable your Account</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text mb={"30px"}>
              Are you sure you want to disable your account? You will lose all
              you information, trades and everything related to the account.
            </Text>
            <Text>This process is NOT REVERSIBLE</Text>
          </ModalBody>

          <ModalFooter>
            <MainAppButton isLoading={false} width={"sm"}>
              Disable account
            </MainAppButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AccountActivity;
