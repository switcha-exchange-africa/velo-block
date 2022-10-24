import { Box, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import TableComponent from '../../table/TableContainer'

const BuyCoin = () => {
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
                    <TableComponent
                        buttonTitle="Buy BTC"
                        backgroundColor="#22C36B"
                    />            
                </TabPanel>
                {/* Tab panel 2 */}
                <TabPanel>
                    <TableComponent
                        buttonTitle="Buy BTC"
                        backgroundColor="#22C36B"
                    />            
                </TabPanel>
                {/* Tab panel 3 */}
                <TabPanel>
                    <TableComponent
                        buttonTitle="Buy BTC"
                        backgroundColor="#22C36B"
                    />            
                </TabPanel>
                {/* Tab panel 4 */}
                <TabPanel>
                    <TableComponent
                        buttonTitle="Buy BTC"
                        backgroundColor="#22C36B"
                    />            
                </TabPanel>
            </TabPanels>
        </Tabs>
         
    )
}

export default BuyCoin