import { HStack, Heading } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <HStack justifyContent={"center"} alignItems={"center"} h="full">
        <Heading>Children Components will remain here</Heading>
      </HStack>
    </DashboardLayout>
  );
};

export default DashboardPage;
