import { FC } from "react";
import MainImage from "@/components/images/mainImage";

interface props {
  blogData: TBlogItem;
}

const BlogContent: FC<props> = ({ blogData }) => {
  return (
    <div className="mt-5 sm:mt-8 lg:mt-10">
      <MainImage
        src={blogData.image}
        alt={blogData.title}
        width={1240}
        height={700}
        className="rounded-xl"
      />
      <article
        className="mt-5 sm:mt-8 lg:mt-10 prose sm:prose-lg lg:prose-xl prose-img:w-full prose-a:text-red-500 max-w-none"
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      ></article>
    </div>
  );
};

export default BlogContent;
