import { FC } from "react";
import BlogCard from "@/components/cards/blogCard";

interface props {
  blogList?: Array<TBlogItem>;
}

const MainBlog: FC<props> = ({ blogList }) => {
  return (
    <ul>
      {blogList?.map((item, key) => {
        if (key === 0) {
          return <BlogCard blog={item} key={key} large />;
        }
      })}
    </ul>
  );
};

export default MainBlog;
