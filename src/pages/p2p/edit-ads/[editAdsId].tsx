import { useRouter } from "next/router"
import { useAppSelector } from "../../../helpers/hooks/reduxHooks"
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout"
import {
    Box, Button, Flex,
    HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure,  FormControl, Spinner, Tooltip,
     Heading,
  Show,
  VStack,
  InputLeftElement,
  Tabs, TabPanels, TabPanel,  FormLabel, FormErrorMessage

} from '@chakra-ui/react'
import {
    AddIcon, ArrowBackIcon, CloseIcon, InfoIcon, RepeatIcon, TriangleDownIcon
} from '@chakra-ui/icons'
import { useEditAdsMutation, useGetP2pAllAdsQuery } from "../../../redux/services/p2p-ads.service"
import { useAddP2pSellAdsBankMutation, useGetAddedBankQuery, useGetAddedBankSellTypeQuery, useGetNigerianBankQuery, useGetUsersBankQuery } from "../../../redux/services/bank.service"
import { useState } from "react"
import { MouseEventHandler} from 'react'
import SearchInput from "../../../components/p2p/steps/SellSteps/BuyStepTwoSearchFilter"
import appAlert from "../../../helpers/appAlert"
import { Field, Form, Formik } from "formik"

interface InitialValuesProps {
    totalAmount: string
    minLimit: string
    maxLimit: string
    paymentTimeLimit: string
}

