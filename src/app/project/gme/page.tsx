import Breadcrumb from "@/components/Common/Breadcrumb";
import BreadcrumbCustom from "@/components/Common/BreadcrumbCustom";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const GmePage = () => {
  return (
    <>
      <BreadcrumbCustom
        pageName="GME Monitoringr"
        beforepageName={[
          {
            href: "/",
            name: "Home",
          },
          {
            href: "/project",
            name: "Project",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default GmePage;
