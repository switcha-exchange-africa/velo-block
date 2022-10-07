import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Text,
  Image,
  Flex,
  Link,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Select,
  Button,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function P2P() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DashboardLayout>
      <Box
        background={"#fff"}
        width={"95%"}
        height={"100vh"}
        margin={"20px auto"}
        padding={["20px"]}
      >
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalContent maxW="73rem" top={"20rem"} left={"7rem"}>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Box>
                  <Box display={"flex"} alignItems={"center"} gap="5px">
                    <Avatar
                      size={"md"}
                      background={"#FB5E04"}
                      name="Maximus"
                    ></Avatar>
                    <Box display={"flex"} gap="10px">
                      <Box display={"flex"} alignItems={"center"} gap="3px">
                        <Text fontSize={"sm"}>Maximus</Text>
                        <CheckCircleIcon
                          color={"#22C36B"}
                          w={"10px"}
                          h={"10px"}
                        />
                      </Box>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap="3px"
                        fontSize={"xs"}
                        color="#8E9BAE"
                      >
                        <Text>1534 orders</Text>|<Text>92.19% completion</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box fontSize={"xs"} marginLeft="30px">
                    <Table variant="unstyled">
                      <Tr>
                        <Td>
                          <Box display={"flex"} gap="10px">
                            <Text>Price</Text>
                            <Text>580.89NGN</Text>
                          </Box>
                        </Td>
                        <Td>
                          <Box display={"flex"} gap="10px">
                            <Text>Available</Text>
                            <Text>963.16 USDT</Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Box display={"flex"} gap="10px">
                            <Text>Payment Time Limit</Text>
                            <Text>15 mins</Text>
                          </Box>
                        </Td>
                        <Td>
                          <Box display={"flex"} gap="10px">
                            <Text>Buyer’s payment method</Text>
                            <Text
                              fontSize={"10px"}
                              textAlign={"center"}
                              background={"#FFF7F2"}
                              color={"#FB5E04"}
                              borderRadius={"3px"}
                            >
                              Bank Transfer
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr></Tr>
                    </Table>
                    <Text mt={"10px"} ml={"25px"} color="#FB5E04">
                      Terms and Condition
                    </Text>
                    <Text ml={"25px"} mt="10px" color={"#8E9BAE"}>
                      Always online making fast payment
                    </Text>
                  </Box>
                </Box>
                <Box borderLeft={"1px solid  #E2E8F0"} width="600px">
                  <Box width={"300px"} margin={"0px auto"}>
                    <Box mb={"10px"}>
                      <Text fontSize={"xs"}>I want to buy </Text>
                      <InputGroup size="sm">
                        <Input
                          borderTopLeftRadius={"5px"}
                          borderBottomLeftRadius={"5px"}
                          placeholder="Enter amount NGN"
                          borderRight={"none"}
                        />
                        <InputRightAddon background={"none"} borderLeft="0px">
                          <Flex gap={"20px"}>
                            <Text fontSize={"sm"}>All</Text>
                            <Text fontSize={"sm"}>USDT</Text>
                          </Flex>
                        </InputRightAddon>
                      </InputGroup>
                    </Box>
                    <Box mb={"10px"}>
                      <Text fontSize={"xs"}>I will recieve </Text>
                      <InputGroup size="sm">
                        <Input
                          borderTopLeftRadius={"5px"}
                          borderBottomLeftRadius={"5px"}
                          placeholder="Enter amount NGN"
                          borderRight={"none"}
                        />
                        <InputRightAddon background={"none"} borderLeft="0px">
                          <Flex gap={"20px"}>
                            <Text fontSize={"sm"}>All</Text>
                            <Text fontSize={"sm"}>NGN</Text>
                          </Flex>
                        </InputRightAddon>
                      </InputGroup>
                    </Box>
                    <Box>
                      <Text fontSize={"xs"}>Payment Method </Text>
                      <Flex
                        alignItems={"center"}
                        justifyContent="space-between"
                        border={"1px solid #E2E8F0"}
                        padding="5px 10px"
                        borderRadius={"5px"}
                        mb={"10px"}
                      >
                        <Box display={"flex"} gap="10px" alignItems={"center"}>
                          <Text
                            fontSize={"10px"}
                            textAlign={"center"}
                            background={"#FFF7F2"}
                            color={"#FB5E04"}
                            borderRadius={"3px"}
                          >
                            Bank Transfer
                          </Text>
                          <Text fontSize={"xs"}>1522574741</Text>
                        </Box>
                        <Box>
                          <Text fontSize={"sm"}>NGN</Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex gap={"10px"} justifyContent="center">
                        <Button>Cancel</Button>
                        <Button color={"#fff"} background={"#22C36B"}>
                          Buy USDT
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Flex justifyContent={"space-between"} alignItems="center">
          <Box display={"flex"} gap="20px" alignItems={"center"}>
            <Text fontSize={"md"}>Buy</Text>
            <Image
              src="/assets/images/separator.png"
              height={"18px"}
              alt="separator"
            />
            <Text fontSize={"md"}>Sell</Text>
          </Box>
          <Link>
            <Text
              textDecoration={"underline"}
              color={"#8B8CA7"}
              fontSize={"small"}
            >
              See all
            </Text>
          </Link>
        </Flex>
        <Tabs variant="unstyled" mt={["20px"]}>
          <TabList gap={"60px"}>
            <Tab
              _selected={{
                color: "black",
                borderBottom: "1px solid #FB5E04",
              }}
              padding={0}
              fontSize={"small"}
            >
              BTC
            </Tab>
            <Tab
              _selected={{
                color: "black",
                borderBottom: "1px solid #FB5E04",
              }}
              padding={0}
              fontSize={"small"}
            >
              ETH
            </Tab>
            <Tab
              _selected={{
                color: "black",
                borderBottom: "1px solid #FB5E04",
              }}
              padding={0}
              fontSize={"small"}
            >
              USDT
            </Tab>
            <Tab
              _selected={{
                color: "black",
                borderBottom: "1px solid #FB5E04",
              }}
              padding={0}
              fontSize={"small"}
            >
              USDC
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel paddingLeft={0}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Flex alignItems={"flex-end"} gap="20px">
                  <Box>
                    <Text fontSize={"xs"}>Amount</Text>
                    <InputGroup size="sm">
                      <Input
                        borderTopLeftRadius={"5px"}
                        borderBottomLeftRadius={"5px"}
                        placeholder="Enter amount NGN"
                      />
                      <InputRightAddon
                        borderTopRightRadius={"5px"}
                        borderBottomRightRadius={"5px"}
                        children="Search"
                        bg={"none"}
                        color={"#FB5E04"}
                      />
                    </InputGroup>
                  </Box>
                  <Box>
                    <Text fontSize={"xs"}>Fiat</Text>
                    <Select size={"sm"} defaultValue="NGN" borderRadius={"5px"}>
                      <option value="NGN">NGN</option>
                    </Select>
                  </Box>
                  <Box>
                    <Text fontSize={"xs"}>Payment</Text>
                    <Select
                      size={"sm"}
                      defaultValue="NGN"
                      placeholder="All Payment"
                      borderRadius={"5px"}
                    >
                      <option value="NGN">Bank Transfer</option>
                    </Select>
                  </Box>
                  <Button background={"#FB5E04"} color={"#fff"} size={"sm"}>
                    Create Ads
                  </Button>
                </Flex>
                <Box
                  background={"#FFF7F2"}
                  padding={"5px 20px"}
                  borderRadius={"5px"}
                >
                  <Text>0 Fee</Text>
                </Box>
              </Flex>
              <TableContainer>
                <Table variant="unstyled">
                  <Thead>
                    <Tr fontSize={"sm"} textAlign={"left"} color="#8E9BAE">
                      <Td>Advertiser</Td>
                      <Td>Price</Td>
                      <Td>Available</Td>
                      <Td>Limit</Td>
                      <Td>Payment</Td>
                      <Td display={"flex"} gap="5px">
                        <Text>Trade</Text> <Text>0Fee</Text>
                      </Td>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr borderTop={"1px solid #E2E8F0"}>
                      <Td>
                        <Box display={"flex"} alignItems={"center"} gap="5px">
                          <Avatar
                            size={"md"}
                            background={"#FB5E04"}
                            name="Maximus"
                          ></Avatar>
                          <Box>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap="3px"
                            >
                              <Text fontSize={"sm"}>Maximus</Text>
                              <CheckCircleIcon
                                color={"#22C36B"}
                                w={"10px"}
                                h={"10px"}
                              />
                            </Box>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap="3px"
                              fontSize={"xs"}
                              color="#8E9BAE"
                            >
                              <Text>1534 orders</Text>|
                              <Text>92.19% completion</Text>
                            </Box>
                          </Box>
                        </Box>
                      </Td>
                      <Td>
                        <Box display={"flex"} alignItems="flex-end">
                          <Text fontSize={"sm"}>580.50</Text>
                          <Text fontSize={"xs"}> NGN</Text>
                        </Box>
                      </Td>
                      <Td>
                        <Box>
                          <Text fontSize={"sm"}>1,121.0045</Text>
                        </Box>
                      </Td>
                      <Td>
                        <Box>
                          <Text fontSize={"sm"}>200 - 500 USD</Text>
                        </Box>
                      </Td>
                      <Td>
                        <Text
                          fontSize={"10px"}
                          textAlign={"center"}
                          background={"#FFF7F2"}
                          color={"#FB5E04"}
                          borderRadius={"3px"}
                        >
                          Bank Transfer
                        </Text>
                      </Td>
                      <Td>
                        <Button
                          width={"100px"}
                          fontSize={"sm"}
                          background={"#22C36B"}
                          textAlign={"center"}
                          color="#fff"
                          borderRadius={"3px"}
                          onClick={onOpen}
                        >
                          Buy BTC
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <p>ETH</p>
            </TabPanel>
            <TabPanel>
              <p>USDT</p>
            </TabPanel>
            <TabPanel>
              <p>USDC</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </DashboardLayout>
  );
}

export default P2P;
