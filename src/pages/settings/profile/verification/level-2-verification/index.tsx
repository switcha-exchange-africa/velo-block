import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Box, Button, Flex, Heading,
    HStack, Img, Input, InputProps, ListItem,
    Show, UnorderedList, useMultiStyleConfig
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import MainAppButton from '../../../../../components/buttons/MainAppButton';
import remoteImages from "../../../../../constants/remoteImages";
import DashboardLayout from '../../../../../layouts/dashboard/DashboardLayout';


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

    const handleImageChange = () => {

    }

    async function handleProfileImageUpload(e:any) {
        const file = e.target.files[0];
        const formData:any = new FormData();
        formData.append('file', file);
        
        // Check that file is in proper format before making request
        
        await fetch(`/api/image/profileUpload`, {
            method: 'POST',
            body: formData,
            'Content-Type': 'image/jpg',
        })
    }



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

                                {/* <FileInput
                                    placeholder="import from gallery"
                                    name="demo"
                                    onChange={async (e) => {
                                    if (e?.target?.files?.length > 0) {
                                    // Update UI to show file is uploading
                                    const file = e?.target?.files[0];
                                    
                                    // Create FormData and pass picked file with other necessary details
                                    const formData = new FormData();
                                    formData.append("file", file);
                                    // formData.append("id", userId);
                                    try {
                                        const uploadFileRes = await fetch("/api/upload", {
                                            method: "POST",
                                            body: formData,
                                        });
                                        const uploadFileData = await uploadFileRes.json();
                                        // Retrieve url and show it to user?
                                        // Update UI to show file has been uploaded
                                        console.log("user ", uploadFileData)
                                    } catch (e) {
                                        console.log(e);
                                        // Update UI to show file upload failed
                                    }
                                    }
                                }}
                                /> */}
                                {/* <input
                                    type="file"
                                    // accept={fileTypes}
                                    onChange={async (e) => {
                                        if (e.target.files.length > 0) {
                                        // Update UI to show file is uploading
                                        const file = e.target.files[0];
                                        
                                        // Create FormData and pass picked file with other necessary details
                                        const formData = new FormData();
                                        formData.append("file", file);
                                        // formData.append("id", userId);
                                        try {
                                            const uploadFileRes = await fetch("/api/uploadFile", {
                                            method: "POST",
                                            body: formData,
                                            });
                                            const uploadFileData = await uploadFileRes.json();
                                            // Retrieve url and show it to user?
                                            // Update UI to show file has been uploaded
                                        } catch (e) {
                                            console.log(e);
                                            // Update UI to show file upload failed
                                        }
                                        }
                                    }}
                                    /> */}
                                <input id="file-upload" type="file" onChange={handleProfileImageUpload}/>
                            </Flex>


                        </UnorderedList>

                    </Flex>


                </Flex>

            </Flex>
        </DashboardLayout>
    )
}
export default Level2Verification;