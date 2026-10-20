
import { validateContact } from "../validators/contact.validator.js";
import { createContact } from "../services/contact.service.js";
import { sendContactNotification } from "../services/email.service.js";

export const submitContact = async (req, res, next) => {
  try {
    const validation = validateContact(req.body);

    // Validate contact form data
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Please correct the validation errors",
        errors: validation.errors,
      });
    }

    // Save the contact to MongoDB
    await createContact(validation.values);

    // Respond to the frontend after saving
    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
    });

    // Send the email notification asynchronously
    sendContactNotification(validation.values)
      .then((data) => {
        console.log("Resend accepted email:", data?.id);
      })
      .catch((emailError) => {
        console.error(
          "Contact notification failed:",
          emailError.message
        );
      });
  } catch (error) {
    next(error);
  }
};
