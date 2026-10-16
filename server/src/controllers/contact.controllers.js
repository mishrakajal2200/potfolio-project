
import { validateContact } from "../validators/contact.validator.js";
import { createContact } from "../services/contact.service.js";
import { sendContactNotification } from "../services/email.service.js";

export const submitContact = async (req, res, next) => {
  try {
    const validation = validateContact(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Please correct the validation errors",
        errors: validation.errors,
      });
    }

    await createContact(validation.values);

    try {
  const info = await sendContactNotification(validation.values);

  console.log("Contact notification accepted by mail server:", info.messageId);
} catch (emailError) {
  console.error("Contact notification email failed:", emailError);
}

console.log("Email configuration loaded:", {
  user: Boolean(process.env.EMAIL_USER),
  password: Boolean(process.env.EMAIL_PASS),
  receiver: Boolean(process.env.CONTACT_RECEIVER),
});

    return res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
    });
  } catch (error) {
    next(error);
  }
};
