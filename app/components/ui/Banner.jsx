import { cva } from "class-variance-authority";
import Image from "next/image";

const bannerClass = cva(
  "relative z-20 flex h-full max-w-5xl mx-auto xl:px-0 px-4",
  {
    variants: {
      type: {
        regular: "justify-center items-center flex-col",
        artisan: "justify-between items-center flex-row ",
      },
    },
    defaultVariants: {
      type: "regular",
    },
  }
);

const Banner = ({ title, image, type, children }) => {
  return (
    <div className="relative bg-gray-400 h-96">
      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="width: 100%"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/40"></div>
      {children}
    </div>
  );
};

export default Banner;
