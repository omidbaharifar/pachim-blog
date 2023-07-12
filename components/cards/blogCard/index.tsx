import { FC } from "react";
import Link from "next/link";
import MainImage from "@/components/images/mainImage";
import ArticleDetail from "@/components/articleDetail";

interface props {
  blog: TBlogItem;
  large?: boolean;
}

const BlogCard: FC<props> = ({ blog, large }) => {
  return (
    <li className="h-full">
      <Link
        href={"/" + blog.slug}
        className={`w-full flex flex-col h-full ${
          large
            ? ""
            : "border-2 border-black/10 border-solid rounded-xl overflow-hidden"
        }`}
      >
        <MainImage
          src={blog.image}
          alt={blog.title}
          width={1240}
          height={700}
          className={large ? "rounded-xl" : ""}
          hoverable
        />
        <h2
          className={`font-bold leading-relaxed ${
            large
              ? "text-xl sm:text-2xl lg:text-4xl my-5 sm:my-8 lg:my-10"
              : "text-base lg:text-xl m-4 lg:m-5"
          }`}
        >
          {blog.title}
        </h2>
        <p
          className={`whitespace-nowrap text-ellipsis overflow-hidden mb-5 ${
            large
              ? "text-base sm:text-lg lg:text-xl"
              : "text-sm lg:text-base mx-4 lg:mx-5"
          }`}
        >
          {blog.short}
        </p>
        <ArticleDetail
          authorName={blog.author.name}
          authorImage={blog.author.image}
          publishDate={blog.date}
          className={`mt-auto ${
            large
              ? "mb-5 sm:mb-8 lg:mb-10 text-sm lg:text-base"
              : "mb-4 mx-4 lg:mb-5 lg:mx-5 text-xs lg:text-sm"
          }`}
        />
      </Link>
    </li>
  );
};

export default BlogCard;
