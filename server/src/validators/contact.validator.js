
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateContact = (data) => {
  const errors = {};

  const name =
    typeof data.name === "string" ? data.name.trim() : "";

  const email =
    typeof data.email === "string" ? data.email.trim().toLowerCase() : "";

  const subject =
    typeof data.subject === "string" ? data.subject.trim() : "";

  const message =
    typeof data.message === "string" ? data.message.trim() : "";

  if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters";
  } else if (name.length > 80) {
    errors.name = "Name cannot exceed 80 characters";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Please provide a valid email address";
  } else if (email.length > 254) {
    errors.email = "Email cannot exceed 254 characters";
  }

  if (subject.length > 150) {
    errors.subject = "Subject cannot exceed 150 characters";
  }

  if (message.length < 10) {
    errors.message = "Message must contain at least 10 characters";
  } else if (message.length > 3000) {
    errors.message = "Message cannot exceed 3000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    values: { name, email, subject, message },
  };
};
