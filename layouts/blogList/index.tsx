import { FC } from "react";
import BlogCard from "@/components/cards/blogCard";

interface props {
  blogList?: Array<TBlogItem>;
  removeFirst?: boolean;
}

const BlogList: FC<props> = ({ blogList, removeFirst }) => {
  return (
    <ul className="grid grid-cols-1 580:grid-cols-2 md:grid-cols-3 gap-5">
      {blogList?.map((item, key) => {
        if (removeFirst) {
          if (key !== 0) {
            return <BlogCard blog={item} key={key} />;
          }
          return null;
        }
        return <BlogCard blog={item} key={key} />;
      })}
    </ul>
  );
};

export default BlogList;
