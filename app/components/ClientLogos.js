"use client";

const clients = [
  { name: "ToysForKids", tagline: "Premium Play" },
  { name: "RASCARE", tagline: "Healthcare Solutions" },
  { name: "Lotus Hospital", tagline: "Care & Healing" },
  { name: "Helping India Foundation", tagline: "Social Impact" },
  { name: "Rawat Band", tagline: "Event Excellence" },
];

export default function ClientLogos() {
  // Duplicate list for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className=" border-y border-slate-100 bg-white overflow-hidden">

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {duplicatedClients.map((client, i) => (
            <div
              key={i}
              className="inline-flex flex-col items-start mx-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              <span className="text-2xl font-black text-slate-900 leading-none tracking-tight">
                {client.name}
              </span>
              {client.tagline && (
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight mt-1">
                  {client.tagline}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
