import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function GET() {
  try {
    const result = await proxyAuthRequest(
      `${process.env.BACKEND_URL}/driver/list?offset=0&limit=100`
    );
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Drivers API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
