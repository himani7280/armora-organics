import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import TeamGrid from "@/components/team/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team | Farmora Organics",
  description:
    "Meet the dedicated team behind Farmora Organics — passionate people committed to organic farming, sustainability and delivering fresh, chemical-free produce.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageBanner title="Our Team" />
      <TeamGrid />
    </>
  );
}
