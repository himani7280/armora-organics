import PageBanner from "@/components/common/PageBanner";
import ServiceDetail from "@/components/service-detail/ServiceDetail";
import { serviceDetailPageData } from "@/lib/content";

export default function ServiceDetailPage() {
  return (
    <>
      <PageBanner title={serviceDetailPageData.banner.title} />
      <ServiceDetail />
    </>
  );
}
