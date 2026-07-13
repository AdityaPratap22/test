/**
 * Contact Form API Endpoint
 * Handles form submissions and sends notifications
 */

// Example webhook payload structure for integrations (Zapier, Make, etc.)
const createWebhookPayload = (formData) => ({
  timestamp: new Date().toISOString(),
  source: 'contact_form',
  data: {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone || 'Not provided',
    service: formData.service || 'Not specified',
    location: formData.location || 'Not specified',
    budget: formData.budget || 'Not specified',
    message: formData.message,
    consent: formData.consent
  },
  metadata: {
    userAgent: null, // Will be set from request
    ipAddress: null, // Will be set from request
    referrer: null
  }
});

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message || !formData.consent) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['fullName', 'email', 'message', 'consent']
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Create webhook payload
    const webhookPayload = createWebhookPayload(formData);
    webhookPayload.metadata.userAgent = req.headers['user-agent'];
    webhookPayload.metadata.ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    webhookPayload.metadata.referrer = req.headers.referer;

    // TODO: Send to email service (e.g., SendGrid, Mailgun, AWS SES)
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'decorembysonyamehta@gmail.com',
      from: 'noreply@decorem.com',
      subject: `New Contact Form Submission from ${formData.fullName}`,
      text: `
        New contact form submission:
        
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Service: ${formData.service || 'Not specified'}
        Location: ${formData.location || 'Not specified'}
        Budget: ${formData.budget || 'Not specified'}
        Message: ${formData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
        <p><strong>Location:</strong> ${formData.location || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    };
    
    await sgMail.send(msg);
    */

    // TODO: Send confirmation email to user
    /*
    const confirmationMsg = {
      to: formData.email,
      from: 'decorembysonyamehta@gmail.com',
      subject: 'Thank you for contacting Decor\'em by Sonya Mehta',
      text: `
        Dear ${formData.fullName},
        
        Thank you for reaching out to Decor'em by Sonya Mehta. We have received your inquiry and will respond within 48 business hours.
        
        Your submission details:
        Service: ${formData.service || 'Not specified'}
        Location: ${formData.location || 'Not specified'}
        
        In the meantime, feel free to explore our portfolio at www.decorem.com/portfolio
        
        Best regards,
        Sonya Mehta
        Decor'em by Sonya Mehta
        +1 (281) 701-6041
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2B2B2B;">Thank You for Contacting Us!</h2>
          <p>Dear ${formData.fullName},</p>
          <p>Thank you for reaching out to Decor'em by Sonya Mehta. We have received your inquiry and will respond within 48 business hours.</p>
          
          <div style="background: #FAF9F6; padding: 20px; margin: 20px 0; border-left: 4px solid #C9A76F;">
            <h3 style="color: #2B2B2B; margin-top: 0;">Your Submission Details</h3>
            <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
            <p><strong>Location:</strong> ${formData.location || 'Not specified'}</p>
          </div>
          
          <p>In the meantime, feel free to explore our <a href="https://www.decorem.com/portfolio" style="color: #C9A76F;">portfolio</a>.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E4DED7;">
            <p style="margin: 0;"><strong>Sonya Mehta</strong></p>
            <p style="margin: 5px 0;">Decor'em by Sonya Mehta</p>
            <p style="margin: 5px 0;">+1 (281) 701-6041</p>
            <p style="margin: 5px 0;">decorembysonyamehta@gmail.com</p>
          </div>
        </div>
      `
    };
    
    await sgMail.send(confirmationMsg);
    */

    // TODO: Send to webhook (Zapier, Make, custom endpoint)
    /*
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      });
    }
    */

    // TODO: Store in database (optional)
    /*
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('decorem');
    await db.collection('contacts').insertOne({
      ...formData,
      createdAt: new Date(),
      status: 'pending'
    });
    await client.close();
    */

    // Log submission (for development/debugging)
    console.log('Contact form submission received:', {
      name: formData.fullName,
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return res.status(200).json({ 
      success: true,
      message: 'Thank you for your submission. We will contact you within 48 hours.',
      webhookPayload // Include for testing/development (remove in production)
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'An error occurred processing your request. Please try again or contact us directly.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
