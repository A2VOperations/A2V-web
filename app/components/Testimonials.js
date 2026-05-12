import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="bg-white py-15 lg:py-20 relative overflow-visible">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="flex gap-6 mb-10">
              <div className="w-1.5 h-20 bg-[#FF4500] shrink-0" />
              <div>
                <span className="text-[#FF4500] font-bold uppercase tracking-widest text-sm mb-2 block">
                  TESTIMONIALS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  What Our Dev <br /> Clients are Saying!
                </h2>
              </div>
            </div>

            <p className="text-gray-500 text-xl italic leading-relaxed mb-12 max-w-xl">
              &quot;The development team at A2V completely overhauled our
              platform. Their code quality and ability to solve complex backend
              scaling issues was exceptional. Our new app is faster and more
              reliable than ever.&quot;
            </p>

            <div className="flex items-center justify-between max-w-xl">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF4500]">
                  <Image
                    src="/images/avatar-kevin.png"
                    alt="Kevin Andrew"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Kevin Andrew</h4>
                  <p className="text-gray-400 text-sm">CTO - TechFlow</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative Triangles */}
            <div className="absolute top-20 -left-10 w-16 h-16 bg-[#FF4500] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] z-20 -rotate-[30deg]" />
            <div className="absolute top-[60%] -right-8 w-12 h-12 bg-[#FF4500] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] z-20 rotate-[120deg]" />
            <div className="absolute -bottom-10 right-20 w-24 h-24 bg-[#FF4500] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] z-20 shadow-xl rotate-[15deg]" />

            <div className="relative rounded-sm overflow-hidden h-[700px] shadow-2xl">
              <Image
                src="/images/testimonial-woman.png"
                alt="Satisfied Client"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
