import { FC } from "react";
import Footer from "@/layouts/footer";
import SingleBlogContent from "@/domain/singleBlog";
import Header from "@/layouts/header";
import blogList from "@/data/blogList";

interface props {
  params: { slug: string };
}

const SingleBlogPage: FC<props> = ({ params }) => {
  const { slug } = params;
  const blogData = blogList.find((item) => item.slug === slug);

  return (
    <div className="text-black text-base">
      <Header />
      <SingleBlogContent blogData={blogData} />
      <Footer />
    </div>
  );
};

export default SingleBlogPage;
