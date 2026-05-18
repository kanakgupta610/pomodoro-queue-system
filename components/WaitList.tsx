"use client";
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from "react";
import { INITIAL_QUEUE, QueueEntry } from "@/lib/data";
import { useToast } from "./Toast";

export default function WaitList() {
  const toast = useToast();
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [waitMin, setWaitMin] = useState(45);
  const [seatedToday, setSeatedToday] = useState(23);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");

  const [staffOpen, setStaffOpen] = useState(false);
  const [staffPin, setStaffPin] = useState("");
  const [staffUnlocked, setStaffUnlocked] = useState(false);
  useEffect(() => {
  fetchQueue()

  const channel = supabase
    .channel('waitlist-live')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'waitlist',
      },
      () => {
        fetchQueue()
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}, [])

async function fetchQueue() {
  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: true })

  if (data) {
    const formatted = data.map((item) => ({
  id: item.id,
  name: item.name,
  guests: item.guests,
  time: new Date(item.created_at).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }),
  status: item.status as 'waiting' | 'next' | 'seated'
}))

    setQueue(formatted)
  }

  if (error) {
    console.log(error)
  }
} 

  const join = async () => {
    if (!name.trim()) {
      toast.show("Please enter your name");
      return;
    }
    const now = new Date();
    const hr = now.getHours() > 12 ? now.getHours() - 12 : now.getHours() || 12;
    const time =
      hr + ":" + String(now.getMinutes()).padStart(2, "0") + (now.getHours() >= 12 ? "pm" : "am");
    const newQ: QueueEntry = {
      name: name.trim(),
      guests: parseInt(guests) || 2,
      time,
      status: "waiting",
    };
    const { error } = await supabase
  .from('waitlist')
  .insert([
    {
      name: newQ.name,
      phone,
      guests: newQ.guests,
      status: 'waiting'
    }
  ])

if (error) {
  console.log(error)
  toast.show("Something went wrong")
  return
}

fetchQueue()
    const newWait = Math.max(
  15,
  queue.filter((q) => q.status !== "seated").length * 12
);

setWaitMin(newWait);
    setName("");
    setPhone("");
    setGuests("");
    toast.show(`✓ ${newQ.name}, you're on the list! Est. wait: ~${newWait} min`);
  };

  const seat = async (id: number) => {

  const customer = queue.find(q => q.id === id)

  await supabase
    .from('waitlist')
    .update({ status: 'seated' })
    .eq('id', id)

  toast.show("Party seated!")
};
const markNext = async (id: number) => {

  const customer = queue.find(q => q.id === id)

  await supabase
    .from('waitlist')
    .update({ status: 'next' })
    .eq('id', id)

  toast.show(`${customer?.name} marked as up next`)
};
const remove = async (id: number) => {

  const customer = queue.find(q => q.id === id)

  await supabase
    .from('waitlist')
    .delete()
    .eq('id', id)

  toast.show(`${customer?.name} removed`)
};
  const adjustWait = (d: number) => {
    setWaitMin(Math.max(5, waitMin + d));
    toast.show("Wait time updated");
  };

  const unlockStaff = () => {
    if (staffPin === "1234") {
      setStaffUnlocked(true);
      toast.show("Staff mode unlocked");
    } else toast.show("Incorrect PIN");
  };

  const activeCount = queue.filter((q) => q.status !== "seated").length;

  return (
    <section id="waitlist" className="bg-warm-bg py-32 relative">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <div className="section-label mb-6 reveal">Walk In · No Reservations</div>

        <div className="bg-dark overflow-hidden relative shadow-[0_30px_80px_rgba(26,14,8,0.25)]">
          <div className="bg-brand-red py-8 lg:py-10 px-8 lg:px-12 flex items-center justify-between border-b-[3px] border-yellow-brand">
            <div>
              <div className="font-display text-3xl lg:text-4xl text-cream tracking-wide">
                Join the Wait List
              </div>
              <div className="text-cream/85 text-sm mt-1">
                Add your name — we&apos;ll text you when your table is ready
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-black/25 px-4 py-2 rounded-full text-cream text-xs tracking-[0.12em] uppercase">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
              Live
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="bg-yellow-brand/[0.06] border border-yellow-brand/20 p-6 text-center mb-8">
              <div className="text-xs text-cream/50 uppercase tracking-[0.2em]">
                Estimated Wait Time
              </div>
              <div className="font-display text-5xl lg:text-6xl text-yellow-brand leading-tight">
                ~{waitMin}
              </div>
              <div className="text-xs text-cream/50">
                minutes · Updates in real time
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <StatBox num={activeCount} label="In Queue" />
              <StatBox num={8} label="Tables Total" />
              <StatBox num={seatedToday} label="Seated Today" />
            </div>

            <div className="font-serif text-2xl italic text-cream mb-6">
              Add your name to the list
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="wait-input"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                type="tel"
                className="wait-input"
              />
              <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Number of guests (e.g. 2)"
                type="number"
                min={1}
                max={10}
                className="wait-input md:col-span-2"
              />
            </div>

            <button
              onClick={join}
              className="w-full bg-yellow-brand text-dark border-0 py-4 font-sans text-sm font-bold tracking-[0.18em] uppercase cursor-pointer transition-all hover:bg-cream hover:-translate-y-0.5 mt-2"
            >
              Add to Wait List
            </button>

            <div className="mt-10 border-t border-cream/10 pt-8">
              <div className="text-xs font-medium tracking-[0.25em] uppercase text-cream/50 mb-4">
                Current Queue
              </div>
              {queue.length === 0 ? (
                <div className="text-cream/40 text-sm py-4">
                  Queue is empty — walk right in!
                </div>
              ) : (
                queue.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-cream/[0.06]"
                  >
                    <div>
                      <div className="text-cream text-sm font-medium">
                        {q.name}
                      </div>
                      <div className="text-cream/50 text-xs">
                        Party of {q.guests} · Added {q.time}
                      </div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold tracking-wide ${
                        q.status === "next"
                          ? "bg-brand-red/25 text-[#ff9078]"
                          : q.status === "seated"
                          ? "bg-green-400/15 text-green-400"
                          : "bg-yellow-brand/15 text-yellow-brand"
                      }`}
                    >
                      {q.status === "next"
                        ? "Up Next"
                        : q.status === "seated"
                        ? "Seated ✓"
                        : `~${(i + 1) * 12}min`}
                    </span>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={() => setStaffOpen(!staffOpen)}
              className="mt-6 bg-transparent border border-cream/20 text-cream/50 px-5 py-2.5 font-sans text-xs tracking-[0.15em] uppercase cursor-pointer transition-all hover:border-yellow-brand hover:text-yellow-brand"
            >
              Staff Access
            </button>

            {staffOpen && (
              <div className="mt-4 bg-yellow-brand/[0.04] border border-yellow-brand/20 p-6">
                {!staffUnlocked ? (
                  <>
                    <div className="text-yellow-brand text-sm mb-3 tracking-wider">
                      Enter Staff PIN to manage the queue
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value={staffPin}
                        onChange={(e) => setStaffPin(e.target.value)}
                        maxLength={4}
                        placeholder="PIN"
                        className="flex-1 bg-cream/[0.07] border border-yellow-brand/30 px-4 py-2.5 text-cream outline-none"
                      />
                      <button
                        onClick={unlockStaff}
                        className="bg-yellow-brand text-dark border-0 px-6 cursor-pointer font-semibold text-xs tracking-[0.1em] uppercase"
                      >
                        Enter
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-yellow-brand text-xs mb-4 font-semibold tracking-wider">
                      ✓ STAFF MODE · QUEUE MANAGEMENT
                    </div>
                    {queue.map((q, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-3 border-b border-cream/[0.06]"
                      >
                        <div>
                          <div className="text-cream text-sm font-medium">
                            {q.name}
                          </div>
                          <div className="text-cream/45 text-xs mt-0.5">
                            Party of {q.guests} · {q.time} · {q.status}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <StaffBtn variant="seat" onClick={() => seat(q.id!)}>
                            Seat
                          </StaffBtn>
                          <StaffBtn onClick={() => markNext(q.id!)}>
                            Next
                          </StaffBtn>
                          <StaffBtn variant="remove" onClick={() => remove(q.id!)}>
                            Remove
                          </StaffBtn>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-2 mt-4 items-center">
                      <StaffBtn onClick={() => adjustWait(-5)}>− 5 MIN</StaffBtn>
                      <StaffBtn onClick={() => adjustWait(5)}>+ 5 MIN</StaffBtn>
                      <span className="text-cream/50 text-xs ml-2">
                        Adjust wait estimate
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ num, label }: { num: number; label: string }) {
  return (
    <div className="bg-cream/[0.04] border border-cream/10 p-5 text-center">
      <div className="font-display text-4xl text-yellow-brand leading-none">
        {num}
      </div>
      <div className="text-[0.7rem] text-cream/50 uppercase tracking-[0.15em] mt-1">
        {label}
      </div>
    </div>
  );
}

function StaffBtn({
  children,
  onClick,
  variant,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "seat" | "remove";
}) {
  const styles =
    variant === "seat"
      ? "border-green-400/40 text-green-400"
      : variant === "remove"
      ? "border-brand-red/50 text-[#ff9078]"
      : "border-cream/20 text-cream/60";
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border px-3 py-1.5 text-[0.72rem] cursor-pointer transition-all tracking-[0.08em] uppercase font-medium hover:border-yellow-brand hover:text-yellow-brand ${styles}`}
    >
      {children}
    </button>
  );
}
