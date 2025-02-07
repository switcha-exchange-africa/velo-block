import React, { useState, useEffect, useRef } from "react";
import _ from "lodash"
import {Box, Heading, Text, Button, useDisclosure, Wrap, WrapItem, Flex, Spinner, Table, Thead, Tbody, Tr, Th, Td, TableContainer, HStack } from "@chakra-ui/react";
import WalletDepositDrawer from "../../components/dashboard/wallet/WalletDepositDrawer";
import WalletWithdrawDrawer from "../../components/dashboard/wallet/WalletWithdrawDrawer";
import { useRouter } from "next/router";
import { useGetWalletsQuery } from "../../redux/services/wallet.service";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import RenderCoinComponent from "../../components/dashboard/wallet/RenderCoinComponent";
import RenderLabelComponent from "../../components/dashboard/wallet/RenderLabelComponent";
import RenderBalanceToUsd from "../../components/wallet/RenderBalanceToUsd";
import { GetServerSideProps } from "next";
import { checkValidToken } from "../../helpers/functions/checkValidToken";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks/reduxHooks";
import { setCoinOrCash } from "../../redux/features/quick-trade/quickTradeSlice";
import { useGetActivitiesQuery } from "../../redux/services/transactions.service";
import moment from "moment"
import { useLazySwapConvertQuery } from "../../redux/services/new-conversion.service";


