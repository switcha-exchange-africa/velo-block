import {
  Box, Flex, HStack, 
   Text, 
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import BuyP2p from "../../components/p2p/buy";
import SellP2p from "../../components/p2p/sell";
import { checkValidToken } from "../../helpers/functions/checkValidToken";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

const P2P = () => {  
  const router = useRouter()
  const [selectedId, setSelectedId] = useState("1")
  const [color, setColor] = useState({
      color1: "black",
      color2: "#8E9BAE"
  })

  const handleOrderRoute = () => {
    router.push("/p2p/all-ads")
  }
  
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

    

  return (
    <DashboardLayout title="P2p">
      <Box
        width={"100%"}
        
        height={"100vh"}
        margin={"-10px auto"}
        padding="10px 5px"
        bg="white"
      >
        <Flex justifyContent={"space-between"} alignItems="center">
          <HStack px={["0", "0px", "28px", "28px"]} mb="16px" justifyContent="space-between" alignItems="center">
            <HStack>
                <Text cursor="pointer" fontWeight="bold" color={color.color1} onClick={()=> handleSelect("1")}>Buy</Text>
                <Box h="16px" w="2px" bg="#8B8CA7"></Box>
                <Text cursor="pointer" fontWeight="bold" color={color.color2} onClick={() => handleSelect("2")}>Sell</Text>
            </HStack>  
        </HStack>
        
          <Text
            textDecoration={"underline"}
            color={"#FB5E04"}
            fontSize={"16px"}
            cursor="pointer"
            _hover={{
              color: "#fb5e09"
            }}
            onClick={handleOrderRoute}
          >
            See Your Ads
          </Text>
          
        </Flex>

        {selectedId === "1" ? (
          <BuyP2p
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            pageNumber={pageNumber}
            handlePageReset={handlePageReset}
          />
        )
          : (
            <SellP2p
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              pageNumber={pageNumber}
              handlePageReset={handlePageReset}
            />
          )
        }
            
      </Box>
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return checkValidToken(context)
}

export default P2P;
