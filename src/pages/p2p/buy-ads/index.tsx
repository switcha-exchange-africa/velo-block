import { Box, Text  } from '@chakra-ui/react';
import StepComponent from '../../../components/p2p/steps';
import BuyStepTwo from '../../../components/p2p/steps/BuyStepTwo';
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import BuyStepOne from '../../../components/p2p/steps/BuyStepOne';
import BuyStepThree from '../../../components/p2p/steps/BuyStepThree';
import { useState } from 'react';



const BuyAds = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [asset, setAsset] = useState('BTC')
    
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1)
    }

    const displayStep = (step: number) => {
        switch (step) {
            case 1: {
                return <BuyStepOne handleNextStep={handleNextStep} asset={asset} setAsset={setAsset} />
            }
            case 2: {
                return <BuyStepTwo handlePreviousStep={handlePreviousStep} asset={asset} handleNextStep={handleNextStep} />
            }
            case 3: {
                return <BuyStepThree handlePreviousStep={handlePreviousStep} handleNextStep={handleNextStep} />
            }
            default:
        }
    }

    return (
        <DashboardLayout title="P2P Buy Ads">
            <Box left={["0%", "0", "15%"]} py={["15px", "15px", "24px"]} top={"60px"} bg={"white"} w={["100%", "100%", "84%"]} position={"fixed"} pl={["15px", "15px", "90px"]} zIndex="10">
                <Text fontSize={["32px", "24px", "30px"]} fontWeight={"600"}>Post Normal Ads</Text>
            </Box>
            {/* shows the steper  */}
            <StepComponent
                currentStep={currentStep}
            />

            {/* shows the content for the stepper */}
            {displayStep(currentStep)}
        </DashboardLayout>
    )
}

export default BuyAds