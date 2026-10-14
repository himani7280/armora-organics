import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { contactContent } from "@/lib/content";

const data = contactContent;

export default function Location() {
  const l = data.location;
  return (
    <div className="grid overflow-hidden rounded-2xl lg:grid-cols-[742fr_522fr]">
      {/* Real Google Maps embed – USA (New York, NY) */}
      <div className="relative h-72 sm:h-96 lg:h-auto min-h-[350px]">
        <iframe
          title={l.mapAlt}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976364746139!3d40.69766374865191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "350px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="p-8 sm:p-10 border border-slate-100 rounded-r-2xl">
        <p className="font-ui text-lg text-gold">{l.eyebrow}</p>
        <span className="mt-3 block h-[3px] w-14 bg-gold" />
        <h2 className="mt-4 text-4xl sm:text-5xl">{l.title} <span className="text-gold">{l.accent}</span></h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">{l.text}</p>
        <a
          href="https://maps.google.com/?q=New+York,+NY,+USA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-8 rounded-full bg-forest py-2 pl-8 pr-2 font-ui text-lg font-medium text-white transition hover:bg-forest-deep"
        >
          {l.button}
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold"><FiChevronRight className="h-5 w-5" /></span>
        </a>
      </div>
    </div>
  );
}
