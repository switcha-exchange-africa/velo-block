import { AddIcon, CloseIcon, InfoIcon, RepeatIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex,
    FormControl,
    HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure, VStack,
    Tabs, TabPanels, TabPanel, Spinner,    FormLabel, FormErrorMessage, Tooltip
} from '@chakra-ui/react';
import { Field, Form, Formik } from "formik"
import { MouseEventHandler, useState } from 'react';
import appAlert from '../../../../helpers/appAlert';
import { useAppSelector } from '../../../../helpers/hooks/reduxHooks';
import { useAddP2pSellAdsBankMutation, useGetAddedBankSellTypeQuery, useGetNigerianBankQuery, useGetUsersBankQuery } from '../../../../redux/services/bank.service';


const SellStepTwo = (props:any) => {
    const { handlePreviousStep, handleNextStep, coin, banks, setBanks, values, setValues, paymentTimeLimit, setPaymentTimeLimit } = props
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const { getUserBank, isLoading} = useGetUsersBankQuery()
    const [defaultTab, setDefaultTab] = useState(0)

    const { walletBalance } = useAppSelector((state) => state.accountSettings)

    const renderBalance:any = (coinName: any) => {
        const obj:any = walletBalance?.find((coin:any) => coin?.coin === coinName)
        return obj?.balance?.toLocaleString() || 0
    }




    const changeIndexOfTab = () => {
        setDefaultTab(() => defaultTab + 1)
    }


    const validateAccountName = (value: string, ) => {
        let error
        if (!value) {
            error = 'Account name should not be empty '
        }
        return error
    }

    const validateAccountNumber = (value: string, ) => {
        let error
        if (!value) {
            error = 'Account number should not be empty '
        }

        return error
    }

    const validateBankName = (value: string, ) => {
        let error
        if (!value) {
            error = 'Bank not selected '
        }

        return error
    }
    
    
    const {data:getBanks} = useGetNigerianBankQuery()
    const [addP2pSellAdsBank] = useAddP2pSellAdsBankMutation()
    const getAddedBankSellType = useGetAddedBankSellTypeQuery()
    
    
    const handleSelect = async (value: any) => {
        const findBankCode = getAddedBankSellType?.data?.data?.find((item:any) => item?._id === value) 
        const body = {
            name: findBankCode?.name,
            codes: findBankCode?.code,
            accountName: findBankCode?.accountName,
            accountNumber: findBankCode?.accountNumber,
            id: findBankCode?._id
        }       
        setBanks((selectedBank:any) => [...selectedBank, body])
        appAlert.success("Bank Selected")
        onClose()
    }
    
    function filteredBanks(arr: any, comp: any) {
        const unique = arr.map((e:any) => e[comp]).map((e:any, i:any, final:any) => final.indexOf(e) === i && i).filter((e:any) => arr[e]).map((e:any) => arr[e])   
        return unique
    }

    

    const SellStepTwoModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
        console.log(props)
        const getUserBank = useGetUsersBankQuery()
    


        const handleRefresh = async () => {
            console.log("you refreshed me ")
            getUserBank.refetch()
            // console.log("this it the resp ", resp)
        }

        return (
            <Modal isOpen={isOpen} onClose={onClose} size="lg" motionPreset='none'>
                <ModalOverlay />
                <ModalContent padding={"10px 0 0"} mx="10px">
                    
                    <ModalCloseButton />
                    <ModalBody padding={"10px 0"}>
                        <Tabs defaultIndex={defaultTab}>
                            <TabPanels>
                                <TabPanel>
                                    <ModalHeader fontSize={"14px"} textAlign={"center"} padding={"10px 0"}>
                                        Select Payment Method
                                    </ModalHeader>
                                    <Box px="18px" mt="20px" overflowY={"scroll"} height={"350px"} >    
                                        {isLoading ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> : (
                                            getAddedBankSellType?.data?.data?.map((bank: any) => (  
                                                <VStack key={bank?._id} borderRadius={"5px"} mb={"24px"} cursor="pointer" onClick={() => handleSelect(bank?._id)} border={"1px solid #64748B"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                                                    <HStack w="100%">
                                                        <Text flex="1" color="#FB5E04">Bank Transfer</Text>
                                                        <Text flex="1.76" color="#000000">{bank?.accountName}</Text>
                                                        <Text flex="0.2" color="#FB5E04">Edit</Text>
                                                    </HStack>
                                                    <HStack w="100%">
                                                        <Text flex="1" color="#8E9BAE">Name</Text>
                                                        <Text flex="2" color="#000000">{bank?.accountName}</Text>
                                                    </HStack>
                                                    <HStack w="100%">
                                                        <Text flex="1" color="#8E9BAE">Bank Account N..</Text>
                                                        <Text  flex="2" color="#000000">{bank?.accountNumber}</Text>
                                                    </HStack>
                                                    <HStack w="100%">
                                                        <Text flex="1" color="#8E9BAE">Bank name</Text>
                                                        <Text flex="2" color="#000000">{bank?.name}</Text>
                                                    </HStack>
                                                </VStack>
                                        )))}    
                                    </Box>
                            
                                    <HStack px="20px" py="12px"  justifyContent={"space-between"}>
                                        <Button p={"11px 22px"} color="#FB5E04" border={"0.88px solid #FB5e04"} bg="transparent" onClick={changeIndexOfTab}>
                                            <AddIcon
                                                mr="5px"
                                                color={"#FB5E04"}
                                                w={"10px"}
                                                h={"10px"}
                                            />
                                            Add new
                                        </Button>  
                                        <Button p={"11px 22px"} color="#000000" border={"0.88px solid #8E9BAE"} bg="transparent" onClick={handleRefresh}>
                                            <RepeatIcon
                                                mr="5px"
                                                color={"#FB5E04"}
                                                w={"10px"}
                                                h={"10px"}
                                            />
                                            Refresh
                                        </Button>  
                                    </HStack>
                                
                                </TabPanel>

                                <TabPanel>
                                    <ModalHeader fontSize={"14px"} textAlign={"center"} padding={"10px 0"}>
                                        Add New bank
                                    </ModalHeader>
                                    <Formik
                                        initialValues={{name: "", accountName: "", accountNumber: "", code: "" }}

                                        onSubmit={async (values:any) => {                                
                                            let res = values.name
                                            let filteredBank =  getBanks?.filter(function(bank:any) {
                                                return bank.bankName === res;
                                            });
                                            let codeValue = filteredBank.map((code: any) => code?.bankCode)

                                            let newItem = codeValue[0]


                                            const data = {
                                                ...values,
                                                accountNumber: values.accountNumber.toString(),
                                                code: newItem
                                            }
                                            const response:any = await addP2pSellAdsBank(data)
                                            if (response?.data?.status == 200 || response?.data?.status == 201 ) {
                                                getAddedBankSellType.refetch()
                                                setDefaultTab(0)
                                                appAlert.success(response?.data?.message)
                                            } else {
                                                    appAlert.error(response?.error?.data?.message[0])
                                                } 
                                            }}
                                        validateOnChange
                                        validateOnBlur
                                        validateOnMount
                                    >
                                        {({
                                            isSubmitting,
                                         }) => (
                                            <Form  >
                                                <Box px="18px" mt="20px" overflowY={"scroll"} height={"350px"} >    
                                    
                                                <VStack w={{ lg: '100%', md: '100%', base: '100%' }} align='start'>
                                                    
                                                    <Field name="name" id="name" validate={validateBankName}>
                                                        {({ field , form}: any) => (
                                                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                            <FormLabel>Bank</FormLabel>
                                                                <Select
                                                                {...field}           
                                                                placeholder='Select Bank' cursor="pointer" iconSize={"10px"} icon={<TriangleDownIcon/>}            
                                                            >
                                                                {getBanks?.map((item: any, index: number) => (
                                                                    <option key={index} value={item?.bankName}>{item?.bankName}</option>
                                                                ))}
                                                            </Select>
                                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>    
                                                        </FormControl>
                                                        )}
                                                    </Field>
                                                    
                                                    <Field name='accountNumber' validate={validateAccountNumber}>
                                                        {({ field, form }: any) => (
                                                            <FormControl  pt='4' isInvalid={form.errors.accountNumber && form.touched.accountNumber}>
                                                                <FormLabel>Account Number</FormLabel>
                                                                <Input {...field} type="number" placeholder="215xxxxx900"/>
                                                                <FormErrorMessage>{form.errors.accountNumber}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <Field name='accountName' validate={validateAccountName}>
                                                        {({ field, form }: any) => (
                                                            <FormControl  pt='4' isInvalid={form.errors.accountName && form.touched.accountName}>
                                                                <FormLabel>Account Name</FormLabel>
                                                                <Input {...field} type="text" placeholder="John Doe"/>
                                                                <FormErrorMessage>{form.errors.accountName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                            


                                                </VStack>
                                            </Box>
                                            <HStack px="20px" py="12px"  justifyContent={"space-between"}>
                                                <Button isLoading={isSubmitting} type="submit" p={"11px 22px"} color="#FB5E04" border={"0.88px solid #FB5e04"} bg="transparent" >
                                                    <AddIcon
                                                        mr="5px"
                                                        color={"#FB5E04"}
                                                        w={"10px"}
                                                        h={"10px"}
                                                    />
                                                    Add Bank
                                                </Button>  
                                                <Button p={"11px 22px"} color="#000000" border={"0.88px solid #8E9BAE"} bg="transparent" onClick={() => setDefaultTab(0)}>
                                                    <CloseIcon
                                                        mr="5px"
                                                        color={"#FB5E04"}
                                                        w={"10px"}
                                                        h={"10px"}
                                                    />
                                                Cancel
                                                </Button>  
                                            </HStack>
                                        </Form>
                                        )}

                                    </Formik>
                            
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

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



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (banks.length === 0) {
            appAlert.error("Banks not selected")
        } else {
            handleNextStep()
        }
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
                            <Text mt={"12px"} fontSize={"12px"} color={"#8E9BAE"} fontWeight={"600"} fontFamily={"Open Sans"}>Balance ={renderBalance(coin)} {coin}</Text>
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
                            
                            <Flex flexWrap="wrap" gap="30px" alignItems="center" mt="12px">
                                {/* rendering the data */}
                                {banks?.length === 0 ? null : (banks.length > 0 && banks.length === 1) ? (
                                    banks?.map((item: any) => {
                                        return (
                                            <Flex key={item.id} p={"11px 10px"}  justifyContent={"space-between"} alignItems="center" color="#000000" borderRadius={"5px"} border={"0.88px solid #8e9bae"} bg={"transparent"} w={["45%", "45%", "136px"]} >
                                                {item.name.substring(0, 13)}
                                                <CloseIcon
                                                    mr="5px"
                                                    color={"#000000"}
                                                    w={"10px"}
                                                    h={"10px"}
                                                    cursor="pointer"
                                                />
                                            </Flex>        
                                        ) 
                                        
                                    } 
                                    )) : (filteredBanks(banks, "id")).map((item:any) => (
                                            <Flex key={item.id} p={"11px 10px"}  justifyContent={"space-between"} alignItems="center" color="#000000" borderRadius={"5px"} border={"0.88px solid #8e9bae"} bg={"transparent"} w={["45%", "45%", "136px"]} >
                                                {item.name.substring(0, 13)}
                                                <CloseIcon
                                                    mr="5px"
                                                    color={"#000000"}
                                                    w={"10px"}
                                                    h={"10px"}
                                                    cursor="pointer"
                                                />
                                            </Flex> 
                                        ))
                                }
                                

                                {banks?.length >= 5 ? (
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

                        <Select mt="12px"
                            w="137px"
                            bg='transparent'
                            border='0.88px solid #8E9BAE'
                            borderRadius="5px"
                            color='black'
                            value={paymentTimeLimit}
                            onChange={(e) => {
                                setPaymentTimeLimit(e.target.value)
                            }
                        }>
                            <option value={'15'}>15 Mins</option>
                            <option value={'30'}>30 Mins</option>
                            <option value={'45'}>45 Mins</option>
                        </Select>


                        <Flex  direction={"column"} mt={"24px"} justifyContent={"space-between"}  p={"12px"} w={"100%"} bg="#FFFFFF" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["flex", "flex", "none"]}>
                            <Flex mb="24px">
                                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Estimated Fee: 0.5%</Text>
                                <Flex ml="10px" alignItems={"center"}>
                                    <InfoIcon
                                        mr={"5px"}
                                        color={"grey"}
                                        w={"10px"}
                                        h={"10px"}
                                    />
                                    <Text color={"#000000"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>{coin}</Text>
                                </Flex>
                            </Flex>
                            
                            <Flex justifyContent={"space-between"}>
                                <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handlePreviousStep}>
                                    Previous
                                </Button>
                                <Button type="submit" borderRadius={"5px"}  bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} >
                                    Next
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>

                    <Flex justifyContent={"space-between"} alignItems={"center"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["none", "none", "flex"]}>
                <Flex>
                    <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Estimated Fee: 0.5%</Text>
                    <Flex ml="10px" alignItems={"center"}>
                        <InfoIcon
                            mr={"5px"}
                            color={"grey"}
                            w={"10px"}
                            h={"10px"}
                        />
                        <Text color={"#000000"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>{coin}</Text>
                    </Flex>
                </Flex>
                
                <Flex>
                    <Button borderRadius={"5px"} border={ "0.88px solid #8E9BAE"}  bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handlePreviousStep}>
                        Previous
                    </Button>
                    <Button borderRadius={"5px"} type="submit" ml="12px" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} >
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