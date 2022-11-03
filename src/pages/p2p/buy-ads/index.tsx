import { Box, Text  } from '@chakra-ui/react';
// import StepComponent from '../../../components/p2p/steps';
import BuyStepTwo from '../../../components/p2p/steps/BuyStepTwo';
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import BuyStepOne from '../../../components/p2p/steps/BuyStepOne';
// import BuyStepTwo from '../../../components/p2p/steps/BuyStepTwo';
// import { InfoIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import BuyStepThree from '../../../components/p2p/steps/BuyStepThree';
import { useState } from 'react';



const BuyAds = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [
        "Set Type & Price",
        "Set Total Amount And Payment Methods",
        "Set Remark And Automatic Response"
    ]


    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1)
    }

    const displayStep = (step: number) => {
        switch (step) {
            case 1: {
                return <BuyStepOne handleNextStep={handleNextStep}  />
            }
            case 2: {
                return <BuyStepTwo handlePreviousStep={handlePreviousStep} handleNextStep={handleNextStep} />
            }
            case 3: {
                return <BuyStepThree handlePreviousStep={handlePreviousStep} handleNextStep={handleNextStep} />
            }
            default:
        }
    }

    return (
        <DashboardLayout title="P2P Buy Ads">
            <Box position="relative" mt="100px">

                <Box left={["0%", "0", "15%"]} py={["15px", "15px", "24px"]} top={"60px"} bg={"white"} w={["100%", "100%", "84%"]} position={"fixed"} pl={["15px", "15px", "90px"]} zIndex="10">
                <Text fontSize={["32px", "24px", "30px"]} fontWeight={"600"}>Post Normal Ads</Text>
                </Box>

                {/* <StepComponent
                    steps={steps}
                    currentStep={currentStep}
                /> */}

                

            </Box>

                {displayStep(currentStep)}

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

            {/* Step Three */}
            {/* <BuyStepThree/>

            <Flex justifyContent={"space-between"} alignItems={"center"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["none", "none", "flex"]}>
                <Flex>
                    <Flex ml="10px" alignItems={"center"}>
                        <QuestionOutlineIcon
                            mr={"5px"}
                            color={"black"}
                            w={"10px"}
                            h={"10px"}
                        />
                        <Text color={"#000000"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Help & Guide</Text>
                    </Flex>
                </Flex>
                
                <Flex>
                    <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"}>
                        Previous
                    </Button>
                    <Button borderRadius={"5px"} ml="12px" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} >
                        Post
                    </Button>
                </Flex>
            </Flex> */}

        </DashboardLayout>
    )
}

export default BuyAds