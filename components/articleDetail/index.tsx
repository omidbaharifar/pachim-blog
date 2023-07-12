import { FC } from "react";
import UserImage from "../images/userImage";

interface props {
  authorName: string;
  authorImage: string;
  publishDate: string;
  className?: string;
}

const ArticleDetail: FC<props> = ({
  authorName,
  authorImage,
  publishDate,
  className = "",
}) => {
  const localePusblishData = new Date(publishDate).toLocaleDateString("fa-IR");

  return (
    <div className={`flex justify-start items-center ${className}`}>
      <div className="flex justify-center items-center gap-3 pl-3">
        <UserImage src={authorImage} alt={authorName} />
        <h3>{authorName}</h3>
      </div>
      <p className="opacity-50 pr-3 border-r-2 border-solid border-black/50">
        {localePusblishData}
      </p>
    </div>
  );
};

export default ArticleDetail;
