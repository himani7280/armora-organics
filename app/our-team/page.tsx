import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import TeamGrid from "@/components/team/TeamGrid";
import { ourTeamPageData, ourTeamContent } from "@/lib/content";

export const metadata: Metadata = {
  title: `${ourTeamPageData.banner.title} | Farmora Organics`,
  description: ourTeamContent.text,
};

export default function OurTeamPage() {
  return (
    <>
      <PageBanner title={ourTeamPageData.banner.title} />
      <TeamGrid />
    </>
  );
}
