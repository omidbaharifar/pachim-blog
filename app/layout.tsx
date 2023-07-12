import { FC, ReactNode } from "react";
import "./globals.css";

interface props {
  children: ReactNode;
}

const RootLayout: FC<props> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
