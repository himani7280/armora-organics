import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { LuSprout } from "react-icons/lu";
import { contactContent } from "@/lib/content";

const data = contactContent;

const icons: Record<string, React.ReactNode> = {
  address: <FiMapPin />, phone: <FiPhone />, email: <FiMail />, follow: <LuSprout />,
};
const socials = [
  { label: "Facebook", href: "https://www.facebook.com", icon: <FaFacebookF /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <FaInstagram /> },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
  { label: "YouTube", href: "https://www.youtube.com", icon: <FaYoutube /> },
];

export default function InfoCards() {
  const cards = data.info.filter((c) => c.key !== "follow");
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <div key={c.key} className="group cursor-pointer rounded-2xl border border-slate-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-mint">
          <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-forest/10 text-3xl text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
            {icons[c.key]}
          </span>
          <h3 className="mt-5 text-2xl transition-colors duration-300 group-hover:text-forest">{c.title}</h3>
          {"lines" in c && c.lines && (
            <p className={`mt-4 leading-7 ${c.key === "address" ? "text-slate-600" : "text-lg text-forest"}`}>
              {c.lines.map((l) => (
                <span key={l} className="block transition-colors group-hover:text-leaf">{l}</span>
              ))}
            </p>
          )}
          {"note" in c && c.note && <p className="mt-4 text-[17px] leading-7 text-slate-500">{c.note}</p>}
        </div>
      ))}
    </div>
  );
}
