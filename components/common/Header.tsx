"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FiArrowRight, FiMail, FiMenu, FiPhone, FiX } from "react-icons/fi";
import content from "@/data/content.json";

const site = content.Farmora.sections.SiteChrome.variants.FarmoraHeader1;

const socials = [FaFacebookF, FaTwitter, FaDribbble, FaInstagram];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-40 bg-white">
      {/* top bar */}
      <div className="relative hidden overflow-hidden bg-[#fcf6e8] md:block">
        <Image src="/images/common/leaf-left.jpg" alt="" width={92} height={78} className="absolute left-0 top-0 mix-blend-multiply" />
        <Image src="/images/common/leaf-right.jpg" alt="" width={83} height={96} className="absolute right-0 top-0 mix-blend-multiply" />
        <div className="container-x relative flex h-[76px] items-center justify-between font-ui text-sm text-forest lg:px-24!">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-leaf">
              <FiMail className="h-5 w-5" /> {site.email}
            </a>
            <span className="h-7 w-0.5 bg-forest" />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-leaf">
              <FiPhone className="h-5 w-5" /> {site.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-4 h-7 w-0.5 bg-forest" />
            {socials.map((Icon, i) => (
              <a key={i} href="#" aria-label="social link" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ece8d0] text-forest transition hover:bg-leaf hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="container-x flex h-20 items-center justify-between gap-4 lg:h-[88px]">
        <Link href="/" className="shrink-0">
          <Image src="/images/common/logo.jpg" alt={site.name} width={332} height={80} priority className="h-14 w-auto mix-blend-multiply sm:h-16 lg:h-20" />
        </Link>

        <nav className="hidden items-center gap-6 font-ui text-[15px] font-medium text-black xl:flex 2xl:gap-9">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-2 transition hover:text-leaf ${isActive(item.href) ? "text-leaf after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-leaf" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={site.enquiry.href}
          className="hidden items-center gap-2 rounded-full bg-leaf px-7 py-3.5 font-ui text-[15px] font-bold text-white shadow-md transition hover:bg-forest xl:flex"
        >
          {site.enquiry.label} <FiArrowRight className="h-5 w-5" />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white xl:hidden"
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-mint bg-white px-5 pb-5 font-ui xl:hidden">
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.label} className="border-b border-mint">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base font-medium ${isActive(item.href) ? "text-leaf" : "text-black"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={site.enquiry.href}
            onClick={() => setOpen(false)}
            className="mt-4 flex w-fit items-center gap-2 rounded-full bg-leaf px-6 py-3 font-bold text-white"
          >
            {site.enquiry.label} <FiArrowRight />
          </Link>
        </nav>
      )}
    </header>
  );
}
