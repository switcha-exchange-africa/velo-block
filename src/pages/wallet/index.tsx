import React, { useEffect, useState } from "react";

import {
  Box,
  Heading,
  Text,
  Button,
  Avatar,
  useDisclosure,

  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,

} from "@chakra-ui/react";
import WalletDepositDrawer from "../../components/dashboard/wallet/WalletDepositDrawer";
import WalletWithdrawDrawer from "../../components/dashboard/wallet/WalletWithdrawDrawer";
import { useRouter } from "next/router";
import { useGetWalletsQuery } from "../../redux/services/wallet.service";
import LoginPage from "../signin";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import appAlert from "../../helpers/appAlert";
import RenderCoinComponent from "../../components/dashboard/wallet/RenderCoinComponent";
import RenderLabelComponent from "../../components/dashboard/wallet/RenderLabelComponent";



const wallets = [
  {
    id: 1,
    coin: "BTC",
    label: "Bitcoin",
    balance: "0.0000256",
    usdBalance: "$200.23",
    address: "bc1q6ct9nuzjjqke47cztxrw0xwhrjej2nuhy963f0",
    logo: "/assets/images/bitcoin-logo.png",
  },
  {
    id: 2,
    coin: "ETH",
    label: "Ethereum",
    balance: "0.04256",
    usdBalance: "$137",
    address: "0x5e606f8c7f8104046010d6755ba8eff5cc5661cb",
    logo: "/assets/images/eth-logo.png",
  },
  {
    id: 3,
    coin: "USDT",
    label: "TetherUS",
    balance: "0.0000256",
    usdBalance: "$200.23",
    address: "0x5e606f8c7f8104046010d6755ba8eff5cc5661cb",
    logo: "/assets/images/usdt-logo.png",
  },
  {
    id: 4,
    coin: "USDC",
    label: "USD Coin",
    balance: "0.0000256",
    usdBalance: "$0.00",
    address: "0x5e606f8c7f8104046010d6755ba8eff5cc5661cb",
    logo: "/assets/images/usdc-logo.png",
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
  const [isDepositDrawerOpen, setIsDepositDrawerOpen] = useState(false);
  const [isWithdrawalDrawerOpen, setIsWithdrawalDrawerOpen] = useState(false);
  const walletsquery: any = useGetWalletsQuery()

  // useEffect(() => {
  //   alert(JSON.stringify(walletsquery?.error?.data?.status))
  // }, [walletsquery])


  const handleClick = (newAddress: any, newLabel: any, newCoin: any) => {
    setAddress(newAddress);
    setLabel(newLabel);
    setCoin(newCoin);

    onOpen();
  };

  const btnRef = React.useRef();
  const router = useRouter()
  if (walletsquery?.error?.data?.status == 401) {
    appAlert.warning('Session Expired, please sign in again')
    return <LoginPage />
  }
  return (
    <DashboardLayout>
      <Box w={'full'} p={{ md: '8', base: '2' }}>
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
                width={{ md: "3xl", base: 'sm' }}
                borderRadius={"10px"}
                border={"1px solid #E2E8F0"}
              >
                <Table variant="simple" >
                  <Thead background={"#E2E8F0"}>
                    <Tr>
                      <Th>Assets</Th>
                      <Th>Balance</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody background={"#fff"}>
                    {walletsquery?.data?.data?.map((wallet: any) => {
                      return (
                        <Tr key={wallet._id} >
                          <Td>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap={"10px"}
                            >
                              {/* {wallet}  <Avatar
                                name="Bitcoin"
                                src={wallet.logo}
                                size={{ md: "sm", base: 'xs' }}
                              /> */}
                              <RenderCoinComponent coin={wallet.coin} />
                              <Box>
                                <Text fontSize={{ md: "sm", base: 'xs' }} fontWeight={"600"}>
                                  {wallet.coin}
                                </Text>
                                {/* <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                                  {wallet.label}
                                </Text> */}
                                <RenderLabelComponent coin={wallet.coin} />
                              </Box>
                            </Box>
                          </Td>
                          <Td>
                            <Box>
                              <Text fontSize={{ md: "sm", base: 'xs' }} fontWeight={"600"}>
                                {wallet.balance}
                              </Text>
                              {/* <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                                = {wallet.usdBalance}
                              </Text> */}
                              <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                                = {''}
                                {/* $200.33 */}
                              </Text>
                            </Box>
                          </Td>
                          <Td>
                            <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} justify={"left"} w={'full'}>
                              <WrapItem>
                                <Text
                                  cursor={"pointer"}
                                  fontSize={{ md: "sm", base: 'xs' }}
                                  fontWeight="500"
                                  color={"#FB5E04"}
                                >
                                  Trade
                                </Text>
                              </WrapItem>
                              <WrapItem>
                                <Text
                                  cursor={"pointer"}
                                  fontSize={{ md: "sm", base: 'xs' }}
                                  fontWeight="500"
                                  color={"#FB5E04"}
                                  ref={btnRef}
                                  onClick={() => {
                                    handleClick(
                                      wallet.address,
                                      wallet.coin,
                                      // supposed to be wallet.label
                                      wallet.coin
                                    );
                                    setIsDepositDrawerOpen(true);
                                  }}
                                >
                                  Deposit
                                </Text>
                              </WrapItem>

                              {/* <DrawerExample
                              label={label}
                              coin={coin}
                              address={address}
                            /> */}
                              <WalletDepositDrawer
                                isOpen={isOpen}
                                isdepositOpen={isDepositDrawerOpen}
                                setIsDepositDrawerOpen={setIsDepositDrawerOpen}
                                onClose={onClose}
                                btnRef={btnRef}
                                label={label}
                                coin={coin}
                                address={address}
                              />
                              <WrapItem>
                                <Text
                                  cursor={"pointer"}
                                  fontSize={{ md: "sm", base: 'xs' }}
                                  fontWeight="500"
                                  color={"#FB5E04"}
                                  ref={btnRef}
                                  onClick={() => {
                                    handleClick(
                                      wallet.address,
                                      wallet.coin,
                                      // supposed to be wallet.label
                                      wallet.coin
                                    );
                                    setIsWithdrawalDrawerOpen(true);
                                  }}
                                >
                                  Withdraw
                                </Text>
                              </WrapItem>
                              <WalletWithdrawDrawer
                                isOpen={isOpen}
                                iswithdrawalOpen={isWithdrawalDrawerOpen}
                                setIsWithdrawalDrawerOpen={
                                  setIsWithdrawalDrawerOpen
                                }
                                onClose={onClose}
                                btnRef={btnRef}
                                label={label}
                                coin={coin}
                                address={address}
                              />
                              <WrapItem>
                                <Text
                                  cursor={"pointer"}
                                  fontSize={{ md: "sm", base: 'xs' }}
                                  fontWeight="500"
                                  color={"#FB5E04"}
                                  ref={btnRef}
                                  onClick={() => {
                                    router.push('/swap')
                                  }}
                                >
                                  Swap
                                </Text>
                              </WrapItem>
                            </Flex>
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
                width={{ md: "xs", base: "xs" }}
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
    </DashboardLayout>

  );
}


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
                <Avatar
                  name="Bitcoin"
                  src={"/assets/images/bitcoin-logo.png"}
                  size="sm"
                />
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
