import localFont from "next/font/local";

const vazirMatn = localFont({
  src: [
    {
      path: "./fontFiles/Vazirmatn-RD-FD-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fontFiles/Vazirmatn-RD-FD-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fontFiles/Vazirmatn-RD-FD-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});

export { vazirMatn };
