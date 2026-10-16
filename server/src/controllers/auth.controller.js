
import { loginAdmin } from "../services/auth.service.js";
import { validateLogin } from "../validators/auth.validator.js";

export const adminLogin = async (req, res, next) => {
  try {
    const validation = validateLogin(req.body);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Please correct the validation errors",
        errors: validation.errors,
      });
    }

    const { email, password } = validation.values;

    const result = await loginAdmin(email, password);

    if (!result) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
