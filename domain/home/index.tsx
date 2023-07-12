import MainBlog from "./sections/mainBlog";
import MoreBlogs from "./sections/moreBlogs";
import blogList from "@/data/blogList";

const HomeContent = () => {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-5">
      <MainBlog blogList={blogList} />
      <MoreBlogs blogList={blogList} />
    </main>
  );
};

export default HomeContent;
