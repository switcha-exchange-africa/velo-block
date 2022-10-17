import {
  Box, chakra,
  Flex,
  Grid,
  GridItem, Img,
  Show
} from "@chakra-ui/react";
// import OnboardingImage from '../../../assets/svgs/OnboardingImage.svg'

interface AuthLayoutProps {
  children: any;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Flex flexDirection={'column'} align="stretch" minH="100vh" h="100vh" bg="mainBGColor" w="full" overflowX={'hidden'}>
      <chakra.header id="header">
        <Flex w="100%" bg="appDarkColor" px="8" py={{ md: "4", base: '2' }}>
          <Img src="/assets/svgs/Logo.svg" alt="" w={'32'} />
        </Flex>
      </chakra.header>
      <Flex alignItems={'center'} justifyContent={'center'} h={'full'}>
        <Grid templateColumns={{ md: "repeat(2, 1fr)", base: '1fr' }} gap={{ md: '16', base: '1' }} h="full" >
          <Show above='md'>
            <GridItem w="100%" h="full">
              <Flex justifyContent="center" h="full" alignItems="center">

                <Box p="4">
                  <Img
                    src="/assets/svgs/OnboardingImage.svg"
                    alt=""
                    objectFit="cover"
                    boxSize={{ lg: "lg", md: 'xs', base: 'xs' }}
                  />
                </Box>


              </Flex>
            </GridItem>
          </Show>
          <GridItem w="100%" h="full" >
            <Flex justifyContent="center" h="full" alignItems="center" overflow={'scroll'}>
              {/* <Box p='4' bg='red.400'>
                            Box 1
                        </Box> */}
              {children}
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

    </Flex>
  );
};

export default AuthLayout;
