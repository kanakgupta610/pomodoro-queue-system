"use client";
import { useState } from "react";
import { REVIEWS } from "@/lib/data";
import { useToast } from "./Toast";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Reviews() {
  useScrollReveal();
  const toast = useToast();

  const [stars, setStars] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const submit = () => {
    if (!name.trim() || !text.trim() || !stars) {
      toast.show("Please fill in name, rating and review");
      return;
    }
    toast.show(`🍝 Thanks, ${name}! Your review has been submitted.`);
    setName("");
    setEmail("");
    setText("");
    setStars(0);
    setFiles([]);
  };

  return (
    <section id="reviews" className="bg-dark py-32 relative">
      <div className="max-w-[1300px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6 reveal">
          <div>
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-yellow-brand mb-6">
              <span className="w-9 h-[1.5px] bg-yellow-brand" />
              What People Say
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.9]">
              Guest
              <br />
              <span className="text-yellow-brand">Stories</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <div className="font-display text-6xl lg:text-7xl text-cream leading-none">
              4.0
            </div>
            <div className="text-yellow-brand text-xl tracking-wide">
              ★★★★☆
            </div>
            <div className="text-xs text-cream/50 mt-1">
              781 Google · 911 Zomato · 1,617 Justdial
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/[0.06] mb-12">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-dark border border-cream/[0.04] p-8 transition-colors flex flex-col gap-4 hover:bg-brand-red/[0.06] reveal"
            >
              <div className="text-yellow-brand text-base tracking-wide">
                {"★".repeat(r.stars) + "☆".repeat(5 - r.stars)}
              </div>
              <p className="font-italic italic text-lg text-cream/85 leading-relaxed flex-1">
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-display text-lg text-cream flex-shrink-0">
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm text-cream font-semibold">
                    {r.name}
                  </div>
                  <div className="text-xs text-cream/40">{r.date}</div>
                  <div className="text-[0.65rem] text-yellow-brand tracking-[0.12em] mt-0.5 font-medium uppercase">
                    {r.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add review */}
        <div className="bg-cream/[0.03] border border-cream/[0.08] p-8 lg:p-10 mt-8 reveal">
          <div className="font-serif italic text-2xl text-cream mb-6">
            Share Your Pomodoro Moment
          </div>

          <div className="flex gap-2 mb-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                onClick={() => setStars(n)}
                className={`text-2xl cursor-pointer transition-all ${
                  n <= stars
                    ? "text-yellow-brand scale-110"
                    : "text-cream/20 hover:text-yellow-brand hover:scale-110"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="wait-input"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email (optional)"
              className="wait-input"
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Tell us about your experience..."
              className="wait-input md:col-span-2 min-h-[110px] resize-y"
            />
            <label className="md:col-span-2 border-[1.5px] border-dashed border-cream/20 p-6 text-center cursor-pointer text-cream/50 text-sm transition-all hover:border-yellow-brand hover:text-yellow-brand">
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />
              📸 Add photos or videos · Click to upload
            </label>
          </div>

          {files.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-4">
              {files.map((f, i) =>
                f.type.startsWith("image/") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={URL.createObjectURL(f)}
                    alt={f.name}
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  <div
                    key={i}
                    className="bg-cream/10 px-3 py-2 text-cream/70 text-xs"
                  >
                    📹 {f.name}
                  </div>
                )
              )}
            </div>
          )}

          <button
            onClick={submit}
            className="bg-brand-red text-cream border-0 px-10 py-3.5 font-sans text-sm font-semibold tracking-[0.15em] uppercase cursor-pointer transition-all hover:bg-brand-red-dark hover:-translate-y-0.5"
          >
            Submit Review
          </button>
        </div>
      </div>
    </section>
  );
}
