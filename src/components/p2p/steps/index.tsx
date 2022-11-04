import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"



interface StepComponentProps  {
    currentStep: number
}


const StepComponent = ({currentStep}: StepComponentProps) => {
    
    const displayStepOne = (
            <>
                < >
                    <VStack>
                        <Box position={"absolute"} w={["40%", "40%", "20%"]} ml={["45px", "45px", "0px"]} top={"-20px"} fontSize={["11px", "11px", "12px"]}>
                             Set Type & Price
                        </Box>

                        <Flex bg="#FB5E04" fontWeight="800" height="12px" w="12px" p="5" color="white" alignItems="center" justifyContent="center" borderRadius={"50%"}>
                            1
                        </Flex>

                    </VStack>
                    
                    <Flex border={"1px dashed #8E9BAE"}  transition="500ms" flex={["1", "1", "0.2"]}>
                        {/* display line */}
                    </Flex>
                </>
                < >
                    <VStack>
                        <Box position={"absolute"} top={"-30px"} w={["40%", "40%", "20%"]} textAlign="center" fontSize={["11px", "11px", "12px"]}>
                            <Text> Set Total Amount And Payment Methods</Text>
                        </Box>

                        <Flex bg="#E2E8F0" height="12px" w="12px" p="5" color="#8E9BAE" alignItems="center" justifyContent="center" borderRadius={"50%"} fontWeight="800">
                            2
                        </Flex>

                    </VStack>
                    
                    <Flex border={"1px dashed #8E9BAE"}  transition="500ms" flex={["1", "1", "0.2"]}>
                        {/* display line */}
                    </Flex>
                </>

                < >
                    <VStack >
                        <Box position={"absolute"} top={"-30px"} w={["35%", "35%", "20%"]} textAlign={["right", "right", "center"]} mr={["78px", "130px", "0px"]} fontSize={["11px", "11px", "12px"]}>
                             Set Remark And Automatic Response
                        </Box>

                        <Flex bg="#E2E8F0" height="12px" w="12px" p="5" color="#8E9BAE" alignItems="center" justifyContent="center" borderRadius={"50%"} fontWeight="800">
                            3
                        </Flex>

                    </VStack>
                </>
            </>    
    )

    const displayStepTwo = (
            <>
                < >
                    <VStack>
                        <Box position={"absolute"} w={["40%", "40%", "20%"]}  ml={["45px", "45px", "0px"]} top={"-20px"} fontSize={["11px", "11px", "12px"]}>
                             Set Type & Price
                        </Box>

                        <Flex bg="#FB5E04" fontWeight="800" height="12px" w="12px" p="5" color="white" alignItems="center" justifyContent="center" borderRadius={"50%"}>
                            1
                        </Flex>

                    </VStack>
                    
                    <Flex border={"1px dashed #FB5E04"}  transition="500ms" flex={["1", "1", "0.2"]}>
                        {/* display line */}
                    </Flex>
                </>
                < >
                    <VStack>
                        <Box position={"absolute"} top={"-30px"} w={["40%", "40%", "20%"]} textAlign="center" fontSize={["11px", "11px", "12px"]}>
                            <Text> Set Total Amount And Payment Methods</Text>
                        </Box>

                        <Flex bg="#FB5E04" height="12px" w="12px" p="5" fontWeight="800" color="white" alignItems="center" justifyContent="center" borderRadius={"50%"}>
                            2
                        </Flex>

                    </VStack>
                    
                    <Flex border={"1px dashed #8E9BAE"}  transition="500ms" flex={["1", "1", "0.2"]}>
                        {/* display line */}
                    </Flex>
                </>

                < >
                    <VStack >
                        <Box position={"absolute"} top={"-30px"} w={["35%", "35%", "20%"]} textAlign={["right", "right", "center"]} mr={["78px", "130px", "0px"]} fontSize={["11px", "11px", "12px"]}>
                             Set Remark And Automatic Response
                        </Box>

                        <Flex bg="#E2E8F0" height="12px" w="12px" p="5" color="#8E9BAE" fontWeight="800" alignItems="center" justifyContent="center" borderRadius={"50%"}>
                            3
                        </Flex>

                    </VStack>
                </>
            </>    
    )
    const displayStepThree = (
            <>
                < >
                    <VStack>
                        <Box position={"absolute"} w={["40%", "40%", "20%"]} ml={["45px", "45px", "0px"]} top={"-20px"} fontSize={["11px", "11px", "12px"]}>
                             Set Type & Price
                        </Box>

                        <Flex bg="#FB5E04" fontWeight="800" height="12px" w="12px" p="5" color="white" alignItems="center" justifyContent="center" borderRadius={"50%"}>
                            1
                        </Flex>

                    </VStack>
                    
                    <Flex border={"1px dashed #FB5E04"}  transition="500ms" flex={["1", "1", "0.2"]}>
                        {/* display line */}
                    </Flex>
                </>
                < >
                    <VStack>
                        <Box position={"absolute"} top={"-30px"} w={["40%", "40%", "20%"]} textAlign="center" fontSize={["11px", "11px", "12px"]}>
                            <Text> Set Total Amount And Payment Methods</Text>
                        </Box>

                        <Flex bg="#FB5E04" fontWeight="800" height="12px" w="12px" p="5" color="white" alignItems="center" justifyContent="center" borderRadius={"50%"}>
                            2
                        </Flex>

                    </VStack>
                    
                    <Flex border={"1px dashed #FB5E04"}  transition="500ms" flex={["1", "1", "0.2"]}>
                        {/* display line */}
                    </Flex>
                </>

                < >
                    <VStack >
                        <Box position={"absolute"} top={"-30px"} w={["35%", "35%", "20%"]} textAlign={["right", "right", "center"]} mr={["78px", "130px", "0px"]} fontSize={["11px", "11px", "12px"]}>
                             Set Remark And Automatic Response
                        </Box>

                        <Flex bg="#FB5E04" fontWeight="800" height="12px" w="12px" p="5" color="white" alignItems="center" justifyContent="center" borderRadius={"50%"}>
                            3
                        </Flex>

                    </VStack>
                </>
            </>    
    )

    const displayStep = (step:number) => {
        if (step === 1) {
            return displayStepOne
        } else if (step === 2) {
            return displayStepTwo
        } else {
            return displayStepThree
        }
    }

    return (
        <HStack mt={"130px"} position={"relative"} textAlign={"center"} mx="10px" justifyContent={["space-between", "space-between", "center"]}>
            {displayStep(currentStep)}
        </HStack>
    )
}

export default StepComponent