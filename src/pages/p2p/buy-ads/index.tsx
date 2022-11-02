import { Box, Button, Flex, Text  } from '@chakra-ui/react';
import StepComponent from '../../../components/p2p/steps';
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
// import BuyStepOne from '../../../components/p2p/steps/BuyStepOne';
// import BuyStepTwo from '../../../components/p2p/steps/BuyStepTwo';
// import { InfoIcon } from '@chakra-ui/icons';



const BuyAds = () => {
    return (
        <DashboardLayout title="P2P Buy Ads">
            <Box left={["0%", "0", "15%"]} py={["15px", "15px", "24px"]} top={"60px"} bg={"white"} w={["100%", "100%", "84%"]} position={"fixed"} pl={["15px", "15px", "90px"]} zIndex="10">
                <Text fontSize={["32px", "24px", "30px"]} fontWeight={"600"}>Post Normal Ads</Text>
            </Box>

            <StepComponent/>


            

            {/* Step One */}
            {/* <BuyStepOne/>
            <Flex justifyContent={"flex-end"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["none", "none", "flex"]}>
                <Button borderRadius={"5px"} bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"}>
                    Next
                </Button>
            </Flex> */}

            {/* Step Two */}
            {/* <BuyStepTwo/>
            <Flex justifyContent={"space-between"} alignItems={"center"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["none", "none", "flex"]}>
                <Flex>
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Estimated Fee:</Text>
                    <Flex ml="10px" alignItems={"center"}>
                        <InfoIcon
                            mr={"5px"}
                            color={"grey"}
                            w={"10px"}
                            h={"10px"}
                        />
                        <Text color={"#000000"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>--USDT</Text>
                    </Flex>
                </Flex>
                
                <Flex>
                    <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"}>
                        Previous
                    </Button>
                    <Button borderRadius={"5px"} ml="12px" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"}>
                        Next
                    </Button>
                </Flex>
            </Flex> */}
        </DashboardLayout>
    )
}

export default BuyAds