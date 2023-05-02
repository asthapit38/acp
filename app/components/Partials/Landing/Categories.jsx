"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../../ui/Button";
import SliderContent from "./Categories/SliderContent";

const Categories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    renderMode: "performance",
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1.5,
          spacing: 16,
        },
      },
      "(min-width: 640px)": {
        slides: {
          perView: 1.25,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2.5,
          spacing: 16,
        },
      },
    },
  });
  return (
    <div className="categories">
      {loaded && instanceRef.current && (
        <div className="flex justify-end mb-4 gap-x-2">
          <Button
            size="small"
            intent="secondary"
            direction="right"
            onPress={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            size="small"
            intent="secondary"
            onPress={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      )}
      <div ref={sliderRef} className="keen-slider">
        <SliderContent />
      </div>
    </div>
  );
};

export default Categories;
