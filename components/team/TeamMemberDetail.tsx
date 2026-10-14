import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiBriefcase, FiCheckCircle, FiAward, FiBook } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";
import { teamMembers } from "@/lib/teamData";

const socials = [FaFacebookF, FaInstagram, FaLinkedinIn];

export default function TeamMemberDetail({ slug }: { slug: string }) {
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <section className="py-24 text-center">
        <p className="text-2xl text-slate-500">Team member not found.</p>
        <Link
          href="/our-team"
          className="mt-6 inline-block rounded-full bg-forest px-8 py-3 text-white"
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
                <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                  <FiBriefcase className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/60">Experience</p>
                    <p className="font-semibold">{member.experience}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3">
                  <FiBook className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/60">Education</p>
                    <p className="text-sm font-semibold leading-5">{member.education}</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 flex gap-3">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
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
                      className="flex items-center gap-3 rounded-xl border border-mint bg-cream/60 px-4 py-3 text-sm font-medium text-forest shadow-sm"
                    >
                      <FiCheckCircle className="h-4 w-4 shrink-0 text-leaf" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3 font-semibold text-white shadow-md transition hover:bg-forest"
                >
                  <FiAward className="h-5 w-5" />
                  Get in Touch
                </Link>
                <Link
                  href="/our-team"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-7 py-3 font-semibold text-forest transition hover:bg-forest hover:text-white"
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