const EditAds = (props:any) => {
  const router = useRouter()
  const { singleAds } = useAppSelector((state) => state.accountSettings)
  console.log("sell ", singleAds)
  
  // console.log("this is the singleAds ", singleAds)

  // const { editAdsId } = router.query
  // console.log("this is the edit id", editAdsId)

  const [editAds] = useEditAdsMutation()

  const getAddedBanks:any = useGetAddedBankQuery()
  
  const { user } = useAppSelector((state) => state.auth)
  const [pageNumber] = useState(1)
  
  
  const getAllAds = useGetP2pAllAdsQuery({userId: user?._id, pageNumber: pageNumber})
  // const [currentStep, setCurrentStep] = useState(1)
  // const [coin, setCoin] = useState('BTC')
  const [priceType] = useState('fixed')
  const [price, setPrice] = useState<any>(singleAds?.price)
  
  const initialValues:InitialValuesProps = {
      totalAmount: singleAds?.totalAmount,
      minLimit: singleAds?.minLimit,
      maxLimit: singleAds?.maxLimit,
      paymentTimeLimit: "15"
  }


  const [values, setValues] = useState(initialValues)
  const [banks] = useState<any>([])
  // const [sellBanks, SetSell]

  const handleCancelStep = () => {
      router.back()
  }

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({
        ...values,
        [name]: value,
    })
  }

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
   }
  
  const getAddedBanksIdValues = () => {
      const ids = getAddedBanks?.data?.data?.map((item: any) => item._id)
      for (let i = 0; i < ids.length; i++) {
          banks.push(ids[i])
      }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const EditBuyAdsModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined }) => {
    console.log(props)
    
      return (
          <Modal isOpen={isOpen} onClose={onClose} size="lg" >
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
                      
                      <SearchInput onClose={ onClose}  />
                  </ModalBody>
              </ModalContent>
          </Modal>
      )
  }


  



  const { isLoading} = useGetUsersBankQuery()
  const [defaultTab, setDefaultTab] = useState(0)

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
  const [sellBanks, setSellBanks] = useState<any>([])

  // console.log("this is it ", sellBanks)
  const sellBank:any = []

  const getAddedBanksSellIdValues = () => {
      const ids = sellBanks?.map((item: any) => item.id)
      for (let i = 0; i < ids.length; i++) {
          sellBank.push(ids[i])
      }
  }


  const handleSelect = async (value: any) => {
        const findBankCode = getAddedBankSellType?.data?.data?.find((item:any) => item?._id === value) 
        const body = {
            name: findBankCode?.name,
            codes: findBankCode?.code,
            accountName: findBankCode?.accountName,
            accountNumber: findBankCode?.accountNumber,
            id: findBankCode?._id
        }       
        setSellBanks((selectedBank:any) => [...selectedBank, body])
        appAlert.success("Bank Selected")
        onClose()
    }
    
    function filteredBanks(arr: any, comp: any) {
        const unique = arr.map((e:any) => e[comp]).map((e:any, i:any, final:any) => final.indexOf(e) === i && i).filter((e:any) => arr[e]).map((e:any) => arr[e])   
        return unique
    }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getAddedBanksIdValues()
    getAddedBanksSellIdValues()

    const data = {
      banks: singleAds?.type=== "sell" ? sellBank : banks,
      type: singleAds?.type,
      cash: singleAds?.cash,
      coin: singleAds?.coin,
      paymentTimeLimit: values.paymentTimeLimit,
      priceType: priceType,
      price: parseFloat(price),
      totalAmount: parseFloat(values.totalAmount),
      minLimit: parseFloat(values.minLimit),
      maxLimit: parseFloat(values.maxLimit),
      highestPriceOrder: parseFloat(price),
      kyc: true,
      moreThanDot1Btc: true,
      registeredZeroDaysAgo: true,
      isPublished:true,
    }
    // console.log(data)
    const resp:any = await editAds({body:data, id: singleAds?._id})
    if(resp?.data?.status === 200) {
      appAlert.success(resp?.data?.message)
      getAllAds.refetch()
      router.push("/p2p/all-ads")
    } else {
      appAlert.success(resp?.error?.data?.message)
    }
    
  }
  const SellStepTwoModal = (props: { action: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
        console.log(props)

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


  return (
    <DashboardLayout title='Edit Ads'>

      <EditBuyAdsModal action={props.action} />
      <SellStepTwoModal action={props.action} />
            

      <Show above='md'>
        <Button
            onClick={() => router.back()}
            leftIcon={<ArrowBackIcon />}
            colorScheme="transparent"
            variant="solid"
            pl={0}
            color={'black'}
            ml={'1rem'}
          >
            Back
          </Button>
          <VStack alignItems={"start"}>

          <Heading size="md"
              bg="white"
              py={'2rem'}
              ml={'1rem'}>Edit Ad</Heading>
          </VStack>
        </Show>

        <Show below='sm'>
          <Flex justifyContent={'start'} bg={'white'}>
            <Button
              onClick={() => router.back()}
              leftIcon={<ArrowBackIcon />}
              colorScheme="transparent"
              variant="solid"
              pl={0}
              color={'black'}
              ml={'2'}
            >
              Back
              <Heading size="md"
                ml={'1rem'}>Edit Ad</Heading>
            </Button>
          </Flex>
        </Show>
      
        <form onSubmit={handleSubmit}>

          <FormControl>
        
            <Box mt="80px" p="28px" px={["15px", "15px", "28px"]} fontFamily={"Open Sans"} bg="white" mx="10px" pb="70px">
              <Flex alignItems="center" mb="30px" justifyContent="space-between" w={{base: "100%", md:"50%"}}>
                <VStack alignItems="flex-start">
                  <Text color={"#8E9BAE"} textTransform="capitalize">{singleAds?.type}</Text>
                  <Heading fontSize={{base: "20px", md:"24px"}} fontWeight="400">{singleAds?.coin === "USDT_TRON" ? "USDT-TRON" : singleAds?.coin}/{singleAds?.cash}</Heading>
                </VStack>  

              <VStack alignItems="flex-start">
                  <Text color={"#8E9BAE"}>Highest Order Price</Text>
                  <Heading fontSize={{base: "20px", md:"24px"}} fontWeight="400">₦{price?.toLocaleString()}</Heading>
                </VStack>  


              <VStack alignItems="flex-start">
                  <Text color={"#8E9BAE"}>Price</Text>
                  <Heading fontSize={{base: "20px", md:"24px"}} fontWeight="400">₦{price?.toLocaleString()}</Heading>
                </VStack>  
            </Flex>
            <VStack alignItems={"flex-start"} mb="35px">
              <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Floating Price Margin</Text>

              <Flex >
                  <InputGroup size='sm' border="1px solid #8E9BAE" p="9px" borderRadius="5px">
                      <InputLeftElement  mx="5px">
                          <Button size='sm' mt="5px" border="1px solid #8E9BAE" bg="none" fontWeight="bold" >
                              -
                          </Button>
                      </InputLeftElement>
                      <Input
                          value={price}
                          onChange={handleChange}
                          placeholder='₦550.47'
                          type="number"
                          border="none"
                          variant="unstyled"
                          textAlign="center"
                      />
                      <InputRightElement mx="5px">
                          <Button size='sm' mt="5px" border="1px solid #8E9BAE" bg="none" fontWeight="bold" >
                              +
                          </Button>
                      </InputRightElement>
                  </InputGroup>
              </Flex>
                
            </VStack>
                  
            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Total Amount</Text>
              <Flex w={["100%", "100%", "50%"]} direction={"column"} alignItems={"flex-end"}>
                <InputGroup>
                  <Input
                    isRequired
                    autoComplete='off' type="number" variant={'outline'}
                    placeholder={'0'}
                    name="totalAmount"
                    defaultValue={values.totalAmount}
                    onChange={handleInputChange}
                  />
                  <InputRightElement width={{ md: '120px', base: '100px' }} textAlign={"right"}>
                    <Text fontSize={"14px"} fontWeight={"400"}>{singleAds?.coin === "USDT_TRON" ? "USDT-TRON" : singleAds?.coin}</Text>
                  </InputRightElement>
                </InputGroup>
                <Text mt={"12px"} fontSize={"12px"} color={"#8E9BAE"} fontWeight={"600"} fontFamily={"Open Sans"}>=0 NGN</Text>
              </Flex>
                  
              <HStack mt="24px" w={["100%", "100%", "50%"]}>
                <Box w="55%" fontSize={"14px"} fontWeight={"600"}>
                  <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Order Limit</Text>
                  <InputGroup mt="12px">
                    <Input
                      isRequired
                      autoComplete='off'
                      type="number"
                      variant={'outline'} placeholder={'0'}
                      name="minLimit"
                      defaultValue={values.minLimit}
                      onChange={handleInputChange}
                    />
                    <InputRightElement width={{ md: '100px', base: '100px' }}>
                      <Text fontSize={"12px"} fontWeight={"400"}>{singleAds?.coin === "USDT_TRON" ? "USDT-TRON" : singleAds?.coin}</Text>
                    </InputRightElement>
                  </InputGroup>
                      
                </Box>

                <Box height="32px">
                  <Text m={["5px", "5px", "20px"]} mt="17px" >~</Text>
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
                      defaultValue={values.maxLimit}
                      onChange={handleInputChange}
                    />
                    <InputRightElement width={{ md: '100px', base: '100px' }}>
                      <Text fontSize={"12px"} fontWeight={"400"}>{singleAds?.coin === "USDT_TRON" ? "USDT-TRON" : singleAds?.coin}</Text>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </HStack>


            {singleAds?.type === "sell" ? (
              <Box mt="48px" fontSize={"14px"}>
                  <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Payment Methods</Text>
                  <Text fontWeight={"400"} mt="12px">Select up to 5 methods</Text>
                  
                  <Flex flexWrap="wrap" gap="30px" alignItems="center" mt="12px">
                      {/* rendering the data */}
                      {sellBanks?.length === 0 ? null : (sellBanks.length > 0 && sellBanks.length === 1) ? (
                          sellBanks?.map((item: any) => {
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
                          )) : (filteredBanks(sellBanks, "id")).map((item:any) => (
                                  <Flex key={item?.id} p={"11px 10px"}  justifyContent={"space-between"} alignItems="center" color="#000000" borderRadius={"5px"} border={"0.88px solid #8e9bae"} bg={"transparent"} w={["45%", "45%", "136px"]} >
                                      {item?.name?.substring(0, 13)}
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
            ): (
              <Box mt="48px" fontSize={"14px"}>
                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"}>Payment Methods</Text>
                <Text fontWeight={"400"} mt="12px">Select up to 5 methods</Text>
                      
                <Flex flexWrap="wrap" gap="30px" alignItems="center" mt="12px">
                  {/* rendering the data */}
                  {getAddedBanks.isFetching ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> : (
                    getAddedBanks?.data?.data?.map((item: any) => (
                      <Flex key={item._id} p={"11px 10px"} justifyContent={"space-between"} alignItems="center" color="#000000" borderRadius={"5px"} border={"0.88px solid #8e9bae"} bg={"transparent"} w={["45%", "45%", "136px"]} >
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
                              
                  ) : (
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
              
              )}
                  
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

              <Flex direction={"column"} mt={"24px"} justifyContent={"space-between"} p={"12px"} w={"100%"} bg="#FFFFFF" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["flex", "flex", "none"]}>
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
                  <Button borderRadius={"5px"} border={"0.88px solid #8E9BAE"} bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handleCancelStep}>
                    Cancel
                  </Button>
                  <Button borderRadius={"5px"} type="submit" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} >
                    Post
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
                <Button borderRadius={"5px"} border={"0.88px solid #8E9BAE"} bg={"transparent"} color={"black"} p={"11px 44px"} fontSize={"14px"} onClick={handleCancelStep}>
                  Cancel
                </Button>
                <Button type="submit" borderRadius={"5px"} ml="12px" bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} >
                  Post
                </Button>
              </Flex>
            </Flex>
          </FormControl>
        </form>
    </DashboardLayout>
  )
}

export default EditAds