import Cookies from "js-cookie";

export const isLogin = () => {
    if (Cookies.get("switchaAppToken")) {
      return true;
    }
    return false;
  };