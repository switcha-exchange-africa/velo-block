import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import TableComponent from '../../table/TableContainer'
import {useGetSellAdsQuery} from "../../../redux/services/p2p-ads.service";
import { P2pAdsComponentProps } from '../../../interfaces/p2p-ads/P2pAdsComponent';


const SellCoin = ({pageNumber, handlePreviousPage, handleNextPage, handlePageReset}: P2pAdsComponentProps) => {
    const { data:usdt } = useGetSellAdsQuery({arg: "USDT" , pageNumber: `${pageNumber}`})
    const { data:usdc } = useGetSellAdsQuery({arg: "USDC" , pageNumber: `${pageNumber}`})
    const { data:eth } = useGetSellAdsQuery({arg: "ETH" , pageNumber: `${pageNumber}`})
    const { data:btc } = useGetSellAdsQuery({arg: "BTC" , pageNumber: `${pageNumber}`})
    const { data:usdt_tron } = useGetSellAdsQuery({arg: "USDT_TRON" , pageNumber: `${pageNumber}`})
    
    return (
        <Tabs variant='unstyled'>
            <TabList gap={"36px"} px={["0", "0px", "28px", "28px"]} >
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">BTC</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">ETH</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDT</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDC</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDT-TRON</Tab>
            </TabList>                
            
            <Box background="#E2E8F0" height="0.1px" width={["100%", "100%", "97%"]} m="14px auto 8px"></Box>
            
            <TabPanels>
                {/* Tab panel 1 */}
                <TabPanel px={["0", "0px", "28px", "28px"]}>
                    {btc?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL BTC"
                            backgroundColor="#EB4335"
                            apiData={btc}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                </TabPanel>
                {/* Tab panel 2 */}
                <TabPanel px={["0", "0px", "28px", "28px"]}>
                    {eth?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL ETH"
                            backgroundColor="#EB4335"
                            apiData={eth}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                </TabPanel>
                {/* Tab panel 3 */}
                <TabPanel px={["0", "0px", "28px", "28px"]}>
                    {usdt?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL USDT"
                            backgroundColor="#EB4335"
                            apiData={usdt}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}            
                </TabPanel>
                {/* Tab panel 4 */}
                <TabPanel px={["0", "0px", "28px", "28px"]}>
                    {usdc?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL USDC"
                            backgroundColor="#EB4335"
                            apiData={usdc}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                              
                </TabPanel>

                {/* Tab panel 5 */}
                <TabPanel px={["0", "0px", "28px", "28px"]}>
                    {usdt_tron?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL USDT-TRON"
                            backgroundColor="#EB4335"
                            apiData={usdt_tron}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>NO SELL ADS YET</Text>
                        </Flex>}
                              
                </TabPanel>
            </TabPanels>
        </Tabs>
          
    )
}

export default SellCoin