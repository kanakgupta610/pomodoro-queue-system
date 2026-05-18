import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-red py-20 pb-10 relative overflow-hidden text-cream">
      <div
        className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 font-display text-[24vw] whitespace-nowrap pointer-events-none"
        style={{
          color: "rgba(245,232,208,0.05)",
          letterSpacing: "0.04em",
        }}
      >
        POMODORO
      </div>

      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-16 pb-12 border-b border-cream/15">
          <div>
            <div className="w-[90px] h-[90px] rounded-full mb-5 relative overflow-hidden">
              <Image
                src="/assets/logo.png"
                alt="Pomodoro"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-italic italic text-base text-cream/85 leading-relaxed mb-6">
              Your cozy neighbourhood pasta bar specialising in hand-rolled
              pastas & specialty coffee. Paint the Town Pomodoro.
            </p>
            <div className="flex gap-3">
              {[
                ["IG", "https://www.instagram.com/pomodoro.bandra"],
                [
                  "Z",
                  "https://www.zomato.com/mumbai/pomodoro-pasta-coffee-bar-pali-hill-bandra-west",
                ],
                ["G", "https://www.google.com/maps?q=Pomodoro+Bandra"],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-cream/30 flex items-center justify-center text-cream text-sm no-underline transition-all font-semibold hover:border-yellow-brand hover:text-yellow-brand"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-yellow-brand mb-5">
              Explore
            </div>
            <ul className="list-none flex flex-col gap-3">
              {[
                ["Our Story", "#story"],
                ["The Kitchen", "#kitchen"],
                ["Menu", "#menu"],
                ["The Space", "#atmosphere"],
                ["Reviews", "#reviews"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-cream/85 no-underline text-sm transition-colors hover:text-yellow-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-yellow-brand mb-5">
              Hours
            </div>
            <Row label="Mon – Sun" value="12pm – 11pm" />
            <Row label="Peak hours" value="8pm – 10pm" />
            <Row label="Wait time" value="~30–60 min" />
            <div className="text-yellow-brand text-xs mt-3 font-semibold tracking-[0.1em] uppercase">
              ● Currently Open
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-yellow-brand mb-5">
              Find Us
            </div>
            <Info label="Address" value="Shop No. 2, 16th Rd, Bandra West, Mumbai — 400050" />
            <Info label="Phone" value="078 8788 6327" />
            <Info label="Price" value="₹800 – ₹1,800 per person" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-cream/65">
            © 2025 <span className="text-yellow-brand">Pomodoro</span> Pasta &
            Coffee · Bandra, Mumbai
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-cream/60 no-underline hover:text-yellow-brand">
              Privacy
            </a>
            <a href="#" className="text-xs text-cream/60 no-underline hover:text-yellow-brand">
              Terms
            </a>
            <a href="#" className="text-xs text-cream/60 no-underline hover:text-yellow-brand">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm text-cream/85 mb-1.5">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 mb-4">
      <span className="text-xs text-cream/50 uppercase tracking-[0.15em]">
        {label}
      </span>
      <span className="text-sm text-cream leading-relaxed">{value}</span>
    </div>
  );
}
