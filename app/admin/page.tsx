"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type QueueItem = {
  id: number;
  name: string;
  guests: number;
  status: string;
};

export default function AdminPage() {

  const [queue, setQueue] = useState<QueueItem[]>([]);

  useEffect(() => {
    fetchQueue();

    const channel = supabase
      .channel("admin-live")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "waitlist",
        },
        () => {
          fetchQueue();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchQueue() {
    const { data } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: true });

    if (data) {
      setQueue(data);
    }
  }
async function seatCustomer(id: number) {

  const { data, error } = await supabase
    .from("waitlist")
    .update({ status: "seated" })
    .eq("id", id)
    .select()

  console.log(data)
  console.log(error)

}

async function nextCustomer(id: number) {

  const { data, error } = await supabase
    .from("waitlist")
    .update({ status: "next" })
    .eq("id", id)
    .select()

  console.log(data)
  console.log(error)

}

async function removeCustomer(id: number) {

  await supabase
    .from("waitlist")
    .delete()
    .eq("id", id)

}
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="space-y-4">

        {queue.map((customer) => (

          <div
            key={customer.id}
            className="bg-zinc-900 p-5 rounded-xl flex items-center justify-between"
          >

            <div>
              <div className="text-xl font-semibold">
                {customer.name}
              </div>

              <div className="text-zinc-400 text-sm">
                Party of {customer.guests}
              </div>
            </div>

            <div className="flex gap-2">

  <button
    onClick={() => seatCustomer(customer.id)}
    className="bg-green-500 text-black px-3 py-1 rounded"
  >
    Seat
  </button>

  <button
    onClick={() => nextCustomer(customer.id)}
    className="bg-yellow-400 text-black px-3 py-1 rounded"
  >
    Next
  </button>

  <button
    onClick={() => removeCustomer(customer.id)}
    className="bg-red-500 text-white px-3 py-1 rounded"
  >
    Remove
  </button>

</div>

          </div>

        ))}

      </div>

    </main>
  );
}