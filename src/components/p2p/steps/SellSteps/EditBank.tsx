// import { AddIcon, CloseIcon, InfoIcon, RepeatIcon, TriangleDownIcon } from '@chakra-ui/icons';
// import {
//     Box, Button, Flex,
//     FormControl,
    
//     HStack, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton,
//     ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure, VStack,
//     Tabs, TabPanels, TabPanel, Spinner,    FormErrorMessage, Tooltip
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { useAddP2pSellAdsBankMutation, useDeleteAddedBankMutation, useGetAddedBankSellTypeQuery, useGetNigerianBankQuery } from '../../../../redux/services/bank.service';
// import MainAppButton from '../../../buttons/MainAppButton';


// const EditBank = ({dataObj, handleChange, setDefaultTab} : any) => {

//     const {data:getBanks} = useGetNigerianBankQuery()
//     const [addP2pSellAdsBank] = useAddP2pSellAdsBankMutation()
//     const getAddedBankSellType = useGetAddedBankSellTypeQuery()
//     const [deleteAddedBank] = useDeleteAddedBankMutation()
//     const [load, setLoad] = useState(false)
        

//     const handleEditSubmit = (e:any) => {
//         e.preventDefault()
//     }


    

//     return (
//        <form onSubmit={handleEditSubmit}>
//             <FormControl>
//                 <Box px="18px" mt="20px" overflowY={"scroll"} height={"350px"} >    
        
//                     <VStack w={{ lg: '100%', md: '100%', base: '100%' }} align='start'>
                        
//                         <InputGroup >
//                             <Text>Bank</Text>
//                             <Select
//                                 defaultValue={dataObj?.name}        
//                                 placeholder='Select Bank'
//                                 cursor="pointer"
//                                 iconSize={"10px"}
//                                 icon={<TriangleDownIcon />}            
//                             >
//                                 {getBanks?.map((item: any, index: number) => (
//                                     <option key={index} value={item?.bankName}>{item?.bankName}</option>
//                                 ))}
//                             </Select>
//                         </InputGroup>

//                         <InputGroup  pt='4'>
//                             <Text>Account Number</Text>
//                             <Input
//                                 defaultValue={dataObj.accountNumber}
//                                 onChange={handleChange}
//                                 type="number"
//                                 name="accountNumber"
//                                 placeholder="215xxxxx900"
//                             />
//                         </InputGroup>
                
                
//                         <InputGroup pt='4'>
//                             <Flex direction="column">
//                                 <Text>Account Name</Text>
//                                 <Input
//                                     defaultValue={dataObj?.accountName}
//                                     onChange={handleChange}
//                                     type="text"
//                                     name="accountName"
//                                     placeholder="John Doe"
//                                 />
//                             </Flex>
                            
//                         </InputGroup>
                        
                        
                

//                     </VStack>
//                 </Box>


//                 <HStack px="20px" py="12px"  justifyContent={"space-between"}>
//                     <MainAppButton  width="150px" isLoading={load} backgroundColor={'#FB5E04'}  color="white">
//                         <AddIcon
//                             mr="5px"
//                             color={"white"}
//                             w={"10px"}
//                             h={"10px"}
//                         />
//                         Edit Bank
//                     </MainAppButton>
//                     <Button p={"11px 22px"} color="#000000" border={"0.88px solid #8E9BAE"} bg="transparent" onClick={() => setDefaultTab(0)}>
//                         <CloseIcon
//                             mr="5px"
//                             color={"#FB5E04"}
//                             w={"10px"}
//                             h={"10px"}
//                         />
//                         Cancel
//                     </Button>  
//                 </HStack>
//             </FormControl>
//         </form>
//     )
// }

// export default EditBank

import React from 'react'

const EditBank = () => {
  return (
    <div>EditBank</div>
  )
}

export default EditBank