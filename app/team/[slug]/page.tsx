import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import TeamDetail from "@/components/team/TeamDetail";
import { getMember, teamContent, type TeamMember } from "@/lib/content";

export function generateStaticParams() {
  return ((teamContent.members || []) as TeamMember[]).map((m: TeamMember) => ({ slug: m.slug }));
}

type TeamMemberPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TeamMemberPage(props: TeamMemberPageProps) {
  const resolvedParams = await Promise.resolve(props?.params);
  const slug = resolvedParams?.slug;
  if (!slug) notFound();
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
