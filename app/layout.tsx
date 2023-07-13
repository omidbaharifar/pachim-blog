import { FC, ReactNode } from "react";
import { vazirMatn } from "@/components/assets/fonts";
import "./globals.css";
import { Metadata } from "next";
import { rootMetaDataConstants } from "./metaDataConstants";

interface props {
  children: ReactNode;
}

const RootLayout: FC<props> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl" className={vazirMatn.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL || ""),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: rootMetaDataConstants.title,
  description: rootMetaDataConstants.description,
  icons: {
    icon: [
      { url: "/icons/icon16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/icon32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/icons/icon16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/icon32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icons/icon32.png",
  },
  themeColor: "#fff",
  appleWebApp: {
    title: rootMetaDataConstants.websiteEnglishName,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: rootMetaDataConstants.title,
    description: rootMetaDataConstants.description,
    type: "website",
    siteName: rootMetaDataConstants.websiteName,
    locale: "fa_IR",
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    images: [
      {
        url: "/images/banners/mainBanner.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "لوگوی وب فرندز",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: rootMetaDataConstants.title,
    description: rootMetaDataConstants.description,
    creator: rootMetaDataConstants.websiteName,
    site: "@webfriends",
    images: [
      {
        url: "/images/banners/mainBanner.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "لوگوی وب فرندز",
      },
    ],
  },
};
