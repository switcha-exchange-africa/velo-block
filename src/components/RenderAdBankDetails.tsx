import { Flex, Img, Text } from '@chakra-ui/react'
import CopyToClipboard from 'react-copy-to-clipboard'
import remoteImages from '../constants/remoteImages'
import appAlert from '../helpers/appAlert'
// import { useGetBankByIdQuery } from '../redux/services/bank.service'

const RenderAdBankDetails = ({ bankId }: any) => {
    // console.log("this is the bank id ", bankId)
    // const singleBank = useGetBankByIdQuery(bankId, { skip: !bankId })

    return (

        <>

            
                {/* <Flex pt={'4'}>
            <Flex flexDirection={'column'} pr={'8'}>
                <Text fontSize={'xs'} color={'#64748B'}>Account Name</Text>
                <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{singleBank?.data?.data?.accountName} <CopyToClipboard text={singleBank?.data?.data?.accountName}
                    onCopy={() => appAlert.success('copied to clipboard')}><Img h="20px" w="20px" pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
            </Flex>
            <Flex flexDirection={'column'} pr={'8'}>
                <Text fontSize={'xs'} color={'#64748B'}>Account Number</Text>
                <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{singleBank?.data?.data?.accountNumber}  <CopyToClipboard text={singleBank?.data?.data?.accountNumber}
                    onCopy={() => appAlert.success('copied to clipboard')}><Img h="20px" w="20px" pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard></Text>
            </Flex>
            <Flex flexDirection={'column'} pr={'8'}>
                <Text fontSize={'xs'} color={'#64748B'}>Bank Name</Text>
                <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{singleBank?.data?.data?.name}  <CopyToClipboard text={singleBank?.data?.data?.name}
                    onCopy={() => appAlert.success('copied to clipboard')}><Img h="20px" w="20px" pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
            </Flex>
            </Flex> */}

            <Flex pt={'4'}>
                <Flex flexDirection={'column'} pr={'8'}>
                    <Text fontSize={'xs'} color={'#64748B'}>Account Name</Text>
                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{bankId.accountName} <CopyToClipboard text={bankId.accountName}
                        onCopy={() => appAlert.success('copied to clipboard')}><Img h="20px" w="20px" pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                </Flex>
                <Flex flexDirection={'column'} pr={'8'}>
                    <Text fontSize={'xs'} color={'#64748B'}>Account Number</Text>
                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{bankId.accountNumber}  <CopyToClipboard text={bankId.accountNumber}
                        onCopy={() => appAlert.success('copied to clipboard')}><Img h="20px" w="20px" pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard></Text>
                </Flex>

                <Flex flexDirection={'column'} pr={'8'}>
                    <Text fontSize={'xs'} color={'#64748B'}>Bank Name</Text>
                    <Text alignItems={'center'} display={'flex'} fontSize={'sm'} >{bankId.name}  <CopyToClipboard text={bankId.name}
                        onCopy={() => appAlert.success('copied to clipboard')}><Img h="20px" w="20px" pl={'1'} src={remoteImages.copyIcon} alt='' /></CopyToClipboard> </Text>
                </Flex>
            </Flex>

        </>
        



    )
}

export default RenderAdBankDetails

