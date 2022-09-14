import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Button,
  Avatar,
  useDisclosure,
  FormLabel,
  Select,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";

const wallets = [
  {
    id: 1,
    coin: "BTC",
    label: "Bitcoin",
    balance: "0.0000256",
    usdBalance: "$200.23",
    address: "bc1q6ct9nuzjjqke47cztxrw0xwhrjej2nuhy963f0",
  },
  {
    id: 2,
    coin: "ETH",
    label: "Ethereum",
    logo: "",
    balance: "0.04256",
    usdBalance: "$137",
    address: "0x5e606f8c7f8104046010d6755ba8eff5cc5661cb",
  },
  {
    id: 3,
    coin: "USDT",
    label: "TetherUS",
    logo: "",
    balance: "0.0000256",
    usdBalance: "$200.23",
    address: "0x5e606f8c7f8104046010d6755ba8eff5cc5661cb",
  },
  {
    id: 4,
    coin: "USDC",
    label: "USD Coin",
    logo: "",
    balance: "0.0000256",
    usdBalance: "$0.00",
    address: "0x5e606f8c7f8104046010d6755ba8eff5cc5661cb",
  },
];
const recentActivity = [
  {
    id: 1,
    coin: "BTC",
    amount: "$1324",
    label: "Bitcoin",
    date: "Today, 15:00 PM",
    type: "buy",
  },
  {
    id: 2,
    coin: "BTC",
    amount: "$1324",
    label: "Bitcoin",
    date: "Today, 15:00 PM",
    type: "recieve",
  },
  {
    id: 3,
    coin: "BTC",
    amount: "$1324",
    label: "Bitcoin",
    date: "Today, 15:00 PM",
    type: "sell",
  },
];

