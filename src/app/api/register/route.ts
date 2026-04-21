import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;
const INN_RE = /^\d{10}(\d{2})?$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, gender, phone, email, timeZone, inn, password } = body;

    if (!firstName?.trim()) {
      return NextResponse.json({ message: 'Имя обязательно' }, { status: 400 });
    }
    if (!lastName?.trim()) {
      return NextResponse.json({ message: 'Фамилия обязательна' }, { status: 400 });
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ message: 'Некорректный email' }, { status: 400 });
    }
    if (!phone || !PHONE_RE.test(phone)) {
      return NextResponse.json({ message: 'Некорректный номер телефона' }, { status: 400 });
    }
    if (!inn || !INN_RE.test(inn)) {
      return NextResponse.json({ message: 'ИНН должен содержать 10 или 12 цифр' }, { status: 400 });
    }
    if (!password || password.length < 8) {
      return NextResponse.json({ message: 'Пароль должен содержать не менее 8 символов' }, { status: 400 });
    }
    if (!gender) {
      return NextResponse.json({ message: 'Пол обязателен' }, { status: 400 });
    }
    if (timeZone === undefined || timeZone === null || isNaN(Number(timeZone))) {
      return NextResponse.json({ message: 'Часовой пояс обязателен' }, { status: 400 });
    }

    const response = await fetch(`${process.env.BACKEND_URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, gender, phone, email, timeZone: Number(timeZone), inn, password }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Ошибка при регистрации' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, user: data.user });
  } catch (error) {
    console.error('Register API error:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
