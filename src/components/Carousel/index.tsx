"use client";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SectionTitle from "../Common/SectionTitle";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }: any) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 container">
      <div className="container">
        <SectionTitle
          title="See what i have done"
          paragraph="There are many variations of project that i deliver successfully, here are some examples"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="w-full h-[200px] md:h-[500px] flex overflow-hidden relative m-auto">
              <AiOutlineLeft
                onClick={handlePrevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-5xl cursor-pointer text-gray-400 z-20"
              />
              <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="relative z-10 w-full h-full"
              >
                {images?.map((image: any, index: any) => {
                  if (index === currentSlide) {
                    return (
                      <Image
                        key={index}
                        src={image}
                        layout="fill"
                        alt="Image"
                        style={{ objectFit: "contain" }}
                      />
                    );
                  }
                })}
              </Swipe>
              <AiOutlineRight
                onClick={handleNextSlide}
                className="absolute right-0 items-center m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
              />
            </div>

            <div className="relative flex justify-center p-2">
              {images?.map((_: any, index: any) => {
                return (
                  <div
                    className={
                      index === currentSlide
                        ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
