import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {

    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    const refreshToken = cookieStore.get('refreshToken');

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('car_id');
    const begin = searchParams.get('begin')
    
    let response = await fetch(`${process.env.BACKEND_URL}/position/carroute?car_id=${id}&time_from=${begin}T00:00:00Z&time_to=${begin}T23:59:59Z`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`,
      },
    });
    
    if (response.status === 401 && refreshToken) {
    
      const newTokens = await refreshAccessToken(refreshToken.value);

        cookieStore.set('token', newTokens.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 15,
          path: '/',
        });

        cookieStore.set('refreshToken', newTokens.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        });

        response = await fetch(`${process.env.BACKEND_URL}/position/carroute?car_id=${id}&time_from=${begin}T00:00:00Z&time_to=${begin}T23:59:59Z`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${newTokens.accessToken}`,
          },
        });

        const retryData = await response.json();
        if (response.ok) {
          return NextResponse.json({ 
            success: true,
            user: retryData.body || retryData.user || retryData 
          });
        }
    }

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Ошибка' },
        { status: response.status }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      data: data.body || data.user || data
    });

  } catch (error) {
    console.error('User API error:', error);
    return NextResponse.json(
      { message: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

async function refreshAccessToken(refreshToken: string) {

  const response = await fetch(`${process.env.BACKEND_URL}/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`
      },
    })
    
    const data = await response.json();
    
    return data;
    
}