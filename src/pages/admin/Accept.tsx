import React from 'react'
import {
    Box,
    Text,
    VStack,
    Heading,
    HStack,
    Button,
    List,
    ListIcon,
    Img,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Link
  
} from '@chakra-ui/react'
import { SearchIcon, ViewOffIcon } from '@chakra-ui/icons'
// import Topbar1 from '../../layouts/Topbar/Topbar1'

const Accept = () => {
  return (
   <Box background={'#E5E5E5'} height={'120vh'}>
      <Box background={'#10192D'} height={'73px'} display={'flex'} py={'1rem'}>
       <Img src='/assets/images/switcha.png' alt=''ml={'3rem'} />
       <Text fontSize={'24px'} color={'#FFFFFF'} fontWeight={'800'} pl={'1rem'}>Switcha</Text>
       <Text fontSize={'24px'} color={'#E5E5E5'} fontWeight={'800'} pl={'1rem'}>Admin</Text>
       <Input placeholder='Username/Email/Ref/BtcAddress' width={'700px'} ml={'9rem'} />
       <Button backgroundColor={'#00A478'} ml={'1rem'} color={'#FFFFFF'} width={'130px'}
          fontSize={'16px'} fontWeight={'700'} fontFamily={'Cabinet Grotesk'}>Search <SearchIcon ml={'0.5rem'}/></Button>
      </Box>

      <HStack justifyContent={'center'} alignItems={'center'}>
      <Box background={'#FFFFFF'} width={'764px'} height={'600px'} my={'3rem'}
      borderRadius={'12px'}>
      <Text color={'#060A1D'} fontSize={'32px'} 
      fontWeight={'800'} pt={'2rem'} pl={'1rem'} fontFamily={'Cabinet Grotesk'}>Hi there,we're very Excited to have you</Text>
      <Text color={'#060A1D'} fontSize={'18px'} 
      fontWeight={'700'} pl={'1rem'} fontFamily={'Cabinet Grotesk'}>Create a staff account</Text>
      <Text color={'#060A1D'} fontSize={'14px'} pt={'0.5rem'}
      fontWeight={'700'} pl={'1rem'} fontFamily={'Cabinet Grotesk'}>This is the last step, Fill in your  account details to join the amazing Switcha team  </Text>
        
        <Box display={'flex'}>
        <FormControl mt={'1rem'}>
            <FormLabel ml={'1rem'} color={'#060A1D'} fontSize={'16px'} fontWeight={'700'}
          fontFamily={'Cabinet Grotesk'}>First Name</FormLabel>
            <Input type='text' width={'350px'} ml={'1rem'}/>
        </FormControl>

        <FormControl mt={'1rem'}>
            <FormLabel ml={'1rem'} color={'#060A1D'} fontSize={'16px'} fontWeight={'700'}
          fontFamily={'Cabinet Grotesk'}>Last Name</FormLabel>
            <Input type='text' width={'350px'} ml={'1rem'}/>
        </FormControl>
       </Box>

       <FormControl mt={'1rem'}>
            <FormLabel ml={'1rem'} color={'#060A1D'} fontSize={'16px'} fontWeight={'700'}
            fontFamily={'Cabinet Grotesk'}>Email</FormLabel>
            <Input type='email' width={'730px'} ml={'1rem'}/>
            <FormHelperText ml={'1rem'} >*you cant change your email  address Once it has been assigned</FormHelperText>
        </FormControl>

        <Box display={'flex'}>
        <FormControl mt={'1rem'}>
            <FormLabel ml={'1rem'} color={'#060A1D'} fontSize={'16px'} fontWeight={'700'}
          fontFamily={'Cabinet Grotesk'}>Password</FormLabel>
            <Input type='password' width={'350px'} ml={'1rem'} />
        </FormControl>

        <FormControl mt={'1rem'}>
            <FormLabel ml={'1rem'} color={'#060A1D'} fontSize={'16px'} fontWeight={'700'}
          fontFamily={'Cabinet Grotesk'}>Confirm password</FormLabel>
            <Input type='text' width={'350px'} ml={'1rem'}/>
        </FormControl>
       </Box>

       <Box display={'flex'} textAlign={'center'} pl={'10rem'} pt={'1rem'}>
            <Text color={'#060A1D'} fontSize={'14px'} fontWeight={'700'} textAlign={'center'}>By proceeding,You agree to Switcha's </Text>
           <Link pl={'0.2rem'} color={'#00A478'} fontSize={'14px'} fontWeight={'700'} > Terms and conditions</Link>
        </Box>

        <Box display={'flex'} mt={'1.5rem'} justifyContent={'center'} alignItems={'center'} >
          <Button backgroundColor={'#FFFFFF'} border={'1px solid #00A478'} width={'260px'}
          fontSize={'16px'} fontWeight={'700'} fontFamily={'Cabinet Grotesk'} color={'#000000'}>Decline Invite</Button>
          <Button backgroundColor={'#00A478'} ml={'1rem'} color={'#FFFFFF'} width={'260px'}
          fontSize={'16px'} fontWeight={'700'} fontFamily={'Cabinet Grotesk'}>Create account</Button>
        </Box>

        </Box>
        </HStack>
      

      </Box>

)
}

export default Accept