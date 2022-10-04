import {
  VStack,
  chakra,
  Flex,
  Grid,
  GridItem,
  Box,
  Img,
} from "@chakra-ui/react";
import React from "react";
// import OnboardingImage from '../../../assets/svgs/OnboardingImage.svg'

interface AuthLayoutProps {
  children: any;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Flex flexDirection={'column'} align="stretch" minH="100vh" h="100vh" bg="mainBGColor" w="full">
      <chakra.header id="header">
        <Flex w="100%" bg="appDarkColor" px="8" py="4">
          <Img src="/assets/svgs/Logo.svg" alt="" objectFit="cover" />
        </Flex>
      </chakra.header>
      <Grid templateColumns={{ lg: "repeat(2, 1fr)", base: '1fr' }} h="full" >
        <GridItem w="100%" h="full">
          <Flex justifyContent="center" h="full" alignItems="center">
            <Box p="4">
              <Img
                src="/assets/svgs/OnboardingImage.svg"
                alt=""
                objectFit="cover"
                boxSize={{ lg: "lg", md: 'md', base: '48' }}
              />
            </Box>
          </Flex>
        </GridItem>
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
  );
};

export default AuthLayout;
