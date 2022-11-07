import { AddIcon, CloseIcon, InfoIcon, RepeatIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex,
    HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure, InputLeftElement, Stack, VStack
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

// const BuyStep =

const BuyStepTwo = (props:any) => {
    const {handlePreviousStep, handleNextStep} = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    
    const BuyStepTwoModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
        console.log(props)
        return (
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent padding={"10px 0 0"} mx="10px">
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
                    <Box w="50%" fontSize={"14px"} fontWeight={"600"}>
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
                

                    <Box w="50%" fontSize={"14px"} fontWeight={"600"}>
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
                    
                    <HStack flexWrap={"wrap"} alignItems="center" mt="12px">
                        <Flex p={"11px 22px"} justifyContent={"space-between"} alignItems="center"  color="#000000" borderRadius={"5px"} border={"0.88px solid #8e9bae"} bg={"transparent"} w="130px">
                            First bank
                            <CloseIcon
                                mr="5px"
                                color={"#000000"}
                                w={"10px"}
                                h={"10px"}
                            />
                        </Flex>

                        <Flex p={"11px 22px"} justifyContent={"space-between"} borderRadius={"5px"} border={"0.88px solid #8e9bae"} alignItems="center" mt="12px" color="#000000" w="150px">
                            Access bank
                            <CloseIcon
                                mr="5px"
                                color={"#000000"}
                                w={"10px"}
                                h={"10px"}
                            />
                        </Flex>
                        
                        <Button p={"11px 22px"} color="#FB5E04" bg="transparent" border={"0.88px solid #FB5e04"} onClick={onOpen}>
                            <AddIcon
                                mr="5px"
                                color={"#FB5E04"}
                                w={"10px"}
                                h={"10px"}
                            />
                            Add
                        </Button>
                    </HStack>
                    
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
                        <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handlePreviousStep}>
                            Previous
                        </Button>
                        <Button borderRadius={"5px"}  bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} onClick={handleNextStep}>
                            Next
                        </Button>
                    </Flex>
                </Flex>
            </Box>

            <Flex justifyContent={"space-between"} alignItems={"center"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["none", "none", "flex"]}>
                <Flex>
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
                
                <Flex>
                    <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handlePreviousStep}>
                        Previous
                    </Button>
                    <Button borderRadius={"5px"} ml="12px" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} onClick={handleNextStep}>
                        Next
                    </Button>
                </Flex>
            </Flex>
        </>
        
    )
}

export default BuyStepTwo