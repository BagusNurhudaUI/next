import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Bagus Nurhuda",
  description: "Contact | Bagus Nurhuda",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Feel free to contact me by submitting the form below and I will get back to you as soon as possible"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
