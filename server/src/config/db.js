
import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
  try {
    if (!env.mongodbUri) {
      throw new Error("MONGODB_URI is missing from the .env file");
    }

    await mongoose.connect(env.mongodbUri);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
