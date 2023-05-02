import Image from "next/image";
import CarpentryImage from "@/public/images/categories/carpentry.jpeg";
import bambooImage from "@/public/images/categories/bamboo.jpeg";
import ceramicsImage from "@/public/images/categories/ceramics.jpeg";
import copperImage from "@/public/images/categories/copper.jpeg";
import cottonTextilesImage from "@/public/images/categories/cotton_textiles.jpeg";
import glassImage from "@/public/images/categories/glass.jpeg";
import Button from "@/app/components/ui/Button";

const SliderContent = () => {
  const sliders = [
    {
      name: "Ceramics",
      image: ceramicsImage,
    },
    {
      name: "Carpentry",
      image: CarpentryImage,
    },
    {
      name: "Bamboo",
      image: bambooImage,
    },
    {
      name: "Glass",
      image: glassImage,
    },
    {
      name: "Copper",
      image: copperImage,
    },
    {
      name: "Cotton Textiles",
      image: cottonTextilesImage,
    },
  ];
  return (
    <>
      {sliders.map((slide, index) => (
        <div className="relative w-full keen-slider__slide" key={index}>
          <div className="w-full aspect-square">
            <Image
              fill
              src={slide.image}
              sizes="width: 100%"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="absolute bottom-0 w-full text-center text-white h-1/2 bg-gradient-to-t from-black to-transparent">
            <div className="relative z-20 flex flex-col items-center justify-end h-full gap-2 pb-8">
              <p className="text-xl font-bold leading-normal tracking-wider font-title">
                {slide.name}
              </p>
              <Button size="small">View All products</Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SliderContent;
