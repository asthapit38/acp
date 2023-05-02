"use client";
import ProductCard from "@/app/components/ui/ProductCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProductSlider = () => {
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
    slides: {
      perView: 2.35,
      spacing: 15,
    },
  });
  return (
    <div className="relative">
      <div className="absolute z-30 flex items-center justify-between w-full h-full px-4 -translate-y-1/2 top-1/2">
        <button
          className="p-2 text-white bg-black rounded-full"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="p-2 text-white bg-black rounded-full"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div ref={sliderRef} className="keen-slider">
        <div className="relative w-full keen-slider__slide">
          <ProductCard title="Product one" code="234324" price="500" />
        </div>
        <div className="relative w-full keen-slider__slide">
          <ProductCard title="Product one" code="234324" price="500" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
