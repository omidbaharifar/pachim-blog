import MainBlog from "./sections/mainBlog";
import MoreBlogs from "./sections/moreBlogs";

const HomeContent = () => {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-5">
      <MainBlog />
      <MoreBlogs />
    </main>
  );
};

export default HomeContent;
