import { LuLeaf, LuSprout, LuHandshake, LuMessageSquareMore } from "react-icons/lu";
import { enquiryContent } from "@/lib/content";

const data = enquiryContent;

const icons: Record<string, React.ReactNode> = {
  leaf: <LuLeaf />, sprout: <LuSprout />, handshake: <LuHandshake />, chat: <LuMessageSquareMore />,
};

export default function Intro() {
  const i = data.intro;
  return (
    <div className="reveal-left flex flex-col justify-between h-full">
      <p className="flex items-center gap-4 font-ui text-sm font-medium uppercase text-gold">
        <span className="h-[3px] w-9 bg-gold" />{i.eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-5xl font-extrabold leading-[1.15] sm:text-6xl">
        {i.titleLine1}
        <span className="block text-gold">{i.titleAccent}</span>
      </h2>
      <span className="mt-5 block h-[3px] w-14 bg-gold" />
      <p className="mt-5 text-lg leading-8 text-slate-600">{i.text}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {i.cards.map((c) => (
          <div key={c.title} className="group flex gap-4 rounded-xl border border-slate-100 p-5 transition-all duration-300 hover:border-mint hover:shadow-md cursor-pointer">
            <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-forest/10 text-3xl text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
              {icons[c.icon]}
            </span>
            <div>
              <h3 className="font-serif text-lg font-extrabold text-forest transition-colors duration-200 group-hover:text-leaf">{c.title}</h3>
              <p className="mt-1 text-[15px] leading-6 text-slate-500">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
