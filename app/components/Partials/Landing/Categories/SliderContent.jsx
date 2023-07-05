"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import React, { useCallback, useRef } from "react";
import { API_URL } from "@/utils/urls";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ViewButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Button size="small">View All products</Button>
    </a>
  );
});

export default function CategorySlider({ categories }) {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-end mb-2 gap-x-2">
        <Button size="small" intent="secondary" onPress={handlePrev}>
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button size="small" intent="secondary" onPress={handleNext}>
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
      <Swiper
        ref={sliderRef}
        spaceBetween={16}
        slidesPerView={2.5}
        breakpoints={{
          640: {
            slidesPerView: 1.25,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
        }}
      >
        {categories.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <div className="relative w-full aspect-square">
                {slide.attributes.image.data && (
                  <Image
                    fill
                    src={`${API_URL}${slide.attributes.image.data.attributes.formats.medium.url}`}
                    style={{
                      objectFit: "cover",
                    }}
                    alt="categories image"
                  />
                )}
              </div>
              <div className="absolute bottom-0 w-full text-center text-white h-1/2 bg-gradient-to-t from-black to-transparent">
                <div className="relative z-20 flex flex-col items-center justify-end h-full gap-2 pb-8">
                  <p className="text-xl font-bold leading-normal tracking-wider capitalize font-title">
                    {slide.attributes.name}
                  </p>
                  <Link
                    href={`/categories/${slide.attributes.slug}`}
                    passHref
                    legacyBehavior
                  >
                    <ViewButton />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
