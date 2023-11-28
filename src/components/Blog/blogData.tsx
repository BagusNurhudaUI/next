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
    file: "file1",
    readingTime: "10 minutes read",
    content: [
      {
        type: "text",
        value: `Hi, I'm Bagus Nurhuda , a junior software engineer specializing in backend development. This is my
          <strong>first blog</strong>
          post in my website, so the first topic is about implementing the external dependencies (especially database integration) in creating unit tests.`,
      },
      {
        type: "image",
        value: "/images/blog/unit-test.jpg",
      },
      {
        type: "text",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. Ligula ullamcorpermalesuadaproin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet.",
      },
      {
        type: "text",
        value:
          "Semper auctor neque vitae tempus quam pellentesque nec.Amet dictum sit amet justodonec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed.",
      },
      {
        type: "header",
        value: "Digital marketplace for Ui/Ux designers.",
      },
      {
        type: "text",
        value:
          "consectetur adipiscing elit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.",
      },
      {
        type: "list",
        value:
          "consectetur adipiscing elit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "title1",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Bagus Nurhuda",
  //     image: "/images/logo/header-prof.png",
  //     designation: "Software Engineer",
  //   },
  //   tags: ["computer"],
  //   readingTime: "10 minutes read",
  //   publishDate: "2025",
  //   file: "2",
  // },
  // {
  //   id: 3,
  //   title: "9 simple ways to improve your design skills",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Bagus Nurhuda",
  //     image: "/images/logo/header-prof.png",
  //     designation: "Software Engineer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  // },
  // {
  //   id: 4,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Bagus Nurhuda",
  //     image: "/images/logo/header-prof.png",
  //     designation: "Software Engineer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default blogData;
