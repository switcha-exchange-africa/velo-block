import { Box, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import TableComponent from '../../table/TableContainer'
import {useGetSellAdsQuery} from "../../../redux/services/p2p-ads.service";
import { P2pAdsComponentProps } from '../../../interfaces/p2p-ads/P2pAdsComponent';


const SellCoin = ({pageNumber, handlePreviousPage, handleNextPage}: P2pAdsComponentProps) => {
    const { data:usdt } = useGetSellAdsQuery({arg: "USDT" , pageNumber: `${pageNumber}`})
    const { data:usdc } = useGetSellAdsQuery({arg: "USDC" , pageNumber: `${pageNumber}`})
    const { data:eth } = useGetSellAdsQuery({arg: "ETH" , pageNumber: `${pageNumber}`})
    const { data:btc } = useGetSellAdsQuery({arg: "BTC" , pageNumber: `${pageNumber}`})
    
    return (
        <Tabs variant='unstyled'>
            <TabList gap={"56px"} px={["0", "0px", "28px", "28px"]}>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">BTC</Tab>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">ETH</Tab>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">USDT</Tab>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">USDC</Tab>
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
                    ) : "NO SELL ADS YET"}
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
                    ) : "NO SELL ADS YET"}
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
                    ) : "NO SELL ADS YET"}            
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
                    ) : "NO SELL ADS YET"}
                              
                </TabPanel>
            </TabPanels>
        </Tabs>
          
    )
}

export default SellCoin