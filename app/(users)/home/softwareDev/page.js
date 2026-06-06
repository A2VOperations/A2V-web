  import React from "react";

  function page() {
    return (
      <>
        {" "}
        <section className="overflow-hidden bg-[#f5f5f5]/55 py-8 sm:py-10">
          <div className="flex w-max animate-marquee ">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex whitespace-nowrap ">
                <p className="mx-2 text-4xl font-semibold text-orange-500 sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
                <p className="mx-2 text-4xl font-semibold text-black sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
                <p className="mx-2 text-4xl font-semibold text-orange-500 sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
                <p className="mx-2 text-4xl font-semibold text-black sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
                <p className="mx-2 text-4xl font-semibold text-orange-500 sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
                <p className="mx-2 text-4xl font-semibold text-black sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
                <p className="mx-2 text-4xl font-semibold text-orange-500 sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
                <p className="mx-2 text-4xl font-semibold text-black sm:text-6xl md:text-8xl lg:text-9xl">
                  Software Development
                </p>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

  export default page;
