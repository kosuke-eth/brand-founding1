import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export interface InvestmentConfirmationData {
  name: string;
  email: string;
  projectName: string;
  amount: string;
}

export async function sendInvestmentConfirmationEmail(data: InvestmentConfirmationData): Promise<boolean> {
  try {
    const msg = {
      to: data.email,
      from: process.env.COMPANY_EMAIL || 'marketing@gustodevelopment.com',
      subject: 'Confirmation of Your Investment Submission for Brand Founding Project',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Investment Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">
                Brand Founding
              </h1>
              <p style="color: #e0e0e0; margin: 8px 0 0 0; font-size: 16px; font-weight: 300;">
                Investment Confirmation
              </p>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
                  Dear ${data.name},
                </h2>
              </div>

              <!-- Main Message -->
              <div style="margin-bottom: 30px;">
                <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for submitting your investment form for the 
                  <strong style="color: #1a1a1a;">${data.projectName}</strong> 
                  through Brand Founding. We have received your submission for an investment of 
                  <strong style="color: #2563eb; font-size: 18px;">$${data.amount} USDT</strong>.
                </p>
                
                <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  We are thrilled to have you join us in this exciting venture.
                </p>
              </div>

              <!-- Next Steps Card -->
              <div style="background-color: #f8f9fa; border-left: 4px solid #2563eb; padding: 25px; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <h3 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                  📧 Next Steps
                </h3>
                <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0;">
                  To proceed with your investment, please look for a separate email which will be sent shortly from 
                  <strong style="color: #2563eb;">marketing@gustodevelopment.com</strong>. 
                  This email will contain the secure wallet address for your USDT deposit and any further instructions.
                </p>
              </div>

              <!-- Important Notice -->
              <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <p style="color: #92400e; font-size: 14px; line-height: 1.5; margin: 0; font-weight: 500;">
                  ⚠️ <strong>Important:</strong> Please make sure to check your inbox, as well as your spam or junk folder, for this important message.
                </p>
              </div>

              <!-- Closing -->
              <div style="margin-top: 40px;">
                <p style="color: #4a4a4a; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  We appreciate your trust and look forward to partnering with you.
                </p>
                
                <div style="margin-top: 30px;">
                  <p style="color: #1a1a1a; font-size: 16px; margin: 0 0 5px 0; font-weight: 600;">
                    Best regards,
                  </p>
                  <p style="color: #1a1a1a; font-size: 16px; margin: 0; font-weight: 500;">
                    Nick Brian
                  </p>
                  <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">
                    Brand Founding Team
                  </p>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
                This email was sent from Brand Founding
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Brand Founding. All rights reserved.
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
      text: `
BRAND FOUNDING - INVESTMENT CONFIRMATION
=========================================

Dear ${data.name},

Thank you for submitting your investment form for the ${data.projectName} through Brand Founding. We have received your submission for an investment of $${data.amount} USDT.

We are thrilled to have you join us in this exciting venture.

NEXT STEPS:
-----------
To proceed with your investment, please look for a separate email which will be sent shortly from marketing@gustodevelopment.com. This email will contain the secure wallet address for your USDT deposit and any further instructions.

IMPORTANT:
----------
Please make sure to check your inbox, as well as your spam or junk folder, for this important message.

We appreciate your trust and look forward to partnering with you.

Best regards,
Nick Brian
Brand Founding Team

---
This email was sent from Brand Founding
© ${new Date().getFullYear()} Brand Founding. All rights reserved.
      `
    };

    await sgMail.send(msg);
    console.log('Investment confirmation email sent successfully to:', data.email);
    return true;
  } catch (error) {
    console.error('Error sending investment confirmation email:', error);
    return false;
  }
}
