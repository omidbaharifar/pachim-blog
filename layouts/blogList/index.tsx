import { FC } from "react";
import BlogCard from "@/components/cards/blogCard";
import { moreBlogsData } from "./data";

interface props {
  blogList?: Array<TBlogItem>;
}

const BlogList: FC<props> = ({ blogList }) => {
  return (
    <ul className="grid grid-cols-1 580:grid-cols-2 md:grid-cols-3 gap-5">
      {blogList?.map((item, key) => {
        if (key !== 0) {
          return <BlogCard blog={item} key={key} />;
        }
      })}
    </ul>
  );
};

export default BlogList;
