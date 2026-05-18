"use client";
import { supabase } from '@/lib/supabase'
import { useState } from "react";
import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kitchen from "@/components/Kitchen";
import Marquee from "@/components/Marquee";
import MenuModal from "@/components/MenuModal";
import MenuPreview from "@/components/MenuPreview";
import Navigation from "@/components/Navigation";
import NoticeBar from "@/components/NoticeBar";
import Reviews from "@/components/Reviews";
import ScrollChrome from "@/components/ScrollChrome";
import Story from "@/components/Story";
import { ToastProvider } from "@/components/Toast";
import WaitList from "@/components/WaitList";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

return (
    <ToastProvider>
      <ScrollChrome />
      <NoticeBar />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Kitchen />
        <MenuPreview onOpenFull={() => setMenuOpen(true)} />
        <Atmosphere />
        <WaitList />
        <Reviews />
      </main>
      <Footer />
      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </ToastProvider>
  );
}
