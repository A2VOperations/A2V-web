"use client";

const clients = [
  { name: "Wolves Partners", tagline: "& Co" },
  { name: "BrandName", tagline: "Studio" },
  { name: "acrevis", tagline: "Financial Group" },
  { name: "Bayern", tagline: "International" },
  { name: "aquiiire", tagline: "" },
  { name: "Burflex", tagline: "(Scaffolding) Ltd" },
  { name: "Ancasta", tagline: "International Boat Sales" },
  { name: "Sauter", tagline: "Creating Sustainable Environments" },
  { name: "Evolved.", tagline: "" },
  { name: "TechBrand", tagline: ":: ::" },
  { name: "SMATRICQ", tagline: "Strom gibt Gas." },
  { name: "Abu Garcia", tagline: "®" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-6 bg-[#f8f8f8] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-10">
          Trusted By Leading Brands Worldwide
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-start opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default group"
            >
              <span className="text-lg font-black text-gray-800 leading-none tracking-tight">
                {client.name}
              </span>
              {client.tagline && (
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider leading-tight mt-0.5">
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
