import { Box,  Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import TableComponent from '../../table/TableContainer'
import {
    useGetBuyAdsUSDTQuery,
    useGetBuyAdsBTCQuery,
    useGetBuyAdsETHQuery,
    useGetBuyAdsUSDCQuery,
} from "../../../redux/services/p2p-ads.service";
import { P2pAdsComponentProps } from '../../../pages/dashboard';



const BuyCoin = ({pageNumber, handlePreviousPage, handleNextPage}: P2pAdsComponentProps) => {
    const { data:usdt } = useGetBuyAdsUSDTQuery({arg: "USDT", pageNumber: `${pageNumber}`})
    const { data:usdc } = useGetBuyAdsUSDCQuery({arg: "USDC", pageNumber: `${pageNumber}`})
    const { data:eth } = useGetBuyAdsETHQuery({arg: "ETH", pageNumber: `${pageNumber}`})
    const { data:btc } = useGetBuyAdsBTCQuery({arg: "BTC", pageNumber: `${pageNumber}`})

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
                            buttonTitle="Buy BTC"
                            backgroundColor="#22C36B"
                            apiData={btc}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : "NO BUY ADS YET"}
                </TabPanel>
                {/* Tab panel 2 */}
                <TabPanel>
                    {eth?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="Buy ETH"
                            backgroundColor="#22C36B"
                            apiData={eth}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : "NO BUY ADS YET"}
                </TabPanel>

                {/* Tab panel 3 */}
                <TabPanel>
                    {usdt?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="Buy USDT"
                            backgroundColor="#22C36B"
                            apiData={usdt}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : "NO BUY ADS YET"}           
                </TabPanel>

                {/* Tab panel 4 */}
                <TabPanel>
                    {usdc?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="Buy USDC"
                            backgroundColor="#22C36B"
                            apiData={usdc}
                            handlePreviousPage = { handlePreviousPage }
                            handleNextPage={handleNextPage}
                        />      
                    ) : "NO BUY ADS YET"}              
                </TabPanel>
            </TabPanels>
        </Tabs>
         
    )
}

export default BuyCoin