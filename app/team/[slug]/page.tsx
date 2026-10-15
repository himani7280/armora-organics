import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import TeamDetail from "@/components/team/TeamDetail";
import { getMember, teamContent } from "@/lib/content";

export function generateStaticParams() {
  return teamContent.members.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();
  return (
    <>
      <PageBanner
        title={member.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
          { label: "Team Detail" },
        ]}
      />
      <TeamDetail member={member} />
    </>
  );
}
