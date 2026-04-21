import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await proxyAuthRequest(`${process.env.BACKEND_URL}/wheels`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Wheels API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
