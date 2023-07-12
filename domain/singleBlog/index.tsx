import { FC } from "react";
import AboutBlog from "./aboutBlog";
import BlogContent from "./blogContent";
import MoreBlogs from "./moreBlogs";
import blogList from "@/data/blogList";

interface props {
  blogData: TBlogItem;
}

const SingleBlogContent: FC<props> = ({ blogData }) => {
  const moreBlogsList = blogList.filter((item) => item.slug !== blogData.slug).splice(0,3);

  return (
    <main className="max-w-screen-xl w-full mx-auto px-5 lg:px-10 mb-10 lg:mb-20 mt-5 lg:mt-10">
      <AboutBlog blogData={blogData} />
      <BlogContent blogData={blogData} />
      <MoreBlogs blogList={moreBlogsList} />
    </main>
  );
};

export default SingleBlogContent;
