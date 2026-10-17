import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import ServiceDetail from "@/components/service-detail/ServiceDetail";
import { serviceDetailPageData, services } from "@/lib/content";

export const instant = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailSlugPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner
        title={serviceDetailPageData.banner.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Service Detail" },
        ]}
      />
      <ServiceDetail service={service} />
    </>
  );
}
