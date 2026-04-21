import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const driverId = searchParams.get('driver_id');

    if (!driverId) {
      return NextResponse.json({ message: 'Параметр driver_id обязателен' }, { status: 400 });
    }

    const result = await proxyAuthRequest(
      `${process.env.BACKEND_URL}/driver/info?driver_id=${encodeURIComponent(driverId)}`
    );
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Driver info API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
