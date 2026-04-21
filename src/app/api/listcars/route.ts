import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function GET() {
  try {
    const result = await proxyAuthRequest(
      `${process.env.BACKEND_URL}/positions/listcars?limit=100&offset=0`
    );
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data: data.body ?? data.user ?? data });
  } catch (error) {
    console.error('Listcars API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
