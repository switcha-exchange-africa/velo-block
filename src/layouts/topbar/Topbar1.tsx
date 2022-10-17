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


const Topbar1 = () => {
    return (
     <Box background={'#E5E5E5'} height={'120vh'}>
        <Box background={'#10192D'} height={'73px'} display={'flex'} py={'1rem'}>
         <Img src='/assets/images/switcha.png' alt=''ml={'3rem'} />
         <Text fontSize={'24px'} color={'#FFFFFF'} fontWeight={'800'} pl={'1rem'}>Switcha</Text>
         <Text fontSize={'24px'} color={'#E5E5E5'} fontWeight={'800'} pl={'1rem'}>Admin</Text>
         <Input placeholder='Username/Email/Ref/BtcAddress' width={'700px'} ml={'9rem'} />
         <Button backgroundColor={'#00A478'} ml={'1rem'} color={'#FFFFFF'} width={'130px'}
            fontSize={'16px'} fontWeight={'700'} fontFamily={'Cabinet Grotesk'}>Search</Button>
        </Box>

        </Box>

)
}

export default Topbar1