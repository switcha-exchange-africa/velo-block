import {extendTheme} from '@chakra-ui/react'
import {ButtonStyles as Button} from './buttonStyles'
export const appTheme = extendTheme({
    colors:{
        primaryColor:{
            900:"rgba(251, 94, 4, 1)",
            600:"rgba(251, 94, 4, 0.6)",
        },
        mainBGColor:"#F8FAFC",
        appWhiteColor:"#FFFFFF",
        secondaryColor: {
            900:"rgba(34, 195, 107, 1)",
            600:"rgba(34, 195, 107, 0.6)",
        }, 
        appDarkColor:"rgba(16, 25, 45, 1)" 
    },
    components:{
        Button
    }
})