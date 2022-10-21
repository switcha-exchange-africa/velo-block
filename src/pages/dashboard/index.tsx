import { HStack, Heading, Text, Box, Flex} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import { CardData } from "../../utilities/features/data";
import { MenuItemsCard } from "../../components/dashboard/menuCard/MenuItemsCard";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Box>
        <Heading>Exchange Crypto with <Text as="span" color="#FB5E04">Low Fees</Text></Heading>
        <Text>Convert your crypto within seconds</Text>
      </Box>
      <HStack mt="48px" maxW="100%" justifyContent="space-between" fontSize="13px" overflowX="scroll" sx={{
        '::-webkit-scrollbar': {
          display: ["scroll", "scroll", "scroll", "none"]
        }}}
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
      
      <HStack justifyContent="space-around" mt="48px" w="80%" mx="auto">
        <Box >
          <Flex justifyContent="space-between" fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#22C36B">+0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#22C36B">
            41,950.87
          </Heading>
        </Box>
        
        <Box >
          <Flex justifyContent="space-between" fontSize="13px">
            <Text>ETH/USDT</Text>
            <Text color="#E95455">-0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#E95455">
            2,948.51
          </Heading>
        </Box>

        <Box >
          <Flex justifyContent="space-between" fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#E95455">-0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#E95455">
            41,950.87
          </Heading>
        </Box>

        <Box >
          <Flex justifyContent="space-between" fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#22C36B">+0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#22C36B">
            41,950.87
          </Heading>
        </Box>

        <Box >
          <Flex justifyContent="space-between" fontSize="13px">
            <Text>BTC/USDT</Text>
            <Text color="#22C36B">+0.60%</Text>
          </Flex>
          <Heading fontSize="24px" color="#22C36B">
            41,950.87
          </Heading>
        </Box>
      </HStack>
      

    </DashboardLayout>
  );
};

export default DashboardPage;
