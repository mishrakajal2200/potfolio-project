
const allowedCategories = [
  "Full Stack",
  "Frontend",
  "Backend",
  "E-commerce",
  "Other",
];

export const validateProject = (data) => {
  const errors = {};

  const title =
    typeof data.title === "string" ? data.title.trim() : "";

  const slug =
    typeof data.slug === "string"
      ? data.slug.trim().toLowerCase()
      : "";

  const description =
    typeof data.description === "string"
      ? data.description.trim()
      : "";

  const shortDescription =
    typeof data.shortDescription === "string"
      ? data.shortDescription.trim()
      : "";

  const technologies = Array.isArray(data.technologies)
    ? data.technologies
        .filter((item) => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const category =
    typeof data.category === "string" ? data.category : "";

  const image = typeof data.image === "string" ? data.image.trim() : "";
  const liveUrl =
    typeof data.liveUrl === "string" ? data.liveUrl.trim() : "";
  const githubUrl =
    typeof data.githubUrl === "string" ? data.githubUrl.trim() : "";

  if (title.length < 3) {
    errors.title = "Title must contain at least 3 characters";
  } else if (title.length > 100) {
    errors.title = "Title cannot exceed 100 characters";
  }

  if (!slug) {
    errors.slug = "Project slug is required";
  } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    errors.slug =
      "Slug can contain lowercase letters, numbers, and single hyphens";
  }

  if (!description) {
    errors.description = "Project description is required";
  } else if (description.length > 2000) {
    errors.description = "Description cannot exceed 2000 characters";
  }

  if (!shortDescription) {
    errors.shortDescription = "Short description is required";
  } else if (shortDescription.length > 250) {
    errors.shortDescription =
      "Short description cannot exceed 250 characters";
  }

  if (technologies.length === 0) {
    errors.technologies = "At least one technology is required";
  }

  if (!allowedCategories.includes(category)) {
    errors.category = "Please provide a valid project category";
  }

  if (typeof data.featured !== "undefined" &&
      typeof data.featured !== "boolean") {
    errors.featured = "Featured must be true or false";
  }

  if (typeof data.published !== "undefined" &&
      typeof data.published !== "boolean") {
    errors.published = "Published must be true or false";
  }

  if (typeof data.displayOrder !== "undefined" &&
      (!Number.isInteger(data.displayOrder) || data.displayOrder < 0)) {
    errors.displayOrder = "Display order must be a non-negative integer";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    values: {
      title,
      slug,
      description,
      shortDescription,
      technologies,
      category,
      image,
      liveUrl,
      githubUrl,
      ...(typeof data.featured === "boolean" && {
        featured: data.featured,
      }),
      ...(typeof data.published === "boolean" && {
        published: data.published,
      }),
      ...(typeof data.displayOrder === "number" && {
        displayOrder: data.displayOrder,
      }),
    },
  };
};


export const validateProjectUpdate = (data) => {
  const errors = {};

  const allowedFields = [
    "title",
    "slug",
    "description",
    "shortDescription",
    "technologies",
    "image",
    "liveUrl",
    "githubUrl",
    "category",
    "featured",
    "published",
    "displayOrder",
  ];

  const values = {};

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return {
      isValid: false,
      errors: { body: "Request body must be a JSON object" },
      values,
    };
  }

  const providedFields = Object.keys(data);

  if (providedFields.length === 0) {
    return {
      isValid: false,
      errors: { body: "Provide at least one field to update" },
      values,
    };
  }

  for (const field of providedFields) {
    if (!allowedFields.includes(field)) {
      errors[field] = "This field cannot be updated";
    }
  }

  if (typeof data.title !== "undefined") {
    if (typeof data.title !== "string" || data.title.trim().length < 3) {
      errors.title = "Title must contain at least 3 characters";
    } else if (data.title.trim().length > 100) {
      errors.title = "Title cannot exceed 100 characters";
    } else {
      values.title = data.title.trim();
    }
  }

  if (typeof data.slug !== "undefined") {
    const slug =
      typeof data.slug === "string"
        ? data.slug.trim().toLowerCase()
        : "";

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      errors.slug = "Provide a valid project slug";
    } else {
      values.slug = slug;
    }
  }

  if (typeof data.description !== "undefined") {
    if (
      typeof data.description !== "string" ||
      !data.description.trim() ||
      data.description.trim().length > 2000
    ) {
      errors.description =
        "Description is required and cannot exceed 2000 characters";
    } else {
      values.description = data.description.trim();
    }
  }

  if (typeof data.shortDescription !== "undefined") {
    if (
      typeof data.shortDescription !== "string" ||
      !data.shortDescription.trim() ||
      data.shortDescription.trim().length > 250
    ) {
      errors.shortDescription =
        "Short description is required and cannot exceed 250 characters";
    } else {
      values.shortDescription = data.shortDescription.trim();
    }
  }

  if (typeof data.technologies !== "undefined") {
    if (
      !Array.isArray(data.technologies) ||
      data.technologies.length === 0 ||
      data.technologies.some(
        (item) => typeof item !== "string" || !item.trim()
      )
    ) {
      errors.technologies =
        "Provide at least one valid technology";
    } else {
      values.technologies = [
        ...new Set(data.technologies.map((item) => item.trim())),
      ];
    }
  }

  if (typeof data.category !== "undefined") {
    const allowedCategories = [
      "Full Stack",
      "Frontend",
      "Backend",
      "E-commerce",
      "Other",
    ];

    if (!allowedCategories.includes(data.category)) {
      errors.category = "Please provide a valid project category";
    } else {
      values.category = data.category;
    }
  }

  for (const field of ["image", "liveUrl", "githubUrl"]) {
    if (typeof data[field] !== "undefined") {
      if (typeof data[field] !== "string") {
        errors[field] = `${field} must be a string`;
      } else {
        values[field] = data[field].trim();
      }
    }
  }

  for (const field of ["featured", "published"]) {
    if (typeof data[field] !== "undefined") {
      if (typeof data[field] !== "boolean") {
        errors[field] = `${field} must be true or false`;
      } else {
        values[field] = data[field];
      }
    }
  }

  if (typeof data.displayOrder !== "undefined") {
    if (
      !Number.isInteger(data.displayOrder) ||
      data.displayOrder < 0
    ) {
      errors.displayOrder =
        "Display order must be a non-negative integer";
    } else {
      values.displayOrder = data.displayOrder;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    values,
  };
};

