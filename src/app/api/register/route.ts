import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, gender, phone, email, timezone, inn, password } = body;
    

    const response = await fetch(`${process.env.BACKEND_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, gender, phone, email, timezone, inn, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Неверный email или пароль' },
        { status: response.status }
      );
    }
    return NextResponse.json({ 
      success: true,
      user: data.user 
    });

  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
