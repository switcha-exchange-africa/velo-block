import React from "react";
import { extendTheme, HStack } from "@chakra-ui/react";
import { useState } from "react";
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
  Button,
  Text,
  Flex,
  Textarea,
  useDisclosure,
  Checkbox,
  CheckboxGroup,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { Step, Steps, useSteps } from "chakra-ui-steps";

const P2Psell = () => {
  // const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];
  // function App() {
  //   const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
  //     initialStep: 0
  //   });

  //   console.log(activeStep);

  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const theme = extendTheme({
    components: {
      Checkbox: {
        parts: ["control"],
        baseStyle: {
          control: {
            _checked: {
              _disabled: {
                bg: "orange.100",
              },
            },
          },
        },
      },
    },
  });
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
              Remarks(Optional)
            </Text>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Please do not Include any crypto-related words, such as crypto, P2P, C2C, BTC,USDT, ETH etc."
              size="sm"
              w="95%"
              borderRadius={"0.2rem"}
              letterSpacing={"0.1rem"}
            />
          </Box>

          <Box ml={"2rem"}>
            <Text color={"#8E9BAE"} py={"0.5rem"}>
              Auto Reply (Optional)
            </Text>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Auto reply message will be sent to the counterparty once the order is created"
              size="sm"
              w="95%"
              borderRadius={"0.2rem"}
              letterSpacing={"0.1rem"}
            />
          </Box>

          <Box ml={"2rem"}>
            <Text color={"#8E9BAE"} py={"1rem"}>
              Counterparty Conditions
            </Text>
            <Stack spacing={3} direction="column" color={"#000000"}>
              <Checkbox colorScheme={"orange"}>Completed KYC</Checkbox>
              <Checkbox colorScheme={"orange"}>Registered 0 Days ago</Checkbox>
              <Checkbox colorScheme={"orange"}>
                Holdings more than 0.01 BTC
              </Checkbox>
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
                  Confirm to post
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Flex
                    fontSize={"sm"}
                    py={"0.5rem"}
                    justifyContent={"space-between"}
                    fontWeight={"700"}
                  >
                    <Box>
                      <Text color={"#8E9BAE"}>Type</Text>
                      <Text>Buy</Text>
                    </Box>
                    <Box>
                      <Text color={"#8E9BAE"}>Asset</Text>
                      <Text>USDT</Text>
                    </Box>
                    <Box>
                      <Text color={"#8E9BAE"}>Currency</Text>
                      <Text>NGN</Text>
                    </Box>
                  </Flex>
                </ModalBody>
                <ModalBody>
                  <Flex
                    fontSize={"sm"}
                    py={"0.5rem"}
                    justifyContent={"space-between"}
                    fontWeight={"700"}
                  >
                    <Box>
                      <Text color={"#8E9BAE"}>Price Type</Text>
                      <Text>Floating</Text>
                    </Box>
                    <Box>
                      <Text color={"#8E9BAE"}>Floating Price Margin</Text>
                      <Text>99.97%</Text>
                    </Box>
                    <Box>
                      <Text color={"#8E9BAE"}>Floating</Text>
                      <Text>484.85 NGN</Text>
                    </Box>
                  </Flex>
                </ModalBody>

                <ModalBody>
                  <Flex
                    fontSize={"sm"}
                    py={"0.5rem"}
                    justifyContent={"space-between"}
                    fontWeight={"700"}
                  >
                    <Box>
                      <Text color={"#8E9BAE"}>Order Limit</Text>
                      <Text>
                        20,000.00 NGN- <br />
                        200,000.00 NGN
                      </Text>
                    </Box>
                    <Box>
                      <Text color={"#8E9BAE"}>Total Trading Amount</Text>
                      <Text>2,000.00 USDT</Text>
                    </Box>
                  </Flex>
                </ModalBody>

                <ModalBody mt={"0.5rem"}>
                  <Flex
                    fontSize={"sm"}
                    py={"0.5rem"}
                    justifyContent={"space-between"}
                    fontWeight={"700"}
                  >
                    <Box>
                      <Text color={"#8E9BAE"}>Counterpart Conditions</Text>
                      <Text>Completed KYC</Text>
                    </Box>
                    <Box>
                      <Text color={"#8E9BAE"}>Payment Time Limit</Text>
                      <Text>15 min</Text>
                    </Box>
                  </Flex>
                </ModalBody>

                <ModalBody>
                  <Flex
                    fontSize={"sm"}
                    py={"0.5rem"}
                    justifyContent={"space-between"}
                    fontWeight={"700"}
                  >
                    <Box>
                      <Text color={"#8E9BAE"}>Payment Method</Text>
                      <Text>
                        Kuda Bank
                        <br /> Bank Transfer
                      </Text>
                    </Box>
                  </Flex>
                </ModalBody>

                <ModalBody>
                  <Flex background={"#FFFFFF"} py={"1.5rem"} gap={"1rem"} >
                    <Button variant="outline" w={'100%'}>
                      Cancel
                    </Button>
                    <Button
                      mr={"2rem"}
                      colorScheme={"orange"}
                      w={'100%'}
                    >
                      Continue to Post
                    </Button>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>

          <Box ml={"2rem"}>
            <Text color={"#8E9BAE"} py={"1rem"}>
              Status
            </Text>
          </Box>
        </Box>
        <Flex
          justifyContent={"flex-end"}
          background={"#FFFFFF"}
          py={"1.5rem"}
          gap={"1rem"}
        >
          <Button variant="outline" >
            Previous
          </Button>
          <Button mr={"2rem"} colorScheme={"orange"} onClick={onOpen}>
            Post
          </Button>
        </Flex>
      </Flex>
    </DashboardLayout>
  );
};

export default P2Psell;
