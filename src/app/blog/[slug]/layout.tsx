import Page from "./page"; // import your Demo's page
import con from "@/utils/const";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: ` ${decodeURIComponent(
      params.slug.replace(/-/g, " ")
    )} | Bagus Nurhuda`,
    description: con.PAGE_DESCRIPTION,
  };
}

export default Page;
