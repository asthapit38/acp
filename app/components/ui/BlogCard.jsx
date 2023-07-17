import { API_URL } from "@/utils/urls";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ title, date, imageUrl, slug }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );

  return (
    <div className="flex flex-col justify-center overflow-hidden transition-all duration-150 ease-in border rounded-md hover:shadow-lg">
      <Link
        href={`our-journal/${slug}`}
        className="relative w-full aspect-square"
      >
        {imageUrl.data && (
          <Image
            src={`${imageUrl.data[0].attributes.formats.medium.url}`}
            style={{
              objectFit: "cover",
            }}
            fill
            alt="categories image"
          />
        )}
      </Link>
      <div className="flex flex-col p-2 px-2 mt-4 text-center card-content gap-y-2">
        <p className="text-sm font-bold tracking-wider text-gray-700">
          {formattedDate}
        </p>
        <Link href={`our-journal/${slug}`}>
          <p className="font-bold truncate">{title}</p>
        </Link>
        <Link href={`our-journal/${slug}`}>
          <Button intent="secondary" size="small">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
