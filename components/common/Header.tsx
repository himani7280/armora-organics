"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiChevronRight, FiMail, FiMenu, FiPhone, FiX } from "react-icons/fi";
import content from "@/data/content.json";
import { Button, SocialIcons } from "@/components/ui";

const site = content.Farmora.sections.SiteChrome.variants.FarmoraHeader1;

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
    <header className="sticky top-0 z-40 w-full overflow-x-clip bg-white shadow-[0_4px_20px_rgba(11,59,31,0.08)]">
      {/* Top bar - side leaf images visible, non-adjusting content hidden below lg */}
      <div className="relative w-full overflow-hidden bg-[#fcf6e8]">
        {/* Left leaf accent - crisp original image */}
        <Image
          src="/images/common/leaf-left.png"
          alt=""
          width={92}
          height={78}
          priority
          className="pointer-events-none absolute left-0 top-0 h-8 sm:h-11 md:h-13 lg:h-[58px] w-auto object-contain object-left-top select-none"
        />
        {/* Right leaf accent - crisp original image */}
        <Image
          src="/images/common/leaf-right.png"
          alt=""
          width={83}
          height={96}
          priority
          className="pointer-events-none absolute right-0 top-0 h-9 sm:h-12 md:h-14 lg:h-[62px] w-auto object-contain object-right-top select-none"
        />
        <div className="container-x relative flex h-11 sm:h-12 md:h-13 lg:h-14 items-center justify-center min-[426px]:justify-between font-ui text-xs text-forest sm:text-sm px-4 min-[426px]:pl-14 sm:pl-16 md:pl-20 lg:pl-24 min-[426px]:pr-12 sm:pr-14 md:pr-16 lg:pr-20">
          {/* Left: Mail & Phone together (hidden at 425px and below, visible above 425px) */}
          <div className="hidden min-[426px]:flex items-center gap-2.5 sm:gap-4 md:gap-5 shrink-0">
            {/* Email */}
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.email}`}
              className="group flex items-center gap-1.5 sm:gap-2 transition hover:text-leaf shrink-0"
            >
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-200 group-hover:bg-leaf group-hover:text-white group-hover:scale-105">
                <FiMail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <span className="whitespace-nowrap font-medium text-xs sm:text-[13px] md:text-sm">{site.email}</span>
            </a>

            {/* Separator between Mail and Phone on the left */}
            <span className="block h-3.5 sm:h-4 w-px bg-forest/25 shrink-0" />

            {/* Phone */}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              aria-label={`Call ${site.phone}`}
              className="group flex items-center gap-1.5 sm:gap-2 transition hover:text-leaf shrink-0"
            >
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-200 group-hover:bg-leaf group-hover:text-white group-hover:scale-105">
                <FiPhone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <span className="whitespace-nowrap font-semibold text-xs sm:text-[13px] md:text-sm">{site.phone}</span>
            </a>
          </div>

          {/* Right (or Center at <= 425px): Social Icons with vertical divider above 425px */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden min-[426px]:block h-3.5 sm:h-4 w-px bg-forest/25 shrink-0" />
            <SocialIcons size="sm" className="gap-1.5 sm:gap-2 md:gap-2.5" />
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="container-x flex h-20 items-center justify-between gap-3 lg:gap-4 lg:h-[88px]">
        <Link href="/" className="shrink-0 flex items-center -ml-1 sm:-ml-1.5 transition-transform duration-200 hover:opacity-95">
          <Image
            src="/images/common/logo.jpg"
            alt={site.name}
            width={332}
            height={80}
            priority
            className="h-11 sm:h-14 md:h-16 lg:h-[68px] w-auto object-contain mix-blend-multiply shrink-0"
          />
        </Link>

        <nav className="hidden items-center gap-3 font-ui text-[13.5px] font-medium text-black lg:flex xl:gap-5 xl:text-[15px] 2xl:gap-8 shrink-0">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-2 transition hover:text-leaf whitespace-nowrap ${
                isActive(item.href)
                  ? "text-leaf font-semibold after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-leaf"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Enquiry Button - hidden on all screens where hamburger is present (< 1024px) */}
        <div className="hidden lg:block shrink-0">
          <Button href={site.enquiry.href} size="md">
            {site.enquiry.label}
          </Button>
        </div>

        {/* Hamburger Toggle Button - Fixed circular aspect ratio, visible below 1024px */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 aspect-square items-center justify-center rounded-full bg-forest text-white transition-all duration-200 hover:bg-forest-deep hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-leaf lg:hidden"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </div>

      {/* Off-canvas Side Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Off-canvas Side Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-full w-[85%] max-w-[360px] flex-col justify-between bg-white shadow-2xl transition-all duration-300 ease-out lg:hidden ${
          open
            ? "translate-x-0 opacity-100 visible pointer-events-auto"
            : "translate-x-full opacity-0 invisible pointer-events-none"
        }`}
        aria-label="Mobile Navigation"
        aria-hidden={!open}
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
            className="flex h-10 w-10 shrink-0 aspect-square items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-200 hover:bg-forest hover:text-white hover:scale-105"
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
            <Button
              href={site.enquiry.href}
              onClick={() => setOpen(false)}
              fullWidth
              size="md"
            >
              {site.enquiry.label}
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-8 space-y-3 rounded-2xl bg-[#fcf6e8] p-4 font-ui text-sm text-forest">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{(site as any).contactUsLabel || "Contact Us"}</p>
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
            {(site as any).followUsLabel || "Follow Us"}
          </p>
          <div className="flex items-center justify-center">
            <SocialIcons size="md" />
          </div>
        </div>
      </aside>
    </header>
  );
}
