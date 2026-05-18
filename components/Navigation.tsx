"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-brand-red/95 backdrop-blur-xl py-3 px-4 lg:px-12 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "py-5 px-4 lg:px-12"
      }`}
    >
      <a
        href="#hero"
        className={`flex items-center transition-all ${
          scrolled ? "h-9" : "h-11"
        }`}
      >
        <Image
          src="/assets/logo.png"
          alt="Pomodoro"
          width={80}
          height={80}
          className="h-full w-auto rounded-full"
          priority
        />
      </a>

      <ul className="hidden lg:flex gap-10 list-none">
        {[
          ["Story", "story"],
          ["Kitchen", "kitchen"],
          ["Menu", "menu"],
          ["The Space", "atmosphere"],
          ["Reviews", "reviews"],
        ].map(([label, id]) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-cream/90 hover:text-yellow-brand transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-yellow-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo("waitlist")}
        className="bg-yellow-brand text-dark border-0 px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] cursor-pointer transition-all hover:bg-cream hover:-translate-y-0.5"
      >
        Join Wait List
      </button>
    </nav>
  );
}
