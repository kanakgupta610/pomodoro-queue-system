"use client";
import { FULL_MENU } from "@/lib/data";
import { useEffect } from "react";

export default function MenuModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-dark/90 z-[5000] flex items-center justify-center backdrop-blur-md p-4 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-body bg-warm-bg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 bg-brand-red border-0 text-lg cursor-pointer text-cream z-[1] w-9 h-9 flex items-center justify-center"
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className="p-8 md:p-12">
          <div className="font-display text-5xl text-brand-red tracking-wide mb-2">
            The Full Menu
          </div>
          <div className="font-italic italic text-text-muted text-lg mb-10">
            Whatever the question, pasta is the answer
          </div>
          <p className="text-xs text-text-muted mb-6">
            * Egg-free, vegan, gluten-free alternatives available · GST &amp;
            Service Charge as applicable
          </p>

          {FULL_MENU.map((section) => (
            <div key={section.title}>
              <div className="font-display text-2xl tracking-[0.12em] text-dark border-b-2 border-brand-red pb-2 mt-8 mb-5">
                {section.title}
              </div>
              <ul className="list-none">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 py-3.5 border-b border-black/[0.06]"
                  >
                    <div>
                      <div className="font-serif italic text-base text-dark font-bold">
                        {item.name}
                      </div>
                      {item.desc && (
                        <div className="text-xs text-text-muted mt-1 leading-relaxed">
                          {item.desc}
                        </div>
                      )}
                    </div>
                    <div className="font-display text-lg text-brand-red whitespace-nowrap flex-shrink-0">
                      {item.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
