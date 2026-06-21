import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
    } = await req.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: ["annesjebasingh@gmail.com"],

      subject: `Portfolio Contact - ${subject}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}