"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Kitchen() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cells = [
    {
      num: "01",
      title: "Live",
      desc: "The kitchen is open by design. Pull up a stool at the marble counter and watch every strand of pasta come to life ten feet in front of you.",
      media: (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/v2.mp4" type="video/mp4" />
        </video>
      ),
    },
    {
      num: "02",
      title: "The Shaping",
      desc: "Chitarra cut on iron strings. Tortellini folded thirty an hour. Gnocchi rolled on wooden boards. Slow, intentional work.",
      media: (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/v3.mp4" type="video/mp4" />
        </video>
      ),
    },
    {
      num: "03",
      title: "The Plate",
      desc: "Tossed in sauce that took six hours to build. Finished with cheese shaved tableside. To your fork in under ten minutes.",
      media: (
        <Image
          src="/assets/1778958198707_image.jpg"
          alt="Truffle pasta plated"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ),
    },
  ];

  return (
    <section
      id="kitchen"
      className="bg-dark relative overflow-hidden py-28 lg:py-36"
    >
      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 mb-16 lg:mb-20 text-center">
        <div className="flex items-center justify-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-yellow-brand/85 mb-6">
          <span className="w-9 h-px bg-yellow-brand/60" />
          In The Kitchen
          <span className="w-9 h-px bg-yellow-brand/60" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] mb-5">
          Every strand,
          <br />
          <em className="italic text-yellow-brand">hand-rolled.</em>
        </h2>
        <p className="font-italic italic text-lg text-cream/65 leading-relaxed max-w-xl mx-auto">
          Our kitchen is open for a reason — what we do here is the whole
          point.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-dark"
      >
        {cells.map((c, i) => (
          <div
            key={c.num}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(90px)",
              transition:
                "opacity 1.6s ease-out, transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${i * 260}ms`,
            }}
          >
            <ProcessCell num={c.num} title={c.title} desc={c.desc} media={c.media} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessCell({
  num,
  title,
  desc,
  media,
}: {
  num: string;
  title: string;
  desc: string;
  media: React.ReactNode;
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-brand-red-deep group">
      <div className="absolute inset-0">{media}</div>
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(26,14,8,0.9) 100%)",
        }}
      />
      <div className="absolute bottom-8 left-8 right-8 z-[3] text-cream">
        <div className="font-display text-6xl text-yellow-brand leading-none mb-2">
          {num}
        </div>
        <div className="font-serif italic text-2xl mb-2">{title}</div>
        <div className="text-sm leading-relaxed text-cream/70">{desc}</div>
      </div>
    </div>
  );
}
