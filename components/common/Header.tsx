"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FiArrowRight, FiChevronRight, FiMail, FiMenu, FiPhone, FiX } from "react-icons/fi";
import content from "@/data/content.json";

const site = content.Farmora.sections.SiteChrome.variants.FarmoraHeader1;

const socials = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "Twitter", href: "https://x.com", icon: FaTwitter },
  { label: "Dribbble", href: "https://dribbble.com", icon: FaDribbble },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Lock body scroll when side drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="relative z-40 bg-white">
      {/* Top bar */}
      <div className="relative hidden overflow-hidden bg-[#fcf6e8] md:block">
        <Image src="/images/common/leaf-left.jpg" alt="" width={92} height={78} className="absolute left-0 top-0 mix-blend-multiply" />
        <Image src="/images/common/leaf-right.jpg" alt="" width={83} height={96} className="absolute right-0 top-0 mix-blend-multiply" />
        <div className="container-x relative flex h-[76px] items-center justify-between font-ui text-sm text-forest lg:px-24!">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="group flex items-center gap-2.5 transition hover:text-leaf">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-200 group-hover:bg-leaf group-hover:text-white group-hover:scale-105">
                <FiMail className="h-4 w-4" />
              </span>
              <span>{site.email}</span>
            </a>
            <span className="h-7 w-0.5 bg-forest/30" />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-2.5 transition hover:text-leaf">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-200 group-hover:bg-leaf group-hover:text-white group-hover:scale-105">
                <FiPhone className="h-4 w-4" />
              </span>
              <span>{site.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="mr-4 h-7 w-0.5 bg-forest/30" />
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ece8d0] text-forest transition-all duration-200 hover:bg-leaf hover:text-white hover:scale-110 shadow-xs"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="container-x flex h-20 items-center justify-between gap-4 lg:h-[88px]">
        <Link href="/" className="shrink-0">
          <Image src="/images/common/logo.jpg" alt={site.name} width={332} height={80} priority className="h-14 w-auto mix-blend-multiply sm:h-16 lg:h-20" />
        </Link>

        <nav className="hidden items-center gap-6 font-ui text-[15px] font-medium text-black xl:flex 2xl:gap-9">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-2 transition hover:text-leaf ${
                isActive(item.href)
                  ? "text-leaf font-semibold after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-leaf"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={site.enquiry.href}
          className="group hidden items-center gap-2.5 rounded-full bg-leaf px-7 py-3 font-ui text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:bg-forest hover:shadow-lg xl:flex"
        >
          <span>{site.enquiry.label}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-all duration-200 group-hover:bg-white group-hover:text-forest group-hover:scale-105">
            <FiArrowRight className="h-4 w-4" />
          </span>
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white transition-all duration-200 hover:bg-leaf hover:scale-105 shadow-md xl:hidden"
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Off-canvas Side Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 xl:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Off-canvas Side Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-full w-[85%] max-w-[360px] flex-col justify-between bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-mint px-6 py-5">
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
            <Image
              src="/images/common/logo.jpg"
              alt={site.name}
              width={220}
              height={60}
              className="h-12 w-auto mix-blend-multiply"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-200 hover:bg-forest hover:text-white hover:scale-105"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content (scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <nav className="font-ui">
            <ul className="flex flex-col space-y-1.5">
              {site.nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                        active
                          ? "bg-leaf/10 font-bold text-leaf"
                          : "text-forest hover:bg-forest/5 hover:text-leaf"
                      }`}
                    >
                      <span>{item.label}</span>
                      <FiChevronRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          active ? "text-leaf translate-x-0.5" : "text-slate-400"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Enquiry Button in Drawer */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <Link
              href={site.enquiry.href}
              onClick={() => setOpen(false)}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3.5 font-ui text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:bg-forest hover:shadow-lg"
            >
              <span>{site.enquiry.label}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-all duration-200 group-hover:bg-white group-hover:text-forest group-hover:scale-105">
                <FiArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-8 space-y-3 rounded-2xl bg-[#fcf6e8] p-4 font-ui text-sm text-forest">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Us</p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-3 transition hover:text-leaf"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors duration-200 group-hover:bg-leaf group-hover:text-white">
                <FiPhone className="h-4 w-4" />
              </span>
              <span className="font-semibold">{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 transition hover:text-leaf"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors duration-200 group-hover:bg-leaf group-hover:text-white">
                <FiMail className="h-4 w-4" />
              </span>
              <span className="truncate">{site.email}</span>
            </a>
          </div>
        </div>

        {/* Drawer Bottom Socials */}
        <div className="border-t border-mint bg-[#fcf6e8]/60 px-6 py-4">
          <p className="mb-3 text-center font-ui text-xs font-semibold uppercase tracking-wider text-slate-500">
            Follow Us
          </p>
          <div className="flex items-center justify-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest shadow-xs transition-all duration-200 hover:bg-leaf hover:text-white hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </header>
  );
}
