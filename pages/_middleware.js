import { NextResponse } from 'next/server';
import { verifyToken } from '../lib/utils';

export async function middleware(request) {
  const token = request ? request.cookies?.token : null;
  const userId = await verifyToken(token);

  const { pathname } = request.nextUrl.clone();

  if(pathname.includes('/api/login') || userId || pathname.includes('/static')) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}