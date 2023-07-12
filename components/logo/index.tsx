import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-black text-xl sm:text-2xl lg:text-4xl text-sky-700"
    >
      بلاگ وب فرندز
    </Link>
  );
};

export default Logo;
