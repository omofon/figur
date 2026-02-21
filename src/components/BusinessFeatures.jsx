import React from "react";

const BusinessFeatures = () => {
  const features = [
    {
      title: "Invoicing & Revenue Tracking Tools",
      img: "/images/features/bouncy-to-do-in-progress-and-done-columns-of-the-kanban-board.gif",
      alt: "Kanban board illustration",
    },
    {
      title: "Expense Management",
      img: "/images/features/bouncy-calendar-with-marked-day-and-pencil.gif",
      alt: "Calendar illustration",
    },
    {
      title: "Vendor Management",
      img: "/images/features/bouncy-gears-and-wrench.gif",
      alt: "Gears illustration",
    },
    {
      title: "Dedicated Business Virtual Account",
      img: "/images/features/bouncy-house-and-speech-bubbles-with-a-dollar-sign-and-a-key.gif",
      alt: "Business account illustration",
    },
    {
      title: "Instant online web Store Integration",
      img: "/images/features/bouncy-mobile-marketing-with-megaphone-new-message-and-social-network-icons.gif",
      alt: "Marketing illustration",
    },
    {
      title: "Real-time Customer Support",
      img: "/images/features/bouncy-chat-with-a-support-operator-on-the-phone.gif",
      alt: "Support illustration",
    },
  ];

  return (
    <section className=" bg-primary-navy flex flex-col gap-10 py-16 md:py-24 lg:py-32">
      <div className="container-padding">
        {/* Title with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:border-b md:border-b-gray-700/40 relative">
          {/* Left Side Content */}
          <div className="flex flex-col gap-6 items-start text-left max-w-xl pb-10 lg:pb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              Your Partner for business
            </h2>
            <p className="leading-relaxed text-sm text-gray-300">
              It is simple and easy to take control of your money across all
              platforms, in real-time. Using Figur, you can control all aspects
              of your finances.
            </p>
            <button className="px-6 py-2 bg-white rounded-full text-primary-navy text-sm font-medium hover:bg-gray-200 cursor-pointer transition-all">
              Get Started
            </button>
          </div>

          {/* Right Side Image (Hidden on mobile) */}
          <div className="relative hidden lg:flex h-full items-end justify-end">
            <div className="relative w-full flex justify-end">
              <img
                src="/images/mobile-app.png"
                alt="Mobile app dashboard"
                className="w-full h-auto object-contain origin-bottom lg:scale-x-[1.5] lg:scale-y-[1.7]"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0A1A2F]/50 border border-gray-700/30 rounded-2xl p-8 flex flex-col items-start transition-hover hover:border-gray-500/50"
            >
              <div className="w-full h-20 mb-8 flex flex-col items-center justify-center">
                <img
                  src={feature.img}
                  alt={feature.alt}
                  className="h-full object-contain"
                />
              </div>

              <h3 className="text-white text-lg lg:text-base font-semibold leading-tight text-left w-full">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
