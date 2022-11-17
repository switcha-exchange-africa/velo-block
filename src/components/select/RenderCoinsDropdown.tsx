import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import RenderCoinComponent from '../dashboard/wallet/RenderCoinComponent';

interface RenderCoinsDropdownWithIconProps {
    items: any[];
    value: any
    onChange: (selectedValue: any) => void
}
const RenderCoinsDropdown = ({ items, value, onChange }: RenderCoinsDropdownWithIconProps) => {
    return (
        <Flex position={'relative'} >
            <Menu>
                <MenuButton as={Button} _hover={{ bg: 'transparent' }} bg={'transparent'} rightIcon={<ChevronDownIcon />}>
                    <Flex zIndex={'docked'} ><Box pr={'2'} zIndex={'base'} ><RenderCoinComponent coin={items.find(x => x.coin === value)?.coin} size={{ md: "xs", base: '2xs' }} /></Box>

                        {items.find(x => x.coin === value)?.coin == 'USDT_TRON' ? 'USDT-TRON' : items.find(x => x.coin === value)?.coin}</Flex>
                </MenuButton>
                <MenuList zIndex={'sticky'}>
                    {items.map((item, key) => (
                        <MenuItem key={key} onClick={() => onChange(item.coin)} zIndex={'docked'}><Box pr={'2'}><RenderCoinComponent coin={item.coin} size={{ md: "xs", base: '2xs' }} /></Box> {item.coin == 'USDT_TRON' ? 'USDT-TRON' : item.coin}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Flex>

    )
}

export default RenderCoinsDropdown