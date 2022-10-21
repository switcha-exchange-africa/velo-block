import { HStack, Heading, Text, Box} from "@chakra-ui/react";
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
      {/* "sm" | "md" | "lg" | "xs" */}
      <HStack mt="48px" maxW="100%" justifyContent="space-between" overflowX="scroll" sx={{
        '::-webkit-scrollbar': {
          display: ["scroll", "scroll", "none", "none"]
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
    </DashboardLayout>
  );
};

export default DashboardPage;
