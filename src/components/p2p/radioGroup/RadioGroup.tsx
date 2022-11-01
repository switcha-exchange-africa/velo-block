import { Box, useRadio } from '@chakra-ui/react'
import React from 'react'

export function RadioCard(props:any) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
            //   border='1px solid red'
        sx={{
          border: "1px solid red"  
        }}
              
            //   bg="teal.600"
        borderRadius='50%'
        _checked={{
          bg: 'radioButtons.100',
          color: 'white',
          borderColor: 'radioButtons.100',
        }}
        
        _focus={{
            outline: "1px solid radioButtons.100",
            bg: "radioButtons.100"
        }}
        px={"5px"}
        py={"5px"}
    >
        {/* <Box bg="none" borderRadius={"50%"} border="1px solid red" px="2px" py="2px" > */}
            {props.children}
        {/* </Box>           */}
        
      </Box>
    </Box>
  )
}