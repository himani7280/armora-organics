import About from "@/components/home/About";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Products />
      <Testimonials />
      <Blogs />
    </>
  );
}
