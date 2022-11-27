import { Box, Text  } from '@chakra-ui/react';
import { useState } from 'react';
import StepComponent from '../../../components/p2p/steps';
import BuyStepOne from '../../../components/p2p/steps/BuySteps/BuyStepOne';
import BuyStepThree from '../../../components/p2p/steps/BuySteps/BuyStepThree';
import BuyStepTwo from '../../../components/p2p/steps/BuySteps/BuyStepTwo';
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout';

interface InitialValuesProps {
    totalAmount: string
    minLimit: string
    maxLimit: string
    paymentTimeLimit: string
}

const BuyAds = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [coin, setCoin] = useState('BTC')
    const [priceType, setPriceType] = useState('fixed')
    const [price, setPrice] = useState<any>(0)
    
    const initialValues:InitialValuesProps = {
        totalAmount: "",
        minLimit: "",
        maxLimit: "",
        paymentTimeLimit: "15"
    }

    const [values, setValues] = useState(initialValues)
    const [banks] = useState<any>([])

    
    const handleNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1)
    }

    const handlePreviousStep = () => {
        setCurrentStep(prevStep => prevStep - 1)
    }

    const displayStep = (step: number) => {
        switch (step) {
            case 1: {
                return (
                    <BuyStepOne
                        handleNextStep={handleNextStep}
                        coin={coin}
                        setCoin={setCoin}
                        price={price}
                        setPrice={setPrice}
                        priceType={priceType}
                        setPriceType={setPriceType}
                    />
                )
            }
            case 2: {
                return (
                    <BuyStepTwo
                        handlePreviousStep={handlePreviousStep}
                        coin={coin}
                        handleNextStep={handleNextStep}
                        values={values}
                        setValues={setValues}
                        banks={banks}
                    />
                )
            }
            case 3: {
                return (
                    <BuyStepThree
                        handlePreviousStep={handlePreviousStep}
                        coin={coin}
                        price={price}
                        priceType={priceType}
                        handleNextStep={handleNextStep}
                        values={values}
                        banks={banks}
                    />
                )
            }
            default:
        }
    }

    return (
        <DashboardLayout title="P2P Buy Ads">
            <Box left={["0%", "0", "200px"]} py={["15px", "15px", "24px"]} top={"60px"} bg={"white"} w={["100%", "100%", "100%"]} position={"fixed"} pl={["15px", "15px", "90px"]} zIndex="10">
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