"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiMail, FiPhone, FiFileText, FiMessageSquare } from "react-icons/fi";
import { contactContent } from "@/lib/content";
import { Button } from "@/components/ui";

const data = contactContent;

const empty = { name: "", email: "", phone: "", subject: "", message: "" };
const box = "w-full rounded-xl border border-slate-200 bg-transparent py-2.5 pl-12 pr-4 text-[14.5px] text-slate-700 outline-none transition-colors focus:border-leaf";

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
    <div className="reveal-left rounded-2xl border border-slate-100 p-5 sm:p-7 h-full flex flex-col justify-between">
      <div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[54px] leading-[1.08]">{f.title} <span className="text-gold">{f.accent}</span></h2>
        <span className="mt-2 block h-[3px] w-12 bg-gold" />
        <p className="mt-2 text-base text-slate-600 sm:text-[16px]">{f.subtitle}</p>
      </div>
      <form onSubmit={submit} className="mt-4 grid gap-3.5 sm:grid-cols-2">
        <label className="group relative block">
          <span className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiUser className="h-3.5 w-3.5" />
          </span>
          <input required value={v.name} onChange={set("name")} placeholder={ph(f.fields.name, true)} aria-label={f.fields.name} className={box} />
        </label>
        <label className="group relative block">
          <span className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiMail className="h-3.5 w-3.5" />
          </span>
          <input required type="email" value={v.email} onChange={set("email")} placeholder={ph(f.fields.email, true)} aria-label={f.fields.email} className={box} />
        </label>
        <label className="group relative block">
          <span className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiPhone className="h-3.5 w-3.5" />
          </span>
          <input type="tel" value={v.phone} onChange={set("phone")} placeholder={ph(f.fields.phone, false)} aria-label={f.fields.phone} className={box} />
        </label>
        <label className="group relative block">
          <span className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiFileText className="h-3.5 w-3.5" />
          </span>
          <input value={v.subject} onChange={set("subject")} placeholder={ph(f.fields.subject, false)} aria-label={f.fields.subject} className={box} />
        </label>
        <label className="group relative block sm:col-span-2">
          <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
            <FiMessageSquare className="h-3.5 w-3.5" />
          </span>
          <textarea required rows={3} value={v.message} onChange={set("message")} placeholder={ph(f.fields.message, true)} aria-label={f.fields.message} className={`${box} resize-y`} />
        </label>
        <div className="sm:col-span-2">
          <Button type="submit" size="md">
            {f.button}
          </Button>
        </div>
      </form>
    </div>
  );
}
