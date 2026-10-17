import { contactContent } from "@/lib/content";

const data = contactContent;

export default function Location() {
  const l = data.location;
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-100 shadow-md">
      {/* Full-width Google Maps embed with compact height */}
      <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px]">
        <iframe
          title={l.mapAlt}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976364746139!3d40.69766374865191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
