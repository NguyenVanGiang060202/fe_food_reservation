import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const accessToken = (await cookies()).get('accessToken')?.value

  if (!accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ user: null}, { status: 401 })
    }
    const user = await res.json()
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
