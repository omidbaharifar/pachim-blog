import { FC } from "react";
import AboutBlog from "./aboutBlog";

interface props {
  blogData: TBlogItem;
}

const SingleBlogContent: FC<props> = ({ blogData }) => {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-5 lg:px-10">
      <AboutBlog blogData={blogData} />
    </main>
  );
};

export default SingleBlogContent;
