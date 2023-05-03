import Image from "next/image";
import Button from "./Button";

export default function EventCard({ image, title }) {
  return (
    <div className="relative w-full mt-16 border h-96">
      <Image
        src={image}
        fill
        sizes="width: 100%"
        style={{
          objectFit: "cover",
        }}
        alt={title}
      />
      <div className="absolute inset-0 z-10 w-full h-full bg-black/50">
        <div className="flex flex-col items-center justify-center h-full px-4 gap-y-4 xl:px-0">
          <p className="tracking-widest text-white uppercase">
            Discover Our Events
          </p>
          <h4 className="text-4xl font-bold tracking-wider text-white font-title">
            {title}
          </h4>
          <Button size="small">Read More</Button>
        </div>
      </div>
    </div>
  );
}
