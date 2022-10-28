import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react"
import { useState } from "react"
import BuyP2p from "../../components/p2p/buy"
import SellP2p from "../../components/p2p/sell"
import DashboardLayout from "../../layouts/dashboard/DashboardLayout"

const P2P = () =>  {  
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

  return (
    <DashboardLayout>
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

        { selectedId === "1" ? <BuyP2p/> : <SellP2p/> }
            
      </Box>
    </DashboardLayout>
  )
}

export default P2P
