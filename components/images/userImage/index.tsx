import { FC } from "react";
import Image from "next/image";

interface props {
  src: string;
  alt: string;
  className?: string;
}

const UserImage: FC<props> = ({ src, alt, className = "" }) => {
  return (
    <div
      className={`rounded-full overflow-hidden w-8 h-8 lg:w-10 lg:h-10 flex-none ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="aspect-square object-cover object-center"
      />
    </div>
  );
};

export default UserImage;
