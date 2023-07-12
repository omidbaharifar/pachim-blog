import { FC } from "react";
import BlogCard from "@/components/cards/blogCard";
import { moreBlogsData } from "./data";

interface props {
  blogList?: Array<TBlogItem>;
}

const MoreBlogs: FC<props> = ({ blogList }) => {
  return (
    <>
      <h2 className="font-bold leading-relaxed text-xl sm:text-2xl lg:text-4xl my-5 sm:my-8 lg:my-10 text-center 580:text-right">
        {moreBlogsData.title}
      </h2>
      <ul className="grid grid-cols-1 580:grid-cols-2 md:grid-cols-3 gap-5 mb-10 lg:mb-20">
        {blogList?.map((item, key) => {
          if (key !== 0) {
            return <BlogCard blog={item} key={key} />;
          }
        })}
      </ul>
    </>
  );
};

export default MoreBlogs;
