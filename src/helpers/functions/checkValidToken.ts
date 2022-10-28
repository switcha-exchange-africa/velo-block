import jwt_decode from "jwt-decode";
export const checkValidToken = async (context: any) => {
  console.log(context.req.cookies.SwitchaJWT);
  // context.req.cookies
  const jwt = context.req.cookies.SwitchaJWT;

  if (!jwt) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  if (jwt) {
    const token = `${jwt}`.split(" ");
    var decoded: any = jwt_decode(token[1]);
    const today = new Date().getTime() / 1000;
    // console.log(today)
    if (+decoded.exp < +today) {
      console.log("expired", today);
      return {
        redirect: {
          destination: "/signin",
          permanent: false,
        },
      };
    }
  }

  return {
    // props: { decoded },
    props: {},
  };
};
