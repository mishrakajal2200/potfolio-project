
const validateLogin = (data) => {
  const errors = {};
  const values = {};

  // Check whether the request body is a valid object
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return {
      isValid: false,
      errors: {
        body: "Request body must be a JSON object",
      },
      values,
    };
  }

  // Allow only email and password
  const allowedFields = ["email", "password"];

  for (const field of Object.keys(data)) {
    if (!allowedFields.includes(field)) {
      errors[field] = "This field is not allowed";
    }
  }

  // Validate email
  if (typeof data.email !== "string" || !data.email.trim()) {
    errors.email = "Email is required";
  } else {
    const email = data.email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      errors.email = "Please provide a valid email address";
    } else {
      values.email = email;
    }
  }

  // Validate password
  if (typeof data.password !== "string" || !data.password) {
    errors.password = "Password is required";
  } else if (data.password.length > 128) {
    errors.password = "Password cannot exceed 128 characters";
  } else {
    values.password = data.password;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    values,
  };
};

export { validateLogin };
