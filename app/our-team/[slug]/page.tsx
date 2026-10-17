import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import TeamMemberDetail from "@/components/team/TeamMemberDetail";
import { bannerContent, teamMembers } from "@/lib/content";

export const instant = false;

// Generate all static paths for team members
export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

// Dynamic metadata per member
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Team Member | Farmora Organics" };
  const member = teamMembers.find(
    (m) => m.slug === slug || m.slug.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );
  if (!member) return { title: "Team Member | Farmora Organics" };
  return {
    title: `${member.name} – ${member.role} | Farmora Organics`,
    description: member.bio,
  };
}

type TeamMemberPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const member = teamMembers.find(
    (m) => m.slug === slug || m.slug.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );
  if (!member) notFound();

  const title = (bannerContent as any).FarmoraTeamDetailBanner1?.title || "Team Detail";

  return (
    <>
      <PageBanner
        title={title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/our-team" },
          { label: title },
        ]}
      />
      <TeamMemberDetail slug={slug} />
    </>
  );
}
