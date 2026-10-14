import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import TeamDetail from "@/components/team/TeamDetail";
import { getMember, teamContent } from "@/lib/team";

export function generateStaticParams() {
  return teamContent.members.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();
  return (
    <>
      <PageBanner title={member.name} />
      <TeamDetail member={member} />
    </>
  );
}
