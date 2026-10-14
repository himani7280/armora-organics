import AboutIntro from "@/components/about/AboutIntro";
import PageBanner from "@/components/common/PageBanner";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";
import { aboutPageData } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <PageBanner title={aboutPageData.pageTitle} />
      <AboutIntro />
      <WhyChoose />
      <Testimonials />
    </>
  );
}
