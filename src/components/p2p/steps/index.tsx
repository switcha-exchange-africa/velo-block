
// import { Box, Flex, HStack, VStack } from "@chakra-ui/react"
// import { useEffect, useRef, useState } from "react"



// interface StepComponentProps  {
//     steps: any,
//     currentStep: number
// }


// const StepComponent = ({steps, currentStep}: StepComponentProps) => {
//     const [newStep, setNewStep] = useState([])
//     const stepRef = useRef()
    
//     const updateStep = (stepNumber, steps) => {
//         const newSteps = [...steps]
//         let count = 0

//         while (count < newSteps.length) {
//             if (count === stepNumber) {
//                 newSteps[count] = {
//                     ...newSteps[count],
//                     highlighted: true,
//                     selected: true,
//                     completed: true
                    
//                 }
//                 count++                    
//             }

//             else if (count < stepNumber) {
//                 newSteps[count] = {
//                     ...newSteps[count],
//                     highlighted: false,
//                     selected: true,
//                     completed: true
                    
//                 }
//                 count++
//         } else {
//                 newSteps[count] = {
//                     ...newSteps[count],
//                     highlighted: false,
//                     selected: false,
//                     completed: false
                    
//                 }           
//             }
//         }
//         return newSteps
//     }
    
//     useEffect(() => {
//         const stepsState = steps.map((step:any, index:any) => (
//             Object.assign({}, {
//                 description: step,
//                 completed: false,
//                 highlighted: index === 0 ? true : false,
//                 selected: index === 0 ? true : false
//              })
//         ))
    
//         stepRef.current = stepsState
//         const current = updateStep(currentStep -1, stepRef.current)
//         setNewStep(current)
//     }, [steps, currentStep])
    
    
//     const displaySteps = newStep.map((step:any, index: any) => (
//         <Box key={index}>
//             <VStack>
//                 <Box position={"absolute"} top={"2px"}>
//                     {/* display description */} description
//                 </Box>

//                 <Flex bg="#FB5E04" height="12px" w="12px" p="5" color="white" alignItems="center" justifyContent="center" borderRadius={"50%"}>
//                     {/* display number */}1
//                 </Flex>

//             </VStack>
            
//             <Flex border={"1px dashed #FB5E04"}  transition="500ms" flex="auto">
//                 {/* display line */}
//             </Flex>
//         </Box>
//     ))

//     return (
//         <HStack mt={"150px"} position={"relative"} textAlign={"center"} p={"20px"} justifyContent={"center"} >
//             {displaySteps}
//         </HStack>
//     )
// }

// export default StepComponent