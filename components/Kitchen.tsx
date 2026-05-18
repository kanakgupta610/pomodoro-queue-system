"use client";
import Image from "next/image";

export default function Kitchen() {
  return (
    <section id="kitchen" className="bg-dark relative overflow-hidden">
      {/* Kitchen hero with video bg */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        >
          <source src="/assets/v4.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,14,8,0.5) 0%, transparent 40%, rgba(26,14,8,0.85) 100%)",
          }}
        />
        <div className="absolute inset-0 z-[3] flex flex-col justify-center px-8 md:px-20 max-w-3xl">
          <div className="text-xs tracking-[0.4em] uppercase text-yellow-brand mb-6 flex items-center gap-4">
            <span className="text-brand-red text-[0.6rem]">●</span>
            In The Kitchen · Live
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] mb-6">
            Every strand,
            <br />
            <em className="italic text-yellow-brand">hand-rolled.</em>
          </h2>
          <p className="font-italic italic text-xl text-cream/75 leading-relaxed max-w-md">
            Watch the dough become tagliatelle. The tortellini being folded.
            The sauce reduced to silk. Our kitchen is open for a reason — what
            we do here is the whole point.
          </p>
        </div>
      </div>

      {/* 3-step process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-dark">
        <ProcessCell
          num="01"
          title="The Dough"
          desc='Italian "00" flour, fresh eggs, a generous pinch of salt. Kneaded by hand every morning, rested, then rolled.'
          media={<video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover"><source src="/assets/v2.mp4" type="video/mp4" /></video>}
        />
        <ProcessCell
          num="02"
          title="The Shaping"
          desc="Chitarra cut on iron strings. Tortellini folded thirty an hour. Gnocchi rolled on wooden boards. Slow, intentional work."
          media={<video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover"><source src="/assets/v3.mp4" type="video/mp4" /></video>}
        />
        <ProcessCell
          num="03"
          title="The Plate"
          desc="Tossed in sauce that took six hours to build. Finished with cheese shaved tableside. To your fork in under ten minutes."
          media={
            <Image
              src="/assets/1778958198707_image.jpg"
              alt="Truffle pasta plated"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          }
        />
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
