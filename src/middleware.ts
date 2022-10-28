import { NextResponse } from "next/server";
// import { isExpired, decodeToken } from "react-jwt";
// import { jwtVerify } from "jose";

import type { NextRequest } from "next/server";
// import endpoints from "./constants/endpoints";
import jwt_decode from "jwt-decode";

// const secret: any = process.env.JWT_SECRET;
// const baseUrl: any = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default async function middleware(req: NextRequest) {
  const { cookies } = req;

  // if (decodedJwt.exp * 1000 < Date.now()) {
  //   props.logOut();
  // }

  const jwt = cookies.get("SwitchaJWT");
  // const requestOptions = {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json", Authorization: `${jwt}` },
  // };

  if (
    req.nextUrl.pathname.startsWith("/_next") || // exclude Next.js internals
    req.nextUrl.pathname.startsWith("/api") || //  exclude all API routes
    req.nextUrl.pathname.startsWith("/static") || // exclude static files
    req.nextUrl.pathname.includes(".") // exclude all files in the public folder
  )
    return NextResponse.next();

  // const url = req.url;

  // if (
  //   url.includes("signin") ||
  //   url.includes("signup") ||
  //   url.includes("verify-email")
  // ) {
  //   if (jwt) {
  //     try {
  //       const token = jwt.split(" ");
  //       const checkTokenExpired = isExpired(token[1]);
  //       if (checkTokenExpired == true) {
  //         return NextResponse.next();
  //       } else {
  //         return NextResponse.redirect("/");
  //       }
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  // }

  if (
    req.nextUrl.pathname.startsWith("/signin") ||
    req.nextUrl.pathname.startsWith("/signup") ||
    req.nextUrl.pathname.startsWith("/verify-email")
  ) {
    // const deb = decodeToken(toks);
    // console.log("debb", deb);
    if (jwt) {
      try {
        const token = jwt.split(" ");
        // console.log("debug", secret);
        var decoded: any = jwt_decode(token[1]);
        // console.log("decoded", decoded);
        if (+decoded.exp < +new Date().getTime() / 1000) {
          console.log("expired", new Date().getTime() / 1000);
          NextResponse.next();
        } else {
          console.log("not expired", new Date().getTime() / 1000);
          return NextResponse.redirect(new URL("/", req.url));
        }
        // const debug = await jwtVerify(
        //   token[1],
        //   new TextEncoder().encode(secret)
        // );
        // console.log("debug", JSON.stringify(debug.payload));
        // return NextResponse.redirect(new URL("/", req.url));

        // fetch(`${baseUrl}/api/v1/${endpoints.GET_USER_URL}`, requestOptions)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     // console.log(JSON.stringify(data));
        //     const checkTokenExpired = data.status == 401;
        //     console.log("checkTokenExpired", checkTokenExpired);
        //     if (checkTokenExpired == true) {
        //       return NextResponse.next();
        //     } else {
        //       return NextResponse.redirect(new URL("/", req.url));
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     NextResponse.next();
        //   });
      } catch (error) {
        return NextResponse.next();
      }
    }
  }

  if (
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname.startsWith("/settings") ||
    req.nextUrl.pathname.startsWith("/swap") ||
    req.nextUrl.pathname.startsWith('/"wallet') ||
    req.nextUrl.pathname.startsWith("/quick-trade") ||
    req.nextUrl.pathname.startsWith("/p2p")
  ) {
    // console.log("jwtt", jwt);
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
    try {
      const token = jwt.split(" ");
      // const debug = await jwtVerify(token[1], new TextEncoder().encode(secret));
      // console.log("debug", JSON.stringify(debug.payload));
      // return NextResponse.next();
      var decoded: any = jwt_decode(token[1]);
      if (+decoded.exp < +new Date().getTime() / 1000) {
        console.log("expired", new Date().getTime() / 1000);
        return NextResponse.redirect(new URL("/signin", req.url));
      } else {
        console.log("not expired", new Date().getTime() / 1000);
        return NextResponse.next();
      }
      // fetch(`${baseUrl}/api/v1/${endpoints.GET_USER_URL}`, requestOptions)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     // console.log(JSON.stringify(data));
      //     const checkTokenExpired = data.status == 401;
      //     if (checkTokenExpired == true) {
      //       return NextResponse.redirect(new URL("/signin", req.url));
      //     } else {
      //       return NextResponse.next();
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     NextResponse.next();
      //   });
    } catch (error) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  // if (
  //   url.includes("dashboard") ||
  //   url.includes("swap") ||
  //   url.includes("settings") ||
  //   url.includes("wallet") ||
  //   url.includes("quick-trade") ||
  //   url.includes("p2p")
  // ) {
  //   if (jwt === undefined) {
  //     return NextResponse.redirect("/signin");
  //   }

  //   try {
  //     const token = jwt.split(" ");
  //     const checkTokenExpired = isExpired(token[1]);
  //     if (checkTokenExpired == true) {
  //       return NextResponse.redirect("/signin");
  //     } else {
  //       return NextResponse.next();
  //     }
  //   } catch (error) {
  //     return NextResponse.redirect("/signin");
  //   }
  // }
}
