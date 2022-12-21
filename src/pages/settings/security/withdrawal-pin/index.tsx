import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show,
  HStack,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import DashboardLayout from "../../../../layouts/dashboard/DashboardLayout"

const ChangePassword = () => {
    const Router = useRouter()
    

    return (
        <DashboardLayout title="Change Password">
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "10%", base: '0' }} >
                <Show above='760px'>
                    <Button
                        onClick={() => Router.back()}
                        leftIcon={<ArrowBackIcon />}
                        colorScheme="transparent"
                        variant="solid"
                        pl={0}
                        py={"3rem"}
                        color={'black'}
                        ml={'1rem'}
                    >
                        Back
                    </Button>
                    
                    <HStack width={{ lg: "70%", base: '100%' }}  alignItems={"center"} justifyContent={"space-between"} py={'2rem'} gap={"1rem"}>
                        <Heading size="md"  ml={'1rem'}>Withdrawal Pin</Heading>
                        <Box  p={"11px 22px"} color="white" bg="#FB5E04" border={"0.88px solid #FB5e04"} cursor={"pointer"} borderRadius={"5px"} onClick={() => Router.push('/settings/security/withdrawal-pin/set-pin')}>
                            Enable
                        </Box>
                    </HStack>
                </Show>

                <Show below='768px'>
                    <Flex justifyContent={'start'} bg={'white'}>
                        <Button
                            onClick={() => Router.back()}
                            leftIcon={<ArrowBackIcon />}
                            colorScheme="transparent"
                            variant="solid"
                            pl={0}
                            py={"2rem"}
                            color={'black'}
                            ml={'2'}
                        >
                            Back
                        <Heading size="md"
                            ml={'1rem'}>Withdrawal Pin</Heading>
                        </Button>
                    </Flex>

                     <Flex justifyContent="flex-end">
                        <Box  p={"11px 22px"} mt="20px" color="white" bg="#FB5E04" border={"0.88px solid #FB5e04"} cursor={"pointer"} borderRadius={"5px"} onClick={() => Router.push('/settings/security/withdrawal-pin/set-pin')}>
                            Enable
                        </Box>
                     </Flex>
                </Show>

                <Box 
                    background={'#FFFFFF'}
                    width={{ lg: "70%", base: '100%' }}
                    p={{ lg: "24px", base: '10px' }}
                >

                    <Text fontSize="14px" fontWeight="500" lineHeight="28px" color={'rgba(0, 0, 0, 0.75)'} textAlign="left">
                        Set the withdrawal Pin that will be used to validate your withdrawals
                    </Text>

                </Box>

            </Box>
        </DashboardLayout>

    )
}

export default ChangePassword
