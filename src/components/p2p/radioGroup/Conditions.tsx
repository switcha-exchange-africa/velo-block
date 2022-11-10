import { Box, chakra, Flex, Stack, Text, useCheckbox, useCheckboxGroup } from '@chakra-ui/react'


const CheckboxConditions = () =>  {
  const CustomCheckbox = (props:any) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)

        return (
        <chakra.label
            display='flex'
            flexDirection='row'
            alignItems='center'
            gridColumnGap={2}
            px={3}
            cursor='pointer'
            {...htmlProps}
        >
            <input {...getInputProps()} hidden />
            <Flex
                alignItems='center'
                justifyContent='center'
                border='2px solid'
                borderColor='#8e9bae'
                w={"4"}
                h={4}
                {...getCheckboxProps()}
            >
                {state.isChecked && <Box w={2} h={2} bg='black' />}
            </Flex>
            <Text color="gray.700" {...getLabelProps()}> {props.value}</Text>
        </chakra.label>
        )
    }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['2'],
  })

  return (
    <Stack>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      <CustomCheckbox {...getCheckboxProps({ value: 'Completed KYC' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Registered 0 Days ago' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'Holdings more than 0.01 BTC' })} />
    </Stack>
  )
}

export default CheckboxConditions