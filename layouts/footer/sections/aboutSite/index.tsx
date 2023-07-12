import Link from "next/link";

const AboutSite = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-sm md:text-base text-gray-500">
      <p className="text-center">
        ساخته شده توسط{" "}
        <Link
          className="link"
          href="https://github.com/omidbaharifar"
          target="_blank"
        >
          امید بهاری فر
        </Link>{" "}
        برای{" "}
        <Link className="link" href="https://pachim.sh" target="_blank">
          پچیم
        </Link>
      </p>
      <Link
        className="link"
        href="https://github.com/omidbaharifar/pachim-blog"
        target="_blank"
      >
        سورس کد در گیتهاب
      </Link>
    </div>
  );
};

export default AboutSite;
