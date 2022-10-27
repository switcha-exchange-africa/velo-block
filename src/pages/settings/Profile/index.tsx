import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  HStack, Input, Show, Text,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import MainAppButton from '../../../components/buttons/MainAppButton'
import SettingsButton from '../../../components/dashboard/settings/SettingsButton'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
const Profile = () => {
  const Router = useRouter()
  return (
    <DashboardLayout title="profile">
      <Box
        background={"#F8FAFC"} height={"full"}
        color="black" px={{ lg: "10%", base: '0' }} >
        <Show above='md'>
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
        </Show>

        <Show below='sm'>
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
                ml={'1rem'}>Profile</Heading>
            </Button>
          </Flex>
        </Show>

        <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }}>
          <Box background={'#FFFFFF'}
            width={{ lg: "60%", base: '100%' }}
            justifyContent={"space-between"}
            py={"20px"}>

            <Flex width={'100%'}>
              <Text
                pl={{ md: '2rem', base: '4' }}
                pt={'0.5rem'}
                w={{ base: 'fit-content', md: '60' }}
                pr={{ base: '5', md: '0' }}
                fontSize={{ base: 'sm', lg: 'md' }}
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
                  pt={'0.5rem'} w={{ base: 'fit-content', md: '60' }}
                  pr={{ base: '5', md: '0' }} fontSize={{ base: 'sm', lg: 'md' }}>Username
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
                  pt={'0.5rem'} w={{ base: 'fit-content', md: '60' }}
                  pr={{ base: '5', md: '0' }} fontSize={{ base: 'sm', lg: 'md' }}>Name
                </Text>
                <Input placeholder='Temitope'
                  // ml={'7rem'}
                  mr={'1rem'}

                />


              </Flex>
            </HStack>

            <Flex w={'full'} mt='10' justifyContent={{ base: 'space-between', md: 'start' }}>
              <Text
                pl={{ md: '2rem', base: '4' }} w={{ base: 'fit-content', md: '48' }}
                pr={{ base: '5', md: '0' }} fontSize={{ base: 'sm', lg: 'md' }}>Phone number</Text>
              <Flex flexDirection={'column'} alignItems={{ base: 'end', md: 'start' }} pr='4'>
                <Text>***176</Text>
                <Text
                  color={'#FB5E04'} fontSize={{ base: 'sm', lg: 'md' }}>Change phone number</Text>
              </Flex>
            </Flex>

            <Flex justifyContent={'space-between'} alignItems={'start'} mt={'2rem'} px={{ md: '8', base: '4' }}>

              <Text fontSize={{ base: 'sm', lg: 'md' }}
              >Account Status</Text>

              <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent={'space-between'} alignItems={{ base: 'end', md: 'center' }} w={{ md: '69%', base: '30' }}>
                <Text fontSize={{ base: 'sm', lg: 'md' }} pb={{ base: '2', md: '0' }}>Level 1 Verified</Text>
                <SettingsButton onClick={() => Router.push('/settings/profile/verification')}>Upgrade Verification</SettingsButton>
              </Flex>

            </Flex>

            <Flex mt={{ md: '2rem', base: '12' }} justifyContent={{ md: 'end', base: 'start' }} px={{ md: '8', base: '4' }}>
              <MainAppButton isLoading={false} size={{ base: "sm", md: 'md' }} width={{ base: '40%', md: '35%' }}>Create Ads</MainAppButton>
            </Flex>
          </Box>

        </Box>

      </Box>
    </DashboardLayout>

  )
}

export default Profile;