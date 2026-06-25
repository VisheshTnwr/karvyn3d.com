"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;    // Made optional with ?
  institution: string; 
  productLine: string; // Changed from 'service' to 'productLine'
  volume: string;
  message: string;
};

export async function submitToGoogleSheets(data: ContactFormData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Karvyn3D <onboarding@resend.dev>",
      to: "info@karvyn3d.com",
      subject: `Technical Inquiry: ${data.productLine} from ${data.institution}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #ea580c;">Institutional Technical Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Institution:</strong> ${data.institution}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Product Line:</strong> ${data.productLine}</p>
          <p><strong>Target Volume:</strong> ${data.volume}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
            <strong>Technical Specifications:</strong><br/>
            ${data.message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
      replyTo: data.email,
    });

    if (error) return { success: false, error: "Email could not be sent." };
    return { success: true };
  } catch (error) {
    return { success: false, error: "An unexpected error occurred." };
  }
}