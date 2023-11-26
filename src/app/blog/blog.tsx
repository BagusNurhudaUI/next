"use client";
import { useEffect, useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogDataImport from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  const postsPerPage = 3; // Adjust this based on how many blog posts you want per page
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const totalPage = Math.ceil(blogDataImport.length / postsPerPage);
  const blogDataImportCopy = [...blogDataImport];
  const reversedArray = blogDataImportCopy.reverse();

  const currentPosts = reversedArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="mb-6 md:mb-0">
        <Breadcrumb pageName="Blog " description="Welcome to my blog" />
      </div>

      <section className="pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentPosts?.map((blog: any) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8 md:mb-4"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    onClick={() => paginate(currentPage - 1)}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                {/* Render pagination links dynamically based on the number of pages */}
                {Array.from(
                  { length: Math.ceil(blogDataImport.length / postsPerPage) },
                  (_, i) => (
                    <li key={i} className="mx-1">
                      <a
                        href="#0"
                        onClick={() => paginate(i + 1)}
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md ${
                          i + 1 === currentPage
                            ? "bg-primary text-white"
                            : "bg-body-color bg-opacity-[15%] text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                        } px-4 text-sm`}
                      >
                        {i + 1}
                      </a>
                    </li>
                  )
                )}
                <li className="mx-1">
                  <a
                    href="#0"
                    onClick={() => paginate(currentPage + 1)}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
