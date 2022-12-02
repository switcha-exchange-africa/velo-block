import { Box, Flex, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { TableContainerComponent } from './TableContainer'



export const RenderOrder = ({ data }: any) => {
    const router = useRouter()
    const handleClick = (orderId: string) => {
        router.push('/p2p/order/'+orderId)
    }
    
    return (
        <Box>
            {data.length !== 0 ? (
                <TableContainerComponent data={data} handleClick={handleClick} />
            ) : (
                <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="50px" py="100px">
                    <Text fontSize="20px" fontWeight="700" color={'#64748B'}>You Don't Have Any Orders Yet</Text>
                </Flex>
            )}
        </Box>
    )
}

