import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send email using Resend
async function sendEmail(data: {
  from: string;
  to: string;
  subject: string;
  html: string;
}) {
  if (!data || !data.to || !data.subject || !data.html) {
    console.error('Invalid email data provided');
    return false;
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('⚠️ RESEND_API_KEY is missing from environment variables');
    console.error('💡 Get your API key from https://resend.com/api-keys');
    return false;
  }

  try {
    console.log('� Sending email via Resend...');
    console.log('- To:', data.to);
    console.log('- Subject:', data.subject);
    console.log('- From domain configured:', !!process.env.RESEND_FROM_EMAIL);

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev', // Use your verified domain
      to: [data.to],
      subject: data.subject,
      html: data.html,
      replyTo: data.from
    });

    if (result.error) {
      console.error('❌ Resend API error:', result.error);
      return false;
    }

    console.log('✅ Email sent successfully via Resend');
    console.log('Email ID:', result.data?.id);
    return true;
  } catch (error) {
    console.error('� Resend sending error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  console.log('📨 POST request received to /api/support');
  console.log('🌍 Environment Details:');
  console.log('- NODE_ENV:', process.env.NODE_ENV);
  console.log('- RAILWAY_ENVIRONMENT:', process.env.RAILWAY_ENVIRONMENT);
  console.log('- Using Resend for email delivery');
  
  try {
    // Safely parse JSON with error handling
    let data;
    try {
      data = await request.json();
    } catch (e) {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON data received' },
        { status: 400 }
      );
    }

    // Validate required fields with safer null checks
    const fullName = data?.fullName || '';
    const email = data?.email || '';
    const phone = data?.phone || '';
    const service = data?.service || '';
    const summary = data?.summary || '';
    const urgency = data?.urgency || 'Medium';

    if (!fullName || !email || !phone || !service || !summary) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Support request received:', {
      fullName,
      email,
      phone,
      service,
      summary,
      urgency,
      timestamp: new Date().toISOString(),
    });

    // Build email HTML content with better styling
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Support Request</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Support Request from Blue Moon IT Website
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Urgency:</strong> <span style="color: ${urgency === 'High' ? '#e74c3c' : urgency === 'Medium' ? '#f39c12' : '#27ae60'};">${urgency}</span></p>
          </div>
          
          <div style="margin: 20px 0;">
            <p><strong>Summary:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007acc; border-radius: 4px;">
              ${summary.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-AU', { 
              timeZone: 'Australia/Sydney',
              dateStyle: 'full',
              timeStyle: 'short'
            })}</p>
            <p><strong>Source:</strong> Railway Deployment</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    console.log('📧 Attempting to send email via Resend...');
    const emailSent = await sendEmail({
      from: email,
      to: 'support@bluemoonit.com.au',
      subject: `Support Request: ${service} - ${urgency} Priority`,
      html: emailHtml,
    });

    if (!emailSent) {
      console.warn('⚠️ Email could not be sent via Resend!');
      // Still return success to client but log the failure
    } else {
      console.log('✅ Email sent successfully via Resend!');
    }

    return NextResponse.json({
      success: true,
      message: 'Your support request has been submitted successfully.',
      emailSent: emailSent,
      emailProvider: 'Resend'
    });
  } catch (error) {
    console.error('Error processing support request:', error);

    return NextResponse.json(
      { success: false, message: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
