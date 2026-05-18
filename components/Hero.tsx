"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SCENES } from "@/lib/data";

export default function Hero() {
  const [scene, setScene] = useState(0);
  const [captionVisible, setCaptionVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setCaptionVisible(false);
      setTimeout(() => {
        setScene((s) => (s + 1) % HERO_SCENES.length);
        setCaptionVisible(true);
      }, 400);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const handleDotClick = (idx: number) => {
    setCaptionVisible(false);
    setTimeout(() => {
      setScene(idx);
      setCaptionVisible(true);
    }, 400);
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[720px] overflow-hidden bg-brand-red"
    >
      {/* Letterbox bars */}
      <div className="absolute left-0 right-0 top-0 h-[60px] bg-dark z-10 pointer-events-none animate-letterbox-top" />
      <div className="absolute left-0 right-0 bottom-0 h-[60px] bg-dark z-10 pointer-events-none animate-letterbox-bottom" />

      {/* Video layers */}
      {HERO_SCENES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            i === scene ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 animate-ken-burns"
          >
            <source src={s.video} type="video/mp4" />
          </video>
        </div>
      ))}

      {/* Cinematic grading */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(26,14,8,0.55) 100%), linear-gradient(180deg, rgba(229,80,58,0.25) 0%, rgba(26,14,8,0.4) 50%, rgba(26,14,8,0.75) 100%)",
        }}
      />
      <div className="hero-grain absolute inset-0 z-[3] pointer-events-none opacity-[0.07]" />

      {/* Scene indicator */}
      <div className="absolute top-[80px] md:top-[90px] left-1/2 -translate-x-1/2 z-[15] flex gap-2 items-center">
        {HERO_SCENES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-[2px] transition-all duration-500 cursor-pointer ${
              i === scene ? "w-11 bg-yellow-brand" : "w-7 bg-cream/30"
            }`}
            aria-label={`Scene ${i + 1}`}
          />
        ))}
        <span className="ml-4 font-sans text-[0.7rem] text-cream/70 tracking-[0.25em] uppercase font-medium hidden md:inline">
          A Walk Through
        </span>
      </div>

      {/* Scene caption */}
      <div
        className={`hidden md:block absolute bottom-[100px] right-12 z-[9] text-right text-cream/85 max-w-[320px] transition-opacity duration-700 ${
          captionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="font-display text-sm text-yellow-brand tracking-[0.15em] mb-1">
          SCENE · 0{scene + 1}
        </div>
        <div className="font-serif italic text-xl leading-tight mb-1">
          {HERO_SCENES[scene].title}
        </div>
        <div className="text-xs leading-relaxed opacity-70">
          {HERO_SCENES[scene].text}
        </div>
      </div>

      {/* Main hero content */}
      <div className="absolute inset-0 z-[8] flex flex-col items-center justify-center text-center px-8">
        <div
          className="w-[160px] md:w-[220px] aspect-square mb-8 opacity-0 scale-75 animate-logo-in"
          style={{
            animationDelay: "0.6s",
            filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
          }}
        >
          <Image
            src="/assets/logo.png"
            alt="Pomodoro Logo"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>

        <div
          className="font-sans text-xs tracking-[0.4em] uppercase text-yellow-brand mb-5 opacity-0 animate-hero-up flex items-center gap-4"
          style={{ animationDelay: "1s" }}
        >
          <span className="w-8 h-px bg-yellow-brand" />
          Bandra · Mumbai · Est. 2024
          <span className="w-8 h-px bg-yellow-brand" />
        </div>

        <h1
          className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.15] mb-2 opacity-0 animate-hero-up"
          style={{
            animationDelay: "1.2s",
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}
        >
          Paint the town{" "}
          <em className="text-yellow-brand">Pomodoro</em>
        </h1>

        <p
          className="font-sans text-sm md:text-[0.95rem] text-cream/75 tracking-[0.2em] uppercase font-light mb-11 opacity-0 animate-hero-up"
          style={{ animationDelay: "1.4s" }}
        >
          Hand-rolled Pasta · Specialty Coffee
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 opacity-0 animate-hero-up"
          style={{ animationDelay: "1.6s" }}
        >
          <button
            onClick={() => scrollTo("menu")}
            className="btn-cinema-primary"
          >
            Explore the Menu →
          </button>
          <button
            onClick={() => scrollTo("waitlist")}
            className="btn-cinema-ghost"
          >
            Join Wait List
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-[90px] left-1/2 -translate-x-1/2 z-[11] text-cream/60 text-[0.65rem] tracking-[0.3em] uppercase flex flex-col items-center gap-3 opacity-0 animate-hero-up"
        style={{ animationDelay: "2.2s" }}
      >
        <span>Scroll</span>
        <div
          className="w-px h-9 animate-cue-drop"
          style={{
            background: "linear-gradient(to bottom, #F5C842, transparent)",
          }}
        />
      </div>
    </section>
  );
}
