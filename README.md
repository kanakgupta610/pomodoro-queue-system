# Pomodoro — Pasta & Coffee · Bandra, Mumbai

A cinematic Next.js website for Pomodoro, a hand-rolled pasta & specialty coffee bar in Bandra West, Mumbai. Built with **Next.js 14 (App Router)**, **TypeScript**, and **TailwindCSS**.

## Features

- **Cinematic hero walkthrough** — 4 video scenes auto-cycle with synchronized captions, scene dots, Ken Burns zoom, film grain, and letterbox bars
- **Brand story** — split-layout editorial with stats and signature
- **Open kitchen showcase** — hero video + 3-step "Dough → Shaping → Plate" process
- **Filterable menu preview** — All / Antipasti / Pasta / Coffee / Dolci, with a full-menu modal
- **"Step Inside Pomodoro"** — 5-step alternating editorial gallery (Cup → Entrance → Seating → Espresso → Kitchen)
- **Live Wait List** — real-time queue with estimated wait, party tracking, and a **staff PIN** (`1234`) for managing the queue
- **Reviews** — real Google/Zomato reviews + add-your-own with photo/video upload
- **Footer** — full info, hours, social, and Bandra address

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS 3 with custom Pomodoro theme tokens
- React 18

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pomodoro-nextjs/
├── app/
│   ├── globals.css        # Tailwind directives + custom utilities
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── Atmosphere.tsx     # "Step Inside" 5-step sequence
│   ├── Footer.tsx
│   ├── Hero.tsx           # Cinematic video walkthrough
│   ├── Kitchen.tsx        # Open kitchen + 3-step process
│   ├── Marquee.tsx        # Scrolling text strip
│   ├── MenuModal.tsx      # Full menu popup
│   ├── MenuPreview.tsx    # Filterable menu grid
│   ├── Navigation.tsx     # Scroll-aware top nav
│   ├── NoticeBar.tsx      # Top yellow notice
│   ├── Reviews.tsx        # Review cards + submit form
│   ├── ScrollChrome.tsx   # Progress bar + back-to-top
│   ├── Story.tsx          # Brand story section
│   ├── Toast.tsx          # Toast context provider
│   └── WaitList.tsx       # Live queue + staff panel
├── lib/
│   ├── data.ts            # Menu, reviews, atmosphere, queue data
│   └── useScrollReveal.ts # IntersectionObserver hook
├── public/
│   └── assets/            # Images, videos, logo
└── tailwind.config.ts     # Brand colors, fonts, animations
```

## Brand Tokens (in `tailwind.config.ts`)

| Token             | Value      |
| ----------------- | ---------- |
| `brand-red`       | `#E5503A`  |
| `brand-red-dark`  | `#C03A28`  |
| `brand-red-deep`  | `#8E2818`  |
| `cream`           | `#F5E8D0`  |
| `yellow-brand`    | `#F5C842`  |
| `dark`            | `#1A0E08`  |
| `warm-bg`         | `#FBF1DC`  |

## Fonts

- **Bebas Neue** — display (numbers, all-caps headlines)
- **Playfair Display** — serif italic headings
- **Cormorant Garamond** — italic quotes & elegant taglines
- **DM Sans** — body and UI

Loaded via Google Fonts in `globals.css`.

## Staff Wait-List PIN

To unlock the staff panel inside the wait list and manage the queue (Seat / Up Next / Remove / Adjust wait), enter PIN **`1234`** in the "Staff Access" panel. Change this in `components/WaitList.tsx` under `unlockStaff()`.

## Deployment

This is a standard Next.js app — deploy to **Vercel** with zero configuration:

```bash
npx vercel
```

Or any host that supports Node.js (Netlify, Railway, AWS Amplify, self-host with `npm run build && npm start`).

## Notes

- All images and videos live in `public/assets/`. Videos are pre-compressed (~5MB total). Replace with your own assets keeping the same filenames.
- The wait list uses local React state — for production, swap to a real backend (Supabase, Firebase, or a custom API).
- The review submit form shows a toast; wire it to your backend or service of choice.
