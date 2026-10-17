import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { contactContent } from "@/lib/content";

const data = contactContent;

const icons: Record<string, React.ReactNode> = {
  address: <FiMapPin />,
  phone: <FiPhone />,
  email: <FiMail />,
};

export default function InfoCards() {
  const cards = data.info.filter((c) => c.key !== "follow");
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => {
        const isPhone = c.key === "phone";
        const isEmail = c.key === "email";
        const isAddress = c.key === "address";
        const primaryLine = "lines" in c && c.lines ? c.lines[0] : "";
        const href = isPhone
          ? `tel:${primaryLine.replace(/\s/g, "")}`
          : isEmail
          ? `mailto:${primaryLine}`
          : `https://maps.google.com/?q=${encodeURIComponent(primaryLine)}`;

        return (
          <a
            key={c.key}
            href={href}
            target={isAddress ? "_blank" : undefined}
            rel={isAddress ? "noopener noreferrer" : undefined}
            className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-mint hover:-translate-y-0.5 flex items-center gap-4 sm:gap-5"
          >
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-forest/10 text-2xl sm:text-[26px] text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
              {icons[c.key]}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-xl sm:text-[22px] font-bold text-forest transition-colors duration-300 group-hover:text-leaf">
                {c.title}
              </h3>
              {"lines" in c && c.lines && (
                <p className={`mt-1.5 text-sm sm:text-[15px] leading-snug sm:leading-relaxed ${isAddress ? "text-slate-600" : "font-semibold text-forest group-hover:text-leaf"}`}>
                  {c.lines.map((l) => (
                    <span key={l} className="block transition-colors">{l}</span>
                  ))}
                </p>
              )}
              {"note" in c && c.note && (
                <p className="mt-1 text-xs sm:text-sm text-slate-500">{c.note}</p>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}
