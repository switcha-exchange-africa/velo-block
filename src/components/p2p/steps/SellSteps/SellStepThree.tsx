import {  QuestionOutlineIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex,
    HStack, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure,  Textarea, Checkbox, VStack, FormControl, Spinner
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
    import { MouseEventHandler, useEffect, useState } from 'react';
import appAlert from '../../../../helpers/appAlert';
import { useGetAddedBankQuery } from '../../../../redux/services/bank.service';
import { useCreateBuyAdsMutation } from '../../../../redux/services/p2p-ads.service';
import MainAppButton from '../../../buttons/MainAppButton';
import Status from '../../radioGroup/Status';

const SellStepThree = (props: any) => {
    const router = useRouter()
    const {handlePreviousStep, price, coin, priceType, values, banks, cash, paymentTimeLimit} = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [status, setStatus] = useState('Online right now')
    const getAddedBanks:any = useGetAddedBankQuery()
    

    const [remark, setRemark] = useState("")
    const [kyc, setKyc] = useState(true)
    const [registeredZeroDaysAgo, setRegisteredZeroDaysAgo] = useState(false)
    const [moreThanDot1Btc, setMoreThanDot1Btc] = useState(false)
    
    let [changeUSDTtronCoin, setChangeUSDTtronCoin] = useState(coin)

    const checkCoin = (coin:string) => {
        if (coin === "USDT-TRON") {
            setChangeUSDTtronCoin("USDT_TRON")
        } else {
            setChangeUSDTtronCoin(coin)
        }
    }

    useEffect(() => {
      checkCoin(coin)
    }, [coin])

    const [postP2pBuyAds] = useCreateBuyAdsMutation()
    
    const[load, setLoading] = useState(false)


    const handleSellAds = async () => {
        setLoading(true)
        
        const data = {
            type: "sell",
            cash: cash,
            coin: changeUSDTtronCoin,
            remark: remark,
            paymentTimeLimit: paymentTimeLimit,
            priceType: priceType,
            price: parseFloat(price),
            totalAmount: parseFloat(values.totalAmount),
            minLimit: parseFloat(values.minLimit),
            maxLimit: parseFloat(values.maxLimit),
            highestPriceOrder: parseFloat("1000"),
            banks: banks.map((item:any) => item.id),
            kyc: kyc,
            moreThanDot1Btc: moreThanDot1Btc,
            registeredZeroDaysAgo: registeredZeroDaysAgo,
            isPublished:true,
        }
        
        const response: any = await postP2pBuyAds(data)
        if (response?.data?.status == 201) {
            onClose()
            router.push("/p2p")
            setLoading(false)
            appAlert.success(`${response?.data?.message}`)   
                
        } if (response?.data?.status != 201) {    
            onClose()
            appAlert.error(`${response?.error?.data?.message}`)
            setLoading(false)
            router.push("/p2p")
        } 
    }

    
    
    const SellStepThreeModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
        console.log(props)
        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="lg"
                motionPreset='none'
            >
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
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">coin</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{coin}</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Currency</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{cash}</Text>
                            </VStack>

                        </HStack>

                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Price Type</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{priceType}</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Floating Price Margin</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>99.97%</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Floating</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{price ? parseFloat(price)?.toLocaleString() : price}&nbsp;{cash}</Text>
                            </VStack>

                        </HStack>


                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Order Limit</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{values ?  parseFloat(values?.minLimit)?.toLocaleString() : values?.minLimit}&nbsp;{coin} - {values?.maxLimit ? parseFloat(values.maxLimit).toLocaleString() : values?.maxLimit}&nbsp;{coin}</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Total Trading Amount</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{values?.totalAmount ? parseFloat(values.totalAmount)?.toLocaleString() : values?.totalAmount}&nbsp;{coin}</Text>
                            </VStack>
                        </HStack>

                        <HStack justifyContent="space-between" alignItems="flex-start" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Counterpart Conditions</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{kyc && "Completed KYC"}</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{registeredZeroDaysAgo && "Registered 0 days ago"}</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{moreThanDot1Btc && "Hold more than 0.01 BTC"}</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Payment Time Limit</Text>
                                <Text fontSize={"14px"} fontWeight={"600"}>{paymentTimeLimit} Mins</Text>
                            </VStack>
                        </HStack>

                        <HStack justifyContent="space-between" borderTop="1px solid #8E9BAE" borderBottom="1px solid #8E9BAE" mx="10px" py="12px">
                            <VStack alignItems={"flex-start"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color="#8E9BAE">Payment Method</Text>
                                <Flex w="100%" flexWrap="wrap">
                                    {getAddedBanks.isFetching ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> : (
                                    banks.map((item:any) => (
                                        <Flex key={item._id} justifyContent={"space-between"} direction="column" mr="10px" alignItems="flex-start" color="#000000" >
                                            <Text fontSize={"14px"} fontWeight={"600"}>{item?.name} &nbsp; </Text>
                                            <Text fontSize={"14px"} fontWeight={"600"}>{item?.accountName} &nbsp; </Text>
                                            <Text fontSize={"14px"} fontWeight={"600"}>{item?.accountNumber} &nbsp; </Text>
                                        </Flex>        
                                    ))
                                )}
                                
                                </Flex>
                            </VStack>
                        </HStack>


                        <Flex justifyContent={"space-between"} px="10px" mt="24px">
                            <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"} onClick={onClose}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"}>
                                Cancel
                            </Button>
                            
                            <MainAppButton onClick={handleSellAds} width="150px" isLoading={load} backgroundColor={'primaryColor.900'} >
                                Confirm to Post
                            </MainAppButton>


                        </Flex>
                    </ModalBody>

                </ModalContent>
            
            </Modal>
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
    }
    

    return (

        <>
                
            <form style={{ position: "relative" }} onSubmit={handleSubmit}>
                
                <SellStepThreeModal action={props.action} />
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
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
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
                                <Checkbox
                                    fontSize={"14px"} fontWeight={"400"}
                                    iconColor='#8e9bae' colorScheme="#e2e8f0"
                                    isChecked={kyc}
                                    onChange={(e: any) => setKyc(e.target.checked)}
                                >
                                    Completed KYC
                                </Checkbox>
                                <Checkbox
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    iconColor='#8e9bae'
                                    colorScheme={"#e2e8f0"}
                                    isChecked={registeredZeroDaysAgo}
                                    onChange={(e: any) => setRegisteredZeroDaysAgo(e.target.checked)}
                                >
                                    Registered 0 Days ago
                                </Checkbox>
                                <Checkbox
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    iconColor='#8e9bae'
                                    colorScheme={"#e2e8f0"}
                                    isChecked={moreThanDot1Btc}
                                    onChange={(e: any) => setMoreThanDot1Btc(e.target.checked)}
                                >
                                    Holdings more than 0.01 BTC
                                </Checkbox>
                            </VStack>
                            
                        </Box>


                        {/* <CheckboxConditions /> */}
                        

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
                                <Button borderRadius={"5px"}  bg={"#FB5E04"} color={"white"} p={"11px 30px"} fontSize={"14px"} onClick={onOpen}>
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

export default SellStepThree