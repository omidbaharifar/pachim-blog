import { FC } from "react";
import Footer from "@/layouts/footer";
import SingleBlogContent from "@/domain/singleBlog";
import Header from "@/layouts/header";
import blogList from "@/data/blogList";
import { Metadata } from "next";
import { rootMetaDataConstants } from "../metaDataConstants";
import { notFound } from "next/navigation";

interface props {
  params: { slug: string };
}

const SingleBlogPage: FC<props> = ({ params }) => {
  const { slug } = params;
  const blogData = blogList.find((item) => item.slug === slug);

  !blogData && notFound();

  return (
    <div className="text-black text-base">
      <Header />
      {blogData && <SingleBlogContent blogData={blogData} />}
      <Footer />
    </div>
  );
};

export default SingleBlogPage;

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const { slug } = params;
  const blogData = blogList.find((item) => item.slug === slug);

  return {
    title: blogData?.title,
    description: blogData?.short,
    openGraph: {
      title: blogData?.title,
      description: blogData?.short,
      type: "article",
      authors: blogData?.author.name,
      siteName: rootMetaDataConstants.websiteName,
      locale: "fa_IR",
      url: process.env.NEXT_PUBLIC_CLIENT_URL + "/" + slug,
      images: [
        {
          url: blogData?.image || "/images/banners/mainBanner.png",
          alt: blogData?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogData?.title,
      description: blogData?.short,
      creator: blogData?.author.name,
      site: "@webfriends",
      images: [
        {
          url: blogData?.image || "/images/banners/mainBanner.png",
          alt: blogData?.title,
        },
      ],
    },
    alternates: {
      canonical: "/" + blogData?.slug,
    },
  };
};
