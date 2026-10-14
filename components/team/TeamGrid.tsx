"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { teamMembers } from "@/lib/teamData";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: 300 }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3b1f]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Social icons slide up on hover */}
        <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-3 pb-5 transition-transform duration-500 group-hover:translate-y-0">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest shadow transition-all duration-300 hover:bg-gold hover:text-white hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        {/* Gold bar accent */}
        <span className="mb-3 block h-0.5 w-10 bg-gold transition-all duration-300 group-hover:w-16" />
        <h3 className="text-xl font-bold text-forest">{member.name}</h3>
        <p className="mt-0.5 font-eyebrow text-xs font-semibold uppercase tracking-widest text-gold">
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-500">{member.bio}</p>

        {/* View Profile Button */}
        <Link
          href={`/our-team/${member.slug}`}
          className="group/btn mt-5 flex w-fit items-center gap-2 rounded-full border-2 border-forest px-5 py-2 text-sm font-semibold text-forest transition-all duration-300 hover:bg-forest hover:text-white"
        >
          View Profile
          <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container-x">
        {/* Section heading */}
        <div className="mb-14">
          <SectionTitle
            eyebrow="Our People"
            title="Meet the"
            accent="Dedicated Team"
            text="Behind every fresh harvest is a passionate team committed to organic excellence, sustainable practices and delivering pure goodness from our farm to your table."
          />
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-forest to-leaf px-8 py-10 text-center text-white shadow-lg">
          <h3 className="font-serif text-2xl font-bold sm:text-3xl">
            Want to Join Our Green Family?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            We are always looking for passionate individuals who believe in organic farming and
            sustainable living. Get in touch with us today.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-3 font-semibold text-white shadow transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
