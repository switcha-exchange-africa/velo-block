import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Box, Button, Flex, Heading,
    HStack, Img, Input, InputProps, ListItem,
    Show, UnorderedList, useMultiStyleConfig
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import MainAppButton from '../../../../../components/buttons/MainAppButton';
// import Config from "../../../../../components/digitalOcean/Config";
// import config from "../../../../../components/digitalOcean/Config";
// import s3 from "../../../../../components/digitalOcean/DigitalOcean";
import remoteImages from "../../../../../constants/remoteImages";
import DashboardLayout from '../../../../../layouts/dashboard/DashboardLayout';
import { uploadObject } from "../../../../api/config";


export const FileInput = (props: InputProps) => {
  const styles = useMultiStyleConfig("Button", { variant: "outline" });

  return (
    <Input
      type="file"
      sx={{
        "::file-selector-button": {
          border: "none",
          outline: "none",
          mr: 2,
          ...styles,
        },
      }}
      {...props}
    />
  );
};


const Level2Verification = () => {
    const Router = useRouter()


    useEffect(() => {
        const fetchData = async () => {
            const res = await uploadObject()
        console.log("res is this ", res)
        }

        fetchData()
        .catch(console.error)

    }, [])
    

    

    // const handleImageChange = (e:any) => {
    //     if (e.target.files && e.target.files[0]) {
    //         const blob = e.target.files[0];
    //         const params = { Body: blob, 
    //                         Bucket: `${Config.bucketName}`, 
    //                         Key: blob.name};
    //         // Sending the file to the Spaces
    //         s3.putObject(params)
    //         .on('build', request => {
    //             request.httpRequest.headers.Host = `${Config.digitalOceanSpaces}`;
    //             request.httpRequest.headers['Content-Length'] = blob.size;
    //             request.httpRequest.headers['Content-Type'] = blob.type;
    //             request.httpRequest.headers['x-amz-acl'] = 'public-read';
    //         })
    //         .send((err) => {
    //             if (err) console.log(err);
    //             else {
    //             // If there is no error updating the editor with the imageUrl
    //             const imageUrl = `${config.digitalOceanSpaces}` + blob.name
    //             console.log(imageUrl, blob.name)
    //         }
    //         });
    //     }
    // };



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
                                    <Img src={remoteImages.cameraIcon} alt='' pl={'1rem'} />
                                </MainAppButton>
                                <Button mt={'4'} bg={'transparent'} width={'80%'} color={'primaryColor.900'} border='1px' borderColor='primaryColor.900'>Import from gallery
                                    <Img src={remoteImages.folderIcon} alt='' pl={'1rem'} />
                                </Button>

                                {/* <input
                                    type="file"
                                    id="inputfile"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                /> */}
                            </Flex>


                        </UnorderedList>

                    </Flex>


                </Flex>

            </Flex>
        </DashboardLayout>
    )
}
export default Level2Verification;