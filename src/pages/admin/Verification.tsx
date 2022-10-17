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
    Link,
    Flex,
    Select,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Verification = () => {
  return (
     <Box background={'#E5E5E5'} height={'150vh'}>
        <Box background={'#10192D'} height={'73px'} display={'flex'} py={'1rem'}>
       <Img src='/assets/images/switcha.png' alt=''ml={'3rem'} />
       <Text fontSize={'24px'} color={'#FFFFFF'} fontWeight={'800'} pl={'1rem'}>Switcha</Text>
       <Text fontSize={'24px'} color={'#E5E5E5'} fontWeight={'800'} pl={'1rem'}>Admin</Text>
       <Input placeholder='Username/Email/Ref/BtcAddress' width={'700px'} ml={'9rem'} />
       <Button backgroundColor={'#00A478'} ml={'1rem'} color={'#FFFFFF'} width={'130px'}
          fontSize={'16px'} fontWeight={'700'} fontFamily={'Cabinet Grotesk'}>Search</Button>
      </Box>

      <HStack justifyContent={'center'} alignItems={'center'} >
      <Box background={'#FFFFFF'} width={'1100px'} my={'3rem'}
      borderRadius={'12px'} ml={'3rem'} pl={'1rem'} pt={'1rem'} px={'2rem'}>
        <Text fontSize={'24px'} fontWeight={'700'} fontFamily={'Cabinet Grotesk'} >Verification</Text>
        <Text fontSize={'14px'} fontWeight={'600'} fontFamily={'Cabinet Grotesk'} >Verify or reject users requesting verification, please ensure you view <br/> documents properly before taking any action </Text>
       <Flex>
        <FormControl display={'flex'} >
            <Box>
            <FormLabel color={'#8E9BAE'} fontSize={'14px'} fontWeight={'600'}
          fontFamily={'Open Sans'} mt={'1rem'}>Search</FormLabel>
            <Input type='text' placeholder='Username/Email/Ref/BtcAddress' width={'390px'}/>
        <Button backgroundColor={'#00A478'} color={'#FFFFFF'} width={'130px'}
          fontSize={'16px'} fontWeight={'700'} fontFamily={'Cabinet Grotesk'} ml={'1rem'}>Search <SearchIcon ml={'0.5rem'}/></Button>
          </Box>
           <Box ml={'1rem'}>
          <FormLabel color={'#8E9BAE'} fontSize={'14px'} fontWeight={'600'}
          fontFamily={'Open Sans'} mt={'1rem'} >Approval</FormLabel>
        <Select placeholder='Pending' width={'150px'} fontSize={'14px'} fontWeight={'600'}
          fontFamily={'Open Sans'}/>
        </Box>

        <Box ml={'1rem'}>
          <FormLabel color={'#8E9BAE'} fontSize={'14px'} fontWeight={'600'}
          fontFamily={'Open Sans'} mt={'1rem'} >Level</FormLabel>
        <Select placeholder='All Levels' width={'150px'} fontSize={'14px'} fontWeight={'600'}
          fontFamily={'Open Sans'}/>
        </Box>

        <Box ml={'1rem'}>
          <FormLabel color={'#8E9BAE'} fontSize={'14px'} fontWeight={'600'}
          fontFamily={'Open Sans'} mt={'1rem'} >Status</FormLabel>
        <Select placeholder='All Status' width={'150px'} fontSize={'14px'} fontWeight={'600'}
          fontFamily={'Open Sans'}/>
        </Box>
          </FormControl>

        </Flex>

        <TableContainer>
            <Table variant='simple' mt={'2rem'}>
           <Thead>
           <Tr fontSize={'16px'} color={'rgba(0,0,0,0.75'} fontFamily={'Cabinet Grotesk'}>
            <Th sx={{'borderBottom':'none'}}>User</Th>
            <Th sx={{'borderBottom':'none'}}>Verification Request</Th>
            <Th sx={{'borderBottom':'none'}}>Documents</Th>
            <Th sx={{'borderBottom':'none'}}>Actions</Th>
           </Tr>
           </Thead>
           <Tbody>
            <Tr backgroundColor={'#F8FAFC'} mt={'1rem'}>
                {/* <img src='/assets/images/name.png' alt=''/> */}
                <Td sx={{'borderBottom':'none'}} color={'#000000'} fontWeight={'700'}
                fontFamily={'Cabinet Grotesk'} fontSize={'16px'}>Aniyikaye Temitope<br/>Level 1 Verified</Td>
                <Button background={'rgba(250, 204, 21, 0.15)'} textAlign={'center'} height={'32px'}>Level 2 Verification</Button>
                <Td sx={{'borderBottom':'none'}}>View Documents</Td>
                <Box mt={'1rem'}>
                <Button backgroundColor={'#22C36B'} color={'#FFFFFF'}
                borderRadius={'5px'} width={'120px'}>Verify User</Button>
                <Button ml={'1rem'} width={'120px'} backgroundColor={'#EB4335'} color={'#FFFFFF'}
                borderRadius={'5px'}>Reject</Button>
                </Box>
            </Tr>
            
            <Tr backgroundColor={'#F8FAFC'} mt={'1rem'}>
                <Td sx={{'borderBottom':'none'}} color={'#000000'} fontWeight={'700'}
                fontFamily={'Cabinet Grotesk'} fontSize={'16px'}>Aniyikaye Temitope<br/>Level 2 Verified</Td>
                <Button background={'rgba(123, 97, 255, 0.15)'} textAlign={'center'} height={'32px'}>Level 3 Verification</Button>
                <Td sx={{'borderBottom':'none'}}>View Documents</Td>
                <Box mt={'1rem'}>
                <Button backgroundColor={'#22C36B'} color={'#FFFFFF'}
                borderRadius={'5px'} width={'120px'}>Verify User</Button>
                <Button ml={'1rem'} width={'120px'} backgroundColor={'#EB4335'} color={'#FFFFFF'}
                borderRadius={'5px'}>Reject</Button>
                </Box>
            </Tr>

            <Tr backgroundColor={'#F8FAFC'} mt={'1rem'}>
                <Td sx={{'borderBottom':'none'}} color={'#000000'} fontWeight={'700'}
                fontFamily={'Cabinet Grotesk'} fontSize={'16px'}>Aniyikaye Temitope<br/>Level 2 Verified</Td>
                <Button background={'rgba(250, 204, 21, 0.15)'} textAlign={'center'} height={'32px'}>Level 3 Verification</Button>
                <Td sx={{'borderBottom':'none'}}>View Documents</Td>
                <Box mt={'1rem'}>
                <Button backgroundColor={'#22C36B'} color={'#FFFFFF'}
                borderRadius={'5px'} width={'120px'}>Verify User</Button>
                <Button ml={'1rem'} width={'120px'} backgroundColor={'#EB4335'} color={'#FFFFFF'}
                borderRadius={'5px'}>Reject</Button>
                </Box>
            </Tr>

            <Tr backgroundColor={'#F8FAFC'} mt={'1rem'}>
                <Td sx={{'borderBottom':'none'}} color={'#000000'} fontWeight={'700'}
                fontFamily={'Cabinet Grotesk'} fontSize={'16px'}>Aniyikaye Temitope<br/>Level 2 Verified</Td>
                <Button background={'rgba(123, 97, 255, 0.15)'} textAlign={'center'} height={'32px'}>Level 2 Verification</Button>
                <Td sx={{'borderBottom':'none'}}>View Documents</Td>
                <Box mt={'1rem'}>
                <Button backgroundColor={'#22C36B'} color={'#FFFFFF'}
                borderRadius={'5px'} width={'120px'}>Verify User</Button>
                <Button ml={'1rem'} width={'120px'} backgroundColor={'#EB4335'} color={'#FFFFFF'}
                borderRadius={'5px'}>Reject</Button>
                </Box>
            </Tr>

            <Tr backgroundColor={'#F8FAFC'} mt={'1rem'} pt={'1rem'}>
                <Td sx={{'borderBottom':'none'}} color={'#000000'} fontWeight={'700'}
                fontFamily={'Cabinet Grotesk'} fontSize={'16px'}>Aniyikaye Temitope<br/>Level 2 Verified</Td>
                <Button background={'rgba(250, 204, 21, 0.15)'} textAlign={'center'} height={'32px'}>Level 3 Verification</Button>
                <Td sx={{'borderBottom':'none'}}>View Documents</Td>
                <Box mt={'1rem'} >
                <Button backgroundColor={'#22C36B'} color={'#FFFFFF'}
                borderRadius={'5px'} width={'120px'}>Verify User</Button>
                <Button ml={'1rem'} width={'120px'} backgroundColor={'#EB4335'} color={'#FFFFFF'}
                borderRadius={'5px'}>Reject</Button>
                </Box>
            </Tr>
           </Tbody>
            </Table>
        </TableContainer>
        </Box>
        </HStack>
     </Box>
  )
}

export default Verification