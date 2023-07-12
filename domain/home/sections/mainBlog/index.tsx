import blogList from "@/data/blogList";
import BlogCard from "@/components/cards/blogCard";

const MainBlog = () => {
  return (
    <ul>
      {blogList.map((item, key) => {
        if (key === 0) {
          return <BlogCard blog={item} key={key} large />;
        }
      })}
    </ul>
  );
};

export default MainBlog;