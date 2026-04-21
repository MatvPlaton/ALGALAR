import { NextResponse } from 'next/server';
import { proxyAuthRequest } from '@/app/api/_lib/proxyRequest';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyInn, deviceNumber, uniqueId, AutoType, stateNumber, brand, axleCount } = body;

    if (!companyInn || !deviceNumber || !uniqueId || !AutoType || !stateNumber || !brand) {
      return NextResponse.json({ message: 'Все поля обязательны' }, { status: 400 });
    }

    const result = await proxyAuthRequest(`${process.env.BACKEND_URL}/auto`, {
      method: 'POST',
      body: JSON.stringify({ companyInn, deviceNumber, uniqueId, AutoType, stateNumber, brand, axleCount }),
    });
    if (result instanceof NextResponse) return result;

    const data = await result.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Autocreate API error:', error);
    return NextResponse.json({ message: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
