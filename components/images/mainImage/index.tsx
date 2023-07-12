import { FC } from "react";
import Image from "next/image";

interface props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const MainImage: FC<props> = ({ src, alt, width, height, className = "" }) => {
  return (
    <div className={`group overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="aspect-video object-cover object-center w-full group-hover:scale-105 transition-all"
      />
    </div>
  );
};

export default MainImage;
