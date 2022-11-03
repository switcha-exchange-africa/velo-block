import {  QuestionOutlineIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex,
    HStack, Input, InputGroup, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, InputLeftElement, Textarea, Checkbox, VStack
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import Status from '../radioGroup/Status';

const BuyStepThree = (props: { action: any; }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    
    const BuyStepThreeModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
        console.log(props)
        return (
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent padding={"10px 0"} mx="10px">
                    <ModalHeader fontSize={"14px"} textAlign={"center"} padding={"10px 0"}>
                        Select Payment Method
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody padding={"10px 0"}>
                        <Text
                            fontSize={"sm"}
                            padding="20px 20px 12px"
                            borderTop={"1px solid #8E9BAE"}
                        >
                            Recommended
                        </Text>
                        <Text
                            fontSize={"sm"}
                            fontWeight={"bold"}
                            padding="0px 20px 20px"
                            borderBottom={"1px solid #8E9BAE"}
                        >
                            Bank Transfer
                        </Text>
                        <Flex  padding={"20px 20px"} justifyContent={"space-between"} alignItems={"center"} direction={["column", "column", "row"]}>

                            <Text fontSize={"14px"} color={"#8E9BAE"} mb={["7px", "7px", "0px"]}>
                                All payment methods
                            </Text>
                            
                             <InputGroup w={["100%", "100%", "45%"]}>
                                <InputLeftElement >
                                    <SearchIcon 
                                        mr={"5px"}
                                        color={"#8E9BAE"}
                                        w={"15px"}
                                        h={"15px"}
                                    />
                                </InputLeftElement>
                                <Input fontSize={"14px"} autoComplete='off' type="number" variant={'outline'} placeholder={'Enter a payment method'} />

                            </InputGroup>
                            


                        </Flex>

                        <Flex  padding={"20px 20px"}  gap={["2px", "2px", "1px"]} alignItems={"center"} flexWrap={["wrap", "wrap", "nowrap"]}>
                            <Text color="#FB5E04" fontSize={"12px"} fontWeight="900" p={"2px 4px"} border={"0.88px solid #FB5e04"} borderRadius={"2.5px"} bg={"transparent"}>All</Text>
                            {searchOptions.map((value) => (
                                <Text key="value" cursor="pointer" fontWeight="900" color="#FB5E04" fontSize={"12px"} p={"2px 4px"} border={"none"} bg={"transparent"}>{value}</Text>        
                            ))}
                        </Flex>
                        
                        <Box px="20px" overflowY={"scroll"} height={"150px"} alignItems="center">    
                            <HStack  mb={"24px"}>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>RUB fiat balance</Text>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>Bank Transfer (vietnam)</Text>
                            </HStack>
                            <HStack  mb={"24px"}>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>UAH Balance</Text>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>Bank Transfer (Peru)</Text>
                            </HStack>
                            <HStack  mb={"24px"}>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>Bank of Georgia</Text>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>TBC Bank</Text>
                            </HStack>

                            <HStack  mb={"24px"}>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>7-Eleven</Text>
                                <Text w="50%" fontSize={"14px"} fontWeight={"600"}>Kuda Bank</Text>
                            </HStack>
                        </Box>
                        
                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        );
    };

    
    return (
        <>
            <BuyStepThreeModal action={props.action} />
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
                        <Checkbox   fontSize={"14px"} fontWeight={"400"} iconColor='#8e9bae' colorScheme={"#e2e8f0"} >Holdings more than 0.01 BTC</Checkbox>
                    </VStack>
                    
                </Box>
                

                <Box mt="18px" fontSize={"14px"}>
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Status</Text>  
                    <Status/>
                    
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
                        <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"}>
                            Previous
                        </Button>
                        <Button borderRadius={"5px"}  bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"}>
                            Post
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
        
    )
}

export default BuyStepThree