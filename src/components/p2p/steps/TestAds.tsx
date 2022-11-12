import { useState } from 'react';
import StepComponent from '.';
import SellStepTwo from './BuySteps/SellStepTwo';
import SellStepOne from './SellSteps/SellStepOne';
import SellStepThree from './SellSteps/SellStepThree';


interface InitialValuesProps {
    totalAmount: string
    minLimit: string
    maxLimit: string
    paymentTimeLimit: string
}

const TestAds = () => {
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
                    <SellStepOne
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
                    <SellStepTwo
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
                    <SellStepThree
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
        <>
            {/* shows the steper  */}
            <StepComponent
                currentStep={currentStep}
            />

            {/* shows the content for the stepper */}
            {displayStep(currentStep)}
        </>
    )
}

export default TestAds