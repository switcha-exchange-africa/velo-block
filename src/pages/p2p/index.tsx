import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Avatar, Box, Button, Flex, Image, Input,
  InputGroup,
  InputRightAddon, Link, Modal, ModalBody, ModalCloseButton,
  ModalContent, Select, Tab, Table,
  TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Thead, Tr, useDisclosure
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { checkValidToken } from "../../helpers/functions/checkValidToken";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

function P2P() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <DashboardLayout title="p2p">
      <Box
        background={"#fff"}
        width={"95%"}
        height={"100vh"}
        margin={"20px auto"}
        padding={["5px", "5px", "20px"]}
      >
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalContent
            maxW="73rem"
            top={["0", "0", "20rem"]}
            left={["0", "0", "7rem"]}
          >
            <ModalCloseButton />
            <ModalBody>
              <Flex
                flexDir={["column", "column", "row"]}
                gap={["20px", "20px", 0]}
              >
                <Box flex={1}>
                  <Box
                    display={"flex"}
                    flexDir={["column", "column", "row"]}
                    alignItems={["flex-start", "flex-start", "center"]}
                    gap="5px"
                  >
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
                  <Box
                    fontSize={"xs"}
                    marginLeft={["0px", "0px", "40px"]}
                    width={["auto", "auto", "450px"]}
                  >
                    <Flex
                      mb={"10px"}
                      wrap={"wrap"}
                      flexDir={["column", "column", "row"]}
                      alignItems={["flex-start", "flex-start", "center"]}
                      gap={["5px", "5px", "100px"]}
                    >
                      <Box display={"flex"} gap="10px">
                        <Text color={"#8E9BAE"}>Price</Text>
                        <Text>580.89NGN</Text>
                      </Box>

                      <Box display={"flex"} gap="10px">
                        <Text color={"#8E9BAE"}>Available</Text>
                        <Text>963.16 USDT</Text>
                      </Box>
                    </Flex>
                    <Flex
                      mb={"10px"}
                      wrap={"wrap"}
                      flexDir={["column", "column", "row"]}
                      alignItems={["flex-start", "flex-start", "center"]}
                      gap={["5px", "5px", "40px"]}
                    >
                      <Box display={"flex"} gap="10px">
                        <Text color={"#8E9BAE"}>Payment Time Limit</Text>
                        <Text>15 mins</Text>
                      </Box>

                      <Box alignItems={"center"} display={"flex"} gap="10px">
                        <Text color={"#8E9BAE"}>Buyer’s payment method</Text>
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
                    </Flex>
                    <Box>
                      <Text mt={"10px"} color="#FB5E04">
                        Terms and Condition
                      </Text>
                      <Text color={"#8E9BAE"}>
                        Always online making fast payment
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box flex={1} borderLeft={["0", "0", "1px solid  #E2E8F0"]}>
                  <Box w={["full", "full", "300px"]} margin={"0px auto"}>
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
                        <Button
                          onClick={() => {
                            router.push("/p2p/buy");
                          }}
                          color={"#fff"}
                          background={"#22C36B"}
                        >
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
              <Flex
                justifyContent={"space-between"}
                wrap={"wrap"}
                alignItems={"center"}
              >
                <Flex alignItems={"flex-end"} wrap={"wrap"} gap="20px">
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
                        // children="Search"
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
                  <Box
                    display={["block", "block", "none"]}
                    background={"#FFF7F2"}
                    padding={"5px 20px"}
                    borderRadius={"5px"}
                  >
                    <Text>0 Fee</Text>
                  </Box>
                </Flex>
                <Box
                  display={["none", "none", "block"]}
                  background={"#FFF7F2"}
                  padding={"5px 20px"}
                  borderRadius={"5px"}
                >
                  <Text>0 Fee</Text>
                </Box>
              </Flex>
              <Box mt={"2rem"} w={"full"} display={["block", "block", "none"]}>
                <Flex
                  alignItems="center"
                  w={"full"}
                  gap="10px"
                  justifyContent={"space-between"}
                >
                  <Flex w={"full"} flexDirection="column">
                    <Box display={"flex"} alignItems={"center"} gap="5px">
                      <Avatar
                        size={"md"}
                        background={"#FB5E04"}
                        name="Maximus"
                      ></Avatar>
                      <Box>
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
                          <Text>1534 orders</Text>|
                          <Text>92.19% completion</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      mt={"0.5rem"}
                      display={["flex"]}
                      flexDir={["column", "column", "row"]}
                    >
                      <Flex alignItems={"center"} gap="5px">
                        <Flex gap={"5px"} alignItems="center">
                          <Text fontSize={"xs"} color={"#8E9BAE"}>
                            Price
                          </Text>
                          <Box display={"flex"}>
                            <Text fontSize={"xs"}>580.50</Text>
                            <Text fontSize={"xs"}> NGN</Text>
                          </Box>
                        </Flex>

                        <Flex alignItems="center" gap={"10px"}>
                          <Text fontSize={"xs"} color={"#8E9BAE"}>
                            Available
                          </Text>
                          <Text fontSize={"xs"}>1,121.0045</Text>
                        </Flex>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px">
                        <Flex gap={"5px"} alignItems="center">
                          <Text fontSize={"xs"} color={"#8E9BAE"}>
                            {" "}
                            Limit
                          </Text>
                          <Text fontSize={"xs"}>200 - 500 USD</Text>
                        </Flex>
                        <Box>
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
                      </Flex>
                    </Box>
                  </Flex>
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
                </Flex>
              </Box>
              <TableContainer display={["none", "none", "block"]}>
                <Table variant="unstyled" w={"full"}>
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

export const getServerSideProps: GetServerSideProps = async (context) => {

  return checkValidToken(context)

}

export default P2P;
