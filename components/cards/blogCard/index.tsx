import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className={`group overflow-hidden ${large ? "rounded-xl" : ""}`}>
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="aspect-video object-cover object-center w-full group-hover:scale-105 transition-all"
          />
        </div>
        <h2
          className={`font-bold leading-relaxed ${
            large ? "text-4xl my-10" : "text-xl m-5"
          }`}
        >
          {blog.title}
        </h2>
        <p
          className={`whitespace-nowrap text-ellipsis overflow-hidden mb-5 ${
            large ? "text-xl" : "text-base mx-5"
          }`}
        >
          {blog.short}
        </p>
        <div
          className={`flex justify-start items-center mt-auto ${
            large ? "mb-10 text-base" : "mb-5 mx-5 text-sm"
          }`}
        >
          <div className="flex justify-center items-center gap-3 pl-3">
            <div className="rounded-full overflow-hidden w-10 h-10 flex-none">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                width={100}
                height={100}
                className="aspect-square object-cover object-center"
              />
            </div>
            <h3>{blog.author.name}</h3>
          </div>
          <p className="opacity-50 pr-3 border-r-2 border-solid border-black/50">
            {blog.date}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default BlogCard;
