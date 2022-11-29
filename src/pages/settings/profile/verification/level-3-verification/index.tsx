import { PutObjectCommand } from "@aws-sdk/client-s3"
import { ArrowBackIcon } from "@chakra-ui/icons"
import {
    Box, Button, Flex, Heading,
    HStack, Img, ListItem,
    Show, Spinner, UnorderedList
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from "react"
import MainAppButton from '../../../../../components/buttons/MainAppButton'
import remoteImages from "../../../../../constants/remoteImages"
import DashboardLayout from '../../../../../layouts/dashboard/DashboardLayout'
import { useAddLevelThreeKycMutation, useGetVerificationStatusQuery } from "../../../../../redux/services/kyc.service"
import { s3Client } from "../../../../api/config"
import uuid from 'react-uuid';
import appAlert from "../../../../../helpers/appAlert"


const Level3Verification = () => {
    const Router = useRouter()

    const [addLevelThreeKyc] = useAddLevelThreeKycMutation()
    const levelThreeVerificationStatus = useGetVerificationStatusQuery("three")
    const [loading, setLoading] = useState(false)

    const fileInputRef = useRef<any>()    
    const [idImage, setIdImage] = useState<any>(null)
    const [previewIdImage, setPreviewIdImage] = useState<any>("")
    useEffect(() => {
        if (idImage) {
            const idReader = new FileReader()
            idReader.onloadend = () => {
                setPreviewIdImage(idReader?.result?.toString())
            }
            idReader.readAsDataURL(idImage)
        } else {
            setPreviewIdImage(null)
        }
    }, [idImage])


    const uploadObject = async () => {
        const params = {
            Bucket: `switcha-production/kyc/${process.env.NEXT_PUBLIC_NODE_ENV}`, // The path to the directory you want to upload the object to, starting with your Space name.
            Key: uuid(), // Object key, referenced whenever you want to access this file later.
            Body: idImage, // The object's contents. This variable is an object, not a string.
            ACL: "public-read", // Defines ACL permissions, such as private or public.
            ContentType: "image/png",
            Metadata: { // Defines metadata tags.
                "x-amz-meta-my-key": "your-value",
            }
        }
        setLoading(true)

        try {
            const data:any = await s3Client.send(new PutObjectCommand(params))
            
            if (data) {
                const imageUrl = `${process.env.NEXT_PUBLIC_DO_SPACES_ENDPOINT}/${params.Bucket}/${params.Key}`
                const kycResponse:any = await addLevelThreeKyc(imageUrl)
                if (kycResponse?.data?.status === 202 || kycResponse?.data?.status === 200 || kycResponse?.data?.status === 201) {
                    appAlert.success(kycResponse?.data?.message)
                    setLoading(false)
                    levelThreeVerificationStatus.refetch()
                    Router.back()
                } else {
                    setLoading(false)
                    appAlert.error(kycResponse?.data?.message)
                }
            }
        } catch (err:any) {
            setLoading(false)
            appAlert.error(err?.message)
        }
    }

    const handleUpload = async () => {
        await uploadObject()
    }

    return (
        <DashboardLayout title="Level 3 Verification">
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
                            <Heading fontSize={'1.5rem'}>Level 3 Verification</Heading>
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
                        {!idImage ? (
                            <Img src='/assets/svgs/scanIcon.svg' alt='' />
                        ) : (
                            <Img src={previewIdImage} alt='image from gallery' />    
                       )}
                        
                    </Flex>
                    <Flex w={"100%"} flexDirection={'column'} alignItems={"start"}>
                        <UnorderedList mt={'2rem'} >
                            <ListItem fontSize={'sm'}>
                                Take a Picture of you holding your valid ID
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

                                {loading ? (
                                    <Flex alignItems="center" width={'100%'} mt="20px" justifyContent="center" >
                                        <Spinner color='primaryColor.900' size={'xl'} thickness={'2px'} />
                                    </Flex>
                                ) : (
                                    <Flex alignItems="center" width={'100%'} justifyContent="center" >
                                        <Button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                fileInputRef?.current?.click()        
                                            }}
                                            mt={'4'} bg={'transparent'} px="5px" color={'primaryColor.900'} border='1px' borderColor='primaryColor.900' fontSize="14px">Import from gallery
                                            <Img src={remoteImages.folderIcon} alt='' pl={'1rem'} />
                                        </Button>

                                        {idImage && (
                                            <Button ml="20px" mt={'4'} bg={'transparent'}  px="5px" color={'primaryColor.900'} border='1px' borderColor='primaryColor.900' fontSize="14px" onClick={handleUpload}>
                                                Upload
                                            </Button>
                                        )}
                                    </Flex>
                                )}
                                
                        
                                <input
                                    style={{display: "none"}}
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={(e:any) => {
                                        const file = e?.target?.files[0] 
                                            if (file && file?.type?.substr(0, 5) === "image") {
                                                setIdImage(file)
                                            } 
                                            else {
                                            setIdImage(null)
                                        }
                                        }}    
                                    required
                                />


                            </Flex>


                        </UnorderedList>

                    </Flex>


                </Flex>

            </Flex>
        </DashboardLayout>
    )
}
export default Level3Verification