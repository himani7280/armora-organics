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
      <section className="py-10 sm:py-12 lg:py-[60px]">
        <div className="container-x space-y-6">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
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
