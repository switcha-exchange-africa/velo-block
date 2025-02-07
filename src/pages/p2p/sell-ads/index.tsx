import { Box, Text  } from '@chakra-ui/react';
import { useState } from 'react';
import StepComponent from '../../../components/p2p/steps';
import SellStepOne from '../../../components/p2p/steps/SellSteps/SellStepOne';
import SellStepThree from '../../../components/p2p/steps/SellSteps/SellStepThree';
import SellStepTwo from '../../../components/p2p/steps/SellSteps/SellStepTwo';
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout';

interface InitialValuesProps {
    totalAmount: string
    minLimit: string
    maxLimit: string
}

const SellAds = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [coin, setCoin] = useState('BTC')
    const [cash, setCash] = useState("NGN")
    const [priceType, setPriceType] = useState('fixed')
    const [price, setPrice] = useState<any>(0)
    const [paymentTimeLimit, setPaymentTimeLimit] = useState(`15`)
    
    const initialValues:InitialValuesProps = {
        totalAmount: "",
        minLimit: "",
        maxLimit: ""
    }

    const [values, setValues] = useState(initialValues)
    const [banks, setBanks] = useState<any>([])

    
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
                    <SellStepOne
                        handleNextStep={handleNextStep}
                        coin={coin}
                        setCoin={setCoin}
                        price={price}
                        setPrice={setPrice}
                        cash={cash}
                        setCash={setCash}
                        priceType={priceType}
                        setPriceType={setPriceType}
                    />
                )
            }
            case 2: {
                return (
                    <SellStepTwo
                        handlePreviousStep={handlePreviousStep}
                        coin={coin}
                        handleNextStep={handleNextStep}
                        values={values}
                        setValues={setValues}
                        banks={banks}
                        setBanks={setBanks}
                        paymentTimeLimit={paymentTimeLimit}
                        setPaymentTimeLimit={setPaymentTimeLimit}
                    />
                )
            }
            case 3: {
                return (
                    <SellStepThree
                        handlePreviousStep={handlePreviousStep}
                        coin={coin}
                        price={price}
                        cash={cash}
                        priceType={priceType}
                        handleNextStep={handleNextStep}
                        paymentTimeLimit={paymentTimeLimit}
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
            <Box left={["0%", "0", "200px"]} py={["15px", "15px", "24px"]} top={"60px"} bg={"white"} w={["100%", "100%", "84%"]} position={"fixed"} pl={["15px", "15px", "90px"]} zIndex="10">
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

export default SellAds