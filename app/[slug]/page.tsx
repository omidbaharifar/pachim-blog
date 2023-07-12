import { FC } from "react";
import Footer from "@/layouts/footer";
import SingleBlogContent from "@/domain/singleBlog";
import Header from "@/layouts/header";

interface props {
  params: { slug: string };
}

const SingleBlogPage: FC<props> = ({ params }) => {
  const { slug } = params;

  return (
    <div className="text-black text-base">
      <Header />
      <SingleBlogContent />
      <Footer />
    </div>
  );
};

export default SingleBlogPage;
