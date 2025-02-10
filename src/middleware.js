import { NextResponse } from "next/server";

export function middleware(request) {
  //   console.log(request.url);
  //   return NextResponse.next();
  //   if (request.url.includes("about")) {
  return NextResponse.redirect(new URL("/", request.url));
  // return NextResponse.next();
  //   }
}

export const config = {
  matcher: "/about",
};
