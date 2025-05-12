import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Buffer } from 'buffer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Przygotowanie załącznika z konwersją na Buffer
    const attachments = [];
    if (file) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: fileBuffer,
        contentType: file.type,
      });
    }

    const mailOptions: nodemailer.SendMailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nowa wiadomość od ${name}`,
      text: message,
      html: `
        <h3>Nowa wiadomość z formularza kontaktowego</h3>
        <p><strong>Adres email wysyłającego:</strong> ${email}</p>
        <p><strong>Od:</strong> ${name}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
        ${file ? '<p><strong>Załącznik:</strong> W załączniku</p>' : ''}
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email został wysłany pomyślnie" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd wysyłania maila:", error);
    return NextResponse.json(
      { message: "Wystąpił błąd podczas wysyłania maila" },
      { status: 500 }
    );
  }
}