"use client";
import { createContext, useCallback, useContext, useState, ReactNode } from "react";

type ToastCtx = { show: (msg: string) => void };
const Ctx = createContext<ToastCtx>({ show: () => {} });

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);

  const show = useCallback((m: string) => {
    setMsg(m);
    setOpen(true);
    window.clearTimeout((show as any)._t);
    (show as any)._t = window.setTimeout(() => setOpen(false), 3500);
  }, []);

  return (
    <Ctx.Provider value={{ show }}>
      {children}
      <div
        className={`fixed bottom-8 right-8 z-[9999] max-w-sm bg-dark text-cream border-l-[3px] border-yellow-brand px-6 py-4 text-sm shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-[200%]"
        }`}
      >
        {msg}
      </div>
    </Ctx.Provider>
  );
}

export const useToast = () => useContext(Ctx);
