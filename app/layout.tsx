import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pomodoro — Pasta & Coffee · Bandra, Mumbai",
  description:
    "Your cozy neighbourhood pasta bar specialising in hand-rolled pastas and specialty coffee. Paint the Town Pomodoro.",
  keywords: [
    "Pomodoro",
    "Bandra",
    "Italian restaurant Mumbai",
    "pasta",
    "coffee",
    "Bandra West",
  ],
  openGraph: {
    title: "Pomodoro — Pasta & Coffee",
    description: "Hand-rolled pasta and specialty coffee in Bandra, Mumbai.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
