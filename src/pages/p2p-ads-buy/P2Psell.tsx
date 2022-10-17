import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { SmallAddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  List,
  ListItem,
  UnorderedList,
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
} from "@chakra-ui/react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

const P2Psell = () => {
  const [filter, setFilter] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const banks = [
    "Access Bank Plc",
    "Citibank Nigeria",
    "Coronation Merchant Bank",
    "Ecobank Nigeria Plc",
    "FBNQuest Merchant Bank",
    "Fidelity Bank Plc",
    "First Bank of Nigeria",
    "First City Monument Bank",
    "FSDH Merchant Bank",
    "Globus Bank",
    "Guaranty Trust Bank Plc",
    "Heritage Banking Company ",
    "Jaiz Bank Plc",
    "Keystone Bank",
    "Nova Merchant Bank",
    "Polaris Bank",
    "Providus Bank",
    "Rand Merchant Bank",
    "Stanbic IBTC Bank Plc",
    "Standard Chartered",
    "Sterling Bank Plc",
    "SunTrust Bank Nigeria ",
    "TAJBank",
    "Titan Trust Bank",
    "Union Bank of Nigeria Plc",
    "United Bank for Africa Plc",
    "Unity Bank Plc",
    "Wema Bank Plc",
    "Zenith Bank Plc",
  ];

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
            <Stack my={"0.5rem"} w={"20%"}>
              <Button
                leftIcon={<SmallAddIcon />}
                variant="outline"
                borderColor="#FB5E04"
                color={"#FB5E04"}
                onClick={onOpen}
              >
                Add
              </Button>
            </Stack>
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
                  <Flex gap={"5rem"} alignItems={"center"}>
                    <Text color={"#8E9BAE"}>All payment methods</Text>
                    <Select placeholder="Select a payment method">
                      <option>RUB fiat Balance</option>
                      <option>UAH Balance</option>
                      <option>Bank of Georgia</option>
                      <option>Terabank</option>
                      <option>7-eleven</option>
                      <option>Bank Transfer(vietnam)</option>
                      <option>Bank Transfer(peru)</option>
                      <option>TBC Bank</option>
                      <option>Bank Transfer</option>
                      <option>Kuda Bank</option>
                    </Select>
                  </Flex>
                </ModalBody>

                <ModalBody>
                  <Flex gap={"6.5rem"} alignItems={"center"}>
                    <Text color={"#8E9BAE"}>All banks</Text>
                    <Input
                      id="filter"
                      name="filter"
                      type="text"
                      value={filter}
                      onChange={(event) => setFilter(event.target.value)}
                      placeholder="Enter a bank"
                      w={"50%"}
                    ></Input>
                  </Flex>
                </ModalBody>

                <Stack ml={'1rem'} fontSize={'sm'} fontWeight={'600'}>
                  {banks
                    .filter((f) => f.includes(filter) || filter === "")
                    .map((f) => (
                      <Text key={f}>{f}</Text>
                    ))}
                </Stack>
                
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

export default P2Psell;
