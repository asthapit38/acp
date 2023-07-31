"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useCallback, useRef } from "react";
import "swiper/css";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";

const StorySlider = ({ stories }) => {
  const storySliderRef = useRef(null);
  const handleNext = useCallback(() => {
    if (!storySliderRef.current) return;
    storySliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="max-w-5xl px-4 pt-10 mx-auto lg:px-0">
      <div className="flex items-center justify-end mb-2 gap-x-2">
        <Button size="small" intent="secondary" onPress={handleNext}>
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
      <Swiper ref={storySliderRef} spaceBetween={16} loop={true}>
        {stories &&
          stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="grid items-center justify-center grid-cols-12 ">
                <div className="col-span-5 artisan-image h-[524px] w-full relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    fill
                    src={`${story.attributes.image_url}`}
                    style={{
                      objectFit: "cover",
                    }}
                    alt={story.attributes.title}
                  />
                </div>
                <div className="col-span-7 px-10 pt-2 pb-10 artisan-stry ">
                  <div className="space-y-2.5">
                    <h1 className="text-3xl font-bold leading-relaxed tracking-wider uppercase text-primary font-title ">
                      {story.attributes.title}
                    </h1>
                    <ReactMarkdown
                      children={story.attributes.body}
                      className="text-sm leading-loose text-justify"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default StorySlider;
