import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contact.routes.js";
import errorHandler from "./middleware/errorHandler.middleware.js";
import projectRoutes from "./routes/project.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();

// Security headers
app.use(helmet());

const allowedOrigins = [
  "http://localhost:5173",
  "https://kajal-mishra-website.netlify.app",
];

// Allow requests from the React frontend
app.use(cors({
    origin:"allowedOrigins",
}));

// Parse incoming JSON data
app.use(express.json());



// Limit repeated requests
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
  })
);


// Health-check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
  });
});

app.use("/api/contact", contactRoutes);
app.use(errorHandler);
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

export default app;

