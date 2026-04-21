import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { refreshTokens, setAuthCookies, safeJson } from './auth';

export async function proxyAuthRequest(
  url: string,
  init: RequestInit = {}
): Promise<Response | NextResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  const refreshToken = cookieStore.get('refreshToken');

  const makeRequest = (authToken: string) =>
    fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init.headers as Record<string, string>),
        Authorization: `Bearer ${authToken}`,
      },
    });

  let response = await makeRequest(token?.value ?? '');

  if (response.status === 401 && refreshToken) {
    try {
      const newTokens = await refreshTokens(refreshToken.value);
      await setAuthCookies(cookieStore, newTokens.accessToken, newTokens.refreshToken);
      response = await makeRequest(newTokens.accessToken);
    } catch {
      return NextResponse.json({ message: 'Сессия истекла' }, { status: 401 });
    }
  }

  if (!response.ok) {
    const errorData = (await safeJson(response)) as { message?: string };
    return NextResponse.json(
      { message: errorData.message || 'Ошибка' },
      { status: response.status }
    );
  }

  return response;
}
