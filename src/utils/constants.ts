import type { LinkProps } from "@/models";

export const APP_NAME = "RecursiveZero";

export const CONTACT_EMAIL = "hello@recursivezero.com";

export const HR_EMAIL = "hr@recursivezero.com";

export const NavbarLinks: LinkProps[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    isActive: true
  },
  {
    name: "About",
    title: "About",
    path: "/about",
    isActive: true
  },
  {
    name: "Blogs",
    title: "Blogs",
    path: "/blogs",
    isActive: true
  },
  {
    name: "Career",
    title: "Career",
    path: "/career",
    isActive: true
  },
  {
    name: "Work",
    title: "Work",
    path: "/work",
    isActive: true
  }
];

export const FooterLinks: LinkProps[] = [
  {
    title: "privacy Policy",
    path: "/privacy",
    isActive: true
  },
  {
    title: "Terms and Condition",
    path: "/terms",
    isActive: true
  }
];
