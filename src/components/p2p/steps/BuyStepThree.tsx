import {  QuestionOutlineIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex,
    HStack, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure,  Textarea, Checkbox, VStack, FormControl
} from '@chakra-ui/react';
import { MouseEventHandler, useState } from 'react';
import Status from '../radioGroup/Status';

const BuyStepThree = (props:any) => {
    const {handlePreviousStep} = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [status, setStatus] = useState('Online right now')
    
    console.log(status)

    const BuyStepThreeModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
        console.log(props)
        return (
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent padding={"10px 0"} mx="10px">
                    <ModalHeader fontSize={"14px"} textAlign={"center"} padding={"10px 0"}>
                        Confirm to post
                    </ModalHeader>
                    <ModalCloseButton />
                    
                    <ModalBody padding={"10px 0"}>
                        

                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Type</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>Buy</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Asset</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>USDT</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Currency</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>NGN</Text>
                            </VStack>

                        </HStack>

                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Price Type</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>Floating</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Floating Price Margin</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>99.97%</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Floating</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>484.85NGN</Text>
                            </VStack>

                        </HStack>


                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Order Limit</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>20,000.00NGN - 200,000.00NGN</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Total Trading Amount</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>2,000.00USDT</Text>
                            </VStack>
                        </HStack>

                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Counterpart Conditions</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>Completed KYC</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Payment Time Limit</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>15 min</Text>
                            </VStack>
                        </HStack>

                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Payment Method</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>Kuda Bank</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>Bank Transfer</Text>
                            </VStack>
                        </HStack>


                        <Flex justifyContent={"space-between"} px="10px" mt="24px">
                            <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"}>
                                Cancel
                            </Button>
                            <Button borderRadius={"5px"}  bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} onClick={onOpen}>
                                Confirm to Post
                            </Button>
                        </Flex>


                    </ModalBody>

                </ModalContent>
            </Modal>
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // handleNextStep()
        
    }
    
    return (

        <>
                
            <form style={{ position: "relative" }} onSubmit={handleSubmit}>
                
                <BuyStepThreeModal action={props.action} />
                <FormControl>
                    <Box mt="80px" p="28px" px={["15px", "15px", "28px"]} fontFamily={"Open Sans"} bg="white" mx="10px" pb="70px">
                        <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Remarks (Optional)</Text>
                        <Textarea
                            placeholder='Please do not include any crypto related words, such as crypto, P2P, C2C, BTC, USDT, ETH, etc.'
                            size='sm'
                            border={"0.88px solid #8E9BAE"}
                            borderRadius={"5px"}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            letterSpacing={"0.1em"}
                            color={"#8E9BAE"}
                            mt="12px"
                        />

                        
                        <Box mt="28px" fontSize={"14px"}>
                            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Auto Reply (Optional)</Text>  
                            <Textarea
                                placeholder='Auto reply message will be sent to the counterparty once the orders are created'
                                size='sm'
                                border={"0.88px solid #8E9BAE"}
                                borderRadius={"5px"}
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"0.1em"}
                                color={"#8E9BAE"}
                                mt="12px"
                            />
                        </Box>
                        
                        <Box mt="28px" fontSize={"14px"}>
                            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Counterparty Conditions</Text>  
                        
                            <VStack alignItems={"flex-start"} mt="12px">
                                <Checkbox defaultChecked fontSize={"14px"} fontWeight={"400"}  iconColor='#8e9bae' colorScheme="#e2e8f0" >Completed KYC</Checkbox>
                                <Checkbox fontSize={"14px"} fontWeight={"400"} iconColor='#8e9bae' colorScheme={"#e2e8f0"} >Registered 0 Days ago</Checkbox>
                                <Checkbox  fontSize={"14px"} fontWeight={"400"} iconColor='#8e9bae' colorScheme={"#e2e8f0"} >Holdings more than 0.01 BTC</Checkbox>
                            </VStack>
                            
                        </Box>
                        

                        <Box mt="18px" fontSize={"14px"}>
                            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Status</Text>  
                            <Status status={status} setStatus={setStatus} />
                            
                        </Box>



                        <Flex  direction={"column"} mt={"24px"} justifyContent={"space-between"}  p={"12px"} w={"100%"} bg="#FFFFFF" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["flex", "flex", "none"]}>
                            <Flex mb="24px">
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
                            
                            <Flex justifyContent={"space-between"}>
                                <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handlePreviousStep}>
                                    Previous
                                </Button>
                                <Button borderRadius={"5px"}  bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} onClick={onOpen}>
                                    Post
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>

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
                            <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handlePreviousStep}>
                                Previous
                            </Button>
                            <Button type="submit" borderRadius={"5px"} ml="12px" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} onClick={onOpen}  >
                                Post
                            </Button>
                        </Flex>
                    </Flex>
                </FormControl>
            </form>

        </>
        
    )
}

export default BuyStepThree