import Cookies from "js-cookie";

export const isLogin = () => {
    if (Cookies.get("switchaAppToken")) {
      return true;
    }
    return false;
  };


  // 06f022bf1b48
  // # docker image
  // docker rmi -f registry.digitalocean.com/switcha-africa/switcha-staging-frontend-app:latest
