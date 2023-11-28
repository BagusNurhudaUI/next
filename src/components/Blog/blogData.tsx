import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Integrating Unit Test using External Dependencies Database",
    paragraph:
      "This blog will discuss the implementation of external dependencies when creating unit tests.",
    image: "/images/blog/unit-test.jpg",
    author: {
      name: "Bagus Nurhuda",
      image: "/images/logo/header-prof.png",
      designation: "Software Engineer",
    },
    tags: ["Unit Test"],
    publishDate: "Dec 2023",
    readingTime: "10 minutes read",
    file: "unit-test",
  },
  {
    id: 2,
    title: "wh",
    paragraph:
      "This blog will discuss the implementation of external dependencies when creating unit tests.",
    image: "/images/blog/unit-test.jpg",
    author: {
      name: "Bagus Nurhuda",
      image: "/images/logo/header-prof.png",
      designation: "Software Engineer",
    },
    tags: ["Unit Test"],
    publishDate: "Dec 2023",
    readingTime: "10 minutes read",
    file: "unit-test",
  },
];
export default blogData;
