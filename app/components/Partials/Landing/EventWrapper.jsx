"use client";
import EventCard from "../../ui/EventCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EventOne from "@/public/images/event/event-1.JPG";
import EventTwo from "@/public/images/event/event-2.JPG";
import EventThree from "@/public/images/event/event-3.JPG";
import { useState } from "react";

const images = [
  {
    image: EventOne,
    title: "Artisan Meet and Greet",
  },
];
const animation = { duration: 5000 * 8, easing: (t) => t };

export default function EventWrapper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider zoom-out">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide ">
            <EventCard image={src.image} title={src.title} />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="absolute flex items-center justify-center w-full gap-x-2 bottom-6 ">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "h-3 rounded-full transition-all ease-linear duration-150 delay-100" +
                  (currentSlide === idx
                    ? " w-10 bg-primary border border-primary"
                    : " w-6 border border-primary")
                }
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
