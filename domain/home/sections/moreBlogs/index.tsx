import blogList from "@/data/blogList";
import BlogCard from "@/components/cards/blogCard";

const MoreBlogs = () => {
  return (
    <>
      <h2 className="font-bold leading-relaxed text-4xl my-10">سایر بلاگ ها</h2>
      <ul className="grid grid-cols-3 gap-5 mb-20">
        {blogList.map((item, key) => {
          if (key !== 0) {
            return <BlogCard blog={item} key={key} />;
          }
        })}
      </ul>
    </>
  );
};

export default MoreBlogs;
