import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 3,
    title: "Experience",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "All Experience",
        path: "/experience",
        newTab: false,
      },
      {
        id: 32,
        title: "Dagangan",
        path: "/experience/dagangan",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 40,
        title: "All Project",
        path: "/project",
        newTab: false,
      },
      {
        id: 41,
        title: "GME Monitoring",
        path: "/project/gme",
        newTab: false,
      },
      {
        id: 42,
        title: "Audit Kurir",
        path: "/project/akur",
        newTab: false,
      },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
