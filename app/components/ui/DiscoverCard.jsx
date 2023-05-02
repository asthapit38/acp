import Image from "next/image";
import Button from "./Button";

const DiscoverCard = ({ imageSrc, imageAlt, children }) => {
  return (
    <div className="relative w-full text-white aspect-square">
      <Image
        src={imageSrc}
        fill
        alt={imageAlt}
        sizes="width: 100%"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 w-full h-full bg-black/30">
        <div className="relative z-20 flex flex-col items-center justify-end w-full h-full pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
