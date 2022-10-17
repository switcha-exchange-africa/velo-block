import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Box,
  HStack,
  Input,
  useNumberInput,
  Text,
  Flex,
  Button,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import P2Psell from "./P2Psell";
import {
  InfoIcon,
  CopyIcon,
  LinkIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";

const content = <Flex py={4}>tumi</Flex>;

const steps = [
  {
    label: <Text fontSize={["9px", "xs", "sm"]} >Set Type and Price</Text>,
    content,
  },
  {
    label: (
      <Text fontSize={["9px", "xs", "sm"]} >Set Total Amount and Payment</Text>
    ),
    content,
  },
  {
    label: (
      <Text fontSize={["9px", "xs", "sm"]}>
        Set Remark and Automatic Response
      </Text>
    ),
    content,
  },
];

const StepsExample = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex flexDir="column" width="100%" mt={"1rem"}>
      <Steps
        activeStep={activeStep}
        labelOrientation={"vertical"}
        colorScheme={"orange"}
        responsive={false}
        mt={"1rem"}
        mx={'auto'}
        w={['100%','100%','70%']}
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
  );
};

export default StepsExample;
