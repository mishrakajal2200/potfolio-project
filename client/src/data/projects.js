import erpDashboard from "../assets/images/profile/saas.png";
import eCommerceImage from "../assets/images/profile/gsi.png"
export const projects = [
  {
    id: 1,

    title: "Multi-Tenant ERP SaaS Dashboard",

    slug: "multi-tenant-erp-saas",

    shortDescription:
      "A multi-tenant ERP platform designed to help businesses manage users, departments, projects, tasks, and activity across isolated company workspaces.",

    description:
      "A full-stack SaaS ERP application with secure authentication, role-based access control, tenant isolation, and a modern React dashboard. Each company operates inside its own isolated workspace while sharing the same application infrastructure.",

    category: "SaaS",

    featured: true,

    status: "In Development",

    year: "2026",

    role: "Full Stack Developer",

    duration: "Ongoing",

    image: erpDashboard,
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    features: [
      "Multi-tenant architecture",
      "JWT authentication",
      "Role-based access control",
      "Tenant isolation",
      "Company management",
      "User management",
      "Department management",
      "Project management",
      "Task management",
      "Activity logging",
      "REST APIs",
      "Swagger API documentation",
    ],

    challenges: [
      {
        title: "Tenant Isolation",
        description:
          "Each company's data must remain isolated from other companies using the same application.",
        solution:
          "Implemented tenant-aware API requests using company context and the x-tenant-id header to ensure data is scoped to the authenticated tenant.",
      },
      {
        title: "Access Control",
        description:
          "Different users require different levels of access within a company.",
        solution:
          "Implemented JWT authentication and role-based authorization to control access to protected resources.",
      },
      {
        title: "Scalable Frontend Structure",
        description:
          "The dashboard contains multiple modules and CRUD workflows.",
        solution:
          "Structured the React application using reusable components, Redux Toolkit slices, services, route guards, and feature-based UI patterns.",
      },
    ],

    results: [
      "Implemented secure authentication and authorization.",
      "Created isolated company workspaces.",
      "Built reusable dashboard modules for business operations.",
      "Implemented complete CRUD workflows for core ERP entities.",
      "Added API documentation and activity tracking.",
    ],

    links: {
      live: "",
      github: "https://github.com/mishrakajal2200/ERP-SAAS-ASSIGNMENT",
    },
  },

  {
    id: 2,

    title: "E-commerce Web Application",

    slug: "ecommerce-web-application",

    shortDescription:
      "A full-stack e-commerce platform with product browsing, shopping cart, wishlist, checkout, payments, order management, and an admin dashboard.",

    description:
      "A production-oriented e-commerce application built for an online business. The platform provides customers with a complete shopping experience while giving administrators tools to manage products, orders, and business operations.",

    category: "E-commerce",

    featured: true,

    status: "Completed",

    year: "2026",

    role: "Full Stack Developer",

    duration: "8 Months",

    image: eCommerceImage,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
      "Nginx",
      "PM2",
    ],

    features: [
      "Product listing",
      "Product details",
      "Shopping cart",
      "Wishlist",
      "User authentication",
      "JWT authorization",
      "Online payment with Razorpay",
      "Cash on delivery",
      "Checkout",
      "Order management",
      "Admin dashboard",
      "Product management",
      "Business analytics",
      "Quotation management",
    ],

    challenges: [
      {
        title: "Complete Shopping Flow",
        description:
          "Customers need to move smoothly from product discovery to checkout and order tracking.",
        solution:
          "Built reusable React components and connected them with REST APIs for products, carts, users, and orders.",
      },
      {
        title: "Payment Integration",
        description:
          "The application needed both online payments and cash-on-delivery support.",
        solution:
          "Integrated Razorpay for online payments while maintaining a separate COD order flow.",
      },
      {
        title: "Production Deployment",
        description:
          "The application needed to run reliably on a production server.",
        solution:
          "Deployed the application on an Ubuntu VPS using Nginx and PM2 for reverse proxy configuration and process management.",
      },
    ],

    results: [
      "Built a complete customer shopping experience.",
      "Integrated online and cash-on-delivery payments.",
      "Implemented secure authentication and authorization.",
      "Created an admin dashboard for business operations.",
      "Deployed the application to a production VPS environment.",
    ],

    links: {
      live: "https://gsienterprises.com",
      github: "",
    },
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const projectCategories = [
  "All",
  "SaaS",
  "E-commerce",
];