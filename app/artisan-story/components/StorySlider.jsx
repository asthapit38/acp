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
  const handlePrev = useCallback(() => {
    if (!storySliderRef.current) return;
    storySliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!storySliderRef.current) return;
    storySliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <div className="flex items-center justify-end mb-2 gap-x-2">
        <Button size="small" intent="secondary" onPress={handleNext}>
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
      <Swiper ref={storySliderRef} spaceBetween={16} loop={true}>
        {stories &&
          stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col-reverse lg:flex-row gap-x-7">
                <div className="w-full space-y-2.5 lg:w-8/12">
                  <h1 className="text-3xl font-bold leading-relaxed tracking-wider uppercase text-primary font-title ">
                    {story.attributes.title}
                  </h1>
                  <ReactMarkdown
                    children={story.attributes.body}
                    className="leading-loose text-justify text-md"
                  />
                </div>
                <div className="w-full lg:w-4/12 ">
                  <div className="relative w-full overflow-hidden border rounded h-[548px]">
                    <Image
                      fill
                      src={`${story.attributes.image_url}`}
                      style={{
                        objectFit: "cover",
                      }}
                      alt={story.attributes.title}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default StorySlider;
