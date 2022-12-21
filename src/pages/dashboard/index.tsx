import { HStack, Heading, Text, Box, Flex } from "@chakra-ui/react";
import {  useState } from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { CardData } from "../../utilities/features/data";
import { MenuItemsCard } from "../../components/dashboard/menuCard/MenuItemsCard";
import SellCoin from "../../components/homePage/sellTable/SellCoin";
import BuyCoin from "../../components/homePage/buyTable/BuyCoin";
import { useGetExchangeQuery } from "../../redux/services/exchange.service";
import { GetServerSideProps } from "next";
import { checkValidToken } from "../../helpers/functions/checkValidToken";
import { useRouter } from "next/router";
import MainAppButton from "../../components/buttons/MainAppButton";
import { useGetTransactionPinQuery } from "../../redux/services/transactions.service";
import appAlert from "../../helpers/appAlert";


const DashboardPage = () => {
  const minWeightProps = ["140px", "140px", "140px", "0%"]
  const scrollbarProps = {
    '::-webkit-scrollbar': {
      display: ["scroll", "scroll", "scroll", "none"]
    }
  }

  const [selectedId, setSelectedId] = useState("1")
  const [color, setColor] = useState({
    color1: "black",
    color2: "#8E9BAE"
  })

  const handleSelect = (id: string) => {
    if (id === "1") {
      setSelectedId(id)
      setColor({
        color1: "black",
        color2: "#8E9BAE"
      })
    }
    else {
      setSelectedId(id)
      setColor({
        color1: "#8E9BAE",
        color2: "black"
      })
    }
  }

  const { data } = useGetExchangeQuery()

  // function to check if the exchange rate endpoint returns a negative/poisitive value
  function isPositive(number: number) {
    if (number > 0) {
      //true 
      return "#22C36B";
    }
    if (number < 0) {
      //false  
      return "#E95455";
    }
    if (1 / number === Number.POSITIVE_INFINITY) {
      //true  
      return "#22C36B";
    }
    //false
    return "#E95455";
  }

  const [pageNumber, setPageNumber] = useState(1)
  
  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1)
  }

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  const handlePageReset = () => {
    setPageNumber(1)
  }

  const checkString = (word: string) => {
    if (word.toString().includes('-')) {
      return ""
    } else {
      return "+"
    }
  }
  const router = useRouter()

    
  const {data: getTransactionPin} = useGetTransactionPinQuery()
  
  

  const checkForTransactionPin = () => {
    if (getTransactionPin?.data ===false) {
      appAlert.success("Set up your Withdrawal Pin")
      router.push("/settings/security/withdrawal-pin/set-pin")
    }
  }

  checkForTransactionPin()



  return (
    <DashboardLayout title="Dashboard">
      <Box >
        <Heading>Exchange Crypto with <Text as="span" color="#FB5E04">Low Fees</Text></Heading>
        <Text>Convert your crypto within seconds</Text>
      </Box> 
      <HStack mt="48px" spacing="24px" maxW="100%" justifyContent="space-between" fontSize="13px" overflowX="scroll" sx={scrollbarProps}
      >
        {CardData.map((data) => (
          <MenuItemsCard key={data.id}
            bgColor={data.bgColor}
            leftIcon={data.leftIcon}
            title={data.title}
            description={data.description}
            onClick={() => { router.push(data.path) }}
          />
        ))}
      </HStack>

      <HStack mb="48px" justifyContent={["space-between", "space-between", "space-between", "space-around"]} mt="48px" maxW={["100%", "100%", "100%", "85%"]} mx="auto" overflowX="scroll" sx={scrollbarProps}>
        {/* to display exchange rates from exchange rate endpoints */}
        {data?.data?.map((dat: any) => (
          <Box minW={minWeightProps} key={dat?.id}>
            <Flex fontSize="13px">
              <Text><Text textTransform="uppercase" as='span'>{dat?.symbol}</Text>/USD</Text>
              <Text color={isPositive(dat?.price_change_percentage_24h)} ml="5px">
                {checkString(dat?.price_change_percentage_24h)}
                {dat?.price_change_percentage_24h}%
              </Text>
            </Flex>
            <Heading fontSize="24px" color={isPositive(dat?.price_change_percentage_24h)}>
              {dat?.current_price?.toLocaleString()}
            </Heading>
          </Box>
        ))}
      </HStack>

      <HStack px={["0", "0px", "28px", "28px"]} mb="16px" justifyContent="space-between" alignItems="center">
        <HStack>
          <Text cursor="pointer" fontWeight="bold" color={color.color1} onClick={() => handleSelect("1")}>Buy</Text>
          <Box h="16px" w="2px" bg="#8B8CA7"></Box>
          <Text cursor="pointer" fontWeight="bold" color={color.color2} onClick={() => handleSelect("2")}>Sell</Text>
        </HStack>

        {/* <Button>Recent Transactions</Button> */}
        <MainAppButton width="180px" onClick={() => router.push("dashboard/recent-transactions")}>
          Recent Transactions
        </MainAppButton>
      </HStack>

      
      {/* to render the buy and sell component here */}
      {selectedId === "1" ? (
        <BuyCoin
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          pageNumber={pageNumber}
          handlePageReset={handlePageReset}
        />
      ) : (
        <SellCoin
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          pageNumber={pageNumber}
          handlePageReset={handlePageReset} 
        />


          
      )}

    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  return checkValidToken(context)

}

export default DashboardPage;
