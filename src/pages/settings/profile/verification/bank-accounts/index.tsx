import { AddIcon, ArrowBackIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Show, Text,
  HStack,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import DashboardLayout from "../../../../../layouts/dashboard/DashboardLayout"


const BankAccounts = () => {
    const Router = useRouter()

    return (
        <DashboardLayout title="Profile">
            <Box
                background={"#F8FAFC"} height={"full"}
                color="black" px={{ lg: "10%", base: '0' }} >
                <Show above='md'>
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
                        Profile
                    </Button>
                    
                    <HStack width={{ lg: "70%", base: '100%' }}  alignItems={"center"} justifyContent={"space-between"} py={'2rem'} gap={"1rem"}>
                        <Heading size="md"  ml={'1rem'}>Bank Accounts </Heading>
                        <Box  p={"11px 22px"} color="white" bg="#FB5E04" border={"0.88px solid #FB5e04"} cursor={"pointer"} borderRadius={"5px"} >
                            <AddIcon
                                mr="5px"
                                color={"white"}
                                w={"10px"}
                                h={"10px"}
                            />
                            Add Bank
                        </Box>
                    </HStack>
                </Show>

                <Show below='sm'>
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
                            ml={'1rem'}>Profile</Heading>
                        </Button>
                    </Flex>
                </Show>

                <Box px={{ md: '0', base: '4' }} mb="24px" pt={{ md: '0', base: '12' }} >
                    <Box 
                        background={'#FFFFFF'}
                        width={{ lg: "70%", base: '100%' }}
                        justifyContent={"space-between"}
                        p={"20px"}
                    >
                        <VStack borderRadius={"5px"} mb={"24px"} border={"1px solid #64748B"} fontWeight={"600"} p="12px" fontSize="14px" justifyContent="space-between">
                            <HStack w="100%">
                                <Text flex="1" color="#8E9BAE">Name</Text>
                                <Text flex="1.76" color="#000000">OLUMIDE OYELEYE SOLO</Text>
                                <Box  p={"5px 11px"} color="#fc1f00" bg="transparent" border={"0.88px solid #FB5e04"} fontSize="14px" cursor={"pointer"} borderRadius={"5px"} >
                                    <EditIcon
                                        mr="5px"
                                        color={"#fc1f00"}
                                        w={"10px"}
                                        h={"10px"}
                                    />
                                    Edit
                                </Box>
                            </HStack>
                            <HStack w="100%">
                                <Text flex="1" color="#8E9BAE">Bank Account N..</Text>
                                <Text  flex="2.2" color="#000000">0264748663</Text>
                                
                            </HStack>
                            <HStack w="100%">
                                <Text flex="1" color="#8E9BAE">Bank name</Text>
                                <Text flex="1.79" color="#000000">Access Bank</Text>
                                <Box  color="#fc1f00" bg="transparent" cursor={"pointer"} borderRadius={"5px"} >
                                    <DeleteIcon
                                        mr="5px"
                                        color={"#fc1f00"}
                                        w={"10px"}
                                        h={"10px"}
                                    />
                                    Delete
                                </Box>
                            </HStack>

                            <HStack w="100%">
                                <Text flex="1" color="#8E9BAE">Transactions</Text>
                                <Text flex="2.2" color="#000000">36</Text>
                            </HStack>
                        </VStack>
                        {/* <Flex width={'100%'} mb="24px"  alignItems="center">
                            <Text
                                w={{ base: 'fit-content', md: '60' }}
                                pr={{ base: '5', md: '0' }}
                                fontSize={{ base: 'sm', lg: 'md' }}
                                pl="20px"
                            >
                                Email
                            </Text>
                            <Input
                                placeholder='Olumideoyeleye@gmail.com'
                                mr={'1rem'}
                            />
                        </Flex>

                        <Flex width={'100%'} mb="24px" alignItems="center">
                        <Text
                            w={{ base: 'fit-content', md: '60' }}
                            pr={{ base: '5', md: '0' }}
                            fontSize={{ base: 'sm', lg: 'md' }}
                            pl="20px"
                        >
                            Username
                        </Text>
                        <Input placeholder='Eclusive'
                        
                            mr={'1rem'}

                        />
                        </Flex>

                        <Flex width={'100%'} mb="24px"  alignItems="center">
                            <Text
                                w={{ base: 'fit-content', md: '60' }}
                                pr={{ base: '5', md: '0' }}
                                fontSize={{ base: 'sm', lg: 'md' }}
                                pl="20px"
                            >
                                Name
                            </Text>
                            <Input placeholder='Temitope'
                                mr={'1rem'}
                            />
                            </Flex>

                        <Flex w={'full'} mb="24px" justifyContent={{ base: 'space-between', md: 'start' }} alignItems={"center"}>
                        <Text
                            w={{ base: '60', md: '60' }}
                            pr={{ base: '5', md: '0' }}
                            fontSize={{ base: 'sm', lg: 'md' }}
                            pl="20px"
                        >
                            Phone Number
                        </Text>
                        <Flex flexDirection={{ base: 'column', md: 'row' }}  w="100%" alignItems={{ base: 'end', md: 'start' }} justifyContent={"space-between"} pr='4' fontSize={"14px"}>
                            <Text>***176</Text>
                            <Text
                            color={'#FB5E04'} fontSize={{ base: 'sm', lg: '14px' }}>Change phone number</Text>
                        </Flex>
                        </Flex>

                        <Flex w={'full'}  justifyContent={{ base: 'space-between', md: 'start' }} mb={"24px"} alignItems={"center"}>
                        <Text
                            w={{ base: '60', md: '60' }}
                            pr={{ base: '5', md: '0' }}
                            fontSize={{ base: 'sm', lg: 'md' }}
                            pl="20px"
                        >
                            Account Status
                        </Text>
                        <Flex flexDirection={{ base: 'column', md: 'row' }}  w="100%" alignItems={{ base: 'end', md: 'center' }} justifyContent={"space-between"} pr='4' fontSize={"14px"}>
                            <Text m={{ base: '2px', md: '0' }}>Level 1 Verified</Text>
                            <SettingsButton onClick={() => Router.push('/settings/profile/verification')}>Upgrade Verification</SettingsButton>
                        </Flex>
                        </Flex>

                        <Flex w={'full'}   justifyContent={{ base: 'space-between', md: 'space-between' }} mb={"24px"} alignItems={"center"}>
                        <Text
                            w={{ base: '60', md: '60' }}
                            pr={{ base: '5', md: '0' }}
                            fontSize={{ base: 'sm', lg: 'md' }}
                            pl="20px"
                        >
                            Bank Accounts
                        </Text>
                        <Box mr={'1rem'} onClick={() => Router.push('/settings/profile/verification')} textAlign={'center'} border={" 1px solid #fb5e04"} color={"#333333"} px={{ base: '2', lg: '4' }} py={{ base: '1', lg: '2' }} background={"transparent"} fontSize={{ base: 'xs', lg: '14px' }} cursor={'pointer'}>
                            Manage accounts
                        </Box>
                        </Flex>
                        
                        <Flex mt={{ md: '2rem', base: '12' }} justifyContent={{ md: 'end', base: 'start' }} px={{ md: '24px', base: '4' }}>
                        <MainAppButton isLoading={false} size={{ base: "sm", md: 'md' }} width={{ base: '40%', md: '35%' }}>Save</MainAppButton>
                        </Flex> */}
                    </Box>

                </Box>

            </Box>
        </DashboardLayout>

    )
}

export default BankAccounts