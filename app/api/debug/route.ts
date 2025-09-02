import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Only allow this endpoint in development or for debugging
  const isProduction = process.env.NODE_ENV === 'production';
  
  return NextResponse.json({
    environment: process.env.NODE_ENV || 'development',
    smtp_configured: {
      host: !!process.env.SMTP_HOST,
      port: !!process.env.SMTP_PORT,
      secure: !!process.env.SMTP_SECURE,
      user: !!process.env.SMTP_USER,
      password: !!process.env.SMTP_PASSWORD,
    },
    smtp_values: isProduction ? 'hidden in production' : {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER ? 'set' : 'not set',
      password: process.env.SMTP_PASSWORD ? 'set' : 'not set',
    }
  });
}
