import React from "react";
import ContactForm from "./ContactForm";
import { ShieldCheck, Zap } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="pt-15 lg:pt-15 pb-15 px-6 bg-linear-to-t from-[#19272B] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="text-white">
              <span className="text-black font-bold uppercase tracking-[0.3em] text-sm mb-8 block">
                Ready for a Visual Upgrade?
              </span>
              <h2 className="text-5xl md:text-8xl font-bold mb-12 leading-none">
                Let&apos;s Create <br />
                <span className="text-[#FF6900] underline decoration-[#FF6900]/80 underline-offset-8">
                  Greatness
                </span>
              </h2>
              <div className="space-y-8 text-xl">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-2">Unique Perspectives</p>
                    <p className="text-white/70 text-base leading-relaxed">
                      We don&apos;t do cookie-cutter designs. Every project is
                      unique.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center shrink-0 mt-1">
                    <Zap className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-2">Fast Turnaround</p>
                    <p className="text-white/70 text-base leading-relaxed">
                      We value your time and deliver high-quality work promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-black/10 rounded-sm blur-3xl" />
              <div className="relative bg-white p-2 rounded-sm shadow-2xl">
                <ContactForm source="graphic-design" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
