import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, surname, middle_name, phone, birthday, state_number } = body;

    if (!name?.trim() || !surname?.trim() || !phone?.trim() || !birthday || !state_number?.trim()) {
      return NextResponse.json({ message: 'Все поля обязательны' }, { status: 400 });
    }

    const result = await proxyAuthRequest(`${process.env.BACKEND_URL}/driver`, {
      method: 'POST',
      body: JSON.stringify({ name, surname, middle_name, phone, birthday, state_number }),
    });
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Driver POST API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
