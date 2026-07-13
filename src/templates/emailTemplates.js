/**
 * Email Templates for Contact Form Notifications
 * Compatible with SendGrid, Mailgun, AWS SES, and other email services
 */

/**
 * Admin Notification Email
 * Sent to decorembysonyamehta@gmail.com when a new contact form is submitted
 */
export const adminNotificationTemplate = (formData) => ({
  subject: `New Contact Form Submission from ${formData.fullName}`,

  text: `
New contact form submission received:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service Interested In: ${formData.service || "Not specified"}
Project Location: ${formData.location || "Not specified"}
Estimated Budget: ${formData.budget || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consent to Contact: ${formData.consent ? "Yes" : "No"}
Submission Time: ${new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
  })} CST

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this client at: ${formData.email}
Call them at: ${formData.phone || "N/A"}

This is an automated notification from decorembysonyamehta.com
  `,

  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Lato', Arial, sans-serif; background-color: #FAF9F6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF9F6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #C9A76F 0%, #A88650 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #FFFFFF; font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 600;">
                New Client Inquiry
              </h1>
              <p style="margin: 10px 0 0; color: #FAF9F6; font-size: 14px;">
                Contact Form Submission
              </p>
            </td>
          </tr>
          
          <!-- Client Information -->
          <tr>
            <td style="padding: 30px 40px;">
              <h2 style="margin: 0 0 20px; color: #2B2B2B; font-size: 20px; font-weight: 600; border-bottom: 2px solid #E4DED7; padding-bottom: 10px;">
                Client Information
              </h2>
              
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #3E3E3E; font-size: 14px; font-weight: 600; width: 150px;">Name:</td>
                  <td style="color: #2B2B2B; font-size: 14px;">${
                    formData.fullName
                  }</td>
                </tr>
                <tr>
                  <td style="color: #3E3E3E; font-size: 14px; font-weight: 600;">Email:</td>
                  <td style="color: #2B2B2B; font-size: 14px;">
                    <a href="mailto:${
                      formData.email
                    }" style="color: #C9A76F; text-decoration: none;">
                      ${formData.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #3E3E3E; font-size: 14px; font-weight: 600;">Phone:</td>
                  <td style="color: #2B2B2B; font-size: 14px;">
                    ${
                      formData.phone
                        ? `<a href="tel:${formData.phone}" style="color: #C9A76F; text-decoration: none;">${formData.phone}</a>`
                        : "Not provided"
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Project Details -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #2B2B2B; font-size: 20px; font-weight: 600; border-bottom: 2px solid #E4DED7; padding-bottom: 10px;">
                Project Details
              </h2>
              
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #3E3E3E; font-size: 14px; font-weight: 600; width: 150px;">Service:</td>
                  <td style="color: #2B2B2B; font-size: 14px;">${
                    formData.service || "Not specified"
                  }</td>
                </tr>
                <tr>
                  <td style="color: #3E3E3E; font-size: 14px; font-weight: 600;">Location:</td>
                  <td style="color: #2B2B2B; font-size: 14px;">${
                    formData.location || "Not specified"
                  }</td>
                </tr>
                <tr>
                  <td style="color: #3E3E3E; font-size: 14px; font-weight: 600;">Budget:</td>
                  <td style="color: #2B2B2B; font-size: 14px;">${
                    formData.budget || "Not specified"
                  }</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #2B2B2B; font-size: 20px; font-weight: 600; border-bottom: 2px solid #E4DED7; padding-bottom: 10px;">
                Client Message
              </h2>
              
              <div style="background-color: #FAF9F6; padding: 20px; border-radius: 4px; border-left: 4px solid #C9A76F;">
                <p style="margin: 0; color: #2B2B2B; font-size: 14px; line-height: 1.6;">
                  ${formData.message}
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Action Buttons -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <table width="100%" cellpadding="10" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${
                      formData.email
                    }" style="display: inline-block; padding: 14px 30px; background-color: #C9A76F; color: #FFFFFF; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 14px;">
                      Reply to Client
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #FAF9F6; padding: 20px 40px; border-radius: 0 0 8px 8px; text-align: center; border-top: 1px solid #E4DED7;">
              <p style="margin: 0; color: #3E3E3E; font-size: 12px;">
                Submission Time: ${new Date().toLocaleString("en-US", {
                  timeZone: "America/Chicago",
                })} CST
              </p>
              <p style="margin: 8px 0 0; color: #3E3E3E; font-size: 12px;">
                This is an automated notification from decorembysonyamehta.com
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `,
});

/**
 * Client Confirmation Email
 * Sent to the client after submitting the contact form
 */
export const clientConfirmationTemplate = (formData) => ({
  subject: "Thank you for contacting Decor'em by Sonya Mehta",

  text: `
Dear ${formData.fullName},

Thank you for reaching out to Decor'em by Sonya Mehta. We have received your inquiry and are excited to learn about your project!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR SUBMISSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service: ${formData.service || "Not specified"}
Location: ${formData.location || "Not specified"}
Budget: ${formData.budget || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT HAPPENS NEXT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ We'll review your project details
✓ A team member will reach out within 48 business hours
✓ We'll schedule a complimentary consultation
✓ Together, we'll bring your vision to life!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In the meantime, explore our portfolio and read client testimonials:

Portfolio: https://www.decorembysonyamehta.com/portfolio
Testimonials: https://www.decorembysonyamehta.com/testimonials
Process: https://www.decorembysonyamehta.com/process

Follow us on Instagram: @s_decorem

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best regards,

Sonya Mehta
Decor'em by Sonya Mehta
Houston's Premier Interior Design Practice

📧 decorembysonyamehta@gmail.com
📞 +1 (281) 701-6041
📍 Houston, Texas
📷 Instagram: @s_decorem
  `,

  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Decor'em by Sonya Mehta</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Lato', Arial, sans-serif; background-color: #FAF9F6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF9F6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #C9A76F 0%, #A88650 100%); padding: 50px 40px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #FFFFFF; font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600;">
                Thank You!
              </h1>
              <p style="margin: 15px 0 0; color: #FAF9F6; font-size: 16px; line-height: 1.5;">
                We've received your inquiry and can't wait to bring your vision to life
              </p>
            </td>
          </tr>
          
          <!-- Greeting -->
          <tr>
            <td style="padding: 40px 40px 20px;">
              <p style="margin: 0; color: #2B2B2B; font-size: 16px; line-height: 1.6;">
                Dear <strong>${formData.fullName}</strong>,
              </p>
              <p style="margin: 15px 0 0; color: #2B2B2B; font-size: 16px; line-height: 1.6;">
                Thank you for reaching out to Decor'em by Sonya Mehta. We have received your inquiry and are excited to learn about your project!
              </p>
            </td>
          </tr>
          
          <!-- Submission Details -->
          <tr>
            <td style="padding: 20px 40px;">
              <div style="background-color: #FAF9F6; padding: 25px; border-radius: 4px; border-left: 4px solid #C9A76F;">
                <h2 style="margin: 0 0 15px; color: #2B2B2B; font-size: 18px; font-weight: 600;">
                  Your Submission Details
                </h2>
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr>
                    <td style="color: #3E3E3E; font-size: 14px; font-weight: 600; width: 120px;">Service:</td>
                    <td style="color: #2B2B2B; font-size: 14px;">${
                      formData.service || "Not specified"
                    }</td>
                  </tr>
                  <tr>
                    <td style="color: #3E3E3E; font-size: 14px; font-weight: 600;">Location:</td>
                    <td style="color: #2B2B2B; font-size: 14px;">${
                      formData.location || "Not specified"
                    }</td>
                  </tr>
                  ${
                    formData.budget
                      ? `
                  <tr>
                    <td style="color: #3E3E3E; font-size: 14px; font-weight: 600;">Budget:</td>
                    <td style="color: #2B2B2B; font-size: 14px;">${formData.budget}</td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>
            </td>
          </tr>
          
          <!-- What Happens Next -->
          <tr>
            <td style="padding: 20px 40px;">
              <h2 style="margin: 0 0 20px; color: #2B2B2B; font-size: 20px; font-weight: 600;">
                What Happens Next?
              </h2>
              
              <table width="100%" cellpadding="12" cellspacing="0">
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #C9A76F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">1</div>
                  </td>
                  <td style="color: #2B2B2B; font-size: 14px; line-height: 1.6;">
                    We'll review your project details carefully
                  </td>
                </tr>
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #C9A76F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">2</div>
                  </td>
                  <td style="color: #2B2B2B; font-size: 14px; line-height: 1.6;">
                    A team member will reach out within <strong>48 business hours</strong>
                  </td>
                </tr>
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #C9A76F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">3</div>
                  </td>
                  <td style="color: #2B2B2B; font-size: 14px; line-height: 1.6;">
                    We'll schedule a complimentary consultation
                  </td>
                </tr>
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 28px; height: 28px; background-color: #C9A76F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">4</div>
                  </td>
                  <td style="color: #2B2B2B; font-size: 14px; line-height: 1.6;">
                    Together, we'll bring your vision to life!
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Explore More -->
          <tr>
            <td style="padding: 20px 40px 40px;">
              <h3 style="margin: 0 0 15px; color: #2B2B2B; font-size: 16px; font-weight: 600;">
                Explore More While You Wait
              </h3>
              
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td>
                    <a href="https://www.decorembysonyamehta.com/portfolio" style="color: #C9A76F; text-decoration: none; font-size: 14px; font-weight: 600;">
                      → View Our Portfolio
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.decorembysonyamehta.com/testimonials" style="color: #C9A76F; text-decoration: none; font-size: 14px; font-weight: 600;">
                      → Read Client Testimonials
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.decorembysonyamehta.com/process" style="color: #C9A76F; text-decoration: none; font-size: 14px; font-weight: 600;">
                      → Discover Our Process
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.instagram.com/s_decorem?igsh=MThpdG5rMWkxYTF0Yg==" style="color: #C9A76F; text-decoration: none; font-size: 14px; font-weight: 600;">
                      → Follow Us on Instagram @s_decorem
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1E2A36; padding: 40px; border-radius: 0 0 8px 8px; text-align: center;">
              <h3 style="margin: 0 0 10px; color: #C9A76F; font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 600;">
                Decor'em
              </h3>
              <p style="margin: 0 0 20px; color: #FAF9F6; font-size: 14px;">
                by Sonya Mehta
              </p>
              
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td style="color: #E4DED7; font-size: 13px; line-height: 1.6;">
                    📧 <a href="mailto:decorembysonyamehta@gmail.com" style="color: #C9A76F; text-decoration: none;">decorembysonyamehta@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #E4DED7; font-size: 13px; line-height: 1.6;">
                    📞 <a href="tel:+12817016041" style="color: #C9A76F; text-decoration: none;">+1 (281) 701-6041</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #E4DED7; font-size: 13px; line-height: 1.6;">
                    📍 Houston, Texas
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `,
});
