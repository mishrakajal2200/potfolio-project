
import { siteConfig } from "../utils/constants";

export const navigationLinks = [
  {
    label: "Home",
    path: "/",
    type: "route",
  },
  {
    label: "Services",
    path: "/services",
    type: "section",
  },
  {
    label: "Projects",
    path: "/projects",
    type: "route",
  },
  {
    label: "About",
    path: "/about",
    type: "section",
  },
  {
    label: "Contact",
    path: "/contact",
    type: "route",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    platform: "github",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    platform: "linkedin",
  },
];

export const footerServiceLinks = [
  {
    label: "E-commerce Development",
    href: "/#services",
  },
  {
    label: "SaaS & Admin Dashboards",
    href: "/#services",
  },
  {
    label: "React Development",
    href: "/#services",
  },
  {
    label: "API Development",
    href: "/#services",
  },
];

