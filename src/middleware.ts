// import { NextResponse } from "next/server";
// import { verify } from "jsonwebtoken";

// const secret: any = process.env.JWT_SECRET;

export default function middleware() {
// req: any
  //   const { cookies } = req;
  //   const jwt = cookies.SwitchaJWT;
  //   const url = req.url;
  //   if (
  //     url.includes("dashboard") ||
  //     url.includes("swap") ||
  //     url.includes("settings") ||
  //     url.includes("wallet") ||
  //     url.includes("quick-trade") ||
  //     url.includes("p2p")
  //   ) {
  //     if (jwt === undefined) {
  //       return NextResponse.redirect("/signin");
  //     }
  //     try {
  //       verify(jwt, secret);
  //       return NextResponse.next();
  //     } catch (error) {
  //       return NextResponse.redirect("/signin");
  //     }
  //   }
}
