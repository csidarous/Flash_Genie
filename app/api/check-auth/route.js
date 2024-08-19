import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ isAuthenticated: false }, { status: 401 });
    }

    return NextResponse.json({ isAuthenticated: true });
  } catch (error) {
    console.error('Error checking authentication:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
