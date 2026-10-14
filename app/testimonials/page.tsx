import PageBanner from "@/components/common/PageBanner";
import ReviewGrid from "@/components/testimonials/ReviewGrid";
import { testimonialsPageData } from "@/lib/content";

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title={testimonialsPageData.banner.title} />
      <ReviewGrid />
    </>
  );
}
