import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('📨 POST request received to /api/support');
  
  // Add CORS headers for Railway deployment
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  try {
    // Parse the form data
    const data = await request.json();
    console.log('📋 Received form data:', data);
    
    // Validate required fields
    const { fullName, email, phone, service, summary, urgency } = data;
    
    if (!fullName || !email || !phone || !service || !summary) {
      console.log('❌ Validation failed - missing fields');
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400, headers }
      );
    }

    console.log('✅ Form validation passed');
    console.log('Support request details:', {
      fullName,
      email,
      phone,
      service,
      summary,
      urgency,
      timestamp: new Date().toISOString(),
    });

    // For now, let's skip the email sending and just return success
    // This will help us determine if the issue is with the email sending
    console.log('✅ Request processed successfully (email sending disabled for testing)');
    
    return NextResponse.json({
      success: true,
      message: 'Your support request has been submitted successfully.',
      debug: 'Email sending temporarily disabled for testing'
    }, { headers });
    
  } catch (error) {
    console.error('❌ Error processing support request:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to process your request. Please try again.' },
      { status: 500, headers }
    );
  }
}

// Add OPTIONS handler for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
