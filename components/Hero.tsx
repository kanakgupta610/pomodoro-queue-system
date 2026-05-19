"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SCENES } from "@/lib/data";

export default function Hero() {
  const [scene, setScene] = useState(0);
  const [prevScene, setPrevScene] = useState<number | null>(null);
  const [captionVisible, setCaptionVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setCaptionVisible(false);
      setTimeout(() => {
        setScene((s) => {
          setPrevScene(s);
          return (s + 1) % HERO_SCENES.length;
        });
        setCaptionVisible(true);
      }, 600);
    }, 8500);
    return () => clearInterval(t);
  }, []);

  const handleDotClick = (idx: number) => {
    if (idx === scene) return;
    setCaptionVisible(false);
    setTimeout(() => {
      setPrevScene(scene);
      setScene(idx);
      setCaptionVisible(true);
    }, 600);
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[720px] overflow-hidden bg-dark"
    >
      {/* Subtle letterbox bars */}
      <div className="absolute left-0 right-0 top-0 h-[36px] bg-dark z-10 pointer-events-none animate-letterbox-top" />
      <div className="absolute left-0 right-0 bottom-0 h-[36px] bg-dark z-10 pointer-events-none animate-letterbox-bottom" />

      {/* Sliding video scenes */}
      {HERO_SCENES.map((s, i) => {
        const isCurrent = i === scene;
        const isPrev = i === prevScene;
        const transform = isCurrent
          ? "translate-x-0"
          : isPrev
          ? "-translate-x-full"
          : "translate-x-full";
        const opacity = isCurrent ? "opacity-100" : "opacity-0";
        const transition =
          isCurrent || isPrev
            ? "transition-[transform,opacity] duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            : "";
        return (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full overflow-hidden will-change-transform ${transform} ${opacity} ${transition}`}
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
        );
      })}

      {/* Refined cinematic grading — quieter, warmer, less red */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(20,12,8,0.55) 100%), linear-gradient(180deg, rgba(20,12,8,0.35) 0%, rgba(20,12,8,0.25) 50%, rgba(20,12,8,0.75) 100%)",
        }}
      />
      <div className="hero-grain absolute inset-0 z-[3] pointer-events-none opacity-[0.05]" />

      {/* Minimal scene indicator — three slim bars */}
      <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 z-[15] flex gap-3 items-center">
        {HERO_SCENES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-[1.5px] transition-all duration-[900ms] ease-out cursor-pointer ${
              i === scene ? "w-9 bg-yellow-brand/80" : "w-5 bg-cream/25"
            }`}
            aria-label={`Scene ${i + 1}`}
          />
        ))}
      </div>

      {/* Scene caption — quiet, right-aligned */}
      <div
        className={`hidden md:block absolute bottom-[110px] right-12 z-[9] text-right text-cream/75 max-w-[280px] transition-opacity duration-[1100ms] ${
          captionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="font-sans text-[0.65rem] text-yellow-brand/70 tracking-[0.35em] uppercase mb-2">
          0{scene + 1} · {String(HERO_SCENES.length).padStart(2, "0")}
        </div>
        <div className="font-italic italic text-lg leading-snug text-cream/85">
          {HERO_SCENES[scene].title}
        </div>
      </div>

      {/* Main hero content */}
      <div className="absolute inset-0 z-[8] flex flex-col items-center justify-center text-center px-8">
        <div
          className="w-[140px] md:w-[180px] aspect-square mb-9 opacity-0 scale-75 animate-logo-in"
          style={{
            animationDelay: "0.6s",
            filter: "drop-shadow(0 18px 50px rgba(0,0,0,0.45))",
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
          className="font-sans text-[0.7rem] tracking-[0.5em] uppercase text-yellow-brand/85 mb-8 opacity-0 animate-hero-up flex items-center gap-5"
          style={{ animationDelay: "1s" }}
        >
          <span className="w-10 h-px bg-yellow-brand/70" />
          Bandra · Mumbai · Est. 2024
          <span className="w-10 h-px bg-yellow-brand/70" />
        </div>

        <p
          className="font-italic italic text-base md:text-lg text-cream/80 tracking-[0.08em] mb-12 opacity-0 animate-hero-up"
          style={{ animationDelay: "1.3s" }}
        >
          Hand-rolled Pasta &nbsp;·&nbsp; Specialty Coffee
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

      {/* Scroll cue — single hairline */}
      <div
        className="absolute bottom-[48px] left-1/2 -translate-x-1/2 z-[11] flex flex-col items-center opacity-0 animate-hero-up"
        style={{ animationDelay: "2.2s" }}
      >
        <div
          className="w-px h-10 animate-cue-drop"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,200,66,0.55), transparent)",
          }}
        />
      </div>
    </section>
  );
}
