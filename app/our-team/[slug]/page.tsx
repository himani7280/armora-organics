import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import TeamMemberDetail from "@/components/team/TeamMemberDetail";
import { teamMembers } from "@/lib/content";

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
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return { title: "Team Member | Farmora Organics" };
  return {
    title: `${member.name} – ${member.role} | Farmora Organics`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <PageBanner
        title="Team Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/our-team" },
          { label: "Team Detail" },
        ]}
      />
      <TeamMemberDetail slug={slug} />
    </>
  );
}
