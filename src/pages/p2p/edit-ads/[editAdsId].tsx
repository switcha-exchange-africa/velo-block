import { useRouter } from "next/router"
import { useAppSelector } from "../../../helpers/hooks/reduxHooks"
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout"
import {
    Box, Button, Flex,
    HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure,  FormControl, Spinner, Tooltip
} from '@chakra-ui/react'
import {
    AddIcon, CloseIcon, InfoIcon
} from '@chakra-ui/icons'
import { useGetP2pSingleAdsQuery } from "../../../redux/services/p2p-ads.service"

const EditAds = () => {
  const router = useRouter()
  const { user } = useAppSelector((state) => state.auth)
  const { editAdsId } = router.query
  console.log("this is the edit id", editAdsId)

  const getSingleAds = useGetP2pSingleAdsQuery({adId: editAdsId, userId: user?._id})

  
  console.log(getSingleAds)

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



  

  return (
    <DashboardLayout title='Edit Ads'>
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
                                <InputRightElement width={{ md: '120px', base: '100px' }} textAlign={"right"}>
                                    <Text fontSize={"14px"}  fontWeight={"400"}>{coin}</Text>
                                </InputRightElement>
                            </InputGroup>
                            <Text mt={"12px"} fontSize={"12px"} color={"#8E9BAE"} fontWeight={"600"} fontFamily={"Open Sans"}>=0 NGN</Text>
                        </Flex>
                        
                        <HStack mt="24px"  w={["100%", "100%", "50%"]}>
                            <Box w="55%" fontSize={"14px"} fontWeight={"600"}>
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
                                        <Text fontSize={"12px"} fontWeight={"400"}>{coin}</Text>
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
                                    <InputRightElement width={{ md: '100px', base: '100px' }}>
                                        <Text fontSize={"12px"} fontWeight={"400"}>{coin}</Text>
                                    </InputRightElement>
                                </InputGroup>
                            </Box>
                        </HStack>

                        
                        <Box mt="48px" fontSize={"14px"}>
                            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Payment Methods</Text>
                            <Text fontWeight={"400"} mt="12px">Select up to 5 methods</Text>
                            
                            <Flex flexWrap="wrap" gap="30px" alignItems="center" mt="12px">
                                {/* rendering the data */}
                                {getAddedBanks.isFetching ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> : (
                                    getAddedBanks?.data?.data?.map((item:any) => (
                                        <Flex key={item._id} p={"11px 10px"}  justifyContent={"space-between"} alignItems="center" color="#000000" borderRadius={"5px"} border={"0.88px solid #8e9bae"} bg={"transparent"} w={["45%", "45%", "136px"]} >
                                            {item?.name.substring(0, 13)}
                                            <CloseIcon
                                                mr="5px"
                                                color={"#000000"}
                                                w={"10px"}
                                                h={"10px"}
                                                cursor="pointer"
                                            />
                                        </Flex>        
                                    ))
                                )}

                                {getAddedBanks?.data?.data?.length >= 5 ? (
                                    <Tooltip label='You cannot add more than 5 banks' placement='top-end'>
                                        <Button disabled p={"11px 22px"} color="#FB5E04" bg="transparent" border={"0.88px solid #FB5e04"} onClick={onOpen}>
                                            <AddIcon
                                                mr="5px"
                                                color={"#FB5E04"}
                                                w={"10px"}
                                                h={"10px"}
                                            />
                                            Add
                                        </Button>
                                    </Tooltip>
                                    
                                ): (
                                    <Button p={"11px 22px"} color="#FB5E04" bg="transparent" border={"0.88px solid #FB5e04"} onClick={onOpen}>
                                        <AddIcon
                                            mr="5px"
                                            color={"#FB5E04"}
                                            w={"10px"}
                                            h={"10px"}
                                        />
                                        Add
                                    </Button>
                                )
                                    
                                }
                            
                            </Flex>
                            
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
                                <Button borderRadius={"5px"} type="submit" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} >
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
                            <Button type="submit" borderRadius={"5px"} ml="12px" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} >
                                Next
                            </Button>
                        </Flex>
                    </Flex>
                </FormControl>
            </form>
    </DashboardLayout>
  )
}

export default EditAds