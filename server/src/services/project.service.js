
import Project from "../models/Project.models.js";


export const getAllProjects = async (filters = {}) => {
  const query = {
    published: true,
  };

  if (filters.featured === true) {
    query.featured = true;
  }

  if (filters.category) {
    query.category = filters.category;
  }

  if (filters.search) {
    const search = filters.search.trim();

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        {
          shortDescription: {
            $regex: search,
            $options: "i",
          },
        },
        {
          technologies: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }
  }

  const page = Math.max(
    1,
    Number.parseInt(filters.page, 10) || 1
  );

  const limit = Math.min(
    50,
    Math.max(1, Number.parseInt(filters.limit, 10) || 6)
  );

  const skip = (page - 1) * limit;

  const [projects, total] = await Promise.all([
    Project.find(query)
      .sort({ displayOrder: 1, createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Project.countDocuments(query),
  ]);

  return {
    projects,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};


export const getProjectBySlug = async (slug) => {
  return Project.findOne({
    slug,
    published: true,
  });
};

export const createProject = async (projectData) => {
  return Project.create(projectData);
};

export const updateProject = async (projectId, projectData) => {
  return Project.findByIdAndUpdate(projectId, projectData, {
    new: true,
    runValidators: true,
  });
};

export const deleteProject = async (projectId) => {
  return Project.findByIdAndDelete(projectId);
};
