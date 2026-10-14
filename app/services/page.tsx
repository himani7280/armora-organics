import PageBanner from "@/components/common/PageBanner";
import ServicesGrid from "@/components/services/ServicesGrid";
import { servicesPageData } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <PageBanner title={servicesPageData.pageTitle} />
      <ServicesGrid />
    </>
  );
}
