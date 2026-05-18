"use client";
import { useState } from "react";
import { MENU_PREVIEW } from "@/lib/data";

const CATS = [
  { id: "all", label: "All" },
  { id: "antipasti", label: "Antipasti" },
  { id: "pasta", label: "Pasta" },
  { id: "coffee", label: "Coffee" },
  { id: "dolci", label: "Dolci" },
] as const;

type Cat = (typeof CATS)[number]["id"];

export default function MenuPreview({ onOpenFull }: { onOpenFull: () => void }) {
  const [active, setActive] = useState<Cat>("all");
  const items = active === "all" ? MENU_PREVIEW : MENU_PREVIEW.filter((m) => m.cat === active);

  return (
    <section id="menu" className="bg-brand-red py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-dark to-transparent" />

      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 mb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-yellow-brand mb-6">
            <span className="w-9 h-[1.5px] bg-yellow-brand" />
            What We Serve
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.9]">
            The
            <br />
            <span className="text-yellow-brand">Menu</span>
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-col gap-2 lg:items-end">
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`border px-5 py-2 font-sans text-xs tracking-[0.12em] uppercase font-medium transition-all ${
                active === c.id
                  ? "bg-yellow-brand border-yellow-brand text-dark"
                  : "border-cream/30 text-cream/70 hover:bg-yellow-brand hover:border-yellow-brand hover:text-dark"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/15">
        {items.map((m, i) => (
          <div
            key={i}
            className="bg-brand-red p-8 lg:p-10 transition-colors relative overflow-hidden group hover:bg-brand-red-dark"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-yellow-brand scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500" />
            <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-yellow-brand mb-3">
              {m.category}
            </div>
            <div className="font-serif text-xl italic font-bold text-cream mb-2">
              {m.name}
            </div>
            {m.desc && (
              <div className="text-sm text-cream/65 leading-relaxed mb-4">
                {m.desc}
              </div>
            )}
            <div className="font-display text-2xl text-yellow-brand tracking-wide">
              {m.price}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 mt-14 text-center">
        <button onClick={onOpenFull} className="btn-yellow">
          View Full Menu →
        </button>
        <p className="text-cream/60 text-xs mt-5 tracking-wider">
          Egg-free, vegan, gluten-free alternatives available · GST & Service
          Charge applicable
        </p>
      </div>
    </section>
  );
}
