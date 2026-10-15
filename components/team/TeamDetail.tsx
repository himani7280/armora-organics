import Image from "next/image";
import { FaLeaf } from "react-icons/fa6";
import { FiBriefcase, FiMail, FiPhone } from "react-icons/fi";
import type { TeamMember } from "@/lib/content";
import { Button } from "@/components/ui";

export default function TeamDetail({ member: m }: { member: TeamMember }) {
  return (
    <section className="py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x grid items-stretch gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
        <div className="rounded-3xl border border-mint bg-gradient-to-br from-[#f1f7ea] to-white p-8 text-center shadow-lg h-full flex flex-col justify-between">
          <div>
            <Image src={m.image} alt={m.name} width={260} height={260} className="mx-auto h-60 w-60 rounded-full border-4 border-white object-cover shadow-xl" />
            <h2 className="mt-6 text-3xl text-forest">{m.name}</h2>
            <p className="mt-2 font-medium text-leaf">{m.role}</p>
          </div>
          <ul className="mt-6 space-y-3 text-left text-[15px] text-slate-700 pt-6 border-t border-mint/60">
            <li className="flex items-center gap-3"><FiBriefcase className="text-gold" /> {m.experience} Experience</li>
            <li className="flex items-center gap-3"><FiMail className="text-gold" /> <a href={`mailto:${m.email}`} className="hover:text-leaf">{m.email}</a></li>
            <li className="flex items-center gap-3"><FiPhone className="text-gold" /> <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="hover:text-leaf">{m.phone}</a></li>
          </ul>
        </div>
        <div className="h-full flex flex-col justify-between">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">About <span className="text-gold">{m.name}</span></h1>
          <div className="mt-6 space-y-4 text-[17px] leading-8 text-slate-600">
            {m.about.map((p) => (<p key={p}>{p}</p>))}
          </div>
          <h3 className="mt-8 text-2xl text-forest">Expertise</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {m.skills.map((s) => (
              <li key={s} className="flex items-center gap-3 rounded-full border border-mint px-5 py-3 text-slate-700">
                <FaLeaf className="text-leaf" /> {s}
              </li>
            ))}
          </ul>
          <Button href="/our-team" size="lg" className="mt-10">
            Back to Team
          </Button>
        </div>
      </div>
    </section>
  );
}
