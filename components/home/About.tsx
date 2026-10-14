import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { homeContent, siteContent } from "@/lib/content";

export default function About() {
  const a = homeContent.about;
  const site = siteContent;
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle stacked align="left" eyebrow={a.eyebrow} title={a.title} accent={a.accent} />
          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-7 text-slate-600 sm:text-[17px] lg:mx-0 lg:text-left">{a.text}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {a.features.map((f) => (
              <div key={f.title} className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="text-base">{f.title}</h4>
                  <p className="text-sm text-slate-500">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href={a.button.href} className="flex items-center gap-3 rounded-full bg-forest px-8 py-4 font-ui text-[15px] font-medium text-white transition hover:bg-leaf">
              {a.button.label} <FiArrowRight />
            </Link>
            <span className="hidden h-10 w-px bg-slate-300 sm:block" />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8b95a] text-forest">
                <FiPhone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">{a.callLabel}</span>
                <span className="block font-ui text-xl font-bold text-forest">{site.phone}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] pb-24 sm:pb-32 lg:max-w-none lg:pb-12">
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
