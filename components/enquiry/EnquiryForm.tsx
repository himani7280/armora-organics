"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiMail, FiPhone, FiGrid, FiFileText, FiMessageSquare, FiChevronDown } from "react-icons/fi";
import { enquiryContent } from "@/lib/content";
import { Button } from "@/components/ui";

const data = enquiryContent;

const empty = { name: "", email: "", phone: "", type: "", subject: "", message: "" };
const box = "w-full rounded-lg border border-slate-200 bg-transparent py-3.5 pl-14 pr-4 text-[15px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-leaf";
const labelCls = "mb-2 block font-body text-[17px] font-bold text-forest";

type Key = keyof typeof empty;

export default function EnquiryForm() {
  const f = data.form;
  const router = useRouter();
  const [v, setV] = useState(empty);
  const set = (k: Key) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setV({ ...v, [k]: e.target.value });
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setV(empty);
    router.push("/thank-you");
  };
  const star = <span className="text-red-600"> *</span>;
  return (
    <div className="reveal-right rounded-2xl border border-slate-200 p-6 sm:p-9 bg-white shadow-xs h-full flex flex-col justify-between">
      <p className="flex items-center gap-4 font-ui text-sm font-medium uppercase text-gold">
        <span className="h-[3px] w-9 bg-gold" />{f.eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl font-extrabold sm:text-5xl">{f.title} <span className="text-gold">{f.accent}</span></h2>
      <p className="mt-3 text-[17px] leading-7 text-slate-600">{f.subtitle}</p>
      <form onSubmit={submit} className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className={labelCls}>{f.labels.name}{star}</label>
          <div className="group relative">
            <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
              <FiUser className="h-4 w-4" />
            </span>
            <input id="enq-name" required value={v.name} onChange={set("name")} placeholder={f.placeholders.name} className={box} />
          </div>
        </div>
        <div>
          <label htmlFor="enq-email" className={labelCls}>{f.labels.email}{star}</label>
          <div className="group relative">
            <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
              <FiMail className="h-4 w-4" />
            </span>
            <input id="enq-email" required type="email" value={v.email} onChange={set("email")} placeholder={f.placeholders.email} className={box} />
          </div>
        </div>
        <div>
          <label htmlFor="enq-phone" className={labelCls}>{f.labels.phone}{star}</label>
          <div className="group relative">
            <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
              <FiPhone className="h-4 w-4" />
            </span>
            <input id="enq-phone" required type="tel" value={v.phone} onChange={set("phone")} placeholder={f.placeholders.phone} className={box} />
          </div>
        </div>
        <div>
          <label htmlFor="enq-type" className={labelCls}>{f.labels.type}{star}</label>
          <div className="group relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-focus-within:bg-leaf group-focus-within:text-white">
              <FiGrid className="h-4 w-4" />
            </span>
            <select id="enq-type" required value={v.type} onChange={set("type")} className={`${box} appearance-none ${v.type ? "" : "text-slate-400"}`}>
              <option value="">{f.placeholders.type}</option>
              {f.types.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
            <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-forest" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="enq-subject" className={labelCls}>{f.labels.subject}{star}</label>
          <div className="group relative">
            <span className="absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
              <FiFileText className="h-4 w-4" />
            </span>
            <input id="enq-subject" required value={v.subject} onChange={set("subject")} placeholder={f.placeholders.subject} className={box} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="enq-message" className={labelCls}>{f.labels.message}{star}</label>
          <div className="group relative">
            <span className="absolute left-3.5 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-200 group-hover:bg-forest/10 group-focus-within:bg-leaf group-focus-within:text-white">
              <FiMessageSquare className="h-4 w-4" />
            </span>
            <textarea id="enq-message" required rows={4} value={v.message} onChange={set("message")} placeholder={f.placeholders.message} className={`${box} resize-y`} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" size="lg">
            {f.button}
          </Button>
        </div>
      </form>
    </div>
  );
}
