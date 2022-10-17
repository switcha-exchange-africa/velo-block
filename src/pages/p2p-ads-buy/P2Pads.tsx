import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { extendTheme } from "@chakra-ui/react";

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
} from "@chakra-ui/react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import Progress from "./Progress";
import P2Psell from "./P2Psell";

function P2Pads() {
  const [value, setValue] = useState("1");
  const [isActive, setisActive] = useState(false);
  const handleClick = () => {
    setisActive((current) => !current);
  };
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.01,
      defaultValue: 1.53,
      min: 1,
      max: 6,
      precision: 2,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <DashboardLayout>
      <Flex h={"full"} flexDirection={"column"} overflow={"scroll"}>
        <Box fontSize={"1.5rem"} color={"#000000"} backgroundColor={"#FFFFFF"}>
          <Text fontWeight={"600"} py={"1rem"} pl={"1rem"}>
            Post Normal Ads
          </Text>
        </Box>

        <Progress/>
        <Box backgroundColor={"#FFFFFF"} w={"90%"} mx={"auto"} mt={"1rem"}>
          <Flex alignItems={"center"} height={"4rem"} fontWeight={"600"}>
            <Text
              textAlign={"center"}
              w={"50%"}
              onClick={handleClick}
              height={"100%"}
              pt={"1.1rem"}
              backgroundColor={isActive ? "#F5F5F5" : "#FFFFFF"}
            >
              I Want to Buy
            </Text>
            <Text
              textAlign={"center"}
              w={"50%"}
              height={"100%"}
              pt={"1.1rem"}
              onClick={handleClick}
              backgroundColor={isActive ? "#FFFFFF" : "#F5F5F5"}
            >
              I Want to Sell
            </Text>
          </Flex>

          <Flex h={"full"} flexDirection={"column"}>
            <Box>
              <Text color={"#8E9BAE"} pl={"2rem"}>
                Asset
              </Text>
              <RadioGroup onChange={setValue} value={value} w={['100%','100%','70%']}>
                <Stack
                  direction="row"
                  ml={"2rem"}
                  mt={"1rem"}
                  gap={"3rem"}
                  fontWeight={"600"}
                  wrap={'wrap'}
                >
                  <Radio value="1" colorScheme="orange">
                    USDT
                  </Radio>
                  <Radio value="2" colorScheme="orange">
                    BTC
                  </Radio>
                  <Radio value="3" colorScheme="orange">
                    BUSD
                  </Radio>
                  <Radio value="4" colorScheme="orange">
                    BNB
                  </Radio>
                  <Radio value="5" colorScheme="orange">
                    ETH
                  </Radio>
                  <Radio value="6" colorScheme="orange">
                    DAI
                  </Radio>
                  <Radio value="7" colorScheme="orange">
                    NGN
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box>
              <Flex
                color={"#8E9BAE"}
                pl={"2rem"}
                alignItems={"center"}
                gap={"0.5rem"}
                pt={"2rem"}
              >
                <Text>With Cash</Text>
                <InfoOutlineIcon />
              </Flex>
              <RadioGroup onChange={setValue} value={value}>
                <Stack
                  direction="row"
                  ml={"2rem"}
                  mt={"1rem"}
                  gap={"3rem"}
                  fontWeight={"600"}
                >
                  <Radio value="10" colorScheme="orange">
                    USDT
                  </Radio>
                  <Radio value="11" colorScheme="orange">
                    NGN
                  </Radio>
                  <Radio value="12" colorScheme="orange">
                    ZAR
                  </Radio>
                  <Radio value="13" colorScheme="orange">
                    KES
                  </Radio>
                  <Radio value="14" colorScheme="orange">
                    GHS
                  </Radio>
                  <Radio value="15" colorScheme="orange">
                    UGX
                  </Radio>
                  <Radio value="16" colorScheme="orange">
                    XDF
                  </Radio>
                </Stack>
                <Stack
                  direction="row"
                  ml={"2rem"}
                  mt={"1.5rem"}
                  gap={"3rem"}
                  fontWeight={"600"}
                >
                  <Radio value="17" colorScheme="orange">
                    RWF
                  </Radio>
                  <Radio value="18" colorScheme="orange">
                    TZF
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box>
              <Flex gap={"2rem"} color={"#8E9BAE"} pl={"2rem"} pt={"2rem"}>
                <Text>Your Price</Text>
                <Flex alignItems={"center"} gap={"0.5rem"}>
                  <Text>Highest Order Price</Text>
                  <InfoOutlineIcon />
                </Flex>
              </Flex>
            </Box>

            <Box>
              <Flex
                gap={"2rem"}
                fontWeight={"600"}
                pl={"2rem"}
                fontSize={"1.5rem"}
                pt={"1rem"}
              >
                <Text>N 550.47 </Text>
                <Text>N 570.47</Text>
              </Flex>
            </Box>

            <Box>
              <Text color={"#8E9BAE"} pl={"2rem"} mt={"1rem"}>
                Price
              </Text>
              <RadioGroup onChange={setValue} value={value}>
                <Stack
                  direction="row"
                  ml={"2rem"}
                  mt={"1rem"}
                  gap={"3rem"}
                  fontWeight={"600"}
                >
                  <Radio value="19" colorScheme="orange">
                    Fixed
                  </Radio>
                  <Radio value="20" colorScheme="orange">
                    Floating
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box>
              <Text color={"#8E9BAE"} pl={"2rem"} mt={"1rem"}>
                Floating Price Margin
              </Text>
              <HStack maxW="320px" mt={"0.5rem"} ml={"1rem"}>
                <Button {...inc}>+</Button>
                <Input {...input} />
                <Button {...dec}>-</Button>
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Flex
          justifyContent={"flex-end"}
          background={"#FFFFFF"}
          py={"1.5rem"}
          gap={"1rem"}
        >
          <Button mr={"2rem"} colorScheme={"orange"} onClick={P2Psell}>
            Next
          </Button>
        </Flex>
      </Flex>
    </DashboardLayout>
  );
}
export default P2Pads;
