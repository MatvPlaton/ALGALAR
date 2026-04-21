import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function GET() {
  try {
    const result = await proxyAuthRequest(`${process.env.BACKEND_URL}/report`);
    if (result instanceof NextResponse) return result;

    const buffer = await result.arrayBuffer();
    return new Response(buffer, {
      headers: {
        'Content-Type':
          result.headers.get('Content-Type') ??
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="report.xlsx"',
      },
    });
  } catch (error) {
    console.error('Report API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
