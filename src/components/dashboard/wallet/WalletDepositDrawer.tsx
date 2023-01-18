import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormLabel, Select, Text } from '@chakra-ui/react';
import React from 'react';
import QRCode from 'react-qr-code';
import appAlert from '../../../helpers/appAlert';
import { useGetSingleWalletQuery } from '../../../redux/services/wallet.service';

const WalletDepositDrawer = (props: any) => {
    const getSingleWallet = useGetSingleWalletQuery(props?.accountId)

    return (
        <>
            <Drawer
                isOpen={props.isOpen && props.isdepositOpen}
                placement="right"
                onClose={() => { props.onClose; props.setIsDepositDrawerOpen(false) }}
                finalFocusRef={props.btnRef}
                size={"sm"}
            >
                <DrawerOverlay bg="transparent"
                    backdropFilter="blur(3px) " />
                <DrawerContent>
                    <DrawerCloseButton /><br />
                    <DrawerHeader mt='4'>
                        <Text>Deposit {props.label=== "USDT_TRON" ? "USDT-TRON" : props.label}</Text>
                    </DrawerHeader>

                    <DrawerBody mt={'-4'}>
                        <Text fontSize={"sm"} >
                            Copy address or scan QR code to deposit {props.label=== "USDT_TRON" ? "USDT-TRON" : props.label}
                        </Text>
                        <Flex justifyContent={'center'} my={'16'}>
                            <QRCode value="hey" />
                        </Flex>
                        <Text color={"#8E9BAE"} >
                            {props.coin=== "USDT_TRON" ? "USDT-TRON" : props.coin} Deposit Address
                        </Text>
                        {props.coin === "USDT" && (
                            <Box marginBottom={"20px"}>
                                <FormLabel htmlFor="owner">Please Choose Network</FormLabel>
                                <Select id="owner" defaultValue="segun" placeholder="Please choose network first">
                                    <option value="BSC">BNB Smart Chain (BEP20)</option>
                                    <option value="ERC20">Ethereum (ERC20)</option>
                                </Select>
                            </Box>
                        )}
                        <Text fontWeight="600">{getSingleWallet?.data?.data?.address}</Text>
                        <Button
                            mt={"60px"}
                            width={"100%"}
                            color={"#fff"}
                            background={"#10192D"}
                            size={"lg"}
                            onClick={() => {
                                navigator.clipboard.writeText(getSingleWallet?.data?.data?.address);
                                appAlert.success("address copied")
                            }}
                        >
                            Copy Address
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default WalletDepositDrawer