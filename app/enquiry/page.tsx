import PageBanner from "@/components/common/PageBanner";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import Intro from "@/components/enquiry/Intro";
import { enquiryPageData } from "@/lib/content";

export default function EnquiryPage() {
  return (
    <>
      <PageBanner title={enquiryPageData.banner.title} />
      <section className="pt-6 pb-3 sm:pt-8 sm:pb-4 lg:pt-10 lg:pb-5">
        <div className="container-x grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <Intro />
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
