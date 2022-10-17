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
    Link
  
} from '@chakra-ui/react'

const Login = () => {
  return (
   <Box background={'#E5E5E5'} height={'100vh'}>
      <Box background={'#10192D'} height={'73px'} display={'flex'} py={'1rem'}>
       <Img src='/assets/images/switcha.png' alt=''ml={'3rem'} />
       <Text fontSize={'24px'} color={'#FFFFFF'} fontWeight={'800'} pl={'1rem'}>Switcha</Text>
       <Text fontSize={'24px'} color={'#E5E5E5'} fontWeight={'800'} pl={'1rem'}>Admin</Text>
      </Box>
      
      <HStack justifyContent={'center'} alignItems={'center'}>
      <Box background={'#FFFFFF'} width={'460px'} height={'500px'} my={'2rem'}
      borderRadius={'12px'}>
        <Text color={'#060A1D'} fontSize={'32px'} fontWeight={'800'}
        textAlign={'center'} pt={'3rem'} fontFamily={'Cabinet Grotesk'}>Login</Text>
        <Text color={'#060A1D'} fontSize={'14px'} fontWeight={'500'}
        textAlign={'center'} pt={'1rem'} fontFamily={'Cabinet Grotesk'}>Welcome Switcha team member, Login to access Your Switcha <br/>account</Text>

        <FormControl mt={'1rem'}>
            <FormLabel ml={'1rem'} color={'#060A1D'} fontSize={'16px'} fontWeight={'700'}
          >Email</FormLabel>
            <Input type='email' width={'412px'} ml={'1rem'}/>
        </FormControl>

        <FormControl mt={'1rem'}>
            <FormLabel ml={'1rem'} color={'#060A1D'} fontSize={'16px'} fontWeight={'700'}
          >Password</FormLabel>
            <Input type='password' width={'412px'} ml={'1rem'}/>
        </FormControl>

        <Box display={'flex'} textAlign={'center'} pl={'1.5rem'} pt={'1rem'}>
            <Text color={'#060A1D'} fontSize={'14px'} fontWeight={'700'}>By proceeding,You agree to Switcha's </Text>
            <Link pl={'0.2rem'} color={'#00A478'} fontSize={'14px'} fontWeight={'700'} >Terms and conditions</Link>
        </Box>

        <Button  width={'412px'} ml={'1rem'} background={'#00A478'} 
        color={'#FFFFFF'} mt={'1rem'}>Login</Button>
      </Box>
      </HStack>
   </Box>
  )
}

export default Login