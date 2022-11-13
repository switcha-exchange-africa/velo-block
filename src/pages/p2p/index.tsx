import {
  Box, Flex, HStack, 
  Link, 
   Text, 
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import BuyP2p from "../../components/p2p/buy";
import SellP2p from "../../components/p2p/sell";
import { checkValidToken } from "../../helpers/functions/checkValidToken";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

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

    const [pageNumber, setPageNumber] = useState(1)
    const [secondPageNumber, setSecondPageNumber] = useState(1)
    const [thirdPageNumber, setThirdPageNumber] = useState(1)
    const [fourthPageNumber, setFourthPageNumber] = useState(1)
    const [fifthPageNumber, setFifthPageNumber] = useState(1)
  
    const handlePreviousPage = () => {
      setPageNumber(pageNumber - 1)
    }

    const handleNextPage = () => {
      setPageNumber(pageNumber + 1)
    }

    const handleSecondPreviousPage = () => {
      setSecondPageNumber(secondPageNumber - 1)
    }

    const handleThirdPreviousPage = () => {
      setThirdPageNumber(thirdPageNumber - 1)
    }

    const handleFourthPreviousPage = () => {
      setFourthPageNumber(fourthPageNumber - 1)
    }

    const handleFifthPreviousPage = () => {
      setFifthPageNumber(fifthPageNumber - 1)
    }
  
    const handleSecondNextPage = () => {
      setSecondPageNumber(secondPageNumber + 1)
    }

    const handleThirdNextPage = () => {
      setThirdPageNumber(thirdPageNumber + 1)
    }

    const handleFourthNextPage = () => {
      setFourthPageNumber(fourthPageNumber + 1)
    }

    const handleFifthNextPage = () => {
      setFifthPageNumber(fifthPageNumber + 1)
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

        {selectedId === "1" ? (
          <BuyP2p
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            pageNumber={pageNumber}
            secondPageNumber={secondPageNumber}
            thirdPageNumber={thirdPageNumber}
            fourthPageNumber={fourthPageNumber}
            fifthPageNumber={fifthPageNumber}
            handleSecondPreviousPage={handleSecondPreviousPage}
            handleSecondNextPage={handleSecondNextPage}
            handleThirdPreviousPage={handleThirdPreviousPage} 
            handleThirdNextPage={handleThirdNextPage} 
            handleFourthPreviousPage={handleFourthPreviousPage}
            handleFourthNextPage={handleFourthNextPage}
            handleFifthPreviousPage={handleFifthPreviousPage}
            handleFifthNextPage={handleFifthNextPage} 
          />
        )
          : (
            <SellP2p
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              pageNumber={pageNumber}
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
