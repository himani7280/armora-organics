"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiMail, FiPhone, FiFileText, FiMessageSquare, FiChevronRight } from "react-icons/fi";
import { contactContent } from "@/lib/content";

const data = contactContent;

const empty = { name: "", email: "", phone: "", subject: "", message: "" };
const box = "w-full rounded-xl border border-slate-200 bg-transparent py-4 pl-14 pr-4 text-[15px] text-slate-700 outline-none transition-colors focus:border-leaf";

export default function ContactForm() {
  const f = data.form;
  const router = useRouter();
  const [v, setV] = useState(empty);
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setV({ ...v, [k]: e.target.value });
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setV(empty);
    router.push("/thank-you");
  };
  const ph = (label: string, req: boolean) => (req ? `${label} *` : label);
  return (
    <div className="rounded-2xl border border-slate-100 p-6 sm:p-9">
      <h2 className="text-4xl sm:text-5xl">{f.title} <span className="text-gold">{f.accent}</span></h2>
      <span className="mt-4 block h-[3px] w-14 bg-gold" />
      <p className="mt-4 text-lg text-slate-600">{f.subtitle}</p>
      <form onSubmit={submit} className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="group relative block">
          <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiUser className="h-4 w-4" />
          </span>
          <input required value={v.name} onChange={set("name")} placeholder={ph(f.fields.name, true)} aria-label={f.fields.name} className={box} />
        </label>
        <label className="group relative block">
          <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiMail className="h-4 w-4" />
          </span>
          <input required type="email" value={v.email} onChange={set("email")} placeholder={ph(f.fields.email, true)} aria-label={f.fields.email} className={box} />
        </label>
        <label className="group relative block">
          <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiPhone className="h-4 w-4" />
          </span>
          <input type="tel" value={v.phone} onChange={set("phone")} placeholder={ph(f.fields.phone, false)} aria-label={f.fields.phone} className={box} />
        </label>
        <label className="group relative block">
          <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiFileText className="h-4 w-4" />
          </span>
          <input value={v.subject} onChange={set("subject")} placeholder={ph(f.fields.subject, false)} aria-label={f.fields.subject} className={box} />
        </label>
        <label className="group relative block sm:col-span-2">
          <span className="absolute left-3.5 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiMessageSquare className="h-4 w-4" />
          </span>
          <textarea required rows={5} value={v.message} onChange={set("message")} placeholder={ph(f.fields.message, true)} aria-label={f.fields.message} className={`${box} resize-y`} />
        </label>
        <div className="sm:col-span-2">
          <button type="submit" className="group inline-flex items-center gap-8 rounded-full bg-forest py-2 pl-12 pr-2 font-ui text-lg font-medium text-white shadow-md transition-all duration-300 hover:bg-forest-deep hover:shadow-lg">
            {f.button}
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-forest transition-all duration-300 group-hover:bg-gold-light group-hover:scale-105"><FiChevronRight className="h-5 w-5" /></span>
          </button>
        </div>
      </form>
    </div>
  );
}
