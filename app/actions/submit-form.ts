'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  name: string;
  email: string;
  service: string;
  volume: string;
  message: string;
};

export async function submitToGoogleSheets(data: ContactFormData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Karvyn3D <onboarding@resend.dev>',
      to: 'info@karvyn3d.com',
      subject: `New Project: ${data.service} from ${data.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Service Requested:</strong> ${data.service}</p>
        <p><strong>Estimated Volume:</strong> ${data.volume}</p>
        <p><strong>Details:</strong> ${data.message}</p>
      `,
      replyTo: data.email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: 'Email could not be sent.' };
    }

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Submission Error:', error.message);
    } else {
      console.error('Submission Error:', error);
    }
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
