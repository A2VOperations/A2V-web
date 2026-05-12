import nodemailer from "nodemailer";

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function createTransporter() {
  const host = getRequiredEnv("MAILTRAP_HOST");
  const port = Number(getRequiredEnv("MAILTRAP_PORT"));

  if (Number.isNaN(port)) {
    throw new Error("MAILTRAP_PORT must be a valid number");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user: getRequiredEnv("MAILTRAP_USER"),
      pass: getRequiredEnv("MAILTRAP_PASS"),
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendLeadEmail({
  name,
  email,
  phone,
  service,
  subject,
  message,
  source,
}) {
  const recipientEmail = getRequiredEnv("A2V_EMAIL");
  const transporter = createTransporter();
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "";
  const safeService = service ? escapeHtml(service) : "";
  const safeSubject = subject ? escapeHtml(subject) : "";
  const safeMessage = message
    ? escapeHtml(message).replaceAll("\n", "<br />")
    : "";
  const safeSource = source ? escapeHtml(source) : "website";

  const detailRows = [
    {
      label: "Name",
      value: safeName,
    },
    {
      label: "Email",
      value: `<a href="mailto:${safeEmail}" style="color: #E84393; text-decoration: none;">${safeEmail}</a>`,
    },
    safePhone
      ? {
          label: "Phone",
          value: `<a href="tel:${safePhone}" style="color: #1a0a14; text-decoration: none;">${safePhone}</a>`,
        }
      : null,
    safeService
      ? {
          label: "Service",
          value: safeService,
        }
      : null,
    safeSubject
      ? {
          label: "Subject",
          value: safeSubject,
        }
      : null,
    {
      label: "Source",
      value: safeSource,
    },
  ]
    .filter(Boolean)
    .map(
      ({ label, value }, index, rows) => `
            <tr>
              <td style="padding: 10px 0; ${index < rows.length - 1 ? "border-bottom: 1px solid #f5e0ee;" : ""} font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px; width: 90px;">${label}</td>
              <td style="padding: 10px 0; ${index < rows.length - 1 ? "border-bottom: 1px solid #f5e0ee;" : ""} font-size: 14px; font-weight: 700; color: #1a0a14;">${value}</td>
            </tr>
          `,
    )
    .join("");

  await transporter.sendMail({
    from: `"A2V Website" <${recipientEmail}>`,
    replyTo: `"${name}" <${email}>`,
    to: recipientEmail,
    subject: `New popup lead from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; border: 1px solid #fce4f0; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #E84393, #FFB800); padding: 24px 28px;">
          <h1 style="margin: 0; color: #fff; font-size: 20px; font-weight: 800;">New Popup Lead</h1>
          <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 13px;">A visitor submitted the popup form on A2V</p>
        </div>

        <div style="padding: 24px 28px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse;">
            ${detailRows}
          </table>

          ${
            safeMessage
              ? `<div style="margin-top: 20px; padding: 14px 16px; background: #fff9ec; border-radius: 10px; border: 1px solid #ffe4ad;">
            <p style="margin: 0 0 8px; font-size: 12px; color: #b87400; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
              Message
            </p>
            <p style="margin: 0; font-size: 14px; color: #1a0a14; line-height: 1.7;">
              ${safeMessage}
            </p>
          </div>`
              : ""
          }

          <div style="margin-top: 20px; padding: 14px 16px; background: #fdf6fb; border-radius: 10px; border: 1px solid #fce4f0;">
            <p style="margin: 0; font-size: 12px; color: #b5326e; font-weight: 600;">
              Hit <strong>Reply</strong> to respond directly to ${safeName} at ${safeEmail}
            </p>
          </div>
        </div>

        <div style="padding: 14px 28px; background: #fdf6fb; border-top: 1px solid #fce4f0;">
          <p style="margin: 0; font-size: 11px; color: #c0a0b5; font-weight: 600;">
            Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST | A2V
          </p>
        </div>
      </div>
    `,
  });
}
