import {
  FiShoppingBag,
  FiLayout,
  FiServer,
  FiCode,
  FiTool,
  FiDatabase,
} from "react-icons/fi";

export const services = [
  {
    id: 1,

    title: "E-commerce Development",

    shortDescription:
      "Build fast, user-friendly e-commerce websites with modern shopping experiences and secure backend systems.",

    description:
      "I develop custom e-commerce applications with product management, shopping carts, wishlists, checkout, payments, orders, authentication, and admin dashboards.",

    icon: FiShoppingBag,

    features: [
      "Product catalog",
      "Product details",
      "Shopping cart",
      "Wishlist",
      "Checkout",
      "Payment integration",
      "Order management",
      "Admin dashboard",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Tailwind CSS",
    ],
  },

  {
    id: 2,

    title: "SaaS & Admin Dashboards",

    shortDescription:
      "Create scalable dashboards that help businesses manage users, operations, projects, and data efficiently.",

    description:
      "I build responsive SaaS dashboards and business management systems with authentication, role-based permissions, data visualization, CRUD workflows, and scalable frontend architecture.",

    icon: FiLayout,

    features: [
      "Admin dashboards",
      "User management",
      "Role-based access",
      "CRUD workflows",
      "Analytics",
      "Data tables",
      "Activity tracking",
      "Multi-tenant systems",
    ],

    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
  },

  {
    id: 3,

    title: "API Development",

    shortDescription:
      "Design and develop reliable REST APIs that connect your frontend with secure and scalable backend services.",

    description:
      "I develop backend APIs for authentication, users, products, orders, dashboards, and other business workflows with proper validation, authorization, error handling, and database integration.",

    icon: FiServer,

    features: [
      "REST API development",
      "Authentication",
      "Authorization",
      "CRUD APIs",
      "Database integration",
      "Validation",
      "Error handling",
      "API documentation",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Swagger",
    ],
  },

  {
    id: 4,

    title: "React Development",

    shortDescription:
      "Build responsive and maintainable React applications with clean component architecture and smooth user experiences.",

    description:
      "I develop modern React interfaces from designs or existing requirements, focusing on reusable components, responsive layouts, API integration, state management, and maintainable code.",

    icon: FiCode,

    features: [
      "React applications",
      "Responsive UI",
      "Reusable components",
      "API integration",
      "State management",
      "Authentication flows",
      "Form handling",
      "Performance improvements",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "REST APIs",
    ],
  },

  {
    id: 5,

    title: "Bug Fixing & Improvements",

    shortDescription:
      "Fix existing React, Node.js, and API issues and improve the reliability, usability, and performance of your application.",

    description:
      "I help troubleshoot existing web applications, identify frontend and backend issues, fix API and database problems, and improve existing features without unnecessarily rewriting the entire application.",

    icon: FiTool,

    features: [
      "React bug fixing",
      "API debugging",
      "Backend debugging",
      "Database issues",
      "UI fixes",
      "Responsive fixes",
      "Performance improvements",
      "Feature improvements",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
    ],
  },

  {
    id: 6,

    title: "Deployment & Backend Setup",

    shortDescription:
      "Deploy web applications and configure the backend environment for reliable production use.",

    description:
      "I can help configure and deploy React and Node.js applications, including server setup, environment variables, process management, reverse proxy configuration, and production troubleshooting.",

    icon: FiDatabase,

    features: [
      "React deployment",
      "Node.js deployment",
      "Environment configuration",
      "Nginx setup",
      "PM2 configuration",
      "API deployment",
      "Production debugging",
      "SSL configuration",
    ],

    technologies: [
      "Node.js",
      "Nginx",
      "PM2",
      "Ubuntu",
      "Git",
      "REST APIs",
    ],
  },
];