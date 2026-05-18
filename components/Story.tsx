"use client";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Story() {
  useScrollReveal();

  return (
    <section id="story" className="py-36 bg-warm-bg relative overflow-hidden">
      <div
        className="absolute font-display text-[24vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
        style={{
          color: "rgba(229,80,58,0.05)",
          letterSpacing: "0.04em",
        }}
      >
        POMODORO
      </div>

      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">
        <div className="relative reveal">
          <div className="absolute top-8 -left-6 bg-brand-red text-cream font-display text-[0.95rem] tracking-[0.18em] py-3.5 px-5 [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 z-[2]">
            Pasta & Coffee
          </div>
          <div className="relative w-full aspect-[4/5] shadow-[0_30px_80px_rgba(142,40,24,0.15)]">
            <Image
              src="/assets/IMG_8108.jpg"
              alt="Pomodoro espresso bar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-[10%] -right-[8%] w-1/2 aspect-square border-8 border-warm-bg shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <Image
              src="/assets/1778958198707_image.jpg"
              alt="Truffle pasta"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>

        <div>
          <div className="section-label reveal">Our Story</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-7 text-dark reveal">
            Where <em className="italic text-brand-red">Italian soul</em>{" "}
            meets
            <br />
            Mumbai&apos;s beating heart
          </h2>
          <p className="text-base leading-[1.85] text-text-muted mb-5 reveal">
            Tucked into the sun-drenched lanes of Bandra West, Pomodoro was
            born from one obsession:{" "}
            <em className="text-brand-red italic font-medium">perfect pasta</em>.
            Not the kind you find in chain restaurants, but the hand-rolled,
            lovingly crafted kind — made fresh every single day in our open
            kitchen where you can watch every strand come to life.
          </p>
          <p className="text-base leading-[1.85] text-text-muted mb-5 reveal">
            The name says it all.{" "}
            <em className="text-brand-red italic font-medium">Pomodoro</em> —
            Italian for tomato — is the soul of our kitchen. Our pastas are
            extruded and rolled in-house. Our coffee is brewed with intention.
            Our antipasti are a love letter to the Italian table.
          </p>
          <p className="text-base leading-[1.85] text-text-muted mb-5 reveal">
            We don&apos;t take reservations because the best things in life are
            worth a little wait. Pull up a stool at our espresso bar, sip
            something beautiful, and know that your table — and something
            extraordinary — is coming.
          </p>
          <div className="font-italic italic text-2xl text-brand-red mt-8 reveal">
            — Paint the Town Pomodoro
          </div>

          <div className="flex gap-10 mt-12 pt-8 border-t border-black/10 reveal">
            <div>
              <div className="font-display text-5xl text-brand-red leading-none">
                4.0
              </div>
              <div className="text-xs text-text-muted uppercase tracking-[0.15em] mt-1">
                Google Rating
              </div>
            </div>
            <div>
              <div className="font-display text-5xl text-brand-red leading-none">
                781+
              </div>
              <div className="text-xs text-text-muted uppercase tracking-[0.15em] mt-1">
                Reviews
              </div>
            </div>
            <div>
              <div className="font-display text-5xl text-brand-red leading-none">
                30+
              </div>
              <div className="text-xs text-text-muted uppercase tracking-[0.15em] mt-1">
                Pasta Styles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
