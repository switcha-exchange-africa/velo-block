import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./buttonStyles";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

export const appTheme = extendTheme({
  colors: {
    primaryColor: {
      900: "rgba(251, 94, 4, 1)",
      600: "rgba(251, 94, 4, 0.6)",
    },
    cardColor: {
      100: "rgba(111, 217, 122, 0.15)",
      200: "rgba(35, 79, 236, 0.1)",
      300: "rgba(235, 67, 53, 0.1)",
      400: "rgba(123, 97, 255, 0.1)"
    },
    radioButtons: {
      100: "#FB5E04"
    },
    mainBGColor: "#F8FAFC",
    appWhiteColor: "#FFFFFF",
    secondaryColor: {
      900: "rgba(34, 195, 107, 1)",
      600: "rgba(34, 195, 107, 0.6)",
    },
    appDarkColor: "rgba(16, 25, 45, 1)",
    textLightColor: "rgba(139, 140, 167, 1)",
    secondary2Color: {
      900: "rgba(246, 85, 86, 1)",
    },
    paymentMethodColor2: "rgba(156, 44, 243, 1)",
    deselectedButtonColor: "rgba(226, 232, 240, 1)",
  },
  components: {
    Button,
    Steps,
  },
});
