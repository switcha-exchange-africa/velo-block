import {SearchIcon} from '@chakra-ui/icons'
import {
    Box, Flex,
    Input, InputGroup, 
    Text,  InputLeftElement, Spinner 
} from '@chakra-ui/react'
import { useState } from 'react'
import appAlert from '../../../../helpers/appAlert'
import { useAddP2pBuyAdsBankMutation, useGetAddedBankBuyTypeQuery, useGetNigerianBankQuery } from '../../../../redux/services/bank.service'

interface BankProps {
    bankName: string,
    bankCode: string,
    image: string
}

interface SearchInput {
    onClose: () => void
}

const SearchInput = ({onClose}: SearchInput) => {

    const {data:getBanks, isLoading} = useGetNigerianBankQuery()
    const searchOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const [filter, setFilter] = useState("")
    const searchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    let dataSearch = getBanks?.filter((item:any) => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })

    // the get request to fetch all added banks
    const getAddedBanks = useGetAddedBankBuyTypeQuery()

    // the post request mutaution
    const [ addP2pBuyAdsBank ] = useAddP2pBuyAdsBankMutation()


    const handleSelect = async (bankName: any) => {
        const res:any = await addP2pBuyAdsBank(bankName)
        if (res.data.status == 200) {
            appAlert.success(`${res?.data?.message}`)
            getAddedBanks.refetch()
            onClose()    
        } if (res.data.status != 200) {
            appAlert.error(`${res?.data?.message}`)
        } 
    }

    
    

    return (
        <>
            <Flex  padding={"20px 20px"} justifyContent={"space-between"} alignItems={"center"} direction={["column", "column", "row"]}>
                <Text fontSize={"14px"} color={"#8E9BAE"} mb={["7px", "7px", "0px"]}>
                    All payment methods
                </Text>

                {/* the SearchInput component */}
                <InputGroup w={["100%", "100%", "45%"]}>
                    <InputLeftElement>
                        <SearchIcon 
                            mr={"5px"}
                            color={"#8E9BAE"}
                            w={"15px"}
                            h={"15px"}
                        />
                    </InputLeftElement>
                    <Input
                        fontSize={"14px"}
                        autoComplete='off' type="text"
                        variant={'outline'}
                        placeholder={'Enter a payment method'}
                        onChange={searchText}
                        value={filter}
                    />            
                </InputGroup>
                
            </Flex>
                <Flex  padding={"20px 20px"}  gap={["2px", "2px", "1px"]} alignItems={"center"} flexWrap={["wrap", "wrap", "nowrap"]}>
                <Text color="#FB5E04" fontSize={"12px"} fontWeight="900" p={"2px 4px"} border={"0.88px solid #FB5e04"} borderRadius={"2.5px"} bg={"transparent"}>All</Text>
                {searchOptions.map((value, index) => (
                    <Text key={index} cursor="pointer" fontWeight="900" color="#FB5E04" fontSize={"12px"} p={"2px 4px"} border={"none"} bg={"transparent"}>{value}</Text>        
                ))}
            </Flex>
            <Box px="20px" overflowY={"scroll"} height={"150px"} alignItems="center">    
                <Flex mb={"24px"}  flexWrap="wrap" justifyContent="space-between">
                    { isLoading ? <Flex w={{ md: "3xl", base: 'sm' }} h={'2xs'} alignItems={'center'} justifyContent={'center'}><Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} /></Flex> :  (dataSearch?.map((bank: BankProps, index: any) => (
                        <Text cursor="pointer" key={index} w="50%" my="10px" fontSize={"14px"}  py="5px" onClick={() => handleSelect(bank?.bankName)} fontWeight={"600"}>{bank?.bankName}</Text>
                    )))}
                </Flex>
            </Box>
        </>
        
    )   
}

export default SearchInput