import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { homeContent, siteContent } from "@/lib/content";
import { Button } from "@/components/ui";

export default function About() {
  const a = homeContent.about;
  const site = siteContent;
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal-left flex flex-col justify-center">
          <div>
            <SectionTitle stacked align="left" eyebrow={a.eyebrow} title={a.title} accent={a.accent} />
            <p className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-slate-600 sm:text-[17px] lg:mx-0 lg:text-left">{a.text}</p>
          </div>
          <div className="my-6 grid gap-4.5 sm:grid-cols-2">
            {a.features.map((f) => (
              <div key={f.title} className="group flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform duration-150">
                <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="text-[15.5px] font-bold text-forest transition-colors duration-200 group-hover:text-leaf">{f.title}</h4>
                  <p className="text-sm text-slate-500">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Button href={a.button.href} size="lg">
              {a.button.label}
            </Button>
            <span className="hidden h-10 w-px bg-slate-300 sm:block" />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-3 active:scale-95 transition-transform duration-150">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8b95a] text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
                <FiPhone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">{a.callLabel}</span>
                <span className="block font-ui text-xl font-bold text-forest transition-colors duration-200 group-hover:text-leaf">{site.phone}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="reveal-right flex items-center justify-center">
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[550px] xl:max-w-[580px]">
            <div className="relative aspect-square w-full transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={(a as any).image || "/images/home/about-collage.webp"}
                alt={(a as any).imageAlt || "Farmora organic farmers and fresh harvest"}
                fill
                sizes="(min-width:1280px) 580px, (min-width:1024px) 550px, (min-width:640px) 480px, 92vw"
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
