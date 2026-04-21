import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { setAuthCookies } from '@/app/api/_lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email и пароль обязательны' }, { status: 400 });
    }

    const response = await fetch(`${process.env.BACKEND_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Неверный email или пароль' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const { accessToken, refreshToken } = data;

    const cookieStore = cookies();
    await setAuthCookies(await cookieStore, accessToken, refreshToken);

    return NextResponse.json({ success: true, user: data.user });
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
