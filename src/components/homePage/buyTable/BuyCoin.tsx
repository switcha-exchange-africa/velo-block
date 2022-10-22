import { Box, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import TableComponent from '../../table/TableContainer'

const BuyCoin = () => {
    const [selectedId, setSelectedId] = useState("1")    
    const [borderBottomColor, setBorderBottomColor] = useState({
        borderBottomColor1: "1px solid #FB5E04",
        borderBottomColor2: "none",
        borderBottomColor3: "none",
        borderBottomColor4: "none",
        
    })

    const handleSelect = (id: string) => {
        if (id === "1") {
            setSelectedId(id)
            setBorderBottomColor({
                borderBottomColor1: "1px solid #FB5E04",
                borderBottomColor2: "none",
                borderBottomColor3: "none",
                borderBottomColor4: "none",
            })
        }
        if (id === "2") {
            setSelectedId(id)
            setBorderBottomColor({
                borderBottomColor1: "none",
                borderBottomColor2: "1px solid #FB5E04",
                borderBottomColor3: "none",
                borderBottomColor4: "none",
            })
        }
        if (id === "3") {
            setSelectedId(id)
            setBorderBottomColor({
                borderBottomColor1: "none",
                borderBottomColor2: "none",
                borderBottomColor3: "1px solid #FB5E04",
                borderBottomColor4: "none",
            })
        }
        if (id === "4") {
            setSelectedId(id)
            setBorderBottomColor({
                borderBottomColor1: "none",
                borderBottomColor2: "none",
                borderBottomColor3: "none",
                borderBottomColor4: "1px solid #FB5E04",
            })
        }
        
    }

    const CoinData = [
        {
            id: "1",
            name: "BTC",
            borderB: borderBottomColor.borderBottomColor1
        },
        {
            id: "2",
            name: "ETH",
            borderB: borderBottomColor.borderBottomColor2
        },
        {
            id: "3",
            name: "USDT",
            borderB: borderBottomColor.borderBottomColor3
        },
        {
            id: "4",
            name: "USDC",
            borderB: borderBottomColor.borderBottomColor4
        },
    ]

    return (
        <>
            
            <HStack px={["0", "0px", "28px", "28px"]} fontSize="14px" mb="14px" spacing="56px">
                {CoinData.map((coin) => (
                    <Text
                        key={coin.id}
                        color="#000000"
                        cursor="pointer"
                        borderBottom={coin.borderB}
                        onClick={() => handleSelect(coin.id)}
                    >
                        {coin.name}
                    </Text> 
                ))} 
            </HStack>
            <Box bg="#E2E8F0" height="0.1px" width="100%" mb="8px"></Box>
            
            {selectedId === "1" && (
                <TableComponent
                    buttonTitle="Buy BTC"
                    backgroundColor="#22C36B"
                />
            )}
            {selectedId === "2" && (
                <TableComponent
                    buttonTitle="Buy BTC"
                    backgroundColor="#22C36B"
                />
            )}
            {selectedId === "3" && (
                <TableComponent
                    buttonTitle="Buy BTC"
                    backgroundColor="#22C36B"
                />
            )}
            {selectedId === "4" && (
                <TableComponent
                    buttonTitle="Buy BTC"
                    backgroundColor="#22C36B"
                />
            )}
        
        </>  
    )
}

export default BuyCoin