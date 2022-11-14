import { AddIcon, CloseIcon, InfoIcon, RepeatIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex,
    FormControl,
    HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure, VStack
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { useGetAddedBankQuery } from '../../../../redux/services/bank.service';


const SellStepTwo = (props:any) => {
    const { handlePreviousStep, handleNextStep, coin, banks, values, setValues } = props
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const getAddedBanks:any = useGetAddedBankQuery()


    const SellStepTwoModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
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
                        <Box px="18px"  overflowY={"scroll"} height={"350px"} >    
                            <VStack borderRadius={"5px"} mb={"24px"} border={"1px solid #64748B"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                                <HStack w="100%">
                                    <Text flex="1" color="#FB5E04">Bank Transfer</Text>
                                    <Text flex="1.76" color="#000000">OLUMIDE OYELEYE SOLO</Text>
                                    <Text flex="0.2" color="#FB5E04">Edit</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Name</Text>
                                    <Text flex="2" color="#000000">OLUMIDE OYELEYE SOLO</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Bank Account N..</Text>
                                    <Text  flex="2" color="#000000">0264748663</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Bank name</Text>
                                    <Text flex="2" color="#000000">Access Bank</Text>
                                </HStack>
                            </VStack>
                             <VStack borderRadius={"5px"} mb={"24px"} border={"1px solid #fb5e04"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                                <HStack w="100%">
                                    <Text flex="1"  color="#FB5E04">Bank Transfer</Text>
                                    <Text flex="1.76" color="#000000">OLUMIDE OYELEYE SOLO</Text>
                                    <Text flex="0.2" color="#FB5E04">Edit</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Name</Text>
                                    <Text flex="2" color="#000000">OLUMIDE OYELEYE SOLO</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Bank Account N..</Text>
                                    <Text  flex="2" color="#000000">0264748663</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Bank name</Text>
                                    <Text flex="2" color="#000000">Access Bank</Text>
                                </HStack>
                            </VStack>

                             <VStack borderRadius={"5px"} mb={"24px"} border={"1px solid #64748B"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                                <HStack w="100%">
                                    <Text flex="1" color="#FB5E04">Bank Transfer</Text>
                                    <Text flex="1.76" color="#000000">OLUMIDE OYELEYE SOLO</Text>
                                    <Text flex="0.2" color="#FB5E04">Edit</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Name</Text>
                                    <Text flex="2" color="#000000">OLUMIDE OYELEYE SOLO</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Bank Account N..</Text>
                                    <Text  flex="2" color="#000000">0264748663</Text>
                                </HStack>
                                <HStack w="100%">
                                    <Text flex="1" color="#8E9BAE">Bank name</Text>
                                    <Text flex="2" color="#000000">Access Bank</Text>
                                </HStack>
                            </VStack>
                        </Box>
                        
                        <HStack px="20px" py="12px"  justifyContent={"space-between"}>
                            <Button p={"11px 22px"} color="#FB5E04" border={"0.88px solid #FB5e04"} bg="transparent" onClick={onOpen}>
                                <AddIcon
                                    mr="5px"
                                    color={"#FB5E04"}
                                    w={"10px"}
                                    h={"10px"}
                                />
                                Add new
                            </Button>  
                            <Button p={"11px 22px"} color="#000000" border={"0.88px solid #8E9BAE"} bg="transparent" onClick={onOpen}>
                                <RepeatIcon
                                    mr="5px"
                                    color={"#FB5E04"}
                                    w={"10px"}
                                    h={"10px"}
                                />
                                Refresh
                            </Button>  
                        </HStack>
                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        );
    };

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value,
        })
    }


    const getAddedBanksIdValues = () => {
        const ids = getAddedBanks?.data?.data?.map((item: any) => item._id)
        for (let i = 0; i < ids.length; i++) {
            banks.push(ids[i])
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getAddedBanksIdValues()
        handleNextStep()

        // const data = {
        //     ...values
        //     // banks: banks
        // }
        // console.log("second data", data)
    }

    
    return (
        <>
            <SellStepTwoModal action={props.action} />
            <form onSubmit={handleSubmit}>
                <FormControl>    
                    <Box mt="80px" p="28px" px={["15px", "15px", "28px"]} fontFamily={"Open Sans"} bg="white" mx="10px" pb="70px">
                        <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Total Amount</Text>
                        <Flex w={["100%", "100%", "50%"]} direction={"column"} alignItems={"flex-end"}>
                            <InputGroup>
                                <Input
                                    isRequired
                                    autoComplete='off' type="number" variant={'outline'}
                                    placeholder={'0'}
                                    name="totalAmount"
                                    value={values.totalAmount}
                                    onChange={handleInputChange}
                                />
                                <InputRightElement width={{ md: '60px', base: '70px' }}>
                                    <Text fontSize={"14px"} fontWeight={"400"}>{coin}</Text>
                                </InputRightElement>
                            </InputGroup>
                            <Text mt={"12px"} fontSize={"12px"} color={"#8E9BAE"} fontWeight={"600"} fontFamily={"Open Sans"}>=0 NGN</Text>
                        </Flex>
                        
                        <HStack mt="24px"  w={["100%", "100%", "50%"]}>
                            <Box w="50%" fontSize={"14px"} fontWeight={"600"}>
                                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                                <InputGroup mt="12px">
                                    <Input
                                        isRequired
                                        autoComplete='off'
                                        type="number"
                                        variant={'outline'} placeholder={'0'}
                                        name="minLimit"
                                        value={values.minLimit}
                                        onChange={handleInputChange}
                                    />
                                    <InputRightElement width={{ md: '100px', base: '100px' }}>
                                        <Text fontSize={"14px"} fontWeight={"400"}>{coin}</Text>
                                    </InputRightElement>
                                </InputGroup>
                            
                            </Box>

                            <Box height="32px">
                                <Text m={["5px", "5px", "20px"]}  mt="17px" >~</Text>
                            </Box>

                          
                        

                            <Box w="55%" fontSize={"14px"} fontWeight={"600"}>
                                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                                <InputGroup mt="12px" >
                                    <Input
                                        isRequired
                                        autoComplete='off'
                                        type="number"
                                        variant={'outline'}
                                        placeholder={'0'}
                                        name="maxLimit"
                                        value={values.maxLimit}
                                        onChange={handleInputChange}
                                    />
                                <InputRightElement width={{ md: '100px', base: '90px' }}>
                                        <Text fontSize={"14px"} fontWeight={"400"}>{coin}</Text>
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
                </FormControl>
            </form>
        </>
        
    )
}

export default SellStepTwo