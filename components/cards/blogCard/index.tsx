import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface props {
  blog: TBlogItem;
  large?: boolean;
}

const BlogCard: FC<props> = ({ blog, large }) => {
  return (
    <li>
      <Link href={"/" + blog.slug} className="w-full block">
        <div className="group overflow-hidden rounded-xl">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="aspect-video object-cover object-center w-full group-hover:scale-105 transition-all"
          />
        </div>
        <h2 className="text-4xl font-bold my-10 leading-relaxed">
          {blog.title}
        </h2>
        <p className="text-xl whitespace-nowrap text-ellipsis overflow-hidden">
          {blog.short}
        </p>
        <div className="flex justify-start items-center text-base mt-5">
          <div className="flex justify-center items-center gap-3 pl-3">
            <div className="rounded-full overflow-hidden w-10 h-10">
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
          <p className="opacity-50 pr-3 border-r-2 border-solid border-black/50">{blog.date}</p>
        </div>
      </Link>
    </li>
  );
};

export default BlogCard;
