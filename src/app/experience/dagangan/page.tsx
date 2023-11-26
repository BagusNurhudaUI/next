import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BreadcrumbCustom from "@/components/Common/BreadcrumbCustom";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dagangan | Bagus Nurhuda",
  description: "Dagangan | Bagus Nurhuda",
  // other metadata
};

const Dagangan = () => {
  return (
    <>
      <BreadcrumbCustom
        pageName="Dagangan"
        beforepageName={[
          {
            href: "/",
            name: "Home",
          },
          {
            href: "/experience",
            name: "Experience",
          },
        ]}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default Dagangan;
