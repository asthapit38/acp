import Image from "next/image";
import Dhukuti1 from "@/public/images/dhukuti/dhukuti1.jpg";
import Dhukuti2 from "@/public/images/dhukuti/dhukuti2.JPG";
import Dhukuti3 from "@/public/images/dhukuti/dhukuti3.JPG";
import Dhukuti4 from "@/public/images/dhukuti/dhukuti4.JPG";
import Dhukuti5 from "@/public/images/dhukuti/dhukuti5.JPG";
import Dhukuti6 from "@/public/images/dhukuti/dhukuti6.JPG";
import Dhukuti7 from "@/public/images/dhukuti/dhukuti7.JPG";
import Dhukuti8 from "@/public/images/dhukuti/dhukuti8.JPG";
import Dhukuti9 from "@/public/images/dhukuti/dhukuti9.JPG";
import Dhukuti10 from "@/public/images/dhukuti/dhukuti10.JPG";
import Dhukuti11 from "@/public/images/dhukuti/dhukuti11.JPG";

import React from "react";

const DhukutiSliderContent = () => {
  const sliders = [
    {
      image: Dhukuti1,
    },
    {
      image: Dhukuti2,
    },
    {
      image: Dhukuti3,
    },
    {
      image: Dhukuti4,
    },
    {
      image: Dhukuti5,
    },
    {
      image: Dhukuti6,
    },
    {
      image: Dhukuti7,
    },
    {
      image: Dhukuti8,
    },
    {
      image: Dhukuti9,
    },
    {
      image: Dhukuti10,
    },
    {
      image: Dhukuti11,
    },
  ];
  return (
    <>
      {sliders.map((slide, index) => (
        <div
          className="relative w-full keen-slider__slide overflow-hidden rounded-2xl"
          key={index}
        >
          <div className="relative w-full aspect-square">
            <Image
              fill
              src={slide.image}
              sizes="width: 100%"
              style={{
                objectFit: "cover",
              }}
              alt="dhukuti image"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default DhukutiSliderContent;
