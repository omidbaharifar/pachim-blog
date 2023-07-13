import { FC } from "react";
import { moreBlogsData } from "./data";
import BlogList from "@/layouts/blogList";

interface props {
  blogList?: Array<TBlogItem>;
}

const MoreBlogs: FC<props> = ({ blogList }) => {
  return (
    <>
      <h2 className="font-bold leading-relaxed text-lg sm:text-xl lg:text-2xl mb-5 sm:mb-8 lg:mb-10 mt-10 sm:mt-16 lg:mt-20 text-center">
        {moreBlogsData.title}
      </h2>
      <div className="mb-10 lg:mb-20">
        <BlogList blogList={blogList} />
      </div>
    </>
  );
};

export default MoreBlogs;
