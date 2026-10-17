
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

    // Save the contact before responding.
    const contact = await createContact(validation.values);

    // Respond after MongoDB successfully saves the contact.
    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
    });

    // Attempt the email notification without delaying the response.
    sendContactNotification(validation.values)
      .then((info) => {
        console.log(
          "Contact notification accepted by mail server:",
          info.messageId
        );
      })
      .catch((emailError) => {
        console.error(
          "Contact notification email failed:",
          emailError.message
        );
      });
  } catch (error) {
    next(error);
  }
};
