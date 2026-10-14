import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiBriefcase, FiCheckCircle, FiAward, FiBook } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";
import { teamMembers } from "@/lib/teamData";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
];

export default function TeamMemberDetail({ slug }: { slug: string }) {
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <section className="py-24 text-center">
        <p className="text-2xl text-slate-500">Team member not found.</p>
        <Link
          href="/our-team"
          className="mt-6 inline-block rounded-full bg-forest px-8 py-3 text-white transition hover:bg-leaf"
        >
          Back to Team
        </Link>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="container-x">
        {/* Main card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[380px_1fr]">
            {/* ---- Left: Photo + basics ---- */}
            <div className="relative flex flex-col items-center bg-gradient-to-b from-forest to-[#0e4a27] px-8 py-12 text-white">
              {/* Decorative ring */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-full border-4 border-gold/40" />
                <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-gold shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="208px"
                  />
                </div>
              </div>

              {/* Name & role */}
              <h1 className="text-center font-serif text-3xl font-extrabold leading-tight text-white">
                {member.name}
              </h1>
              <span className="mt-2 rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                {member.role}
              </span>

              {/* Divider */}
              <span className="my-6 block h-0.5 w-14 bg-gold/50" />

              {/* Stats */}
              <div className="flex w-full flex-col gap-4">
                <div className="group flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/15">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-forest">
                    <FiBriefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/60">Experience</p>
                    <p className="font-semibold">{member.experience}</p>
                  </div>
                </div>
                <div className="group flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/15">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-forest">
                    <FiBook className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/60">Education</p>
                    <p className="text-sm font-semibold leading-5">{member.education}</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-gold hover:text-white hover:scale-110 shadow-xs"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ---- Right: Details ---- */}
            <div className="px-8 py-12 sm:px-12">
              {/* Quote */}
              <div className="relative mb-10 rounded-2xl bg-mint/50 px-7 py-6">
                <FaQuoteLeft className="absolute -top-3 left-6 h-8 w-8 text-gold/40" />
                <p className="text-lg font-medium italic leading-7 text-forest">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>

              {/* About */}
              <div className="mb-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-gold" />
                  <h2 className="font-eyebrow text-xs font-semibold uppercase tracking-widest text-gold">
                    About
                  </h2>
                </div>
                <p className="text-base leading-8 text-slate-600">{member.about}</p>
              </div>

              {/* Expertise */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-gold" />
                  <h2 className="font-eyebrow text-xs font-semibold uppercase tracking-widest text-gold">
                    Areas of Expertise
                  </h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {member.expertise.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center gap-3 rounded-xl border border-mint bg-cream/60 px-4 py-3 text-sm font-medium text-forest shadow-xs transition-all duration-200 hover:border-forest/20 hover:bg-mint/40"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-leaf/10 text-leaf transition-colors group-hover:bg-leaf group-hover:text-white">
                        <FiCheckCircle className="h-4 w-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-leaf px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-forest hover:shadow-lg"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-all duration-200 group-hover:bg-white group-hover:text-forest group-hover:scale-105">
                    <FiAward className="h-4 w-4" />
                  </span>
                  Get in Touch
                </Link>
                <Link
                  href="/our-team"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-7 py-3 font-semibold text-forest transition-all duration-300 hover:bg-forest hover:text-white"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
