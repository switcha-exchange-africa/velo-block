import { Box,  Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import TableComponent from '../../table/TableContainer'
import {useGetBuyAdsQuery} from "../../../redux/services/p2p-ads.service";
import { P2pAdsComponentProps } from '../../../interfaces/p2p-ads/P2pAdsComponent';


const BuyCoin = ({ pageNumber, handlePreviousPage, handleNextPage, handlePageReset}: P2pAdsComponentProps) => {
    const { data:usdt } = useGetBuyAdsQuery({arg: "USDT", pageNumber: `${pageNumber}`})
    const { data:usdc } = useGetBuyAdsQuery({arg: "USDC", pageNumber: `${pageNumber}`})
    const { data:eth } = useGetBuyAdsQuery({arg: "ETH", pageNumber: `${pageNumber}`})
    const { data:btc } = useGetBuyAdsQuery({arg: "BTC", pageNumber: `${pageNumber}`})
    const { data:usdt_tron } = useGetBuyAdsQuery({arg: "USDT_TRON", pageNumber: `${pageNumber}`})



    return (
        <Tabs variant='unstyled'>
            <TabList gap={"36px"} px={["0", "0px", "28px", "28px"]}>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">BTC</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">ETH</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDT</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDC</Tab>
                <Tab p={0} onClick={handlePageReset} _selected={{ color: "#000000",  borderBottom: "1px solid #FB5E04" }} fontSize="small">USDT-TRON</Tab>
            </TabList>                
            
            <Box background="#E2E8F0" height="0.1px" width={["100%", "100%", "97%"]} m="14px auto 8px"></Box>
            
            <TabPanels >
                {/* Tab panel 1 */}
                <TabPanel px={["0", "0px", "28px", "28px"]}>
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
                <TabPanel px={["0", "0px", "28px", "28px"]}>
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
                <TabPanel px={["0", "0px", "28px", "28px"]}>
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
                <TabPanel px={["0", "0px", "28px", "28px"]}>
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

                {/* Tab panel 5 */}
                <TabPanel px={["0", "0px", "28px", "28px"]}>
                    {usdt_tron?.data?.length !== 0 ? (
                        <TableComponent
                            buttonTitle="Buy USDT-TRON"
                            backgroundColor="#22C36B"
                            apiData={usdt_tron}
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