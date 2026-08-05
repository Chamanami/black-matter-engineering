'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const category = formData.get('category') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    const data = await resend.emails.send({
      from: 'BM Engineering <onboarding@resend.dev>',
      to: ['info@blackmatterengineering.com'],
      subject: `[${category}] Upit od: ${name}`,
      replyTo: email,
      text: `Ime / Organizacija: ${name}\nEmail: ${email}\nKategorija: ${category}\n\nPoruka / Specifikacije:\n${message}`,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error: 'An error occured while sending.' };
  }
}