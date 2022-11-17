import { PutObjectCommand } from "@aws-sdk/client-s3";
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
import { s3Client } from "../../../../api/config";


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


    // Step 3: Define the parameters for the object you want to upload.
    const params = {
        Bucket: "switcha-production", // The path to the directory you want to upload the object to, starting with your Space name.
        Key: "folder-path/hello-world.txt", // Object key, referenced whenever you want to access this file later.
        Body: "Hello, Worldzzz!", // The object's contents. This variable is an object, not a string.
        ACL: "private", // Defines ACL permissions, such as private or public.
        Metadata: { // Defines metadata tags.
            "x-amz-meta-my-key": "your-value"
        }
    };


    // Step 4: Define a function that uploads your object using SDK's PutObjectCommand object and catches any errors.
    const uploadObject = async () => {
        try {
            console.log("S3 consfig")
            console.log({
            endpoint: `${process.env.NEXT_PUBLIC_DO_SPACES_ENDPOINT}`, // Find your endpoint in the control panel, under Settings. Prepend "https://".
            forcePathStyle: false,
            region: "fra1", // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
            credentials: {
                accessKeyId: `${process.env.NEXT_PUBLIC_DO_SPACES_ID}`,
                secretAccessKey: `${process.env.NEXT_PUBLIC_SPACES_SECRET}`,
            }
        })
        console.log(s3Client)
            const data = await s3Client.send(new PutObjectCommand(params));
            console.log("DATA", data)
            console.log(
            "Successfully uploaded object: " +
                params.Bucket +
                "/" +
                params.Key
            );
            return data;
        } catch (err) {
            console.log("Error", err);
        }
    };



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
                                <MainAppButton isLoading={false} size={"md"} width={'70%'} disabled={true}>Take a snapshot
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