import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('car_id');
    const begin = searchParams.get('begin');

    if (!id || !begin) {
      return NextResponse.json({ message: 'Параметры car_id и begin обязательны' }, { status: 400 });
    }

    const url = `${process.env.BACKEND_URL}/position/carroute?car_id=${encodeURIComponent(id)}&time_from=${encodeURIComponent(begin)}T00:00:00Z&time_to=${encodeURIComponent(begin)}T23:59:59Z`;

    const result = await proxyAuthRequest(url);
    if (result instanceof NextResponse) return result;

    if (result.status === 204) {
      return NextResponse.json({ success: true, status: 204, data: null });
    }

    const data = await result.json();
    return NextResponse.json({ success: true, data: data.body ?? data.user ?? data });
  } catch (error) {
    console.error('Carroute API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
