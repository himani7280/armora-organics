import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { aboutContent, siteContent } from "@/lib/content";
import { Button } from "@/components/ui";

const features = [
  { icon: "leaf", title: "100% Organic", text: "Naturally grown & chemical free" },
  { icon: "sprout", title: "Direct from Farms", text: "Empowering local farmers" },
  { icon: "shield", title: "Quality Certified", text: "Tested for pure nutrition" },
  { icon: "wheat", title: "Eco-Friendly", text: "Sustainable green agriculture" },
];

export default function AboutIntro() {
  const a = aboutContent.about;
  const site = siteContent;
  return (
    <section className="bg-cream py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal-left flex flex-col justify-between h-full">
          <div>
            <SectionTitle stacked align="left" eyebrow={a.eyebrow} title={a.title} accent={a.accent} />
            <div className="mt-4 max-w-xl space-y-3 text-base leading-7 text-slate-600 sm:text-[16.5px]">
              <p>{a.paragraphs[0]}</p>
              <p>{a.paragraphs[1] ?? a.paragraphs[0]}</p>
            </div>
          </div>

          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="group flex items-center gap-3.5 cursor-pointer">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-[15px] font-bold text-forest transition-colors duration-200 group-hover:text-leaf">{f.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button href="/services" size="lg">
              Explore Our Services
            </Button>
            <span className="hidden h-10 w-px bg-slate-300 sm:block" />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8b95a] text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
                <FiPhone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-slate-500">Call Us Anytime</span>
                <span className="block font-ui text-lg font-bold text-forest transition-colors duration-200 group-hover:text-leaf">{site.phone}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="reveal-right flex items-center justify-center">
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[570px] xl:max-w-[600px]">
            <div className="relative aspect-square w-full transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/home/about-collage.jpg"
                alt="Farmora organic farmers and fresh harvest"
                fill
                sizes="(min-width:1280px) 600px, (min-width:1024px) 570px, (min-width:640px) 480px, 92vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
