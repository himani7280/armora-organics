import PageBanner from "@/components/common/PageBanner";
import ServiceDetail from "@/components/service-detail/ServiceDetail";
import { serviceDetailPageData } from "@/lib/content";

export default function ServiceDetailPage() {
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
      <ServiceDetail />
    </>
  );
}
