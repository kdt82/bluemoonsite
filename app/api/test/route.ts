import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🧪 Test endpoint called');
  
  try {
    const data = await request.json();
    console.log('📋 Test data received:', data);
    
    return NextResponse.json({
      success: true,
      message: 'Test endpoint working',
      receivedData: data
    });
  } catch (error) {
    console.error('❌ Test endpoint error:', error);
    return NextResponse.json(
      { success: false, message: 'Test endpoint failed', error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Test endpoint is working via GET',
    timestamp: new Date().toISOString()
  });
}
