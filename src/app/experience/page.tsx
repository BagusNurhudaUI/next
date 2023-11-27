import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Bagus Nurhuda",
  description: "Experience | Bagus Nurhuda",
  // other metadata
};

const Experience = () => {
  return (
    <>
      <Breadcrumb pageName="Experience" description="Here my experience" />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default Experience;
