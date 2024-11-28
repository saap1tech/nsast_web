
export async function GET(request) {}

import { cookies } from 'next/headers'
 
export async function GET(request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  })
}

export async function GET(request) {
    const token = request.cookies.get('token')
  }

  import { headers } from 'next/headers'
 
export async function GET(request) {
  const headersList = await headers()
  const referer = headersList.get('referer')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}
export async function GET(request) {
    const requestHeaders = new Headers(request.headers)
  }
  import { redirect } from 'next/navigation'
 
export async function GET(request) {
  redirect('https://nextjs.org/')
}


