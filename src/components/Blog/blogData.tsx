import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Bagus Nurhuda",
      image: "/images/logo/header-prof.png",
      designation: "Software Engineer",
    },
    tags: ["creative"],
    publishDate: "2025",
    content: [
      {
        type: "text",
        value:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      },
      {
        type: "image",
        value: "/images/blog/blog-details-02.jpg",
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
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Bagus Nurhuda",
      image: "/images/logo/header-prof.png",
      designation: "Software Engineer",
    },
    tags: ["computer"],
    publishDate: "2025",
    content: [
      {
        type: "text",
        value:
          "Duis aute <strong>irure</strong> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      },
      {
        type: "image",
        value: "/images/blog/blog-details-02.jpg",
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
  {
    id: 3,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
