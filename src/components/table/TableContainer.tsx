import Verified from "../../../public/assets/svgs/verified.svg"
import Line from "../../../public/assets/svgs/line.svg"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Box,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'

type TableComponentProps = {
    backgroundColor?: "#22C36B" | "#EB4335",
    onClick?: () => void,
    buttonTitle?: string
}

const TableComponent = ({buttonTitle, backgroundColor, onClick}: TableComponentProps) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Advertiser</Th>
                        <Th>Price</Th>
                        <Th>Available</Th>
                        <Th>Limit</Th>
                        <Th>Payment</Th>
                        <Th>Trade</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <HStack>
                                <Box bg="#FB5E04" color="white" padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px">M</Box>
                                <HStack flexDirection="column"  alignItems="flex-start" >
                                    <HStack>
                                        <Text fontSize="14px" fontWeight="400" color="#FB5E04">Rickoss</Text>
                                        <Flex>
                                            <Image src={Verified} alt="verified icon" />
                                        </Flex>
                                    </HStack>
                                    <HStack color="#8E9BAE" fontSize="12px">
                                        <Text ml="-8px" >1534 orders</Text>
                                        <Box>
                                            <Image src={Line} alt="line division" />
                                        </Box>
                                        <Text>192.19% completion</Text>
                                    </HStack>
                                </HStack>
                                
                            </HStack>
                        </Td>
                        <Td>
                            <Text fontSize="14px">724.62 <Text as="span" fontSize="10px">NGN</Text></Text>
                        </Td>
                        <Td fontSize="14px">0.00346</Td>
                        <Td fontSize="14px">200 - 500 USD</Td>
                        <Td fontSize="14px">
                            <Button fontSize="14px" fontWeight="200"  color="#FB5E04" bg="#FFF7F2" borderRadius="2px" p="2px 5px">Bank Transfer</Button>
    
                        </Td>
                        <Td>
                            <Button onClick={onClick} color="white" fontWeight="bold" bg={backgroundColor}>
                                {buttonTitle}
                            </Button>
    
                        </Td>
                    </Tr>
                </Tbody>
                <Tbody>
                    <Tr>
                        <Td>
                            <HStack>
                                <Box bg="#FB5E04" color="white" padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px">M</Box>
                                <HStack flexDirection="column"  alignItems="flex-start" >
                                    <HStack>
                                        <Text fontSize="14px" fontWeight="400" color="#FB5E04">Maximus</Text>
                                        <Flex>
                                            <Image src={Verified} alt="verified icon" />
                                        </Flex>
                                    </HStack>
                                    <HStack color="#8E9BAE" fontSize="12px">
                                        <Text ml="-8px" >1534 orders</Text>
                                        <Box>
                                            <Image src={Line} alt="line division" />
                                        </Box>
                                        <Text>192.19% completion</Text>
                                    </HStack>
                                </HStack>
                                
                            </HStack>
                        </Td>
                        <Td>
                            <Text fontSize="14px">724.62 <Text as="span" fontSize="10px">NGN</Text></Text>
                        </Td>
                        <Td fontSize="14px">0.00346</Td>
                        <Td fontSize="14px">200 - 500 USD</Td>
                        <Td fontSize="14px">
                            <Button fontSize="14px" fontWeight="200"  color="#FB5E04" bg="#FFF7F2" borderRadius="2px" p="2px 5px">Bank Transfer</Button>
    
                        </Td>
                        <Td>
                            <Button onClick={onClick} color="white" fontWeight="bold" bg={backgroundColor}>
                                {buttonTitle}
                            </Button>
                            
                        </Td>
                    </Tr>
                </Tbody>

                <Tbody>
                    <Tr>
                        <Td>
                            <HStack>
                                <Box bg="#FB5E04" color="white" padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px">M</Box>
                                <HStack flexDirection="column"  alignItems="flex-start" >
                                    <HStack>
                                        <Text fontSize="14px" fontWeight="400" color="#FB5E04">Gabby</Text>
                                        <Flex>
                                            <Image src={Verified} alt="verified icon" />
                                        </Flex>
                                    </HStack>
                                    <HStack color="#8E9BAE" fontSize="12px">
                                        <Text ml="-8px" >1534 orders</Text>
                                        <Box>
                                            <Image src={Line} alt="line division" />
                                        </Box>
                                        <Text>192.19% completion</Text>
                                    </HStack>
                                </HStack>
                                
                            </HStack>
                        </Td>
                        <Td>
                            <Text fontSize="14px">724.62 <Text as="span" fontSize="10px">NGN</Text></Text>
                        </Td>
                        <Td fontSize="14px">0.00346</Td>
                        <Td fontSize="14px">200 - 500 USD</Td>
                        <Td fontSize="14px">
                            <Button fontSize="14px" fontWeight="200"  color="#FB5E04" bg="#FFF7F2" borderRadius="2px" p="2px 5px">Bank Transfer</Button>
    
                        </Td>
                        <Td>
                            <Button onClick={onClick} color="white" fontWeight="bold" bg={backgroundColor}>
                                {buttonTitle}
                            </Button>
                            
                        </Td>
                    </Tr>
                </Tbody>

                <Tbody>
                    <Tr>
                        <Td>
                            <HStack>
                                <Box bg="#FB5E04" color="white" padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px">M</Box>
                                <HStack flexDirection="column"  alignItems="flex-start" paddingLeft="0">
                                    <HStack>
                                        <Text fontSize="14px" fontWeight="400" color="#FB5E04">Nathan</Text>
                                        <Flex>
                                            <Image src={Verified} alt="verified icon" />
                                        </Flex>
                                    </HStack>
                                    <HStack color="#8E9BAE" fontSize="12px">
                                        <Text ml="-8px" >1534 orders</Text>
                                        <Box>
                                            <Image src={Line} alt="line division" />
                                        </Box>
                                        <Text>192.19% completion</Text>
                                    </HStack>
                                </HStack>
                                
                            </HStack>
                        </Td>
                        <Td>
                            <Text fontSize="14px">724.62 <Text as="span" fontSize="10px">NGN</Text></Text>
                        </Td>
                        <Td fontSize="14px">0.00346</Td>
                        <Td fontSize="14px">200 - 500 USD</Td>
                        <Td fontSize="14px">
                            <Button fontSize="14px" fontWeight="200"  color="#FB5E04" bg="#FFF7F2" borderRadius="2px" p="2px 5px">Bank Transfer</Button>
                        </Td>
                        <Td>
                            <Button onClick={onClick} color="white" fontWeight="bold" bg={backgroundColor}>
                                {buttonTitle}
                            </Button>
                            
                        </Td>
                    </Tr>
                </Tbody>

                <Tbody>
                    <Tr>
                        <Td>
                            <HStack>
                                <Box bg="#FB5E04" color="white" padding="9px 13px" fontWeight="bold" borderRadius="50%" fontSize="14px">M</Box>
                                <HStack flexDirection="column"  alignItems="flex-start" >
                                    <HStack>
                                        <Text fontSize="14px" fontWeight="400" color="#FB5E04">Maximus</Text>
                                        <Flex>
                                            <Image src={Verified} alt="verified icon" />
                                        </Flex>
                                    </HStack>
                                    <HStack color="#8E9BAE" fontSize="12px">
                                        <Text ml="-8px" >1534 orders</Text>
                                        <Box>
                                            <Image src={Line} alt="line division" />
                                        </Box>
                                        <Text>192.19% completion</Text>
                                    </HStack>
                                </HStack>
                                
                            </HStack>
                        </Td>
                        <Td>
                            <Text fontSize="14px">724.62 <Text as="span" fontSize="10px">NGN</Text></Text>
                        </Td>
                        <Td fontSize="14px">0.00346</Td>
                        <Td fontSize="14px">200 - 500 USD</Td>
                        <Td >
                            <Button fontSize="14px" fontWeight="200"  color="#FB5E04" bg="#FFF7F2" borderRadius="2px" p="2px 5px">Bank Transfer</Button>
                        </Td>
                        <Td>
                            <Button onClick={onClick} color="white" fontWeight="bold" bg={backgroundColor}>
                                {buttonTitle}
                            </Button>
                            
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent