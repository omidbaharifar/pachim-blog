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
  },
  twitter: {
    card: "summary_large_image",
    title: rootMetaDataConstants.title,
    description: rootMetaDataConstants.description,
    creator: rootMetaDataConstants.websiteName,
    site: "@webfriends",
  },
};
