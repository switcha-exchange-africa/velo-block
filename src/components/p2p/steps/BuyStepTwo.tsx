import { AddIcon, InfoIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure  } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

const BuyStepTwo = (props: { action: any; }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const BuyStepTwoModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
        console.log(props)
        return (
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent padding={"10px 0"}>
                    <ModalHeader textAlign={"center"} padding={"10px 0"}>
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
                        <Flex  bg="red" padding={"20px 20px"}>

                            <Text fontSize={"md"} color={"#8E9BAE"}>
                                All payment methods
                            </Text>
                            


                        </Flex>
                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        );
    };
    return (
        <>
            <BuyStepTwoModal action={props.action} />
            <Box mt="80px" p="28px" px={["15px", "15px", "28px"]} fontFamily={"Open Sans"} bg="white" mx="10px" pb="70px">
                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Total Amount</Text>
                <Flex w={["100%", "100%", "50%"]} direction={"column"} alignItems={"flex-end"}>
                    <InputGroup>
                        <Input autoComplete='off' type="number" variant={'outline'} placeholder={'0'} />
                        <InputRightElement width={{ md: '60px', base: '70px' }}>
                            <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                        </InputRightElement>
                    </InputGroup>
                    <Text mt={"12px"} fontSize={"12px"} color={"#8E9BAE"} fontWeight={"600"} fontFamily={"Open Sans"}>=0 NGN</Text>
                </Flex>
                
                <HStack mt="24px"  w={["100%", "100%", "50%"]}>
                    <Box w="50%">
                        <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                        <InputGroup mt="12px">
                            <Input autoComplete='off' type="number" variant={'outline'} placeholder={'0'} />
                            <InputRightElement width={{ md: '60px', base: '62px' }}>
                                <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                            </InputRightElement>
                        </InputGroup>
                    
                    </Box>

                    <Box height="32px">
                        <Text m={["5px", "5px", "20px"]}  mt="17px" >~</Text>
                    </Box>
                

                    <Box w="50%">
                        <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                        <InputGroup mt="12px">
                            <Input autoComplete='off' type="number" variant={'outline'} placeholder={'0'} />
                            <InputRightElement width={{ md: '60px', base: '62px' }}>
                                <Text fontSize={"14px"} fontWeight={"400"}>USDT</Text>
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                </HStack>

                
                <Box mt="48px" fontSize={"14px"}>
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Payment Methods</Text>
                    <Text fontWeight={"400"} mt="12px">Select up to 5 methods</Text>
                    <Button p={"11px 22px"} mt="12px" color="#FB5E04" border={"0.88px solid #FB5e04"} bg={"transparent"} onClick={onOpen}>
                        <AddIcon
                            mr="5px"
                            color={"#FB5E04"}
                            w={"10px"}
                            h={"10px"}
                        />
                        Add
                    </Button>
                </Box>
                
                <Text mt="24px" color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Payment Time Limit</Text>
                <Select
                    mt="12px"
                    w="137px"
                    bg='transparent'
                    border='0.88px solid #8E9BAE'
                    borderRadius="5px"
                    color='black'
                    placeholder='15 Min'
                />



                <Flex  direction={"column"} mt={"24px"} justifyContent={"space-between"}  p={"12px"} w={"100%"} bg="#FFFFFF" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["flex", "flex", "none"]}>
                    <Flex mb="24px">
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
                    
                    <Flex justifyContent={"space-between"}>
                        <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"}>
                            Previous
                        </Button>
                        <Button borderRadius={"5px"}  bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"}>
                            Next
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
        
    )
}

export default BuyStepTwo