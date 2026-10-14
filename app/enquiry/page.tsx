import PageBanner from "@/components/common/PageBanner";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import Intro from "@/components/enquiry/Intro";
import { enquiryPageData } from "@/lib/content";

export default function EnquiryPage() {
  return (
    <>
      <PageBanner title={enquiryPageData.banner.title} />
      <section className="py-10 sm:py-12 lg:py-[60px]">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <Intro />
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
