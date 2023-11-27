import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Carousel from "@/components/Carousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bagus Nurhuda",
  description: "This is Bagus Nurhuda's private website",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Carousel
        images={["/images/akur.png", "/images/gme.png", "/images/kasbaik.png"]}
      />
      {/* <Video /> */}
      {/* <Brands />
      <AboutSectionOne />
      <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <SectionTitle
        title="Contact Me"
        paragraph="Feel free to contact me for further discussion"
        divClass="wow fadeInUp w-full max-w-[570px] mb-[0px] mt-[7rem] mx-auto text-center"
        h2Class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
        pClass="text-base !leading-relaxed text-body-color md:text-lg"
      />
      <Contact />
    </>
  );
}
