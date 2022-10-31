import {
Box, Button, Flex,
 Text
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";


function StepComponent() {
    const { nextStep, activeStep } = useSteps({
        initialStep: 0,
    });
    
    const steps = [
        {
            label: (
                <Text width={["100px", "100px", "auto"]} fontSize={["9px", "xs", "sm"]}>
                    Set Type & Price
                </Text>
            ),
            content: <Step1 action={nextStep} />,
            id: 1,
        },
        {
            label: (
                <Text width={["100px", "100px", "auto"]} fontSize={["9px", "xs", "sm"]}>
                    Set Total Amount And Payment Methods
                </Text>
            ),
            content: <Step2 action={nextStep} />,
            id: 2,
        },
        {
        label: (
            <Text width={["100px", "100px", "auto"]} fontSize={["9px", "xs", "sm"]}>
                Set Remark And Automatic Response
            </Text>
        ),
        content: <Step3 />,
        id: 3,
        },
    ];

    
    return (
        <>

        {/* <Flex
          justifyContent={"space-between"}
          flexDir={["column-reverse", "column-reverse", "row"]}
        > */}
          <Flex flexDir="column" mt={"150px"} w="50%" mx="auto">
            <Steps
              activeStep={activeStep}
              labelOrientation="vertical"
              colorScheme={"orange"}
              responsive={false}
              width={["375px", "375px", "auto"]}
            >
              {steps.map(({ label, content, id }) => (
                
                <Step label={label} key={id}>
                  {content}
                </Step>
              ))}
            </Steps>
          </Flex>
        {/* </Flex> */}
        </>
    )
}





const Step1 = (props: any) => {
    return (
        <>
            Step One
            <Button onClick={props.action}>
                Next
            </Button>
        </>
    )
}


const Step2 = (props: any) => {
    return (
        <>
            Step Two
            <Button onClick={props.action}>
                Next
            </Button>
        </>
    )
}



const Step3 = (props: any) => {
    return (
        <>
            Step One
            <Button onClick={props.action}>
                Next
            </Button>
  
        </>
    )
}


export default StepComponent
