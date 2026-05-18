"use client";
import Image from "next/image";
import { ATMOSPHERE_STEPS } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Atmosphere() {
  useScrollReveal();

  return (
    <section
      id="atmosphere"
      className="py-32 lg:py-36 bg-warm-bg overflow-hidden relative"
    >
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 font-display text-[18vw] whitespace-nowrap pointer-events-none"
        style={{
          color: "rgba(229,80,58,0.04)",
          letterSpacing: "0.05em",
        }}
      >
        STEP INSIDE
      </div>

      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 mb-16 text-center relative">
        <div className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-red mb-6">
          <span className="w-9 h-[1.5px] bg-brand-red" />
          The Space
          <span className="w-9 h-[1.5px] bg-brand-red" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-black text-dark leading-[1.1]">
          Step <em className="italic text-brand-red">Inside</em>
          <br />
          Pomodoro
        </h2>
        <p className="font-italic italic text-lg text-text-muted mt-4 max-w-xl mx-auto">
          Five rooms. Five moments. One little corner of Italy in Bandra.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        {ATMOSPHERE_STEPS.map((step, i) => {
          const isEven = i % 2 === 1;
          return (
            <div
              key={step.num}
              className={`grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-center mb-16 lg:mb-20 reveal ${
                isEven ? "lg:[grid-template-columns:1fr_1.3fr]" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden aspect-[4/3] shadow-[0_30px_80px_rgba(142,40,24,0.18)] group ${
                  isEven ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute -top-4 -left-4 lg:left-auto lg:right-auto bg-brand-red text-cream font-display text-2xl tracking-[0.12em] py-2 px-5 z-[2] shadow-[0_8px_20px_rgba(142,40,24,0.3)]"
                  style={isEven ? { left: "auto", right: "-1rem" } : {}}>
                  {step.num}
                </div>
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 60%, rgba(229,80,58,0.1) 100%)",
                  }}
                />
              </div>

              <div className={`py-4 ${isEven ? "lg:text-right lg:order-1" : ""}`}>
                <div
                  className={`flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-red mb-4 ${
                    isEven ? "lg:justify-end" : ""
                  }`}
                >
                  {!isEven && <span className="w-9 h-[1.5px] bg-brand-red" />}
                  {step.label}
                  {isEven && (
                    <span className="hidden lg:inline-block w-9 h-[1.5px] bg-brand-red" />
                  )}
                </div>
                <h3 className="font-serif italic text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-dark leading-[1.15] mb-4">
                  {step.title}
                </h3>
                <p className="text-base lg:text-[0.98rem] leading-[1.8] text-text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
