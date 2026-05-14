import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

export async function POST(request) {
  try {
    const { name, email, phone, address, pdfBase64, source, subject, message } =
      await request.json();

    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedPhone = phone?.trim();
    const trimmedAddress = address?.trim();
    const trimmedSource = source?.trim();
    const trimmedSubject = subject?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedName || !trimmedEmail) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport(
      MailtrapTransport({
        token: process.env.MAILTRAP_TOKEN,
      }),
    );

    const sender = {
      address: process.env.EMAIL_MAILTRAP || "hello@demomailtrap.co",
      name: "A2V Website",
    };

    const mailOptions = {
      from: sender,
      to: [
        process.env.EMAIL_TO ||
          process.env.NEXT_PUBLIC_EMAIL ||
          "operation.a2vgroups@gmail.com",
      ],
      replyTo: trimmedEmail,
      subject: `New Lead: ${trimmedSubject || "Website Inquiry"} from ${trimmedName}`,
      text: `You have received a new lead submission.\n\nCustomer Details:\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nPhone: ${trimmedPhone || "N/A"}\nAddress: ${trimmedAddress || "N/A"}\nSource: ${trimmedSource || "website"}\nSubject: ${trimmedSubject || "N/A"}\n\nMessage:\n${trimmedMessage || "No message provided"}`,
    };

    if (pdfBase64) {
      const base64Data = pdfBase64.split("base64,")[1] || pdfBase64;

      mailOptions.attachments = [
        {
          filename: "lead-attachment.pdf",
          content: base64Data,
          encoding: "base64",
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted and email sent.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Mailtrap error:", error);

    return NextResponse.json(
      {
        message: "An error occurred while sending the email.",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
