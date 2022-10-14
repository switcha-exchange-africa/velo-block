import React from 'react'
import {
    Box,
    Text,
    VStack,
    Heading,
    HStack,
    Button,
    ListIcon,
    Flex,
    Img,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router'
import Link from 'next/link';
import MainAppButton from '../../../../../components/buttons/MainAppButton';
import DashboardLayout from '../../../../../layouts/dashboard/DashboardLayout';

const Level2Verification = () => {
    const Router = useRouter()
    return (
        <DashboardLayout>
            <Flex flexDirection={'column'} alignItems={'center'}
                background={"#F8FAFC"}
                color="black" px={"10%"} >
                <Flex w='full'> <Button
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
                </Button></Flex>


                <Flex
                    background={'#FFFFFF'}
                    // width={"35%"}
                    py={"8"}
                    px={'8'}
                    flexDirection={'column'}
                    overflowY={'scroll'}
                    alignItems={'center'}
                    mb={'12'}
                // ml={'20rem'}

                >
                    <Box>
                        <HStack>
                            <Heading fontSize={'1.5rem'}>Level 2 Verification</Heading>

                        </HStack>
                    </Box>
                    <Flex
                        border='1px' borderColor='orange'
                        background={'#FFFFFF'}
                        justifyContent={"center"}

                        height={'72'}
                        width={'72'}
                        mt={'8'}
                        alignItems={'center'}
                    >

                        <Img src='/assets/svgs/scanIcon.svg' alt='' />

                    </Flex>
                    <Flex w={"100%"} flexDirection={'column'} alignItems={"start"}>
                        <UnorderedList mt={'2rem'} >
                            <ListItem fontSize={'sm'}>
                                Take a Picture of your valid ID
                            </ListItem>
                            <ListItem fontSize={'sm'}>
                                Ensure the Picture is clear and readable
                            </ListItem>
                            <ListItem fontSize={'sm'}>
                                Ensure your picture on the ID is clear
                            </ListItem>
                            <Flex mt={'8'} flexDirection={'column'} w={'full'} alignItems={'center'}>
                                <MainAppButton isLoading={false} size={"md"} width={'70%'}>Take a snapshot
                                    <Img src='/assets/svgs/cameraIcon.svg' alt='' pl={'1rem'} />
                                </MainAppButton>
                                <Button mt={'4'} bg={'transparent'} width={'80%'} color={'primaryColor.900'} border='1px' borderColor='primaryColor.900'>Import from gallery
                                    <Img src='/assets/svgs/folderIcon.svg' alt='' pl={'1rem'} />
                                </Button>

                            </Flex>


                        </UnorderedList>

                    </Flex>


                </Flex>

            </Flex>
        </DashboardLayout>
    )
}
export default Level2Verification;