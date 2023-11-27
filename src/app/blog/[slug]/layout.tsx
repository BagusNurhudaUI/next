// import { Metadata } from "next";
import Page from "./page"; // import your Demo's page
import con from "../../../utils/const";

// export const metadata: Metadata = {
//   title: "Blog | Bagus Nurhuda",
//   description: "Blog | Bagus Nurhuda",
//   // other metadata
// };
// export default Page;

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: ` ${decodeURIComponent(params.slug)} | Bagus Nurhuda`,
    description: con.PAGE_DESCRIPTION,
  };
}

export default Page;
