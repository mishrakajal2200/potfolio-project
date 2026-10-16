
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactNotification = async (contact) => {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_RECEIVER,
    replyTo: contact.email,
    subject: `New portfolio inquiry from ${contact.name}`,
    text: `
You received a new portfolio inquiry.

Name: ${contact.name}
Email: ${contact.email}
Project type: ${contact.projectType || "Not specified"}
Budget: ${contact.budget || "Not specified"}

Message:
${contact.message}
    `,
  });
};