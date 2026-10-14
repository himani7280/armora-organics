import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { LuSprout } from "react-icons/lu";
import { contactContent } from "@/lib/content";

const data = contactContent;

const icons: Record<string, React.ReactNode> = {
  address: <FiMapPin />, phone: <FiPhone />, email: <FiMail />, follow: <LuSprout />,
};
const socials = [
  { label: "Facebook", icon: <FaFacebookF /> },
  { label: "Instagram", icon: <FaInstagram /> },
  { label: "LinkedIn", icon: <FaLinkedinIn /> },
  { label: "YouTube", icon: <FaYoutube /> },
];

export default function InfoCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {data.info.map((c) => (
        <div key={c.key} className="group cursor-pointer rounded-2xl border border-slate-100 p-6 transition-shadow duration-300 hover:shadow-md">
          <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-forest/10 text-3xl text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white">
            {icons[c.key]}
          </span>
          <h3 className="mt-5 text-2xl transition-colors duration-300 group-hover:text-forest">{c.title}</h3>
          {c.key === "follow" && (
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <span key={s.label} aria-label={s.label} className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-lg text-white">{s.icon}</span>
              ))}
            </div>
          )}
          {"lines" in c && c.lines && (
            <p className={`mt-4 leading-7 ${c.key === "address" ? "text-slate-600" : "text-lg text-forest"}`}>
              {c.lines.map((l) => (<span key={l} className="block">{l}</span>))}
            </p>
          )}
          {"note" in c && c.note && <p className="mt-4 text-[17px] leading-7 text-slate-500">{c.note}</p>}
        </div>
      ))}
    </div>
  );
}
