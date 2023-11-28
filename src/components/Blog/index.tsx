import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Explore My Latest Blog"
          paragraph="Dive into a world of captivating insights and diverse topics as my latest blog posts unfold, each offering a unique perspective and valuable information."
          divClass="wow fadeInUp w-full max-w-[570px] mb-[30px] md:mb-[60px] mt-[0px] mx-auto text-center"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData
            .slice(-3)
            .reverse()
            .map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
