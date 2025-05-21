import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure nodemailer transporter
const createTransporter = () => {
  // Check if all required environment variables are set
  const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com.au';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  // Log environment variable status (without exposing actual values)
  console.log('📧 SMTP Configuration:');
  console.log('- SMTP_HOST:', smtpHost);
  console.log('- SMTP_PORT:', smtpPort);
  console.log('- SMTP_SECURE:', smtpSecure);
  console.log('- SMTP_USER is set:', !!smtpUser);
  console.log('- SMTP_PASSWORD is set:', !!smtpPassword);

  if (!smtpUser || !smtpPassword) {
    console.error('⚠️ SMTP_USER or SMTP_PASSWORD is missing from environment variables');
    console.error('💡 Create a .env.local file in your project root with the following:');
    console.error(`
SMTP_HOST=smtp.zoho.com.au
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@domain.com
SMTP_PASSWORD=your_password
    `);
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    // Add debug option to see detailed SMTP communication
    debug: process.env.NODE_ENV !== 'production',
    logger: process.env.NODE_ENV !== 'production'
  });
};

// Function to send email with better error handling
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

  const transporter = createTransporter();
  if (!transporter) {
    console.error('Could not create email transporter due to missing configuration');
    return false;
  }

  try {
    const info = await transporter.sendMail({
      from: `"Blue Moon IT Website" <${process.env.SMTP_USER}>`,
      to: data.to,
      subject: data.subject,
      html: data.html,
      replyTo: data.from // Add reply-to with the customer's email
    });
    console.log(`✅ Email sent successfully to ${data.to}`);
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    return true;
  } catch (error) {
    console.error('📧 Email sending error details:', error);
    // Log more specific info for common SMTP errors
    if (error && typeof error === 'object') {
      const err = error as any;
      if (err.code === 'ECONNREFUSED') {
        console.error('Connection to SMTP server was refused. Check host and port settings.');
      } else if (err.code === 'ETIMEDOUT') {
        console.error('Connection to SMTP server timed out. Check network and firewall settings.');
      } else if (err.code === 'EAUTH') {
        console.error('Authentication failed. Check username and password.');
      }
    }
    return false;
  }
}

export async function POST(request: NextRequest) {
  console.log('📨 POST request received to /api/support');
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

    // Build email HTML content with safe string handling
    const emailHtml = `
      <h2>New Support Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Urgency:</strong> ${urgency}</p>
      <p><strong>Summary:</strong> ${summary}</p>
      <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Always send the actual email regardless of environment
    console.log('📧 Attempting to send email...');
    const emailSent = await sendEmail({
      from: email,
      to: 'support@bluemoonit.com.au', // Make sure this is correct
      subject: `Support Request: ${service} - ${urgency} Priority`,
      html: emailHtml,
    });
    
    if (!emailSent) {
      console.warn('⚠️ Email could not be sent! Check SMTP configuration.');
      // Still return success to client but log the failure
    } else {
      console.log('✅ Email sent successfully!');
    }

    return NextResponse.json({
      success: true,
      message: 'Your support request has been submitted successfully.'
    });
  } catch (error) {
    console.error('Error processing support request:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
} 