import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FiChevronRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import content from "@/data/content.json";

const header = content.Farmora.sections.SiteChrome.variants.FarmoraHeader1;
const footer = content.Farmora.sections.SiteChrome.variants.FarmoraFooter1;

const socials = [FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn];

function LinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-2xl">{title}</h4>
      <span className="mb-6 mt-3 block h-0.5 w-10 bg-gold" />
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="flex items-center gap-3 text-[15px] text-slate-700 transition hover:translate-x-1 hover:text-leaf">
              <FiChevronRight className="text-gold" /> {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ icon: Icon, lines }: { icon: typeof FiMail; lines: string[] }) {
  return (
    <li className="group flex cursor-pointer items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[15px] leading-6 text-forest transition-colors duration-300 group-hover:text-leaf">
        {lines.map((l) => (
          <span key={l} className="block break-words">{l}</span>
        ))}
      </span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="">
      <div className="container-x footer-grid grid gap-10 py-10 sm:py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-0">
        <div>
          <Image src="/images/common/logo.jpg" alt={header.name} width={318} height={96} className="mb-6 h-auto w-64 mix-blend-multiply" />
          <p className="max-w-sm text-[16px] leading-7 text-slate-600">{footer.about}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a key={i} href="#" aria-label="social link" className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white transition hover:bg-gold">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <LinkList title="Quick Links" links={footer.quickLinks} />
        <LinkList title="Our Services" links={footer.services} />
        <div>
          <h4 className="text-2xl">Contact Info</h4>
          <span className="mb-6 mt-3 block h-0.5 w-10 bg-gold" />
          <ul className="space-y-5">
            <ContactRow icon={FiMapPin} lines={[header.address]} />
            <ContactRow icon={FiPhone} lines={[header.phone]} />
            <ContactRow icon={FiMail} lines={[header.email]} />
          </ul>
        </div>
      </div>
      <div className="footer-top-line footer-bottom">
        <div className="container-x flex items-center justify-between py-5 font-copy text-sm text-white">
          <span>{footer.copyright} powered by lestow</span>
          <div className="flex items-center gap-4">
            <Link href="/thank-you" className="transition hover:text-gold">Thank You</Link>
            <Link href="/enquiry" className="transition hover:text-gold">Enquiry Now</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
