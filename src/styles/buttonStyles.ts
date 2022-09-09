import {mode, StyleFunctionProps} from '@chakra-ui/theme-tools';

export const ButtonStyles = {
    baseStyle:{},
    sizes:{},
    variants:{
        primary:(props: StyleFunctionProps | Record<string, any>)=>({
            bg:"primaryColor",
            color:"appWhiteColor",
            _hover:{
                bg:mode("primaryColor.900", "primaryColor.600")(props),
                boxShadow:"md"
            },
        }),
        secondary:(props: StyleFunctionProps | Record<string, any>)=>({
            bg:"secondaryColor",
            color:"appWhiteColor",
            _hover:{
                bg:mode("secondaryColor.900", "secondaryColor.600")(props),
                boxShadow:"md"
            },
        }),
    },
    defaultProps:{},
}