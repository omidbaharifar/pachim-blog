import { FC } from "react";
import AboutBlog from "./aboutBlog";
import BlogContent from "./blogContent";

interface props {
  blogData: TBlogItem;
}

const SingleBlogContent: FC<props> = ({ blogData }) => {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-5 lg:px-10 my-10 lg:my-20">
      <AboutBlog blogData={blogData} />
      <BlogContent blogData={blogData} />
    </main>
  );
};

export default SingleBlogContent;
