import { FC } from "react";
import ArticleDetail from "@/components/articleDetail";

interface props {
  blogData: TBlogItem;
}

const AboutBlog: FC<props> = ({ blogData }) => {
  return (
    <div className="mt-5 sm:mt-10 lg:mt-20">
      <h1 className="font-bold leading-relaxed text-xl sm:text-2xl lg:text-4xl text-center mb-5 sm:mb-8 lg:mb-10">
        {blogData?.title}
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-center mb-5 sm:mb-8 lg:mb-10">
        {blogData.short}
      </p>
      <div className="flex justify-center items-center">
        <ArticleDetail
          authorName={blogData.author.name}
          authorImage={blogData.author.image}
          publishDate={blogData.date}
        />
      </div>
    </div>
  );
};

export default AboutBlog;
