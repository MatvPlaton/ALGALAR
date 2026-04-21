import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') ?? 'new';

    if (status !== 'new' && status !== 'readed') {
      return NextResponse.json({ message: 'Параметр status должен быть new или readed' }, { status: 400 });
    }

    const result = await proxyAuthRequest(
      `${process.env.BACKEND_URL}/notification/list?status=${status}&limit=100&offset=0`
    );
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Notifications API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
