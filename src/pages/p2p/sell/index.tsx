import {
  CheckCircleIcon, CopyIcon, InfoIcon, LinkIcon
} from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";

import {
  Avatar, Box, Button, Checkbox, Flex, Input, InputGroup, InputRightAddon, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalHeader, ModalOverlay, Text, Textarea
} from "@chakra-ui/react";
import { useState } from "react";

function Sell() {
  const { nextStep, activeStep } = useSteps({
    initialStep: 0,
  });

  const steps = [
    {
      label: (
        <Text width={["100px", "100px", "auto"]} fontSize={["9px", "xs", "sm"]}>
          Initiate Lock
        </Text>
      ),
      content: <Step1 action={nextStep} />,
      id: 1,
    },
    {
      label: (
        <Text width={["100px", "100px", "auto"]} fontSize={["9px", "xs", "sm"]}>
          Pending buyer to make payment
        </Text>
      ),
      content: <Step2 action={nextStep} />,
      id: 2,
    },
    {
      label: (
        <Text width={["100px", "100px", "auto"]} fontSize={["9px", "xs", "sm"]}>
          Completed
        </Text>
      ),
      content: <Step3 />,
      id: 3,
    },
  ];

  return (
    <DashboardLayout>
      <Box
        width={["full", "full", "95%"]}
        margin={"20px auto"}
        padding={["0", "0", "20px"]}
      >
        <Box background={"#fff"} padding={["20px"]}>
          <Flex wrap={"wrap"} justifyContent={"space-between"}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Sell USDT to Olu4mide
            </Text>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Text fontSize={"sm"} color={"#64748B"}>
                Order number
              </Text>
              <Text fontSize={"sm"}>2033306723458238923405</Text>
              <CopyIcon color={"#64748B"} />
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"} mt="20px" wrap={"wrap"}>
            <Flex alignItems={"center"} gap="10px">
              <Text fontSize={"sm"}>
                The order is created, please wait for system confirmation.
              </Text>
              <Box
                background={"#FB5E04"}
                borderRadius="5px"
                p="2px 10px"
                color={"#fff"}
              >
                15:00
              </Box>
            </Flex>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Text fontSize={"sm"} color={"#64748B"}>
                Time created
              </Text>
              <Text fontSize={"sm"}>2022-03-06 16:11:23</Text>
            </Box>
          </Flex>
        </Box>
        <Flex
          justifyContent={"space-between"}
          flexDir={["column-reverse", "column-reverse", "row"]}
        >
          <Flex flexDir="column" mt={"20px"}>
            <Steps
              activeStep={activeStep}
              labelOrientation="vertical"
              colorScheme={"orange"}
              responsive={false}
              width={["375px", "375px", "auto"]}
            >
              {steps.map(({ label, content, id }) => (
                <Step label={label} key={id}>
                  {content}
                </Step>
              ))}
            </Steps>
            {/* {activeStep === steps.length ? (
              <Flex p={4}>
                <Button mx="auto" size="sm" onClick={reset}>
                  Reset
                </Button>
              </Flex>
            ) : (
              <Flex width="100%" justify="flex-end">
                <Button
                  isDisabled={activeStep === 0}
                  mr={4}
                  onClick={prevStep}
                  size="sm"
                  variant="ghost"
                >
                  Prev
                </Button>
                <Button size="sm" onClick={nextStep}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Flex>
            )} */}
          </Flex>
          <Box
            display={"flex"}
            mx={["auto", "auto", "0"]}
            mt={"20px"}
            flexDir={"column"}
            width={["90%", "90%", "auto"]}
            borderBottomRadius={"5px"}
            bg="#fff"
            height={["auto", "auto", "230px"]}
            gap="5px"
          >
            <Flex gap={"5px"} backgroundColor="#F1F5F9" padding={"10px"}>
              <Avatar
                size={"sm"}
                background={"#FB5E04"}
                name="Maximus"
              ></Avatar>
              <Flex>
                <Box>
                  <Flex flexDir={"column"}>
                    <Text fontSize={"xs"}>Maximus</Text>
                    <Flex alignItems={"center"}>
                      <Text fontSize={"xs"}>Verified Merchant</Text>
                      <CheckCircleIcon
                        color={"#22C36B"}
                        w={"10px"}
                        h={"10px"}
                      />
                    </Flex>
                    <Flex gap={"50px"}>
                      <Flex flexDir={"column"}>
                        <Text fontSize={"xs"} color={"#8E9BAE"}>
                          30d Trades
                        </Text>
                        <Text fontSize={"xs"}>1534 </Text>
                      </Flex>
                      <Flex flexDir={"column"}>
                        <Text fontSize={"xs"} color={"#8E9BAE"}>
                          30d Completion Rate
                        </Text>
                        <Text fontSize={"xs"}>89.25% </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Textarea
              display={["none", "none", "flex"]}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
            <Flex
              display={["none", "none", "flex"]}
              px="10px"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text fontSize={"sm"}>Type Your Message</Text>
              <Flex
                gap={"20px"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text fontSize={"sm"} color="#FB5E04">
                  Send
                </Text>
                <LinkIcon />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </DashboardLayout>
  );
}
const Step1 = (props: any) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={"20px"} px={["10px", "10px", 0]} fontSize={["xs", "xs", "md"]}>
      <Box mb={"20px"}>
        <Text fontSize={"md"}>Confirm Order Info</Text>
        <Flex
          mt={"20px"}
          gap={["30px", "30px", "100px"]}
          wrap="wrap"
          fontSize={"md"}
        >
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Fiat Amount
            </Text>
            <Text fontSize={"lg"} color={"#FB5E04"}>
              10,000.00 NGN
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Price
            </Text>
            <Text fontSize={"lg"}>580.30 NGN</Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Crypto Amount
            </Text>
            <Text fontSize={"lg"}>17.23 USDT</Text>
          </Flex>
        </Flex>
      </Box>
      <Box mb={"20px"}>
        <Text>
          Transfer the funds to the seller’s account provided below{" "}
          <InfoIcon color={"#ADB5BD"} />{" "}
        </Text>
        <Flex mt={"20px"} gap="100px">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Payment Method
            </Text>
            <Text fontSize={["md", "md", "lg"]} color={"#FB5E04"}>
              Bank Transfer
            </Text>
          </Flex>
        </Flex>
        <Flex mt={"20px"} gap={["30px", "30px", "100px"]} wrap="wrap">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Account Name
            </Text>
            <Text fontSize={["md", "md", "lg"]} color={"#FB5E04"}>
              OLUMIDE OYELEYE <CopyIcon />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Account Number
            </Text>
            <Text fontSize={"lg"}>
              2016939941 <CopyIcon color={"#64748B"} />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Bank Name
            </Text>
            <Text fontSize={["md", "md", "lg"]}>
              Kuda <CopyIcon color={"#64748B"} />
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box mb={"20px"}>
        <Text>
          After transfering the funds, click on the “Transfered, notify seller”
          button <InfoIcon color={"#ADB5BD"} />
        </Text>
      </Box>
      <Button onClick={props.action} background={"#FB5E04"} color="#fff">
        Locked, notify buyer
      </Button>
    </Box>
  );
};
const Step2 = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [verification, setVerification] = useState(false);
  const Step2Modal = (props: any) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent padding={"10px 0"}>
          {!verification && (
            <>
              <ModalHeader textAlign={"center"} padding={"10px 0"}>
                Confirm Release
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody padding={"10px 0"}>
                <Text
                  fontSize={"sm"}
                  padding="20px 20px"
                  borderBottom={"1px solid #8E9BAE"}
                >
                  {`Attention. lease LOG IN THE RECEVING (e.g. Banks/ ewallet) ACCOUNI
              to connrm that the money has arrived in the "Available Balance"`}
                </Text>
                <Flex
                  fontSize={"xs"}
                  padding="15px 20px"
                  borderBottom={"1px solid #8E9BAE"}
                  gap="5px"
                >
                  <Checkbox
                    colorScheme="orange"
                    size={"xs"}
                    defaultChecked
                    disabled
                  ></Checkbox>
                  <Text>
                    I confirm that the payment is successiull received with
                    correct amount and sender information
                  </Text>
                </Flex>

                <Flex padding={"15px"} gap="10px">
                  <Button variant={"outline"} flex={1} bg={"#fff"}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setVerification(true)}
                    color={"#fff"}
                    flex={1}
                    bg={"#FB5E04"}
                  >
                    Confirm
                  </Button>
                </Flex>
              </ModalBody>
            </>
          )}
          {verification && (
            <>
              <ModalHeader textAlign={"center"} padding={"10px 0"}>
                Security Verification
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody padding={"10px 0"}>
                <Text fontSize={"sm"} padding="30px 20px">
                  {`To secure our account. please complete the following verification`}
                </Text>
                <Text
                  color={"rgba(0, 0, 0, 0.75)"}
                  fontSize={"xs"}
                  padding="2px 20px"
                >
                  {`Phone Number Verification code`}
                </Text>
                <InputGroup size={"sm"} padding={"2px 20px"}>
                  <Input type={"number"} />
                  <InputRightAddon>
                    <Text fontSize={"xs"}>Verification Code sent </Text>
                  </InputRightAddon>
                </InputGroup>
                <Text
                  color={"rgba(0, 0, 0, 0.75)"}
                  fontSize={"xs"}
                  padding="2px 20px"
                >
                  {`Enter the 6-digit code code sent to 090......3763`}
                </Text>

                <Text padding={"40px 20px"} color="#FB5E04">
                  Security verification unavailable?
                </Text>

                <Flex padding={"15px"} gap="10px">
                  <Button
                    onClick={props.action}
                    color={"#fff"}
                    flex={1}
                    bg={"#FB5E04"}
                  >
                    Submit
                  </Button>
                </Flex>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  return (
    <Box mt={"20px"} px={["10px", "10px", 0]} fontSize={["xs", "xs", "md"]}>
      <Step2Modal action={props.action} />
      <Box mb={"20px"}>
        <Text fontSize={"md"}>Confirm Order Info</Text>
        <Flex
          mt={"20px"}
          gap={["30px", "30px", "100px"]}
          wrap="wrap"
          fontSize={"md"}
        >
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Fiat Amount
            </Text>
            <Text fontSize={"lg"} color={"#FB5E04"}>
              10,000.00 NGN
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Price
            </Text>
            <Text fontSize={"lg"}>580.30 NGN</Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Crypto Amount
            </Text>
            <Text fontSize={"lg"}>17.23 USDT</Text>
          </Flex>
        </Flex>
      </Box>
      <Box mb={"20px"}>
        <Text>
          Transfer the funds to the seller’s account provided below{" "}
          <InfoIcon color={"#ADB5BD"} />{" "}
        </Text>
        <Flex mt={"20px"} gap="100px">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Payment Method
            </Text>
            <Text fontSize={["md", "md", "lg"]} color={"#FB5E04"}>
              Bank Transfer
            </Text>
          </Flex>
        </Flex>
        <Flex mt={"20px"} gap={["30px", "30px", "100px"]} wrap="wrap">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Account Name
            </Text>
            <Text fontSize={["md", "md", "lg"]} color={"#FB5E04"}>
              OLUMIDE OYELEYE <CopyIcon />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Account Number
            </Text>
            <Text fontSize={"lg"}>
              2016939941 <CopyIcon color={"#64748B"} />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Bank Name
            </Text>
            <Text fontSize={["md", "md", "lg"]}>
              Kuda <CopyIcon color={"#64748B"} />
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box mb={"20px"}>
        <Text>
          After transfering the funds, click on the “Transfered, notify seller”
          button <InfoIcon color={"#ADB5BD"} />
        </Text>
      </Box>
      <Button onClick={onOpen} background={"#FB5E04"} color="#fff">
        Release, I have received payment
      </Button>
    </Box>
  );
};
const Step3 = () => {
  return (
    <Box mt={"20px"} px={["10px", "10px", 0]} fontSize={["xs", "xs", "md"]}>
      <Box mb={"20px"}>
        <Flex mt={"20px"} gap={["40px", "40px", "100px"]} wrap={"wrap"}>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Fiat Amount
            </Text>
            <Text fontSize={"lg"} color={"#FB5E04"}>
              10,000.00 NGN
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Price
            </Text>
            <Text fontSize={"lg"}>580.30 NGN</Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Crypto Amount
            </Text>
            <Text fontSize={"lg"}>17.23 USDT</Text>
          </Flex>
        </Flex>
        <Text fontSize={"md"} my={"20px"}>
          Order Completed
        </Text>
        <Text fontSize={"xs"} color={"#FB5E04"}>
          Check my account
        </Text>
      </Box>
    </Box>
  );
};
export default Sell;
