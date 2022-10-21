import { Box, Heading, Text, Flex} from "@chakra-ui/react";
import Image from "next/image";
import Arrow from "../../../../public/assets/svgs/rightarrow.svg"

type CardProps = {
  bgColor: string,
  title: string,
  description: string,
  leftIcon: string
}

export const MenuItemsCard = ({bgColor, title, description, leftIcon}: CardProps) => {
  return (
    <Box p="16px 28px" bgColor={bgColor}  borderRadius="10px" minW="235px">
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt="1px" fontSize="14px">{description}</Text>
      <Flex justifyContent="space-between" mt="23px">
        <Box>
          <Image src={leftIcon} alt="file icon"  />
        </Box>
        <Box width="30px" cursor="pointer">
          <Image src={Arrow} alt="file icon"  />
        </Box>
      </Flex>
    </Box>
  )
}
