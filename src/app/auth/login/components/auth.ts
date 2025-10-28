'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string;
  const pass = formData.get('password') as string;

    const response = await fetch('https://algalar.ru:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password: pass,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message,
        status: response.status
      };
    }

    const data = await response.json();

    const cookieStore = await cookies();

    cookieStore.set({
      name: 'jwt',
      value: data.accessToken,
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict', 
      maxAge: 20 * 60, 
      path: '/',
    });

    cookieStore.set({
      name: 'refresh',
      value: data.refreshToken,
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, 
      path: '/',
    });

    return { success: true };
}

export async function logoutUser() {
  const cookieStore = await cookies();
  
  cookieStore.delete('jwt');
  cookieStore.delete('refresh');
  
  redirect('/login');
}