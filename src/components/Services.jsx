import React from "react";

const Services = () => {
  return (
    <section className="container-padding flex flex-col">
      <h2 className="text-center text-2xl font-extrabold px-10 mb-14">
        Transforming the way people pay, work, play and live
      </h2>

      {/* SERVICES LAYOUT */}
      <div
        role="services-container"
        className="flex flex-wrap gap-6 items-stretch"
      >
        {/* Service 1: Virtual Dollar Card */}
        <div className="w-full relative overflow-hidden bg-[#F1E8FF] border border-[#EFE7FF] rounded-3xl flex flex-col lg:flex-row group">
          <div className="flex flex-col gap-3 px-8 lg:px-12 py-16">
            <span className="text-xs font-semibold text-primary-navy">
              Virtual Dollar Card
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
              Shop locally & Pay globally with Figur USD Card
            </h3>
            <button className="mt-2 w-fit px-4 py-2 bg-primary-blue rounded-full text-white text-sm hover:bg-primary-navy cursor-pointer transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:translate-y-2">
              Create a Card
            </button>
          </div>
          <div className="w-full h-full overflow-hidden self-center flex justify-center">
            <img
              src="/images/debit-cards.png"
              alt="Hand holding card"
              className="object-cover"
            />
          </div>
        </div>

        {/* Service 2A: Mobile Dashboard Image */}
        <div className="w-full lg:flex-1 rounded-3xl relative overflow-hidden bg-[#ff9012] border border-[#F28911] flex items-end justify-center min-h-[300px]">
          <img
            src="/images/mobile-app-dashoard.png"
            alt="Mobile dashboard"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>

        {/* Service 2B: Airtime to Cash */}
        <div className="w-full lg:flex-[2_2_0%] bg-[#FFF9ED] border border-[#DAEFF0] rounded-3xl flex flex-col justify-center gap-3 px-8 lg:px-12 py-16 group">
          <span className="text-xs font-semibold text-primary-navy">
            Airtime to Cash
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
            Convert your excess Airtime to Cash Instantly! 😊
          </h3>
          <button className="mt-2 w-fit px-4 py-2 bg-primary-blue rounded-full text-white text-sm hover:bg-primary-navy cursor-pointer transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:translate-y-2">
            Convert Airtime to Cash
          </button>
        </div>

        {/* Service 3: Gift Card */}
        <div className="w-full relative overflow-hidden bg-[#E4F4F5] border border-[#DAEFF0] rounded-3xl flex flex-col lg:flex-row group">
          <div className="flex flex-col gap-3 px-8 lg:px-12 py-16 lg:w-1/2">
            <span className="text-xs font-semibold text-primary-navy">
              Gift Card
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
              Purchase over 5,000+ gift cards at the best rates.
            </h3>
            <button className="mt-2 w-fit px-4 py-2 bg-primary-blue rounded-full text-white text-sm hover:bg-primary-navy cursor-pointer transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:translate-y-2">
              Purchase Gift Card
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end items-end">
            <img
              src="/images/get-gift-card-on-figur.svg"
              alt="Gift cards"
              className="w-full h-auto object-bottom-right"
            />
          </div>
        </div>

        {/* Service 4A: Pay Bills */}
        <div className="w-full lg:flex-[2_2_0%] bg-[#E4F4F5] border border-[#DAEFF0] rounded-3xl flex flex-col justify-center gap-3 px-8 lg:px-12 py-16 group">
          <span className="text-xs font-semibold text-primary-navy">
            Pay Bills
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight">
            Buy Cheap Data, Electricity, TV, Airtime & more
          </h3>
          <button className="mt-2 w-fit px-4 py-2 bg-primary-blue rounded-full text-white text-sm hover:bg-primary-navy cursor-pointer transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:translate-y-2">
            Get Started
          </button>
        </div>

        {/* Service 4B: Woman with Phone Image */}
        <div className="w-full lg:flex-1 rounded-3xl relative overflow-hidden bg-[#41BBCC] border border-[#3EAFBF] flex items-end justify-center min-h-[300px]">
          <img
            src="/images/woman-with-phone.png"
            alt="Woman using phone"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
