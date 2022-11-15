import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Box, Button, Flex, Heading,
    HStack, Img, ListItem,
    Show, UnorderedList
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import MainAppButton from '../../../../../components/buttons/MainAppButton';
import remoteImages from "../../../../../constants/remoteImages";
import DashboardLayout from '../../../../../layouts/dashboard/DashboardLayout';

const Level2Verification = () => {
    const Router = useRouter()

    return (
        <DashboardLayout title="Level 2 Verification">
            <Flex flexDirection={'column'} alignItems={'center'}
                background={"#F8FAFC"}
                color="black" px={{ md: "10%", base: '0' }} >
                <Show above='md'>
                    <Flex w='full'>
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
                    </Flex>
                </Show>

                <Show below='sm'>
                    <Flex justifyContent={'start'} bg={'white'} w={'full'}>
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
                                ml={'1rem'}>Verification</Heading>
                        </Button>
                    </Flex>
                </Show>


                <Flex
                    background={'#FFFFFF'}
                    py={"8"}
                    mt={{ base: '12', md: '0' }}
                    px={'8'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    mb={'12'}
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

                        <Img src={remoteImages.scaniconsvg} alt='' />

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
                                    <Img src={remoteImages.cameraIcon} alt='' pl={'1rem'} />
                                </MainAppButton>
                                <Button mt={'4'} bg={'transparent'} width={'80%'} color={'primaryColor.900'} border='1px' borderColor='primaryColor.900'>Import from gallery
                                    <Img src={remoteImages.folderIcon} alt='' pl={'1rem'} />
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