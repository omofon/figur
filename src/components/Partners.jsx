import React from "react";

const Partners = () => {
  const logos = [
    { name: "Kuda", src: "/images/logos/kuda-logo.svg" },
    { name: "Providus", src: "/images/logos/providus-logo.svg" },
    { name: "Safe Haven", src: "/images/logos/safe-haven-logo.svg" },
  ];

  const logoGroups = [1, 2, 3, 4];

  return (
    <section className="container-padding flex flex-col lg:flex-row gap-8 items-center py-5 overflow-hidden mb-16 md:mb-20">
      <span className="shrink-0 text-base font-bold text-primary-navy whitespace-nowrap px-4">
        Banking Partners
      </span>

      {/* Carousel */}
      <div
        className="relative flex overflow-hidden w-full"
        role="group"
        aria-label="Banking Partners Carousel"
      >
        {/* Fading Edges - Left */}
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />

        {/* Fading Edges - Right */}
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

        {/* Animated Groups */}
        {logoGroups.map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex > 1}
            className="flex animate-scroll gap-10 items-center shrink-0 pr-10"
          >
            {logos.map((logo, i) => (
              <img
                key={`${groupIndex}-${i}`}
                src={logo.src}
                alt={groupIndex === 1 ? logo.name : ""}
                className="h-24 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
