
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactNotification = async (contact) => {
  console.log("Starting contact email request...");

  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: [process.env.CONTACT_RECEIVER],
    replyTo: contact.email,
    subject: `New portfolio inquiry from ${contact.name}`,
    text: `New portfolio inquiry

Name: ${contact.name}
Email: ${contact.email}
Project type: ${contact.projectType || "Not specified"}
Budget: ${contact.budget || "Not specified"}

Message:
${contact.message}`,
  });

  if (error) {
    console.error("Resend returned an error:", error);
    throw new Error(`Resend email failed: ${error.message}`);
  }

  console.log("Resend accepted email. ID:", data?.id);

  return data;
};
