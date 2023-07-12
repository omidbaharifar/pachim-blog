import { FC, ReactNode } from "react";
import { vazirMatn } from "@/components/assets/fonts";
import "./globals.css";

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
