// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function myMiddleware(req: NextRequest) {
  // Your Middleware logic here
  const { pathname } = req.nextUrl;
  console.log("middleware ", pathname);

  // const url = req.nextUrl.clone();
  // url.pathname = "/";
  // return NextResponse.rewrite(url);
  // if ((req.nextUrl.pathname += "/"))
  //   return NextResponse.redirect(`${req.nextUrl.pathname}/about`);
  const response = NextResponse.next();
  return response;
}
