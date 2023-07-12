import { FC } from "react";
import BlogCard from "@/components/cards/blogCard";
import { moreBlogsData } from "./data";
import BlogList from "@/layouts/blogList";

interface props {
  blogList?: Array<TBlogItem>;
}

const MoreBlogs: FC<props> = ({ blogList }) => {
  return (
    <>
      <h2 className="font-bold leading-relaxed text-xl sm:text-2xl lg:text-4xl my-5 sm:my-8 lg:my-10 text-center 580:text-right">
        {moreBlogsData.title}
      </h2>
      <div className="mb-10 lg:mb-20">
        <BlogList blogList={blogList} />
      </div>
    </>
  );
};

export default MoreBlogs;
