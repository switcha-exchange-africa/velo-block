import { ArrowBackIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Heading,
  Input, Show, Text,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
// import MainAppButton from '../../../components/buttons/MainAppButton'
import SettingsButton from '../../../components/dashboard/settings/SettingsButton'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import { useGetUserQuery } from "../../../redux/services/auth.service"

const Profile = () => {
  const Router = useRouter()
  const {data: getUser} = useGetUserQuery()

  console.log("this is the user information ", getUser)

  const num = getUser?.phoneNumber

  console.log("this is the num ", num)

  const handlePhoneNumber = () => {
    Router.push("/settings/profile/change-phone-number")
  }

  const handleAddPhoneNumber = () => {
    Router.push("/settings/profile/add-phone-number")
  }

  const name = (getUser?.data?.firstName ? getUser?.data?.firstName : "") + " " + (getUser?.data?.lastName ? getUser?.data?.lastName : "")

  return (
    <DashboardLayout title="Profile">
      <Box
        background={"#F8FAFC"} height={"full"}
        color="black" px={{ lg: "5%", base: '0' }} >
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

        <Box px={{ md: '0', base: '4' }} pt={{ md: '0', base: '12' }} >
          <Box 
            background={'#FFFFFF'}
            width={{ lg: "70%", base: '100%' }}
            justifyContent={"space-between"}
            py={"20px"}
          >
            

            <Flex width={'100%'} mb="24px"  alignItems="center">
              <Text
                w={{ base: 'fit-content', md: '60' }}
                pr={{ base: '5', md: '0' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                pl="20px"
                fontWeight={"400"}
              >
                Email
              </Text>
              <Input
                fontSize={'14px'}
                placeholder={getUser?.data?.email}
                color="#8E9BAE"
                value={getUser?.data?.email ? getUser?.data?.email : ""}
                mr={'1rem'}
              />
            </Flex>

            <Flex width={'100%'} mb="24px" alignItems="center">
              <Text
                w={{ base: 'fit-content', md: '60' }}
                pr={{ base: '5', md: '0' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                pl="20px"
                fontWeight={"400"}
              >
                Username
              </Text>
              <Input placeholder={getUser?.data?.username}
                color="#8E9BAE"
                value={getUser?.data?.username ? getUser?.data?.username : ""}
                mr={'1rem'}
              />
            </Flex>

            <Flex width={'100%'} mb="24px"  alignItems="center">
              <Text
                w={{ base: 'fit-content', md: '60' }}
                pr={{ base: '5', md: '0' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                pl="20px"
                fontWeight={"400"}
              >
                Name
              </Text>
              <Input
                fontSize={"14px"}
                placeholder={name}
                color="#8E9BAE"
                value={name}
                mr={'1rem'}
              />
            </Flex>

            <Flex w={'full'} mb="24px" justifyContent={{ base: 'space-between', md: 'start' }} alignItems={"center"}>
              <Text
                w={{ base: '60', md: '60' }}
                pr={{ base: '5', md: '0' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                pl="20px"
              >
                Phone Number
              </Text>
              <Flex flexDirection={{ base: 'column', md: 'row' }}  w="100%" alignItems={{ base: 'end', md: 'start' }} justifyContent={"space-between"} pr='4' fontSize={"14px"}>
                <Text>{num ? ( "xxx"+num.toString().slice(-3)) : "xxxxxx"}</Text>
                {num ? (
                  <Text
                    color={'#FB5E04'} fontSize={{ base: 'sm', lg: '14px' }} cursor="pointer" onClick={handlePhoneNumber}>
                    Change phone number
                  </Text>
                ): (
                  <Text
                      color={'#FB5E04'} fontSize={{ base: 'sm', lg: '14px' }} cursor="pointer" onClick={handleAddPhoneNumber}>
                      Add Phone Number
                  </Text>
                )}
              </Flex>
            </Flex>

            <Flex w={'full'}  justifyContent={{ base: 'space-between', md: 'start' }} mb={"24px"} alignItems={"center"}>
              <Text
                w={{ base: '60', md: '60' }}
                pr={{ base: '5', md: '0' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                pl="20px"
              >
                Account Status
              </Text>
              <Flex flexDirection={{ base: 'column', md: 'row' }}  w="100%" alignItems={{ base: 'end', md: 'center' }} justifyContent={"space-between"} pr='4' fontSize={"14px"}>
                <Text m={{ base: '2px', md: '0' }} textTransform="capitalize">Level {getUser?.data?.level ? getUser?.data?.level : ""} Verified</Text>
                <SettingsButton onClick={() => Router.push('/settings/profile/verification')}>Upgrade Verification</SettingsButton>
              </Flex>
            </Flex>

            <Flex w={'full'}   justifyContent={{ base: 'space-between', md: 'space-between' }} mb={"24px"} alignItems={"center"}>
              <Text
                w={{ base: '60', md: '60' }}
                pr={{ base: '5', md: '0' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                pl="20px"
              >
                Bank Accounts
              </Text>
              <Box w={{ md: '150px', base: '60%' }}  mr={'1rem'} onClick={() => Router.push('/settings/profile/verification/bank-accounts')} textAlign={'center'} border={" 1px solid #fb5e04"} color={"#333333"} px={{ base: '2', lg: '4' }} py={{ base: '1', lg: '2' }} background={"transparent"} fontSize={{ base: 'xs', lg: '14px' }} cursor={'pointer'}>
                Manage accounts
              </Box>
            </Flex>
            
            {/* <Flex justifyContent={{ md: 'end', base: 'start' }} px={{ md: '24px', base: '4' }}>
              <MainAppButton isLoading={false} size={{ base: "sm", md: 'md' }} width={{ base: '40%', md: '35%' }}>Save</MainAppButton>
            </Flex> */}
          </Box>

        </Box>

      </Box>
    </DashboardLayout>

  )
}

export default Profile;