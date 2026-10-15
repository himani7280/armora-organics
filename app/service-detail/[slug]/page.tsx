import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import ServiceDetail from "@/components/service-detail/ServiceDetail";
import { serviceDetailPageData, services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailSlugPage(props: ServiceDetailPageProps) {
  const resolvedParams = await Promise.resolve(props?.params);
  const slug = resolvedParams?.slug;
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