function WalletPage(props: any) {
  const [address, setAddress] = useState(wallets[0].address);
  const [label, setLabel] = useState("Bitcoin");
  const [coin, setCoin] = useState("BTC");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (newAddress: any, newLabel: any, newCoin: any) => {
    setAddress(newAddress);
    setLabel(newLabel);
    setCoin(newCoin);

    onOpen();
  };

  const btnRef = React.useRef();
  function DrawerExample(props: any) {
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"sm"}
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text>Deposit {props.label}</Text>
            </DrawerHeader>

            <DrawerBody>
              <Text size={"sm"}>
                Copy address or scan QR code to deposit {props.label}
              </Text>
              <Text color={"#8E9BAE"} mt={"300px"}>
                {props.coin} Deposit Address
              </Text>
              {props.coin === "USDT" && (
                <Box marginBottom={"20px"}>
                  <FormLabel htmlFor="owner">Please Choose Network</FormLabel>
                  <Select id="owner" defaultValue="segun">
                    <option value="BSC">BNB Smart Chain (BEP20)</option>
                    <option value="ERC20">Ethereum (ERC20)</option>
                  </Select>
                </Box>
              )}
              <Text fontWeight="600">{props.address}</Text>
              <Button
                mt={"60px"}
                width={"100%"}
                color={"#fff"}
                background={"#10192D"}
                size={"lg"}
                onClick={() => {
                  navigator.clipboard.writeText(address);
                }}
              >
                Copy Address
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  return (
    <Box w={{ lg: "80%", sm: "95%" }} margin={"20px auto"}>
      <Box>
        <Box
          background={"#FFFFFF"}
          border="1px solid #E2E8F0"
          marginTop={"4"}
          padding={"20px 0"}
          borderRadius="10px"
        >
          <Box width={"90%"} margin="4px auto">
            <Wrap justify={"space-between"}>
              <WrapItem>
                <Box display="flex" flexDirection="column" gap={"20px"}>
                  <Heading size="md">Overall Balance</Heading>
                  <Box
                    display={"flex"}
                    fontWeight={"600"}
                    gap="4"
                    color={"#FB5E04"}
                  >
                    <Text fontSize="md">0.0004563 BTC {props.balance}</Text>
                    <Text fontSize="md">=</Text>
                    <Text fontSize="md">$500.67 {props.usdBalance}</Text>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Wrap
                  marginTop={"12px"}
                  justify={{ sm: "space-between", md: "space-evenly" }}
                >
                  <WrapItem>
                    <Button
                      background={"#FB5E04"}
                      color={"#fff"}
                      size="md"
                      onClick={onOpen}
                    >
                      Deposit
                    </Button>
                  </WrapItem>
                  <WrapItem>
                    <Button background={"#8E9BAE"} color={"#fff"} size="md">
                      Withdraw
                    </Button>
                  </WrapItem>
                  <WrapItem>
                    <Button background={"#8E9BAE"} color={"#fff"} size="md">
                      Transfer
                    </Button>
                  </WrapItem>
                  <WrapItem>
                    <Button background={"#8E9BAE"} color={"#fff"} size="md">
                      History
                    </Button>
                  </WrapItem>
                </Wrap>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
        <Wrap spacing={"20px"} marginTop={"40px"}>
          <WrapItem>
            <TableContainer
              width={{ lg: "810px" }}
              borderRadius={"10px"}
              border={"1px solid #E2E8F0"}
            >
              <Table variant="unstyled">
                <Thead background={"#E2E8F0"}>
                  <Tr>
                    <Th>Assets</Th>
                    <Th>Balance</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody background={"#fff"}>
                  {wallets.map((wallet: any) => {
                    return (
                      <Tr key={wallet.id} borderBottom={"1px solid #E2E8F0"}>
                        <Td>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"10px"}
                          >
                            <Avatar
                              name="Bitcoin"
                              src={"/images/btclogo.png"}
                              size="sm"
                            />
                            <Box>
                              <Text fontSize="sm" fontWeight={"600"}>
                                {wallet.coin}
                              </Text>
                              <Text color={"#64748B"} fontSize="sm">
                                {wallet.label}
                              </Text>
                            </Box>
                          </Box>
                        </Td>
                        <Td>
                          <Box>
                            <Text fontSize="sm" fontWeight={"600"}>
                              {wallet.balance}
                            </Text>
                            <Text color={"#64748B"} fontSize="sm">
                              = {wallet.usdBalance}
                            </Text>
                          </Box>
                        </Td>
                        <Td>
                          <Wrap justify={"left"} spacing={{ sm: "2", md: "8" }}>
                            <WrapItem>
                              <Text
                                cursor={"pointer"}
                                fontSize={"sm"}
                                fontWeight="500"
                                color={"#FB5E04"}
                              >
                                Trade
                              </Text>
                            </WrapItem>
                            <WrapItem>
                              <Text
                                cursor={"pointer"}
                                fontSize={"sm"}
                                fontWeight="500"
                                color={"#FB5E04"}
                                ref={btnRef}
                                onClick={() =>
                                  handleClick(
                                    wallet.address,
                                    wallet.label,
                                    wallet.coin
                                  )
                                }
                              >
                                Deposit
                              </Text>
                            </WrapItem>

                            <DrawerExample
                              label={label}
                              coin={coin}
                              address={address}
                            />
                            <WrapItem>
                              <Text
                                cursor={"arrow"}
                                fontSize={"sm"}
                                fontWeight="500"
                                color={"#FB5E04"}
                              >
                                Withdraw
                              </Text>
                            </WrapItem>
                          </Wrap>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </WrapItem>
          <WrapItem>
            <Box
              width={{ md: "320px", sm: "200px" }}
              borderRadius={"9px"}
              border={" 1px solid #E2E8F0"}
            >
              <Box borderBottom={"1px solid #E2E8F0"} padding={"20px"}>
                <Text fontWeight={600}>Recent Activity</Text>
              </Box>
              <RecentTransaction />
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}

function openDrawer() {}
// function DrawerExample(props: any) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();

//   return (
//     <>
//       <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//         Open
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//         size={"sm"}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>
//             <Text>Deposit {props.label}</Text>
//           </DrawerHeader>

//           <DrawerBody>
//             <Text size={"sm"}>
//               Copy address or scan QR code to deposit {props.label}
//             </Text>
//             <Text color={"#8E9BAE"} mt={"300px"}>
//               {props.coin} Deposit Address
//             </Text>
//             <Text>
//               {props.address} bc1q6ct9nuzjjqke47cztxrw0xwhrjej2nuhy963f0
//             </Text>
//             <Button
//               mt={"60px"}
//               width={"100%"}
//               color={"#fff"}
//               background={"#10192D"}
//             >
//               Copy Address
//             </Button>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }
function RecentTransaction() {
  return (
    <Box>
      {recentActivity.map((transaction) => {
        return (
          <div key={transaction.id}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              padding="12px 12px"
              key={transaction.id}
            >
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Avatar name="Bitcoin" src={"/images/btclogo.png"} size="sm" />
                <Box>
                  <Text fontSize="xs" fontWeight={"700"}>
                    {transaction.label}
                  </Text>
                  <Text color={"#64748B"} fontSize="sm">
                    {transaction.type}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text textAlign={"right"} color={"#6FD97A"} fontSize="xs">
                  {transaction.amount}
                </Text>
                <Text fontSize={"xs"} color={"#64748B"}>
                  {transaction.date}
                </Text>
              </Box>
            </Box>
          </div>
        );
      })}
    </Box>
  );
}
export default WalletPage;
