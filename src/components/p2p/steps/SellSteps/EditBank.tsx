import { AddIcon, CloseIcon, InfoIcon, RepeatIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex,
    FormControl,
    HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure, VStack,
    Tabs, TabPanels, TabPanel, Spinner,    FormLabel, FormErrorMessage, Tooltip
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAddP2pSellAdsBankMutation, useDeleteAddedBankMutation, useGetAddedBankSellTypeQuery, useGetNigerianBankQuery } from '../../../../redux/services/bank.service';
import MainAppButton from '../../../buttons/MainAppButton';


const EditBank = () => {

    const {data:getBanks} = useGetNigerianBankQuery()
    const [addP2pSellAdsBank] = useAddP2pSellAdsBankMutation()
    const getAddedBankSellType = useGetAddedBankSellTypeQuery()
    const [deleteAddedBank] = useDeleteAddedBankMutation()
    const [load, setLoad] = useState(false)
        

    const handleEditSubmit = (e) => {
        e.preventDefault()
    }



    const [dataObj, setDataObj] = useState<any>({})

    // const [bankName]

    
//     const initialValues:InitialValuesProps = {
//       totalAmount: singleAds?.totalAmount,
//       minLimit: singleAds?.minLimit,
//       maxLimit: singleAds?.maxLimit,
//       paymentTimeLimit: "15"
//   }


    // const [values, setValues] = useState(initialValues)
  
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setDataObj({
            ...values,
            [name]: value,
        })
    }

    return (
       <form onSubmit={handleEditSubmit}>
            <FormControl>
                <Box px="18px" mt="20px" overflowY={"scroll"} height={"350px"} >    
        
                    <VStack w={{ lg: '100%', md: '100%', base: '100%' }} align='start'>
                        
                        <FormControl >
                            <FormLabel>Bank</FormLabel>
                            <Select
                                defaultValue={dataObj?.name}        
                                placeholder='Select Bank'
                                cursor="pointer"
                                iconSize={"10px"}
                                icon={<TriangleDownIcon />}            
                            >
                                {getBanks?.map((item: any, index: number) => (
                                    <option key={index} value={item?.bankName}>{item?.bankName}</option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl  pt='4'>
                            <FormLabel>Account Number</FormLabel>
                            <Input
                                defaultValue={dataObj.accountNumber}
                                onChange={handleChange}
                                type="number"
                                name="accountNumber"
                                placeholder="215xxxxx900"
                            />
                        </FormControl>
                
                
                        <FormControl  pt='4'>
                            <FormLabel>Account Name</FormLabel>
                            <Input
                                defaultValue={dataObj?.accountName}
                                onChange={handleChange}
                                type="text"
                                name="accountName"
                                placeholder="John Doe"
                            />
                            
                        </FormControl>
                

                    </VStack>
                </Box>


                <HStack px="20px" py="12px"  justifyContent={"space-between"}>
                    <MainAppButton  width="150px" isLoading={load} backgroundColor={'#FB5E04'}  color="white">
                        <AddIcon
                            mr="5px"
                            color={"white"}
                            w={"10px"}
                            h={"10px"}
                        />
                        Edit Bank
                    </MainAppButton>
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



            </FormControl>
        </form>
    )
}

export default EditBank