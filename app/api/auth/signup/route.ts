import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signup`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     });

//     const data = await res.json();
//     if (!res.ok) {
//       return NextResponse.json(
//         { error: data.message || 'Invalid credentials' },
//         { status: res.status }
//       );
//     }

//     const response = NextResponse.json({ success: true, data: data.data }, { status: 200 });

//     return response;
//   } catch {
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }

}
