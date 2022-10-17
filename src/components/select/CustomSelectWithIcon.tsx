import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Img, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

interface CustomSelectWithIconProps {
    items: {
        value: any
        label: string
        imageUrl: string
    }[];
    value: any
    onChange: (selectedValue: any) => void
}

const CustomSelectWithIcon = ({ items, value, onChange }: CustomSelectWithIconProps) => {

    return (
        <Flex position={'relative'} zIndex={'dropdown'}>
            <Menu>
                <MenuButton as={Button} _hover={{ bg: 'transparent' }} bg={'transparent'} rightIcon={<ChevronDownIcon />}>
                    <Flex>  <Img src={items.find(x => x.value === value)?.imageUrl} alt='' objectFit='cover' w={'6'} h={'6'} mr={'2'} /> {items.find(x => x.value === value)?.label}</Flex>
                </MenuButton>
                <MenuList >
                    {items.map((item, key) => (
                        <MenuItem key={key} onClick={() => onChange(item.value)}><Img src={item.imageUrl} alt='' objectFit='cover' w={'6'} h={'6'} mr={'2'} /> {item.label}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Flex>

    )
}

export default CustomSelectWithIcon