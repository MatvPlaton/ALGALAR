import { cookies } from 'next/headers';

type CookieStore = Awaited<ReturnType<typeof cookies>>;

export async function setAuthCookies(
  cookieStore: CookieStore,
  accessToken: string,
  refreshToken: string
) {
  cookieStore.set('token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 15,
    path: '/',
  });
  cookieStore.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export async function refreshTokens(
  refreshToken: string
): Promise<{ accessToken: string; refreshToken: string }> {
  const response = await fetch(`${process.env.BACKEND_URL}/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('Token refresh failed');
  }
  return response.json();
}

export async function safeJson(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}
