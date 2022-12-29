import { Box, HStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { DashBoardSidBarOptionComponentProps } from './DashBoardSidBarOptionComponent'


export const DashBoardSidBarMobileOptionComponent = ({ display, isActive, onClick, disabled, children, label, route }: DashBoardSidBarOptionComponentProps) => {
    const router = useRouter()
    return (
        <HStack
            px={[8, 8, 8, 8]}
            py={[3, 3, 3, 3]}
            borderRadius={[0, 0, 'md', 'lg']}
            my={[6, 6, 6, 6]}
            width={"100%"}
            display={display}
            flexDirection={["row", "row", "row", "row"]}
            alignItems={["center"]}
            bg={ isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'primaryColor.900' : '' }
            onClick={onClick}
            cursor={disabled ? '' : 'pointer'}
        >
            <Box bg={isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'appWhiteColor' : 'appDarkColor'} p={{ lg: '2.5', base: '2' }}
                borderRadius={'md'} >
                {children}
            </Box>
            <Text
                fontSize={["lg", "lg", "lg", "lg"]}
                margin={["0"]}
                color={isActive || router.pathname.toLowerCase().includes(`${route.toLowerCase()}`) ? 'appWhiteColor' : disabled ? 'gray.300' : 'appDarkColor'}
                textAlign={{ base: 'center', md: 'left' }}
            >
                {label}
            </Text>
        </HStack>
    )
}
