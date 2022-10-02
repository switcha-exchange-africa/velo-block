import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./buttonStyles";
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
        appDarkColor:"rgba(16, 25, 45, 1)" ,
        textLightColor:'rgba(139, 140, 167, 1)',
        secondary2Color:{
          900:"rgba(246, 85, 86, 1)"
        },
        paymentMethodColor2:"rgba(156, 44, 243, 1)"

  },
  components: {
    Button,
  },
});
