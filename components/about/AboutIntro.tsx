import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { aboutContent } from "@/lib/content";

export default function AboutIntro() {
  const a = aboutContent.about;
  return (
    <section className="bg-cream py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle stacked align="left" eyebrow={a.eyebrow} title={a.title} accent={a.accent} />
          <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-slate-600 sm:text-[17px]">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px] pb-24 sm:pb-32 lg:max-w-none">
          <div className="w-[85%] overflow-hidden rounded-3xl bg-white shadow-lg">
            <Image src={a.images[0]} alt="Woman farmer in a sunny field" width={552} height={498} className="h-auto w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[72%] overflow-hidden rounded-3xl border-[5px] border-white bg-white shadow-xl">
            <Image src={a.images[1]} alt="Farmer tending crops" width={398} height={285} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
