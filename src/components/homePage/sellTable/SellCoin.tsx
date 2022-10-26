import { Box, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import TableComponent from '../../table/TableContainer'
import {
    useGetSellAdsUSDTQuery,
    useGetSellAdsBTCQuery,
    useGetSellAdsETHQuery,
    useGetSellAdsUSDCQuery,
} from "../../../redux/services/p2p-ads.service";


const SellCoin = () => {
    const { data:usdt } = useGetSellAdsUSDTQuery({arg: "USDT"})
    const { data:usdc } = useGetSellAdsUSDCQuery({arg: "USDC"})
    const { data:eth } = useGetSellAdsETHQuery({arg: "ETH"})
    const { data:btc } = useGetSellAdsBTCQuery({arg: "BTC"})
    
    return (
        <Tabs variant='unstyled'>
            <TabList gap={"56px"} px={["0", "0px", "28px", "28px"]}>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">BTC</Tab>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">ETH</Tab>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">USDT</Tab>
                <Tab p={0} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="14px">USDC</Tab>
            </TabList>                
            
            <Box background="#E2E8F0" height="0.1px" width="100%" m="14px 0 8px"></Box>
            
            <TabPanels>
                {/* Tab panel 1 */}
                <TabPanel>
                    {btc?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL BTC"
                            backgroundColor="#EB4335"
                            apiData={btc}
                        />      
                    ) : "NO BUY ADS YET"}
                </TabPanel>
                {/* Tab panel 2 */}
                <TabPanel>
                    {eth?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL BTC"
                            backgroundColor="#EB4335"
                            apiData={eth}
                        />      
                    ) : "NO BUY ADS YET"}
                </TabPanel>
                {/* Tab panel 3 */}
                <TabPanel>
                    {usdt?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL BTC"
                            backgroundColor="#EB4335"
                            apiData={usdt}
                        />      
                    ) : "NO BUY ADS YET"}            
                </TabPanel>
                {/* Tab panel 4 */}
                <TabPanel>
                    {usdc?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="SELL BTC"
                            backgroundColor="#EB4335"
                            apiData={usdc}
                        />      
                    ) : "NO BUY ADS YET"}
                              
                </TabPanel>
            </TabPanels>
        </Tabs>
          
    )
}

export default SellCoin