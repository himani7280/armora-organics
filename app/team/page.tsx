import PageBanner from "@/components/common/PageBanner";
import TeamGrid from "@/components/team/TeamGrid";
import { teamPageData } from "@/lib/content";

export default function TeamPage() {
  return (
    <>
      <PageBanner title={teamPageData.banner.title} />
      <TeamGrid />
    </>
  );
}
