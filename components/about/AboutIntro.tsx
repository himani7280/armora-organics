import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { aboutContent } from "@/lib/content";

export default function AboutIntro() {
  const a = aboutContent.about;
  return (
    <section className="py-5 sm:py-6 lg:py-8">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal-left flex flex-col justify-center">
          <div>
            <SectionTitle stacked align="left" eyebrow={a.eyebrow} title={a.title} accent={a.accent} />
            <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-slate-600 sm:text-[17px]">
              {a.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal-right flex items-center justify-center">
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[570px] xl:max-w-[600px]">
            <div className="relative aspect-square w-full transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={(a as any).image || "/images/home/about-collage.webp"}
                alt={(a as any).imageAlt || "Farmora organic farmers and fresh harvest"}
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
