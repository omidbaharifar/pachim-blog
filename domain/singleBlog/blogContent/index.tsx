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
      <p
        className="mt-5 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-xl leading-loose sm:leading-loose lg:leading-loose"
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      ></p>
    </div>
  );
};

export default BlogContent;
