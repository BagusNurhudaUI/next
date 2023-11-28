import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import { Metadata } from "next";
import LoaderComponent from "@/components/Loader/LoaderComponent";
import { Suspense } from "react";
import Con from "@/utils/const";

export const metadata: Metadata = {
  title: "Bagus Nurhuda",
  description: Con.PAGE_DESCRIPTION,
};

export default function Home() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <ScrollUp />
      <Hero />
      <Features />
      <Carousel
        images={["/images/akur.png", "/images/gme.png", "/images/kasbaik.png"]}
      />
      <Blog />
      <SectionTitle
        title="Contact Me"
        paragraph="Feel free to contact me for further discussion"
        divClass="wow fadeInUp w-full max-w-[570px] mb-[30px] md:mb-[60px] mt-[3rem] mx-auto text-center"
        h2Class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
        pClass="text-base !leading-relaxed text-body-color md:text-lg"
      />
      <div className="pb-20">
        <Contact />
      </div>
    </Suspense>
  );
}
