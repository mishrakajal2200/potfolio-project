
import mongoose from "mongoose";

import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

import {
  validateProject,
  validateProjectUpdate,
} from "../validators/project.validator.js";

import {
  getAllProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from "../services/project.service.js";

// GET /api/projects
export const listProjects = asyncHandler(async (req, res) => {
  const page = Number.parseInt(req.query.page, 10) || 1;
  const limit = Number.parseInt(req.query.limit, 10) || 6;

  const filters = {
    featured: req.query.featured === "true",
    category: req.query.category,
    search:
      typeof req.query.search === "string"
        ? req.query.search.trim()
        : "",
    page,
    limit,
  };

  const result = await getAllProjects(filters);

  res.status(200).json({
    success: true,
    count: result.projects.length,
    pagination: {
      total: result.total,
      page: result.page,
      limit: result.limit,
      totalPages: result.totalPages,
    },
    data: result.projects,
  });
});

// GET /api/projects/:slug
export const getProject = asyncHandler(async (req, res) => {
  const project = await getProjectBySlug(req.params.slug);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  res.status(200).json({
    success: true,
    data: project,
  });
});

// POST /api/projects
export const addProject = asyncHandler(async (req, res) => {
  const validation = validateProject(req.body ?? {});

  if (!validation.isValid) {
    throw new ApiError(
      400,
      "Please correct the validation errors",
      validation.errors
    );
  }

  const project = await createProject(validation.values);

  res.status(201).json({
    success: true,
    message: "Project created successfully",
    data: project,
  });
});

// PATCH /api/projects/:id
export const editProject = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    throw new ApiError(400, "Invalid project ID");
  }

  const validation = validateProjectUpdate(req.body);

  if (!validation.isValid) {
    throw new ApiError(
      400,
      "Please correct the validation errors",
      validation.errors
    );
  }

  const project = await updateProject(
    req.params.id,
    validation.values
  );

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  res.status(200).json({
    success: true,
    message: "Project updated successfully",
    data: project,
  });
});

// DELETE /api/projects/:id
export const removeProject = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    throw new ApiError(400, "Invalid project ID");
  }

  const project = await deleteProject(req.params.id);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  res.status(200).json({
    success: true,
    message: "Project deleted successfully",
  });
});
