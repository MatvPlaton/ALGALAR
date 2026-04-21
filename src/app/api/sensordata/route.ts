import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const wheelId = searchParams.get('wheel_id');
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    if (!type || !wheelId || !from || !to) {
      return NextResponse.json(
        { message: 'Параметры type, wheel_id, from, to обязательны' },
        { status: 400 }
      );
    }
    if (type !== 'pressure' && type !== 'temperature') {
      return NextResponse.json({ message: 'Параметр type должен быть pressure или temperature' }, { status: 400 });
    }

    const url = `${process.env.BACKEND_URL}/${type}data?wheel_id=${encodeURIComponent(wheelId)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

    const result = await proxyAuthRequest(url);
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Sensordata API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
