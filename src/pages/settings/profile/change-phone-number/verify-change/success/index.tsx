import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Flex, Heading, HStack, Show, Text, VStack,    
} from "@chakra-ui/react";
import Congratulations from "../../../../../../../public/assets/svgs/congratulations.svg"
import Image from "next/image";
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout";
import MainAppButton from "../../../../../../components/buttons/MainAppButton";
import { useAppSelector } from "../../../../../../helpers/hooks/reduxHooks";

const AuthSuccess = () => {
  const router = useRouter();
  const {phoneNumber} = useAppSelector((state) => state.accountSettings)
  
  return (
    <DashboardLayout title="Authenticator Authentication">
      <Box background={"#F8FAFC"} height={"100vh"} color="black" px={{ md: "5%", base: '0' }}>
        <Show above="md">
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="transparent"
            variant="solid"
            pl={0}
            py={"3rem"}
            onClick={() => router.back()}
            color={'black'}
          >
            Security
          </Button>
        </Show>


        <Show below='sm'>
          <Flex justifyContent={'start'} bg={'white'} w={'full'}>
            <Button
              onClick={() => router.back()}
              leftIcon={<ArrowBackIcon />}
              colorScheme="transparent"
              variant="solid"
              pl={0}
              py={"2rem"}
              color={'black'}
              ml={'2'}
            >
              Security
              
            </Button>
          </Flex>
        </Show>


          {/* <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }}> */}
            <VStack  gap={"2rem"} bg={'white'}  px="20px" w={{ md: '35%', base: '100%' }}>
              
              

                <Flex direction={{ md: 'row', base: 'column' }} alignItems={{ md: 'center', base: 'center' }} justifyContent={"space-between"}  w="100%">
                    <Box w={{ md: '100%', base: '100%' }} mb={{ md: '0%', base: '30px' }} p="20px"  borderRadius={"5px"} bg="white">
                          <HStack justifyContent={"center"} my="24px" w="35%" mx="auto">
                              <Image src={Congratulations} alt="google Authenticator icon" />
                          </HStack>

                        <Box pb="20px" mb="24px">
                            <Heading size='md' textAlign={"center"} fontSize="18px"> Success!</Heading>
                          </Box>
                          
                        <HStack mb="24px" justifyContent={"center"}>
                          <Text fontSize={"14px"} color="#8E9BAE" textAlign="center">You have successfully changed your Phone Number to <Text as="span" fontWeight="bold" color="black">{ phoneNumber}</Text></Text>
                        </HStack>
                        <HStack>
                            <MainAppButton isLoading={false} onClick={() => router.push("/settings")} size={{ base: "sm", md: 'md' }} width={{ base: '100%', md: '100%' }}>Back To Settings</MainAppButton>
                        </HStack>
                    </Box>

                          
                </Flex>


            </VStack>
       
        
      </Box>
    </DashboardLayout>
  );
};

export default AuthSuccess;
