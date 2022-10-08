import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import { Grid, GridItem, Icon, useDisclosure } from "@chakra-ui/react";
import {
  InfoIcon,
  CopyIcon,
  LinkIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import Countdown from "react-countdown";

import {
  Box,
  Text,
  Image,
  Flex,
  InputGroup,
  Link,
  Button,
  Avatar,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Textarea,
  Checkbox,
  Input,
  InputRightAddon,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useState } from "react";

function Sell() {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const steps = [
    {
      label: "Initiate Lock",
      content: <Step1 action={nextStep} />,
    },
    {
      label: "Pending buyer to make payment",
      content: <Step2 action={nextStep} />,
    },
    { label: "Completed", content: <Step3 /> },
  ];

  return (
    <DashboardLayout>
      <Box width={"95%"} margin={"20px auto"} padding={["20px"]}>
        <Box background={"#fff"} padding={["20px"]}>
          <Flex justifyContent={"space-between"}>
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
          <Flex justifyContent={"space-between"} mt="20px">
            <Text fontSize={"sm"}>
              The order is created, please wait for system confirmation.{" "}
            </Text>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Text fontSize={"sm"} color={"#64748B"}>
                Time created
              </Text>
              <Text fontSize={"sm"}>2022-03-06 16:11:23</Text>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Flex flexDir="column" mt={"20px"}>
            <Steps
              activeStep={activeStep}
              labelOrientation="vertical"
              colorScheme={"orange"}
            >
              {steps.map(({ label, content }) => (
                <Step label={label} key={label}>
                  {content}
                </Step>
              ))}
            </Steps>
            {activeStep === steps.length ? (
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
            )}
          </Flex>
          <Box
            display={"flex"}
            mt={"20px"}
            flexDir={"column"}
            borderBottomRadius={"5px"}
            bg="#fff"
            height={"230px"}
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
            <Textarea placeholder="Here is a sample placeholder" size="sm" />
            <Flex
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
const Step1 = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mt={"20px"}>
      <Box mb={"20px"}>
        <Text>Confirm Order</Text>
        <Flex mt={"20px"} gap="100px">
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
          Confirm reciept of account from the buyer's account provided below.{" "}
          <InfoIcon color={"#ADB5BD"} />{" "}
        </Text>
        <Flex mt={"20px"} gap="100px">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Payment Method
            </Text>
            <Text fontSize={"lg"} color={"#FB5E04"}>
              Bank Transfer
            </Text>
          </Flex>
        </Flex>
        <Flex mt={"20px"} gap="100px">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Account Name
            </Text>
            <Text fontSize={"lg"} color={"#FB5E04"}>
              OLUMIDE OYELEYE <CopyIcon />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"}>Account Number</Text>
            <Text fontSize={"lg"}>
              2016939941 <CopyIcon color={"#64748B"} />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Bank Name
            </Text>
            <Text fontSize={"lg"}>
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
    <Box mt={"20px"}>
      <Step2Modal action={props.action} />
      <Box mb={"20px"}>
        <Text>Confirm Order</Text>
        <Flex mt={"20px"} gap="100px">
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
          Confirm reciept of account from the buyer's account provided below.{" "}
          <InfoIcon color={"#ADB5BD"} />{" "}
        </Text>
        <Flex mt={"20px"} gap="100px">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Payment Method
            </Text>
            <Text fontSize={"lg"} color={"#FB5E04"}>
              Bank Transfer
            </Text>
          </Flex>
        </Flex>
        <Flex mt={"20px"} gap="100px">
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Account Name
            </Text>
            <Text fontSize={"lg"} color={"#FB5E04"}>
              OLUMIDE OYELEYE <CopyIcon />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"}>Account Number</Text>
            <Text fontSize={"lg"}>
              2016939941 <CopyIcon color={"#64748B"} />
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap="6px">
            <Text fontSize={"md"} color={"#8E9BAE"}>
              Bank Name
            </Text>
            <Text fontSize={"lg"}>
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
    <Box mt={"20px"}>
      <Box mb={"20px"}>
        <Flex mt={"20px"} gap="100px">
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
        <Text my={"10px"}>Order Completed</Text>
        <Text fontSize={"xs"} color={"#FB5E04"}>
          Check my account
        </Text>
      </Box>
    </Box>
  );
};
export default Sell;
