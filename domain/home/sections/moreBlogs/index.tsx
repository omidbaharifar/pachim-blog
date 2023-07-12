import { FC } from "react";
import BlogCard from "@/components/cards/blogCard";
import { moreBlogsData } from "./data";

interface props {
  blogList?: Array<TBlogItem>;
}

const MoreBlogs: FC<props> = ({ blogList }) => {
  return (
    <>
      <h2 className="font-bold leading-relaxed text-4xl my-10">
        {moreBlogsData.title}
      </h2>
      <ul className="grid grid-cols-3 gap-5 mb-20">
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
