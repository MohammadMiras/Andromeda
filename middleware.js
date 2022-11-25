import { NextResponse } from 'next/server'

export async function middleware(req) {

  const { pathname, origin } = req.nextUrl

  const data = await (await fetch(`${origin}/api/seo`)).json()

  console.log(origin + "," +pathname) 
  console.log("=====================")
  console.log(data)
  console.log("===============")
//   if (redirect && redirect?.code == 301) {

//     console.log(origin + redirect.newUrl)
//     return NextResponse.redirect(origin + redirect.newUrl, 301)
//   }

  return NextResponse.next("/")
}
//
export const config = {
    matcher: [   
      '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
    ],
  }
