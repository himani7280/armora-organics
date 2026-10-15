import PageBanner from "@/components/common/PageBanner";
import ContactForm from "@/components/contact/ContactForm";
import InfoCards from "@/components/contact/InfoCards";
import Location from "@/components/contact/Location";
import Promo from "@/components/contact/Promo";
import { contactPageData } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <PageBanner title={contactPageData.banner.title} />
      <section className="pt-8 pb-3 sm:pt-10 sm:pb-4 lg:pt-12 lg:pb-5">
        <div className="container-x space-y-6 sm:space-y-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
            <ContactForm />
            <Promo />
          </div>
          <InfoCards />
          <Location />
        </div>
      </section>
    </>
  );
}
