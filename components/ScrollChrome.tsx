"use client";
import { useEffect, useState } from "react";

export default function ScrollChrome() {
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((s / h) * 100);
      setShowBackTop(s > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 h-[2px] bg-yellow-brand z-[9999] transition-[width] duration-100" style={{ width: `${progress}%` }} />
      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-8 w-12 h-12 bg-brand-red text-cream border-0 cursor-pointer flex items-center justify-center text-xl z-[1000] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.3)] hover:bg-brand-red-dark hover:-translate-y-1"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
