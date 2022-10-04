import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainAppButton from "../../../components/buttons/MainAppButton";
import { useRouter } from "next/router";

import {
  Box,
  HStack,
  IconButton,
  Text,
  Heading,
  VStack,
  Button,
  ListItem,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";

const AccountActivity = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <DashboardLayout>
      <Flex flexDirection={'column'} background={"#F8FAFC"} height={"full"} color="black" px={{ md: "10%", base: '5%' }}>
        <Flex w='full'> <Button
          onClick={() => router.back()}
          leftIcon={<ArrowBackIcon />}
          colorScheme="transparent"
          variant="solid"
          pl={0}
          py={"3rem"}
          color={'black'}
        // ml={'1rem'}
        >
          Back
        </Button></Flex>
        <VStack alignItems={{ md: "start", }} gap={"1rem"} overflowY={'scroll'}>
          <Heading size="md">Account Activity</Heading>
          <VStack w={{ lg: "50%", md: '80%', base: '99%' }} bg={'#fff'} p={{ md: '8', base: '4' }} gap={"0.5rem"} alignItems={"start"}>
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
            <MainAppButton onClick={onOpen} isLoading={false} >
              Disable this Account
            </MainAppButton>
          </VStack>

        </VStack>

        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal size={{ md: 'sm', base: 'xs' }} closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered >
          <ModalOverlay
            bg="blackAlpha.800"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent background="white" color="black" >
            <ModalHeader textAlign={"center"}>
              <Heading size="md">Disable your Account</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} textAlign={{ md: 'left', base: 'center' }}>
              <Text mb={"30px"} >
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
      </Flex>
    </DashboardLayout>
  );
};

export default AccountActivity;