function WalletPage() {
  const { user } = useAppSelector((state) => state.auth)
  
  const [label, setLabel] = useState("Bitcoin");
  const [coin, setCoin] = useState("BTC");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDepositDrawerOpen, setIsDepositDrawerOpen] = useState(false);
  const [isWithdrawalDrawerOpen, setIsWithdrawalDrawerOpen] = useState(false);
  const [total, setTotal] = useState(0)
  const [btcTotal, setBtcTotal] = useState(0)
  const walletsquery: any = useGetWalletsQuery(user?._id)
  const [convertCoins] = useLazySwapConvertQuery()
  const [address, setAddress] = useState(walletsquery?.data?.data[0]?.address);
  const [accountId, setAccountId] = useState(walletsquery?.data?.data[0]?._id)


  const to8Dp = (number: any) => {
    if (number > 1) {
      const datas = _.floor(number, 8)
      const values = datas?.toLocaleString()
      return values  
    } else {
      return number
    }
    
  }



  useEffect(() => {
    // alert(JSON.stringify(walletsquery?.error?.data?.status))

    const convertCoinsToEquivalentUSD = async () => {
      const convToUsd = []
      let localFuncTotal = 0;
      if (walletsquery?.data?.data) {
        for (let i = 0; i < walletsquery?.data?.data?.length; i++) {
          const wallet = walletsquery?.data?.data[i]
          if (wallet?.balance == 0) {
            convToUsd.push({ coin: wallet?.coin, usdValue: 0 })
          } else {
            const convert = await convertCoins({ amount: wallet?.balance, source: wallet?.coin, destination: 'USDC' }).unwrap()
            const usdValue = convert?.data?.destinationAmount
            convToUsd.push({ coin: wallet?.coin, usdValue })
            if (usdValue) {
              localFuncTotal = localFuncTotal + usdValue
            }
          }
        }
        setTotal(localFuncTotal)
        const convert = await convertCoins({ amount: localFuncTotal, source: 'USDC', destination: 'BTC' }).unwrap()
        setBtcTotal(convert?.data?.destinationAmount)
      }
    }
    convertCoinsToEquivalentUSD()
  }, [convertCoins, walletsquery])


  useEffect(() => {

  }, [total])


  const [skip, setSkip] = useState(true)


  const handleClick = (newAddress: any, newLabel: any, newCoin: any, new_Id: any) => {
    // console.log(new_Id)
    setAddress(newAddress);
    setAccountId(new_Id)
    setLabel(newLabel);
    setCoin(newCoin);
    setSkip(false)
    onOpen();
  };

  

  const btnRef = useRef(null);
  const router = useRouter()
  const dispatch = useAppDispatch()



  const [pageNumber, setPageNumber] = useState(1)
    
  const recentActivity = useGetActivitiesQuery(pageNumber)
  const handlePreviousPage = () => {
        setPageNumber(pageNumber - 1)
  }

  const handleNextPage = () => {
      setPageNumber(pageNumber + 1)
  }




  return (
    <DashboardLayout title="Wallet">

      <Box w={'full'} p={{ md: '8', base: '' }}>
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
                    <Heading size={{ md: "md", base: 'sm' }}>Overall Balance</Heading>
                    <Box
                      display={"flex"}
                      fontWeight={"600"}
                      gap="4"
                      color={"#FB5E04"}
                    >
                      <Text fontSize={{ md: "md", base: 'sm' }}> {to8Dp(btcTotal)} BTC</Text>
                      <Text fontSize={{ md: "md", base: 'sm' }}>=</Text>
                      <Text fontSize={{ md: "md", base: 'sm' }}>$ {to8Dp(total)}</Text>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Wrap
                    marginTop={"12px"}
                    justify={{ sm: "space-between", md: "space-evenly" }}
                  >
                    {/* <WrapItem>
                      <Button
                        background={"#FB5E04"}
                        color={"#fff"}
                        size={{ md: "md", base: 'sm' }}
                        onClick={onOpen}
                      >
                        Deposit
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button background={"#8E9BAE"} color={"#fff"} size={{ md: "md", base: 'sm' }}>
                        Withdraw
                      </Button>
                    </WrapItem>
                    <WrapItem>
                      <Button background={"#8E9BAE"} color={"#fff"} size={{ md: "md", base: 'sm' }}>
                        Transfer
                      </Button>
                    </WrapItem> */}
                    <WrapItem>
                      <Button background={"#8E9BAE"} color={"#fff"} size={{ md: "md", base: 'sm' }} onClick={()=> router.push("/dashboard/recent-transactions")}>
                        History
                      </Button>
                    </WrapItem>
                  </Wrap>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
          <Wrap spacing={"20px"}  marginTop={"40px"}>
            <WrapItem >
              <TableContainer
                width={{ md: "3xl", base: '100%' }}
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
                    {walletsquery.isFetching ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> : walletsquery?.data?.data?.map((wallet: any) => {
                      return (
                        <Tr key={wallet?._id} >
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
                              <RenderCoinComponent coin={wallet?.coin} />
                              <Box>
                                <Text fontSize={{ md: "sm", base: 'xs' }} fontWeight={"600"}>
                                  {wallet?.coin == 'USDT_TRON' ? 'USDT-TRON' : wallet?.coin}
                                </Text>
                                {/* <Text color={"#64748B"} fontSize={{ md: "sm", base: 'xs' }}>
                                  {wallet.label}
                                </Text> */}
                                <RenderLabelComponent coin={wallet?.coin} />
                              </Box>
                            </Box>
                          </Td>
                          <Td>
                            <Box>
                              <Text fontSize={{ md: "sm", base: 'xs' }} fontWeight={"600"}>
                                {to8Dp(wallet?.balance)}
                              </Text>
                              <RenderBalanceToUsd coin={wallet?.coin} balance={wallet?.balance} />
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
                                  onClick={() => { dispatch(setCoinOrCash({ fromWallet: wallet?.coin })); router.push('/quick-trade') }}
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
                                      wallet?.address,
                                      wallet?.coin,
                                      // supposed to be wallet.label
                                      wallet?.coin,
                                      wallet?._id
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
                                accountId={accountId}
                                skip={skip}
                              />


                            {/* Wallet Withdraw Component */}
                            <WrapItem>
                              <Text
                                cursor={"pointer"}
                                fontSize={{ md: "sm", base: 'xs' }}
                                fontWeight="500"
                                color={"#FB5E04"}
                                ref={btnRef}
                                onClick={() => {
                                  handleClick(
                                    wallet?.address,
                                    wallet?.coin,
                                    // supposed to be wallet.label
                                    wallet?.coin,
                                    wallet?._id
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
                                setIsWithdrawalDrawerOpen={setIsWithdrawalDrawerOpen}
                                onClose={onClose}
                                btnRef={btnRef}
                                label={label}
                                coin={coin}
                                address={address}
                                accountId={accountId}
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
                <Box borderBottom={"1px solid #E2E8F0"} padding={"20px 10px"}>
                  <Text fontWeight={600}>Recent Activity</Text>
                </Box>
                

                {recentActivity?.data?.data.length !==0 ? (
                  <RecentTransaction data={recentActivity?.data?.data} />
                ) : (
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      padding="12px 12px"
                      height="250px"
                      
                    >
                      Activities will appear here    
                    </Box>
                ) }

                {recentActivity?.data?.pagination?.lastPage > 1 ? (
                  <HStack px={["0", "0px", "0px", "12px"]} borderBottom="1px solid #E2E8F0" borderTop="1px solid #E2E8F0" py="20px" mt="35px" justifyContent="space-between">
                    <HStack >
                        <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                            {recentActivity?.data?.pagination?.currentPage}
                        </Box>
                        <Text>of</Text>
                        <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                            {recentActivity?.data?.pagination?.lastPage}
                        </Box>
                    </HStack>

                    <HStack>
                        <Button onClick={handlePreviousPage} disabled={recentActivity?.data?.pagination?.currentPage === 1}>
                            Prev
                        </Button>
                        <Button onClick={handleNextPage} disabled={recentActivity?.data?.pagination?.hasNext === false}>
                            Next
                        </Button>    
                    </HStack>
                  </HStack>
                ) : null}
              </Box>

              
            </WrapItem>
            

          </Wrap>
        </Box>
      </Box>
    </DashboardLayout>

  );
}


function RecentTransaction(props:any) {
  const { data } = props

  return (
    <Box>
      {data?.map((transaction: any) => {
        return (
          <div key={transaction?._id}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              padding="12px 10px"
              key={transaction?._id}
              height="30px"
            >
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                {/* {transaction?.coin === "BTC" && (
                  <Avatar
                    name="Bitcoin"
                    src={remoteImages.bitcoinLogo}
                    size="sm"
                  />
                )}
                {transaction?.coin === "ETH" && (
                  <Avatar
                    name="Ethereum"
                    src={remoteImages.ethLogo}
                    size="sm"
                  />
                )}
                {transaction?.coin === "USDT" && (
                  <Avatar
                    name="USDT"
                    src={remoteImages.usdtLogo}
                    size="sm"
                  />
                )}

                {transaction?.coin === "USDC" && (
                  <Avatar
                    name="USDC"
                    src={remoteImages.usdcLogo}
                    size="sm"
                  />
                )}
                {transaction?.coin === "USDT_TRON" && (
                  <Avatar
                    name="USDT_TRON"
                    src={remoteImages.tronlogo}
                    size="sm"
                  />
                )} */}
                <Box w="100%">
                  {/* <Text fontSize="xs" fontWeight={"700"}>
                    {transaction?.coin === "USDT_TRON" ? "USDT-TRON" : transaction?.coin}
                  </Text> */}
                  <Text color={"#64748B"} fontSize="sm"  >
                    {transaction?.description}
                  </Text>
                </Box>
              </Box>
              <Box >
                <Text fontSize={"10px"} textAlign={"right"} color={"#64748B"}>
                  {moment(transaction?.createdAt).calendar()}
                </Text>
              </Box>
            </Box>
          </div>

        );
      })}
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  return checkValidToken(context)

}
export default WalletPage;
