import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FiChevronRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import content from "@/data/content.json";
import { services, serviceHref } from "@/lib/catalog";

const header = content.Farmora.sections.SiteChrome.variants.FarmoraHeader1;
const footer = content.Farmora.sections.SiteChrome.variants.FarmoraFooter1;

const socials = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com", icon: FaYoutube },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
];

function LinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-2xl">{title}</h4>
      <span className="mb-6 mt-3 block h-0.5 w-10 bg-gold" />
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group flex items-center gap-2.5 text-[15px] text-slate-700 transition-all duration-200 hover:translate-x-1 hover:text-leaf">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest/5 text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-white">
                <FiChevronRight className="h-3.5 w-3.5" />
              </span>
              <span>{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  lines,
  href,
}: {
  icon: typeof FiMail;
  lines: string[];
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[15px] leading-6 text-forest transition-colors duration-300 group-hover:text-leaf">
        {lines.map((l) => (
          <span key={l} className="block break-words">{l}</span>
        ))}
      </span>
    </>
  );

  return (
    <li className="group">
      {href ? (
        <a href={href} className="flex cursor-pointer items-center gap-4">
          {content}
        </a>
      ) : (
        <div className="flex cursor-pointer items-center gap-4">
          {content}
        </div>
      )}
    </li>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container-x footer-grid grid gap-10 py-10 sm:py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-0">
        <div>
          <Image src="/images/common/logo.jpg" alt={header.name} width={318} height={96} className="mb-6 h-auto w-64 mix-blend-multiply" />
          <p className="max-w-sm text-[16px] leading-7 text-slate-600">{footer.about}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white transition-all duration-300 hover:bg-gold hover:text-white hover:scale-110 hover:shadow-lg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <LinkList title="Quick Links" links={footer.quickLinks} />
        <LinkList title="Our Services" links={services.map((s) => ({ label: s.title, href: serviceHref(s.slug) }))} />
        <div>
          <h4 className="text-2xl">Contact Info</h4>
          <span className="mb-6 mt-3 block h-0.5 w-10 bg-gold" />
          <ul className="space-y-5">
            <ContactRow icon={FiMapPin} lines={[header.address]} href="https://maps.google.com/?q=742+Evergreen+Terrace,+Springfield,+IL+62704" />
            <ContactRow icon={FiPhone} lines={[header.phone]} href={`tel:${header.phone.replace(/\s/g, "")}`} />
            <ContactRow icon={FiMail} lines={[header.email]} href={`mailto:${header.email}`} />
          </ul>
        </div>
      </div>
      <div className="footer-top-line footer-bottom">
        <div className="container-x flex items-center justify-between py-5 font-copy text-sm text-white">
          <span>{footer.copyright} powered by lestow</span>
          <div className="flex items-center gap-4">
            <Link href="/thank-you" className="transition hover:text-gold">Thank You</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
