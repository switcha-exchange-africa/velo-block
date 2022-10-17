import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { SmallAddIcon, SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Select,
  Image,
} from "@chakra-ui/react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import access from "../../../public/assets/images/access.png";

const Postads = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <DashboardLayout>
      <Flex h={"full"} flexDirection={"column"} overflow={"scroll"}>
        <Box fontSize={"1.5rem"} color={"#000000"} backgroundColor={"#FFFFFF"}>
          <Text fontWeight={"600"} py={"1rem"} pl={"1rem"}>
            Post Normal Ads
          </Text>
        </Box>

        <Box backgroundColor={"#FFFFFF"} width={"90%"} mx={"auto"} mt={"1rem"}>
          <Box ml={"2rem"}>
            <Text color={"#8E9BAE"} py={"0.5rem"}>
              Total Amount
            </Text>
            <InputGroup w="60%">
              <Input placeholder="0" />
              <InputRightElement children={"USDT"} pr={"2rem"} />
            </InputGroup>
          </Box>

          <Flex gap={"2rem"} my={"2rem"} mx={"2rem"}>
            <Box>
              <Text color={"#8E9BAE"} py={"0.5rem"}>
                Order Limit
              </Text>
              <InputGroup>
                <Input placeholder="5000" />
                <InputRightElement children={"USDT"} pr={"2rem"} />
              </InputGroup>
            </Box>

            <Box>
              <Text color={"#8E9BAE"} py={"0.5rem"}>
                Order Limit
              </Text>
              <InputGroup>
                <Input placeholder="75000" />
                <InputRightElement children={"USDT"} pr={"2rem"} />
              </InputGroup>
            </Box>
          </Flex>

          <Box ml={"2rem"}>
            <Text color={"#8E9BAE"} py={"0.5rem"}>
              Payment Methods
            </Text>
            <Text>Select up to 5 methods</Text>
            <Flex my={"0.5rem"} gap={"1rem"}>
              <InputGroup w="20%">
                <InputLeftElement
                  children={<Image src="/assets/images/first.png" alt="" />}
                />
                <Input placeholder="First Bank" />
                <InputRightElement children={<SmallCloseIcon />} pr={"2rem"} />
              </InputGroup>

              <InputGroup w="20%">
                <InputLeftElement
                  children={<Image src="/assets/images/access.png" alt="" />}
                />
                <Input placeholder="Access Bank" />
                <InputRightElement children={<SmallCloseIcon />} pr={"2rem"} />
              </InputGroup>
              <Button
                leftIcon={<SmallAddIcon />}
                variant="outline"
                borderColor="#FB5E04"
                color={"#FB5E04"}
                onClick={onOpen}
              >
                Add
              </Button>
            </Flex>
          </Box>

          <Box>
            <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader
                  fontWeight={"700"}
                  borderBottom={"1px solid #8E9BAE"}
                  fontSize={"14px"}
                  textAlign={"center"}
                >
                  Select Payment Method
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody borderBottom={"1px solid #8E9BAE"}>
                  <Box fontSize={"sm"} py={"0.5rem"}>
                    <Text color={"#8E9BAE"}>Recommended</Text>
                    <Text fontWeight={"bold"}>Bank Transfer</Text>
                  </Box>
                </ModalBody>
                <ModalBody mt={"1rem"}>
                  <Flex gap={"1.5rem"} alignItems={"center"}>
                    <Text color={"#8E9BAE"} fontSize={"sm"}>
                      All payment methods
                    </Text>
                    <InputGroup w={"60%"}>
                      <InputLeftElement children={<SearchIcon />} />
                      <Input placeholder="Enter a payment method" />
                    </InputGroup>
                  </Flex>
                </ModalBody>

                <ModalBody mt={"1rem"}>
                  <Flex gap={"2.5rem"} fontWeight={"bold"} fontSize={"sm"}>
                    <Stack spacing="1rem">
                      <Text>RUB fiat Balance</Text>
                      <Text>UAH Balance</Text>
                      <Text>Bank of Georgia</Text>
                      <Text>Terabank</Text>
                      <Text>7-eleven</Text>
                    </Stack>
                    <Stack spacing="1rem">
                      <Text>Bank Transfer(vietnam)</Text>
                      <Text>Bank Transfer(peru)</Text>
                      <Text>TBC Bank</Text>
                      <Text>Bank Transfer</Text>
                      <Text>Kuda Bank</Text>
                    </Stack>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>

          <Box ml={"2rem"} my={"1rem"}>
            <Text color={"#8E9BAE"} py={"0.5rem"}>
              Payment Time Limit
            </Text>
            <Select placeholder="15 min" w="30%">
              <option value="20 min">20 min</option>
              <option value="30 min">30 min</option>
            </Select>
          </Box>
        </Box>

        <Flex
          background={"#FFFFFF"}
          py={"1.5rem"}
          gap={"1rem"}
          justifyContent={"flex-end"}
        >
          <Button variant="outline">Previous</Button>
          <Button mr={"2rem"} colorScheme={"orange"}>
            Next
          </Button>
        </Flex>
      </Flex>
    </DashboardLayout>
  );
};

export default Postads;
