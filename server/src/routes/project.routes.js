
import express from "express";
import {
  listProjects,
  getProject,
  addProject,
  editProject,
  removeProject,
} from "../controllers/project.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

// Public routes
router.get("/", listProjects);
router.get("/:slug", getProject);

// Write routes — protect these with admin authentication
// before deploying publicly.
router.post("/",authMiddleware, addProject);
router.patch("/:id",authMiddleware, editProject);
router.delete("/:id",authMiddleware, removeProject);

export default router;
