import { FC } from "react";
import Image from "next/image";

interface props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  hoverable?: boolean;
}

const MainImage: FC<props> = ({
  src,
  alt,
  width,
  height,
  className = "",
  hoverable,
}) => {
  return (
    <div className={`group overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`aspect-video object-cover object-center w-full transition-all ${
          hoverable ? "group-hover:scale-105" : ""
        }`}
      />
    </div>
  );
};

export default MainImage;
