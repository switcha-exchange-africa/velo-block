import { HStack, Heading, Text, Box, Flex} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { CardData } from "../../utilities/features/data";
import { MenuItemsCard } from "../../components/dashboard/menuCard/MenuItemsCard";
import TableComponent from "../../components/table/TableContainer";

const DashboardPage = () => {
  const minWeightProps = ["140px", "140px", "140px", "0%"]
  const scrollbarProps = {
  '::-webkit-scrollbar':{
    display: ["scroll", "scroll", "scroll", "none"]
  }}


  return (
    <DashboardLayout>
      <Box>
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
          />
        ))}
      </HStack>
      
      <HStack mb="48px" justifyContent={["space-between", "space-between", "space-between", "space-around"]}  mt="48px" maxW={["100%", "100%", "100%", "85%"]} mx="auto" overflowX="scroll" sx={scrollbarProps}>
        <Box minW={minWeightProps}>
          <Flex fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#22C36B" ml="4px">+0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#22C36B">
            41,950.87
          </Heading>
        </Box>
        
        <Box minW={minWeightProps}>
          <Flex fontSize="13px">
            <Text>ETH/USDT</Text>
            <Text color="#E95455" ml="4px">-0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#E95455">
            2,948.51
          </Heading>
        </Box>

        <Box minW={minWeightProps}>
          <Flex fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#E95455" ml="4px">-0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#E95455">
            41,950.87
          </Heading>
        </Box>
        
        <Box minW={minWeightProps}>
          <Flex fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#22C36B" ml="4px">+0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#22C36B">
            41,950.87
          </Heading>
        </Box>

        <Box minW={minWeightProps}>
          <Flex fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#22C36B" ml="4px">+0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#22C36B">
            41,950.87
          </Heading>
        </Box>

        <Box minW={minWeightProps}>
          <Flex fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#22C36B" ml="4px">+0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#22C36B">
            41,950.87
          </Heading>
        </Box>
      </HStack>
      

      <TableComponent />

    </DashboardLayout>
  );
};

export default DashboardPage;
