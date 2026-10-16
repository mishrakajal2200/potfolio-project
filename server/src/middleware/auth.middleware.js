
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import Admin from "../models/Admin.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication token is required",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!env.jwtSecret) {
      throw new Error("JWT_SECRET is missing from .env");
    }

    const decoded = jwt.verify(token, env.jwtSecret);

    if (!decoded.sub) {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token",
      });
    }

    const admin = await Admin.findById(decoded.sub).select("_id name email");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Admin account not found",
      });
    }

    req.admin = admin;
    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired authentication token",
      });
    }

    next(error);
  }
};

export default authMiddleware;
