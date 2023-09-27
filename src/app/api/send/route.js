import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  console.log(body);
  try {
    const data = await resend.emails.send({
      from: email,
      to: ['fedoseeva.ektr@gmail.com'],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for connecting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
