const ITEMS = [
  "Hand-rolled Pasta",
  "Specialty Coffee",
  "Bandra · Mumbai",
  "Paint the Town Pomodoro",
  "No Reservations",
  "Always Worth the Wait",
];

export default function Marquee() {
  // Duplicate so the loop is seamless
  const items = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="bg-brand-red py-4 overflow-hidden border-t-2 border-b-2 border-yellow-brand relative">
      <div className="flex w-max animate-marquee">
        {items.map((t, i) => (
          <div
            key={i}
            className="font-display text-xl tracking-[0.2em] text-cream whitespace-nowrap px-10 flex items-center gap-10"
          >
            {t} <span className="w-2 h-2 bg-yellow-brand rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
