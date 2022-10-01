import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Text,
  VStack,
  Heading,
  HStack,
  Button,
  List,
  ListIcon,
  Input,
  Flex
} from '@chakra-ui/react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import { ArrowBackIcon } from "@chakra-ui/icons";
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import SettingsButton from '../../../components/dashboard/settings/SettingsButton'
const Profile = () => {
  const Router = useRouter()
  return (
    <DashboardLayout>
      <Box
        background={"#F8FAFC"} height={"full"}
        color="black" px={{ lg: "10%", base: '4' }} >
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
        <VStack alignItems={"start"} gap={"1rem"}>

          <Heading size="md"
            py={'2rem'}
            ml={'1rem'}>Profile</Heading>

        </VStack>
        <Box background={'#FFFFFF'}
          width={{ lg: "60%", base: '100%' }}
          justifyContent={"space-between"}
          py={"20px"}>

          <Flex width={'100%'}>
            <Text
              pl={{ md: '2rem', base: '4' }}
              pt={'0.5rem'}
              w={{ base: '40', md: '60' }}
            >Email
            </Text>
            <Input placeholder='Olumideoyeleye@gmail.com'
              // ml={'7rem'}
              mr={'1rem'}

            />
          </Flex>

          <HStack mt={'2rem'}>

            <Flex width={'100%'}>
              <Text
                pl={{ md: '2rem', base: '4' }}
                pt={'0.5rem'} w={{ base: '40', md: '60' }}>Username
              </Text>
              <Input placeholder='Eclusive'
                // ml={'5rem'}
                mr={'1rem'}

              />


            </Flex>
          </HStack>

          <HStack mt={'2rem'}>
            <Flex width={'100%'}>
              <Text
                pl={{ md: '2rem', base: '4' }}
                pt={'0.5rem'} w={{ base: '40', md: '60' }}>Name
              </Text>
              <Input placeholder='Temitope'
                // ml={'7rem'}
                mr={'1rem'}

              />


            </Flex>
          </HStack>

          <HStack mt={'2rem'}>
            <Flex width={'100%'}>
              <Text
                pl={{ md: '2rem', base: '4' }} w={{ base: '28', md: '48' }}>Phone number</Text>
              <Box >
                <Text>***176</Text>
                <Text
                  color={'#FB5E04'}>Change phone number</Text>
              </Box>
            </Flex>
          </HStack>

          <Flex justifyContent={'space-between'} alignItems={'center'} mt={'2rem'} px={{ md: '8', base: '4' }}>

            <Text
            >Account Status</Text>

            <Text>Level 1 Verified</Text>
            <SettingsButton onClick={() => Router.push('/settings/profile/verification')}>Upgrade Verification</SettingsButton>

          </Flex>

          <Flex mt={{ md: '2rem', base: '5' }} justifyContent={'end'} px={{ md: '8', base: '4' }}>
            <MainAppButton isLoading={false} size={"md"} width={'35%'}>Create Ads</MainAppButton>
          </Flex>
        </Box>
      </Box>
    </DashboardLayout>

  )
}

export default Profile;