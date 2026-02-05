import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFormData(data: Partial<ContactFormData>): string | null {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return "All fields are required";
  }

  if (!EMAIL_REGEX.test(email)) {
    return "Invalid email format";
  }

  return null;
}

// Email template generators
function generateHtmlEmail(data: ContactFormData): string {
  const { name, email, phone, subject, message } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>New Contact Form Submission</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f4f4f4;
            padding: 0;
            margin: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .email-header {
            background-color: #ffffff;
            border-bottom: 3px solid #06b6d4;
            padding: 32px 40px 24px;
          }
          .email-header h1 {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0 0 8px 0;
            letter-spacing: -0.3px;
          }
          .email-header p {
            font-size: 14px;
            color: #666666;
            margin: 0;
            font-weight: 400;
          }
          .email-body {
            padding: 32px 40px;
            background-color: #ffffff;
          }
          .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 32px;
          }
          .info-row {
            border-bottom: 1px solid #e5e5e5;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-label-cell {
            padding: 12px 0;
            width: 140px;
            vertical-align: top;
          }
          .info-label {
            font-size: 12px;
            font-weight: 600;
            color: #666666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin: 0;
          }
          .info-value-cell {
            padding: 12px 0;
            vertical-align: top;
          }
          .info-value {
            font-size: 15px;
            font-weight: 400;
            color: #1a1a1a;
            margin: 0;
            word-break: break-word;
          }
          .info-value a {
            color: #06b6d4;
            text-decoration: none;
          }
          .info-value a:hover {
            text-decoration: underline;
          }
          .message-section {
            margin-top: 32px;
            padding-top: 32px;
            border-top: 2px solid #e5e5e5;
          }
          .message-label {
            font-size: 12px;
            font-weight: 600;
            color: #666666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin: 0 0 16px 0;
          }
          .message-content {
            font-size: 15px;
            line-height: 1.7;
            color: #1a1a1a;
            white-space: pre-wrap;
            word-wrap: break-word;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 4px;
            border-left: 3px solid #06b6d4;
            margin: 0;
          }
          .email-footer {
            background-color: #f9f9f9;
            padding: 24px 40px;
            border-top: 1px solid #e5e5e5;
          }
          .email-footer p {
            font-size: 12px;
            color: #999999;
            margin: 0 0 8px 0;
            line-height: 1.5;
          }
          .email-footer p:last-child {
            margin-bottom: 0;
          }
          .highlight {
            color: #06b6d4;
            font-weight: 600;
          }
          @media only screen and (max-width: 600px) {
            .email-header,
            .email-body,
            .email-footer {
              padding-left: 20px;
              padding-right: 20px;
            }
            .email-header h1 {
              font-size: 20px;
            }
            .info-label-cell {
              width: 100px;
            }
            .info-value {
              font-size: 14px;
            }
            .message-content {
              padding: 16px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>New Contact Form Submission</h1>
            <p>You have received a new message from your portfolio website</p>
          </div>
          
          <div class="email-body">
            <table class="info-table">
              <tr class="info-row">
                <td class="info-label-cell">
                  <p class="info-label">Name</p>
                </td>
                <td class="info-value-cell">
                  <p class="info-value">${escapeHtml(name)}</p>
                </td>
              </tr>
              
              <tr class="info-row">
                <td class="info-label-cell">
                  <p class="info-label">Email</p>
                </td>
                <td class="info-value-cell">
                  <p class="info-value">
                    <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                  </p>
                </td>
              </tr>
              
              ${
                phone
                  ? `
              <tr class="info-row">
                <td class="info-label-cell">
                  <p class="info-label">Phone</p>
                </td>
                <td class="info-value-cell">
                  <p class="info-value">
                    <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>
                  </p>
                </td>
              </tr>
              `
                  : ""
              }
              
              <tr class="info-row">
                <td class="info-label-cell">
                  <p class="info-label">Subject</p>
                </td>
                <td class="info-value-cell">
                  <p class="info-value">${escapeHtml(subject)}</p>
                </td>
              </tr>
            </table>
            
            <div class="message-section">
              <p class="message-label">Message</p>
              <p class="message-content">${escapeHtml(message)}</p>
            </div>
          </div>
          
          <div class="email-footer">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to <span class="highlight">${escapeHtml(name)}</span>.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function generateTextEmail(data: ContactFormData): string {
  const { name, email, phone, subject, message } = data;

  return `
═══════════════════════════════════════════════════════
  NEW CONTACT FORM SUBMISSION
═══════════════════════════════════════════════════════

👤 Full Name:
   ${name}

📧 Email Address:
   ${email}
${
  phone
    ? `
📱 Phone Number:
   ${phone}
`
    : ""
}
📌 Subject:
   ${subject}

💬 Message:
   ${message}

═══════════════════════════════════════════════════════

This email was sent from your portfolio contact form.
Reply directly to this email to respond to ${name}.

═══════════════════════════════════════════════════════
  `.trim();
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Email sending logic
async function sendEmail(
  data: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  const recipientEmail =
    process.env.RESEND_RECIPIENT_EMAIL || "rajasekharreddy82979@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.subject}`,
      html: generateHtmlEmail(data),
      text: generateTextEmail(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send email" };
    }

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Internal server error" };
  }
}

// API route handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData = body as Partial<ContactFormData>;

    // Validate form data
    const validationError = validateFormData(formData);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Send email
    const result = await sendEmail(formData as ContactFormData);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Request processing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
