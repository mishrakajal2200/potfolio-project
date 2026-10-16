
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import { env } from "../config/env.js";

export const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({
    email: email.toLowerCase().trim(),
  }).select("+password");

  if (!admin) {
    return null;
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    admin.password
  );

  if (!isPasswordCorrect) {
    return null;
  }

  if (!env.jwtSecret) {
    throw new Error("JWT_SECRET is missing from .env");
  }

  const token = jwt.sign(
    {
      sub: admin._id.toString(),
    },
    env.jwtSecret,
    {
      expiresIn: env.jwtExpiresIn,
    }
  );

  return {
    token,
    admin: {
      id: admin._id,
      name: admin.name,
      email: admin.email,
    },
  };
};
