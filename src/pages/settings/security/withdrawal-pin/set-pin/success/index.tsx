import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box, Button, Flex, Heading, HStack, Show, Text, VStack,    
} from "@chakra-ui/react";
import Congratulations from "../../../../../../../../public/assets/svgs/congratulations.svg"
import Image from "next/image";
import MainAppButton from "../../../../../../components/buttons/MainAppButton";
import DashboardLayout from "../../../../../../layouts/dashboard/DashboardLayout";

const AuthSuccess = () => {
  const Router = useRouter();
  
  return (
    <DashboardLayout title="Authenticator Authentication">
      <Box background={"#F8FAFC"} height={"100vh"} color="black" px={{ md: "5%", base: '0' }}>
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
                            Disable
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
                            Disable
                        </Box>
                     </Flex>
                </Show>


          {/* <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }}> */}
            <VStack  gap={"2rem"} bg={'white'}  px="20px" w={{ md: '30%', base: '100%' }}>
              
              

                <Flex direction={{ md: 'row', base: 'column' }} alignItems={{ md: 'center', base: 'center' }} justifyContent={"space-between"}  w="100%">
                    <Box w={{ md: '100%', base: '100%' }} mb={{ md: '0%', base: '30px' }} p="20px"  borderRadius={"5px"} bg="white">
                          <HStack justifyContent={"center"} my="24px" w="35%" mx="auto">
                              <Image src={Congratulations} alt="google Authenticator icon" />
                          </HStack>

                        <Box pb="20px" mb="24px">
                            <Heading size='md' textAlign={"center"} fontSize="18px"> Success!</Heading>
                          </Box>
                          
                        <HStack mb="24px" justifyContent={"center"}>
                            <Text fontSize={"14px"} color="#8E9BAE" textAlign="center">You have successfully added Google Authenticator</Text>
                        </HStack>
                        <HStack>
                            <MainAppButton isLoading={false} onClick={() => Router.push("/dashboard")} size={{ base: "sm", md: 'md' }} width={{ base: '100%', md: '100%' }}>Dashboard</MainAppButton>
                        </HStack>
                    </Box>

                          
                </Flex>


            </VStack>
       
        
      </Box>
    </DashboardLayout>
  );
};

export default AuthSuccess;
