import { Box, HStack, Img, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

interface DashBoardSidBarOptionComponentProps {
    isActive?: boolean
    route: string
    onClick?: () => void
    disabled?: boolean
    children?: any
    label: string

}

const DashBoardSidBarOptionComponent = ({ isActive, onClick, disabled, children, label, route }: DashBoardSidBarOptionComponentProps,) => {
    const router = useRouter()
    return (
        <HStack
            px={[0, 0, 8, 8]}
            py={[3, 3, 3, 3]}
            borderRadius={[0, 0, 'lg', 'xl']}
            my={[0, 0, 2, 2]}
            width={"100%"}
            flexDirection={["column", "column", "row", "row"]}
            alignItems={["center"]}
            bg={{ md: isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'primaryColor.900' : '', base: '' }}
            onClick={onClick}
            cursor={disabled ? '' : 'pointer'}
        >
            <Box bg={{ md: isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'appWhiteColor' : disabled ? 'gray.300' : 'appDarkColor', base: isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'rgba(251, 94, 4, 0.25)' : '' }} p={{ lg: '2.5', base: '2' }}
                borderRadius={'md'} >
                {children}
            </Box>
            {/* <Img
                src="/assets/svgs/dashboard/Home.svg"
                alt=""
                objectFit="contain"
                boxSize=""
                bg={isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'appWhiteColor' : disabled ? 'mainBGColor' : 'appDarkColor'}
                p={'2.5'}
                borderRadius={'md'}
                fill={isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'primaryColor.900' : disabled ? 'mainBGColor' : 'appWhiteColor'}
                color={isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'primaryColor.900' : disabled ? 'mainBGColor' : 'appWhiteColor'}
            /> */}
            <Text
                fontSize={["10px", "10px", "lg", "lg"]}
                // fontWeight={["700", "700", "", ""]}
                margin={["0"]}
                color={isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'appWhiteColor' : disabled ? 'gray.300' : 'appDarkColor'}
                textAlign={{ base: 'center', md: 'left' }}
            >
                {label}
            </Text>
        </HStack>
    )
}

export default DashBoardSidBarOptionComponent